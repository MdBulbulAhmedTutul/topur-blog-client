// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import carusel1 from '../../assets/images/carusel/carusel1.jpg';
import carusel2 from '../../assets/images/carusel/carusel2.jpg';
import carusel3 from '../../assets/images/carusel/carusel3.jpg';
import carusel4 from '../../assets/images/carusel/carusel4.jpg';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Carusel = () => {
    return (
        <div className='w-full h-[750px] mb-0'>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="w-full h-[750px]"
            >
                <SwiperSlide className="relative w-full h-[750px]">
                    <div className='absolute w-full h-full bg-black opacity-50'></div>
                    <div className='absolute w-full h-full text-white top-[30%] left-[10%]'>
                        <h2 className='text-4xl font-bold mb-2'>Have a Nice Tour <br /> Yor Plan</h2>
                        <p className='mb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> at aut dolore ratione ipsum voluptate modi!</p>
                        <Link to="/about">
                            <button className='bg-orange-600 text-white font-bold rounded-md mt-2 px-4 py-2 hover:bg-white hover:text-black transition-all ease-in duration-200'>Learn More</button>
                        </Link>
                    </div>
                    <img className='w-full h-[750px]' src={carusel1} alt="" />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-[750px]">
                    <div className='absolute w-full h-full bg-black opacity-50'></div>
                    <div className='absolute w-full h-full text-white top-[30%] left-[10%]'>
                        <h2 className='text-4xl font-bold mb-2'>Have a Nice Tour <br /> Yor Plan</h2>
                        <p className='mb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> at aut dolore ratione ipsum voluptate modi!</p>
                        <Link to="/about">
                            <button className='bg-orange-600 text-white font-bold rounded-md mt-2 px-4 py-2 hover:bg-white hover:text-black transition-all ease-in duration-200'>Learn More</button>
                        </Link>
                    </div>
                    <img className='w-full h-[750px]' src={carusel2} alt="" />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-[750px]">
                    <div className='absolute w-full h-full bg-black opacity-50'></div>
                    <div className='absolute w-full h-full text-white top-[30%] left-[10%]'>
                        <h2 className='text-4xl font-bold mb-2'>Have a Nice Tour <br /> Yor Plan</h2>
                        <p className='mb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> at aut dolore ratione ipsum voluptate modi!</p>
                        <Link to="/about">
                            <button className='bg-orange-600 text-white font-bold rounded-md mt-2 px-4 py-2 hover:bg-white hover:text-black transition-all ease-in duration-200'>Learn More</button>
                        </Link>
                    </div>
                    <img className='w-full h-[750px]' src={carusel3} alt="" />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-[750px]">
                    <div className='absolute w-full h-full bg-black opacity-50'></div>
                    <div className='absolute w-full h-full text-white top-[30%] left-[10%]'>
                        <h2 className='text-4xl font-bold mb-2'>Have a Nice Tour <br /> Yor Plan</h2>
                        <p className='mb-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> at aut dolore ratione ipsum voluptate modi!</p>
                        <Link to="/about">
                            <button className='bg-orange-600 text-white font-bold rounded-md mt-2 px-4 py-2 hover:bg-white hover:text-black transition-all ease-in duration-200'>Learn More</button>
                        </Link>
                    </div>
                    <img className='w-full h-[750px]' src={carusel4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carusel;