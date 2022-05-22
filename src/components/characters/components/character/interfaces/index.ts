export interface ICharacter {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
    type: string;
    location: {
        name: string;
        url: string;
    };
    origin: {
        name: string;
        url: string;
    };
    episodes: string[];
}

export interface ICharacterProps {
    key: string;
    character: ICharacter;
}
