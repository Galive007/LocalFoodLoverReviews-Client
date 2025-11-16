import React, { use } from 'react';
import MyContainer from '../../Component/MyContainer';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const AddReview = () => {
    const {user}=use(AuthContext)

    const navigate=useNavigate()

    const handleAddReview = (e) => {
        e.preventDefault()
        // console.log('clicked');
        const formData = {
            reviewer_name: e.target.reviewer_name.value,
            food_name :e.target.foodName.value,
            photo :e.target.foodImage.value,
            restaurant_name :e.target.restaurantName.value,
            restaurant_location :e.target.location.value,
            rating :e.target.rating.value,
            review_summary :e.target.reviewText.value,
            created_at:new Date(),
            reviewer_email:e.target.reviewer_email.value
        }
        e.target.reset();
        // console.log(formData);
        fetch('https://local-food-lover-reviews-server.vercel.app/allreviews',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            toast.success('Data Added your Database Successfully',data)
            navigate('/allreviews')
        })
        .catch(error=>{
            // console.log(error);
            toast.error('Something Wrong',error)
        })
    }


    return (
        <div>
            <MyContainer>
                <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Add Your Review
                    </h2>

                    <form className="space-y-4" onSubmit={handleAddReview}>
                        {/* reviewer Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="reviewer_name">
                                Reviewer Name
                            </label>
                            <input
                                type="text"
                                id="reviewer_name"
                                name='reviewer_name'
                                defaultValue={user.displayName}
                                readOnly

                                className="w-full border text-secondary border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        {/* reviewer Name */}
                        <div className='hidden'>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="reviewer_email">
                                Reviewer email
                            </label>
                            <input
                                type="text"
                                id="reviewer_email"
                                name='reviewer_email'
                                defaultValue={user.email}
                                className="w-full border text-secondary border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        {/* Food Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="foodName">
                                Food Name
                            </label>
                            <input
                                type="text"
                                id="foodName"
                                name='foodName'
                                placeholder="Enter food name"
                                className="w-full border text-secondary border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Food Image */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="foodImage">
                                Food Image URL
                            </label>
                            <input
                                type="text"
                                id="foodImage"
                                name='foodImage'
                                placeholder="Enter image URL"
                                className="w-full border text-secondary border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Restaurant Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="restaurantName">
                                Restaurant Name
                            </label>
                            <input
                                type="text"
                                id="restaurantName"
                                name='restaurantName'
                                placeholder="Enter restaurant name"
                                className="w-full border text-secondary border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="location">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name='location'
                                placeholder="Enter location"
                                className="w-full border text-secondary border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Star Rating */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="rating">
                                Star Rating
                            </label>
                            <input
                                type="number"
                                id="rating"
                                min="1"
                                max="5"
                                step=".1"
                                name='rating'
                                placeholder="Enter rating (1-5)"
                                className="w-full border text-secondary border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Review Text */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="reviewText">
                                Review Text
                            </label>
                            <textarea
                                id="reviewText"
                                name='reviewText'
                                placeholder="Write your review"
                                rows="4"
                                className="w-full border text-secondary border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 gradient-animate-btn rounded-2xl"
                            >
                                Submit Review
                            </button>
                        </div>
                    </form>
                </div>
            </MyContainer>
        </div>
    );
};

export default AddReview;