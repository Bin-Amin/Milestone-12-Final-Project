import React from 'react'
import Footer from '../Shared/Footer'
import Banner from './Banner'
import Contect from './Contect'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'
import Testimonials from './Testimonials'



const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonials />
            <Contect />
            <Footer />
        </div>
    )
}

export default Home