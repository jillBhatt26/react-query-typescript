// imports
import axios, { AxiosResponse } from 'axios';
import { QueryFunctionContext } from 'react-query';

const fetchCharacters = async ({
    queryKey
}: QueryFunctionContext): Promise<AxiosResponse['data']> => {
    const charactersResponse: AxiosResponse = await axios({
        url: `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    });

    return charactersResponse.data;
};

export { fetchCharacters };
