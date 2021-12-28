import React, {useState, useCallback} from 'react';
import {Page, Form, FormLayout, TextField, Button} from '@shopify/polaris';


function Home(){
    const [key, setKey] = useState('');

    const handleSubmit = useCallback((_event) => setKey(''), []);

    const handleUrlChange = useCallback((value) => setKey(value), []);

    return (
        <Page title="">
            <div  style={{paddingTop: '5px'}}>
                <Form  noValidate onSubmit={handleSubmit}>
                    <FormLayout>
                        <TextField
                            value={key}
                            onChange={handleUrlChange}
                            label="Auth Key"
                            type="url"
                            autoComplete="off"
                        />

                        <Button submit>Submit</Button>
                    </FormLayout>
                </Form>
            </div>

        </Page>
    );
}

export default Home
