import { FC } from 'react';

// components
import Characters from './components/characters';

const App: FC = (): JSX.Element => {
    return (
        <div className="App">
            <div className="container">
                <h1>Rick and Morty Info!!</h1>

                <Characters />
            </div>
        </div>
    );
};

export default App;
