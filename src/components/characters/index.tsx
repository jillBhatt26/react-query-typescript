import { FC } from 'react';
import { ICharactersProps } from './interfaces';

// react-query
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { fetchCharacters } from './apis';
import { ICharacter } from './components/character/interfaces';
import Character from './components/character';

const Characters: FC<ICharactersProps> = () => {
    const { data, status } = useQuery('characters', fetchCharacters);

    if (status.toLowerCase() === 'loading') {
        return <div>Loading...</div>;
    }

    if (status.toLowerCase() === 'error') {
        return <div>Error!</div>;
    }

    return (
        <div className="characters">
            {status.toLowerCase() === 'success' &&
                data.results.map((result: any) => {
                    const character: ICharacter = {
                        id: result.id,
                        name: result.name,
                        status: result.status,
                        species: result.species,
                        type: result.type,
                        location: {
                            name: result.location.name,
                            url: result.location.url
                        },
                        origin: {
                            name: result.origin.name,
                            url: result.origin.url
                        },
                        image: result.image,
                        episodes: result.episode
                    };

                    return (
                        <Character key={character.id} character={character} />
                    );
                })}
        </div>
    );
};

const WrappedCharacters = () => {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Characters />
        </QueryClientProvider>
    );
};

export default WrappedCharacters;
