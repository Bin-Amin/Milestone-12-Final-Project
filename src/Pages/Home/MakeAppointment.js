import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5 py-3'>
                <h2 className='text-xl text-primary font-bold '>Appointment</h2>
                <h2 className='text-3xl text-white py-6'>Make an Appointment Today</h2>
                <p className='text-white py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos at repellat vitae iure a veritatis, totam reprehenderit impedit ex, praesentium sit ad nulla ab nam in, et natus incidunt?
                    Et inventore iusto voluptates repellendus ipsam nam magnam optio atque perferendis ad! Minus ipsa voluptate rerum quos officia architecto doloribus tempora doloremque laboriosam veritatis nemo ratione impedit error, aperiam rem?
                    Nam optio porro voluptatum, iusto, unde neque illo itaque magnam earum deleniti nemo facilis. Laudantium accusamus perferendis ea ut omnis adipisci, est expedita rem ducimus necessitatibus autem libero eligendi labore!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    )
}

export default MakeAppointment