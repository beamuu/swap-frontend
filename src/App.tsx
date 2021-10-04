import './App.css';
import { injected } from './wallet/connectors';
import { Web3ReactProvider } from '@web3-react/core';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Web3 from 'web3';
import Application from './pages/Application';

function App() {

    function getLibrary(provider: any) {
        return new Web3(provider);
    }

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Application />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Web3ReactProvider>
    )
}

export default App;
