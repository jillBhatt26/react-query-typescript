// imports
import axios, { AxiosResponse } from 'axios';

const fetchCharacters = async (): Promise<AxiosResponse['data']> => {
    const charactersResponse: AxiosResponse = await axios({
        url: `https://rickandmortyapi.com/api/character`
    });

    return charactersResponse.data;
};

export { fetchCharacters };
