import {NextApiRequest, NextApiResponse} from 'next'
import {getWeatherDetailsWithLocationName} from "../../../services/WeatherDetailsService";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const locationName = _req.query.location
    try {
        const result = await getWeatherDetailsWithLocationName(locationName);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({statusCode: 500, message: err.message})
    }
}

export default handler
