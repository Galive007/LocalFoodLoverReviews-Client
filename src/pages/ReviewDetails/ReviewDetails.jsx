import React, { useEffect, useState, use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import Loading from '../../Component/Loading';
import { Heart } from 'lucide-react';
import { toast } from 'react-toastify';


const ReviewDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [review, setReview] = useState({})
    const [loading, setLoading] = useState(true)
    const { user } = use(AuthContext)
    // console.log(user.email);


    useEffect(() => {
        fetch(`https://local-food-lover-reviews-server.vercel.app/allreviews/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReview(data)
                setLoading(false)
            })
    }, [user,id])
    const { _id, photo, food_name, restaurant_name, restaurant_location, reviewer_name, rating, review_summary } = review

    const handleDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://local-food-lover-reviews-server.vercel.app/allreviews/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Review has been deleted.",
                            icon: "success"
                        });
                        navigate('/allreviews')
                    })
                    .catch(error => {
                        console.log(error);

                    })

            }
        });
    }
// http://localhost:4500/favorites
    const handleFavorite = () => {
        // console.log('clicked');
        fetch(`https://local-food-lover-reviews-server.vercel.app/favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...review, favorited_by: user.email })
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.insertedId){
                    toast.success('Successfully Added Favorite Review',data)
                }
            })
            .catch(error => {
                // console.log(error);
                toast.error('Already Added Favorite Review',error)
            })
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <main className="max-w-4xl mx-auto px-4">
            <div className="mt-6 bg-white rounded-2xl p-6 shadow">
                <img src={photo} alt={food_name} className="w-full object-cover rounded-lg" />
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="text-2xl text-secondary font-semibold mt-4">{food_name}</h2>
                            <div className="text-sm text-gray-500">{restaurant_name} · {restaurant_location}</div>
                            <div className="mt-2 text-gray-700">By {reviewer_name} • {rating} ⭐</div>
                        </div>
                        <button onClick={handleFavorite}><Heart className='text-secondary' /></button>
                    </div>
                    <p className="mt-2 text-gray-700">{review_summary}</p>

                </div>

                <div className="text-center *:mr-3">
                    <Link
                        to="/allreviews"
                        className="inline-block px-6 py-2 gradient-animate-btn rounded-2xl mt-3">
                        All Reviews
                    </Link>
                    <Link
                        to={`/update-review/${_id}`}
                        className="inline-block px-6 py-2 gradient-animate-btn rounded-2xl mt-3">
                        Update Review
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="inline-block px-6 py-2 gradient-animate-btn rounded-2xl mt-3">
                        Delete
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ReviewDetails;