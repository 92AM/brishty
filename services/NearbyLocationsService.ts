import { NearbyLocation } from '../interfaces';
import { geoDbNearbyLocationsClient } from '../api/GeoDbNearbyLocationsClient';
import { sanitiseCoordinate } from './GenericUtilityService';
import { mapToCoordinate } from './WeatherDetailsService';

const mapNearbyLocationsJsonToNearbyLocations = (nearbyLocationsJson: any): NearbyLocation[] => {
    const nearbyLocationsRaw = nearbyLocationsJson.data;
    const nearbyLocations: NearbyLocation[] = [];

    nearbyLocationsRaw.forEach((eachNearbyLocation: any) => {
        const coordinate = {
            lat: eachNearbyLocation.latitude,
            lon: eachNearbyLocation.longitude,
        };
        const tempNearbyLocation: NearbyLocation = {
            type: eachNearbyLocation.type,
            name: eachNearbyLocation.name,
            country: eachNearbyLocation.country,
            countryCode: eachNearbyLocation.countryCode,
            region: eachNearbyLocation.region,
            regionCode: eachNearbyLocation.regionCode,
            distance: eachNearbyLocation.distance,
            coordinate: mapToCoordinate(coordinate),
        };
        nearbyLocations.push(tempNearbyLocation);
    });

    return nearbyLocations;
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
    nearbyLocations.forEach((eachNearbyLocation, index) => {
        if (String(sourceLocationName).indexOf(eachNearbyLocation.name) > -1) {
            nearbyLocations.splice(index, 1);
        }
    });

    return nearbyLocations;
};
