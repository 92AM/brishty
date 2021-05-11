import {NextApiRequest, NextApiResponse} from 'next'
import {locationDetailsRouteHandler} from "../../../webRouters/LocationDetailsRouteHandler";
import {weatherDetailsRouteHandler} from "../../../webRouters/WeatherDetailsRouteHandler";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {

    const locationName = _req.query.location

    try {
        const locationDetailsAsJson = await locationDetailsRouteHandler(locationName);
        const searchedLocationCoordinates = locationDetailsAsJson.coord;
        const weatherDetailForGivenLocationAsJson = await weatherDetailsRouteHandler(
            searchedLocationCoordinates.lat,
            searchedLocationCoordinates.lon
        );
        const result = JSON.stringify(weatherDetailForGivenLocationAsJson)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}

export default handler
