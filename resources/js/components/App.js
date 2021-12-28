import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import Home from "./Home";
import Instruction from "./Instruction";

function App() {
    let appPrefix = '';
    return (

            <AppProvider i18n={enTranslations}>

                <BrowserRouter basename="app">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/instruction" element={<Instruction />} />
                    </Routes>
                </BrowserRouter>
            </AppProvider>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

