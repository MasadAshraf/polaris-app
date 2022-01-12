import React, {useState, useCallback} from 'react';

import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Navigation, Frame } from '@shopify/polaris';
import {HomeMajor, OrdersMajor, ProductsMajor} from '@shopify/polaris-icons';
import Home from "./Home";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Instruction from "./Instruction";

function Root(){
    const navigate = useNavigate()
    const onBackClick = (path) => {
//        preventDefault()
//        console.log(path)
        // navigate(-1);
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
                <Route path='/app/order' element={<Instruction/>}/>
            </Routes>
        </Frame>
    </AppProvider>);
}

export default Root
