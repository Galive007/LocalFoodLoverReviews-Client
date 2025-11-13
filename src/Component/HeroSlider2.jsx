import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const HeroSlider2 = () => {
    const banners = [
        { id: 1, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80', title: 'Taste the city — one plate at a time', subtitle: 'Explore street food, cozy cafes and hidden homemade gems.' },
        { id: 2, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', title: 'Local flavors, real stories', subtitle: 'Discover what locals are loving right now.' },
        { id: 3, image: 'https://i.ibb.co.com/YTB4YHTk/url-http-sbs-au-brightspot-s3-amazonaws-com-drupal-food-public-gettyimages-sharing-food.jpg', title: 'Share your food journey', subtitle: 'Write reviews and build your food footprint.' }
    ]
    const [index, setIndex] = useState(0)
    useEffect(() => { const t = setInterval(() => setIndex(i => (i + 1) % banners.length), 4000); return () => clearInterval(t) }, [])
    return (
        <>
            <section className="relative ">
                <div className="h-64 md:min-h-[650px] overflow-hidden rounded-b-2xl relative">
                    {banners.map((b, i) => (
                        <div key={b.id} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={b.image} alt={b.title} className="w-full h-64 md:min-h-screen object-cover" />
                            <div className="absolute inset-0 bg-opacity-30 flex items-center ">
                                <div className="max-w-6xl mx-auto px-4 text-white">
                                    <h1 className="text-2xl md:text-6xl font-extrabold">{b.title}</h1>
                                    <p className="mt-2 max-w-xl">{b.subtitle}</p>
                                    <div className="mt-4">
                                        <Link to="/allreviews" className="px-4 py-2 gradient-animate-btn rounded-full">Explore Reviews</Link></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HeroSlider2;