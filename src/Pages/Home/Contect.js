import React from 'react'
import appointment from '../../assets/images/appointment.png'

const Contect = () => {
    return (
        <form style={{
            background: `url(${appointment})`
        }}>

            <div className="hero-content">
                {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
                <div className='text-center'>
                    <h3 className="text-xl font-bold text-primary">Contact Us</h3>
                    <h2 className="text-3xl text-white">Stay connected with us</h2>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                </label>
                                <input type="text" placeholder="Your message" className=" w-auto h-48 input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-5 pb-5 px-32">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Contect