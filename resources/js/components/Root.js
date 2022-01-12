import React from 'react';

import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Navigation, Frame } from '@shopify/polaris';
import {HomeMajor, OrdersMajor, ProductsMajor} from '@shopify/polaris-icons';
import Home from "./Home";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Orders from "./Orders";

function Root(){
    const navigate = useNavigate()
    const onBackClick = (path) => {
        navigate(path)
    }
   return( <AppProvider i18n={enTranslations}>
        <Frame
            navigation={
                <Navigation location="app">
                    <Navigation.Section
                        items={[
                            {
                                url: "#",
                                label: 'Home',
                                icon: HomeMajor,
                                onClick: () => onBackClick('/app/home')
                            },
                            {
                                url: "#",
                                label: 'Orders',
                                icon: OrdersMajor,
                                onClick: () => onBackClick('/app/order')
                            },
                        ]}
                    />
                </Navigation>
            }
        >
            <Routes >
                <Route path='/app/home' element={<Home/>}/>
                <Route path='/app/order' element={<Orders/>}/>
            </Routes>
        </Frame>
    </AppProvider>);
}

export default Root
