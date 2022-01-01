import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Card, Tabs, Badge, Page} from '@shopify/polaris';
import Home from "./Home";
import Instruction from "./Instruction";
import ReactNotification from 'react-notifications-component'


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
            <div className="app-container">
                <ReactNotification />
                <Page>

                    <Card>
                        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                            <Card.Section >
                                {(() => {
                                    switch (selected) {
                                        case 0:
                                            return <Home  />
                                        case 1:
                                            return <Instruction  />
                                        default:
                                            return 'PLease contact to App Support'
                                    }
                                })()}
                            </Card.Section>
                        </Tabs>
                    </Card>
                </Page>
            </div>
        </AppProvider>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

