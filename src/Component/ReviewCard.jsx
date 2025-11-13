import React, { useEffect } from 'react';
import { Link } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewCard = ({review}) => {
    const {_id,photo,food_name,restaurant_name,restaurant_location,reviewer_name,rating}=review
    // console.log(_id);
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return (
        <div data-aos="fade-right" className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
            <img
                src={photo}
                alt={food_name}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h3 className="text-lg font-semibold text-secondary">{food_name}</h3>
                <p className="text-sm text-gray-600">{restaurant_name}</p>
                <p className="text-xs text-gray-500 mb-3">{restaurant_location}</p>

                <div className="flex items-center justify-between mt-3">
                    <div>
                        <p className="text-sm font-medium text-gray-700">{reviewer_name}</p>
                        <p className="text-yellow-500 text-sm font-semibold">
                            ⭐ {rating}
                        </p>
                    </div>

                    <Link to={`/review-details/${_id}`} className="px-3 py-2 text-center gradient-animate-btn  rounded-2xl" onClick={``}>
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;