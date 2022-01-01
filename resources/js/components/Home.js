import React, {useState, useCallback} from 'react';
import {Form, FormLayout, TextField, Button} from '@shopify/polaris';

import instance from "../interceptor";
import {NOTIFICATION_CONFIGS, REACT_APP_API_BASEURL} from "../constants";
import {store} from 'react-notifications-component';
import axios from "axios";

function Home() {
    const [key, setKey] = useState('');

    const handleSubmit = useCallback((_event) => {

        utils.getSessionToken(app).then((token) => {
            const headers = {
                'Authorization' : `Bearer ${token}`
            }
            axios.post(REACT_APP_API_BASEURL + 'auth', {key: key},{headers : headers}).then(function (response) {
                if (response.status === 200) {
                    store.addNotification(
                        {
                            ...NOTIFICATION_CONFIGS,
                            title: 'Success',
                            message: 'Auth key successfully saved !',
                            type: 'success',
                        }
                    );
                }
            }).catch(function (error) {
                if (typeof error.response.data != 'undefined'){
                    let errors = error.response.data.errors.key;
                    if (typeof errors != 'undefined') {
                        errors.forEach((msg) => {
                            store.addNotification(
                                {
                                    ...NOTIFICATION_CONFIGS,
                                    title: 'Sorry Request Failed',
                                    message: msg,
                                    type: 'danger',
                                });
                        })
                    }
                }
            })
        });

    }, [key]);

    const handleUrlChange = useCallback((value) => setKey(value), []);

    return (

        <Form noValidate onSubmit={handleSubmit}>
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
