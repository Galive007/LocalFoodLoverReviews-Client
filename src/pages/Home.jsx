import React from 'react';
import MyContainer from '../Component/MyContainer';
import HeroSlider from '../Component/HeroSlider';
import HeroSlider2 from '../Component/HeroSlider2';
import { Link, useLoaderData } from 'react-router';
import ReviewCard from '../Component/ReviewCard';
import Loading from '../Component/Loading';
import TopCategories from '../Component/TopCategories';
import AboutSection from '../Component/AboutSection';

const Home = () => {
    const reviews = useLoaderData()
    // console.log(reviews);

    // if (!reviews) return <Loading />;
    return (
        <>
            {/* <HeroSlider></HeroSlider> */}
            <HeroSlider2></HeroSlider2>
            <MyContainer className='px-2 md:px-0 mb-10'>
                <div className="flex items-center justify-between mb-4 mt-8">
                    <h2 className="text-xl lg:text-3xl font-semibold gradient-text">Featured Reviews</h2>
                    <Link to='/allreviews' className='gradient-text hover:underline px-3 py-2 rounded-xl'>Show All</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {reviews.map((review) => <ReviewCard key={review._id} review={review}></ReviewCard>)}
                </div>
            </MyContainer>
            <TopCategories></TopCategories>
            <AboutSection></AboutSection>
        </>



    );
};

export default Home;