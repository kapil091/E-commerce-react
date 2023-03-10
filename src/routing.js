import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import {Header} from '../src/components/Header'
import {Footer} from '../src/components/Footer';
import {Dashboard} from '../src/components/pages/dashboard'

const AppLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>

);
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />}>
            <Route path='/' element={<Dashboard />} />
        </Route>
    )
)