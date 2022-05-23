import React from 'react'
import appointment from '../../assets/images/appointment.png'

const Contect = () => {
    return (
        <form style={{
            background: `url(${appointment})`
        }}>

            <div className="px-96 mx-28 sm:px-auto sm:mx-auto">
                {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
                <div className='text-center'>
                    <h3 className="text-xl text-primary">Contact Us</h3>
                    <h2 className="text-3xl text-white">Stay connected with us</h2>
                    <div className="">
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                </label>
                                <input type="text" placeholder="Your message" className=" w-auto h-48 input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-8 px-32">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Contect