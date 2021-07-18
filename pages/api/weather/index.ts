import {NextApiRequest, NextApiResponse} from 'next'
import {getWeatherDetailsByGeoLocation, getWeatherDetailsByLocationName} from "../../../services/WeatherDetailsService";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {

    const location = _req.query.location;
    const latitude = _req.query.latitude;
    const longitude = _req.query.longitude;
    const countryCode = _req.query.countrycode;

    try {
        if (!location) {
            throw new Error("Please supply a valid location parameter.");
        }
        if ((!latitude && longitude) || (!longitude && latitude)) {
            throw new Error("Must supply both latitude and longitude.");
        }
        let result = undefined;
        if (location && !latitude && !longitude && !countryCode) {
            result = await getWeatherDetailsByLocationName(location);
        }
        if (location && latitude && longitude) {
            result = await getWeatherDetailsByGeoLocation(location, latitude, longitude, countryCode);
        }
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}

export default handler
