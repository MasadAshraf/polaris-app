import React, {useState, useCallback} from 'react';
import {Card, Heading, Page} from '@shopify/polaris';

function Home() {
    const [key, setKey] = useState();


    const handleUrlChange = useCallback((value) => setKey(value), []);

    return (
    <Page>
        <Heading element="h1">Polaris App Dashboard</Heading>
        <Card title='Home Dashboard'>

        </Card>
    </Page>
    );
}

export default Home
