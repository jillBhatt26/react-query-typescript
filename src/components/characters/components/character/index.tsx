import { FC } from 'react';
import { ICharacterProps } from './interfaces';

const Character: FC<ICharacterProps> = ({ character }) => {
    return (
        <div className="card">
            <img src={character.image} alt="Character profile pic" />
            <div className="text-container">
                <h3>{character.name}</h3>
                <p className="status">
                    {character.status} - {character.species}
                </p>
                <p className="title">Last seen on</p>
                <p>{character.location.name}</p>
                <p>Origin: {character.origin.name}</p>
            </div>
        </div>
    );
};

export default Character;
