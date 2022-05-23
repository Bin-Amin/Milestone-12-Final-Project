import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h3 className='text-xl text-secondary text-center'> Available Appointments on {format(date, 'PP')}</h3>
        </div>
    )
}

export default AvailableAppointments