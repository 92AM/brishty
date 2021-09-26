import { NextApiRequest, NextApiResponse } from 'next';
import { algoliaPlacesClient } from '../../../api/AlgoliaPlacesClient';

export const handler: (_req: NextApiRequest, res: NextApiResponse) => Promise<void> = async (
    _req: NextApiRequest,
    res: NextApiResponse,
) => {
    const searchedTerm = _req.query.searchedTerm as string;

    const placesResponse = await algoliaPlacesClient(searchedTerm);

    res.status(200).json(placesResponse);
};
