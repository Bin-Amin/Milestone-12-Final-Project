import React from 'react'
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nesciunt eius. Iure esse deserunt laborum, et pariatur officiis expedita quisquam nulla culpa, magnam, quam omnis cum aliquam maiores nesciunt fugit?0</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Banner