import React, { useState } from 'react';
import MyContainer from '../../Component/MyContainer';
import { useLoaderData } from 'react-router';
import ReviewCard from '../../Component/ReviewCard';
import Loading from '../../Component/Loading';

const AllReviews = () => {
    const reviews = useLoaderData()
    const [search,setSearch]=useState(reviews)
    const [loading,setLoading]=useState(false)

    const handleSearch=(e)=>{
        e.preventDefault()
        const search_text=e.target.search.value
        // console.log(search);
        setLoading(true)
        fetch(`https://local-food-lover-reviews-server.vercel.app/search?search=${search_text}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSearch(data)
            setLoading(false)
        })
    }

    if(loading){
        return <Loading></Loading>
    }
    // console.log(reviews.food_name);
    return (
        <MyContainer>
            <div>
                <section className="py-10 ">
                    <div className=" px-4 sm:px-6 lg:px-8">

                        {/* Section Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800">All Reviews</h2>
                            <form onSubmit={handleSearch}>
                                <div className='flex gap-2'>
                                    <label className="input rounded-2xl text-secondary ">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </g>
                                    </svg>
                                    <input type="search" name='search' placeholder="Search" />
                                </label>
                                <button className='gradient-animate-btn px-3 rounded-2xl'>{loading?'Searching.....':'Search'}</button>
                                </div>
                            </form>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {search.map((review) => <ReviewCard key={review._id} review={review}></ReviewCard>)}
                        </div>
                    </div>
                </section>
            </div>
        </MyContainer>
    );
};

export default AllReviews;