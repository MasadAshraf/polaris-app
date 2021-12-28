import React, {useState, useCallback} from 'react';
import {Form, FormLayout, TextField, Button} from '@shopify/polaris';


function Home(){
    const [key, setKey] = useState('');

    const handleSubmit = useCallback((_event) => setKey(''), []);

    const handleUrlChange = useCallback((value) => setKey(value), []);

    return (

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
    );
}

export default Home
