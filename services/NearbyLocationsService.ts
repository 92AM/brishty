import { NearbyLocation } from '../interfaces';
import { geoDbNearbyLocationsClient } from '../apis/GeoDbNearbyLocationsClient';
import { sanitiseCoordinate } from './GenericUtilityService';
import { mapToCoordinate } from './WeatherDetailsService';

const mapNearbyLocationsJsonToNearbyLocations = (nearbyLocationsJson: any): NearbyLocation[] => {
    return nearbyLocationsJson.data.map((eachNearbyLocation: any) => ({
        type: String(eachNearbyLocation.type),
        name: String(eachNearbyLocation.name),
        country: String(eachNearbyLocation.country),
        countryCode: String(eachNearbyLocation.countryCode),
        region: String(eachNearbyLocation.region),
        regionCode: String(eachNearbyLocation.regionCode),
        distance: String(eachNearbyLocation.distance),
        coordinate: mapToCoordinate({
            lat: String(eachNearbyLocation.latitude),
            lon: String(eachNearbyLocation.longitude),
        }),
    }));
};

export const getNearbyLocations = async (
    latitude: string | string[] | undefined,
    longitude: string | string[] | undefined,
    radius: number,
    limit: number,
    countryCode: string | string[] | undefined,
    type: string,
): Promise<NearbyLocation[]> => {
    const nearbyLocationsAsJson = await geoDbNearbyLocationsClient(
        sanitiseCoordinate(latitude),
        sanitiseCoordinate(longitude),
        radius,
        limit,
        countryCode,
        type,
    );
    return mapNearbyLocationsJsonToNearbyLocations(nearbyLocationsAsJson);
};

export const removeSourceLocationFromNearbyLocation = (
    nearbyLocations: NearbyLocation[],
    sourceLocationName: string | string[] | undefined,
): NearbyLocation[] => {
    nearbyLocations.map(
        (eachNearbyLocation, index) =>
            String(sourceLocationName).indexOf(eachNearbyLocation.name) > -1 && nearbyLocations.splice(index, 1),
    );

    return nearbyLocations;
};
