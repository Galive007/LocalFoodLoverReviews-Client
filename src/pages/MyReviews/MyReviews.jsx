import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../Component/Loading';
import MyContainer from '../../Component/MyContainer';
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const MyReviews = () => {
    const { user } = use(AuthContext)
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://local-food-lover-reviews-server.vercel.app/my-reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
                setLoading(false)
            })
    }, [user?.email])

    const handleDelete = (id) => {

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
                fetch(`http://localhost:4500/my-reviews/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "My Review has been deleted.",
                                icon: "success"
                            });
                            const remainingReviews = reviews.filter(review => review._id !== id)
                            console.log(remainingReviews);
                            
                            setReviews(remainingReviews)
                            // navigate('/my-reviews')
                        }

                    })
                    .catch(error => {
                        console.log(error);

                    })

            }
        });
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <MyContainer>
            <h1 className='text-secondary'>my review:{reviews.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Food Image,</th>
                                <th>Food name</th>
                                <th>Restaurant name</th>
                                <th>posted date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {reviews.map((review, index) => <tr key={review._id}>
                                <th className='text-secondary'>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center text-secondary gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={review?.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className='text-secondary'>
                                    {review?.food_name}
                                </td>
                                <td className='text-secondary'>{review?.restaurant_name}</td>
                                <td className='text-secondary'>{review?.created_at}</td>
                                <th className='flex gap-2'>
                                    <Link to={`/update-review/${review?._id}`} className="btn gradient-animate-btn">Edit</Link>
                                    <button onClick={() => handleDelete(review._id)} className="btn gradient-animate-btn">Delete</button>
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </MyContainer>
        </div>
    );
};

export default MyReviews;