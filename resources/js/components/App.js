import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Card, Tabs, Badge, Page} from '@shopify/polaris';
import Home from "./Home";
import Instruction from "./Instruction";

function App() {
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'home',
            content: 'Home',
            accessibilityLabel: 'All customers',
            panelID: 'home-content',
        },
        {
            id: 'instructions',
            content: 'Instructions',
            panelID: 'instructions-content',
        },
    ];
    return (

        <AppProvider i18n={enTranslations}>
           {/* <Page>
                <Card>
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                        <Card.Section title={tabs[selected].content}>
                            {(() => {
                                switch (selected) {
                                    case 0:
                                        return <Home  />
                                    case 1:
                                        return <Instruction  />
                                    default:
                                        return null
                                }
                            })()}
                        </Card.Section>
                    </Tabs>
                </Card>
            </Page>*/}

             <BrowserRouter basename="app">
                 <Link to="/">Home</Link>
                 <Link to="/instruction">Invoices</Link>

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
    ReactDOM.render(<App/>, document.getElementById('root'));
}

