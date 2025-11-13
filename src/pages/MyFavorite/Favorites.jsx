import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../Component/Loading';
import MyContainer from '../../Component/MyContainer';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import ReviewCard from '../../Component/ReviewCard';


const Favorites = () => {
    const { user } = use(AuthContext)
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://local-food-lover-reviews-server.vercel.app/my-favorites?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)
                setLoading(false)
            })
    }, [user?.email])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <MyContainer>
            <h1>Favorites</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {reviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)}
            </div>
        </MyContainer>
    );
};

export default Favorites;