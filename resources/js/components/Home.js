import React, {useState, useCallback} from 'react';
import {Page} from '@shopify/polaris';

function Home() {
    const [key, setKey] = useState();


    const handleUrlChange = useCallback((value) => setKey(value), []);

    return (
    <Page>
        <h1>this is home</h1>
    </Page>
    );
}

export default Home
