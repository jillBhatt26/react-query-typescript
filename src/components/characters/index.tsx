import { FC, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ICharactersProps } from './interfaces';
import { ICharacter } from './components/character/interfaces';
import { fetchCharacters } from './apis';
import Character from './components/character';

const Characters: FC<ICharactersProps> = () => {
    // component states
    const [page, setPage] = useState<number>(1);

    // react-query
    const { data, status, isPreviousData } = useQuery(
        ['characters', page],
        fetchCharacters,
        {
            keepPreviousData: true,
            cacheTime: 1000
        }
    );

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

            <div>
                <button
                    disabled={!data.info.prev}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>
                <button
                    disabled={isPreviousData || !data.info.next}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
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
