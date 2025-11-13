// import React, { useEffect, useState } from 'react';
// import required modules
import MyContainer from './MyContainer';
import { Link } from 'react-router';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'
import banner4 from '../assets/images/banner4.jpg'


const HeroSlider = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 350000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='object-contain
                ' style={{
                    backgroundImage: `url(${banner1})`, backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className="absolute inset-0  bg-opacity-30 flex items-center">
                    <div className="max-w-6xl mx-auto px-4 text-white">
                        <h2 className="text-2xl md:text-4xl font-extrabold">b.title</h2>
                        <p className="mt-2 max-w-xl">b.subtitle</p>
                        <div className="mt-4"><Link to="/reviews" className="px-4 py-2 bg-primary rounded-full">Explore Reviews</Link></div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="object-center"
                    style={{
                        backgroundImage: `url(${banner2})`, backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat:'no-repeat',
                        
                    }}>Slide 2</SwiperSlide>
                <SwiperSlide className="object-center"
                    style={{
                        backgroundImage: `url(${banner3})`, backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat:'no-repeat',
                        
                    }}>Slide 3</SwiperSlide>
                <SwiperSlide className="object-center"
                    style={{
                        backgroundImage: `url(${banner4})`, backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat:'no-repeat',
                        
                    }}>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
};

export default HeroSlider;


// const banners = [
//         { id: 1, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80', title: 'Taste the city — one plate at a time', subtitle: 'Explore street food, cozy cafes and hidden homemade gems.' },
//         { id: 2, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', title: 'Local flavors, real stories', subtitle: 'Discover what locals are loving right now.' },
//         { id: 3, image: 'https://unsplash.com/photos/a-platter-of-crackers-strawberries-and-fruit-M4E7X3z80PQ', title: 'Share your food journey', subtitle: 'Write reviews and build your food footprint.' }
//     ]
//     const [index, setIndex] = useState(0)
//     useEffect(() => { const t = setInterval(() => setIndex(i => (i + 1) % banners.length), 4000); return () => clearInterval(t) }, [])


{/* <section className="relative">
    <div className="h-64 md:h-96 overflow-hidden rounded-b-2xl relative">
        {banners.map((b, i) => (
            <div key={b.id} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
                <img src={b.image} alt={b.title} className="w-full h-64 md:h-96 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
                    <div className="max-w-6xl mx-auto px-4 text-white">
                        <h2 className="text-2xl md:text-4xl font-extrabold">{b.title}</h2>
                        <p className="mt-2 max-w-xl">{b.subtitle}</p>
                        <div className="mt-4"><Link to="/reviews" className="px-4 py-2 bg-primary rounded-full">Explore Reviews</Link></div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section> */}