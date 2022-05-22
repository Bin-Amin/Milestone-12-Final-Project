import React from 'react'

const Reviews = ({ review }) => {
    return (
        <div class="card lg:max-w-lg shadow-xl">
            <div class="card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi commodi ipsum, nulla ullam tenetur libero ex deleniti quae ut amet!</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews