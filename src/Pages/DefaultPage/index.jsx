import React from 'react'
import Footer from 'Layouts/Footer'
import Header from 'Layouts/Header'
import Strip from 'Components/Strip'
// import GetBrazilianCurrencies from 'Middleware/GetBrazilianCurrencies'
import { Outlet } from 'react-router-dom'


export default function DefaultPage() {
    return (
        <>
            <Header />
            <Strip>
                SERVICE STOPED
                {/* <GetBrazilianCurrencies /> */}
            </Strip>
            <Outlet />
            <Footer />
        </>
    )
}
