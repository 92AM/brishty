import {NextApiRequest, NextApiResponse} from 'next'
import {handleGetLocationDetailsRoute} from "../../../webRouter/handleLocationDetailsRoute";
import {handleWeatherDetailsRoute} from "../../../webRouter/handleWeatherDetailsRoute";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {

    const locationName = _req.query.location

    try {
        const locationDetailsAsJson = await handleGetLocationDetailsRoute(locationName);
        const searchedLocationCoordinates = locationDetailsAsJson.coord;
        const weatherDetailForGivenLocationAsJson = await handleWeatherDetailsRoute(
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
