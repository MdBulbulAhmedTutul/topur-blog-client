import aboutImages from '../assets/images/about.png';
const About = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 my-24'>
            <div className='text-center mb-16'>
                <h2 className=' text-3xl font-bold mb-2'>About Us</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et provident iusto, <br /> omnis hic possimus, blanditiis quo ut laborum nostrum natus aspernatur officiis voluptates cupiditate nulla nobis.</p>
            </div>
            <div className='flex items-center justify-between flex-col lg:flex-row'>
                <div className='flex-1'>
                    <img src={aboutImages} alt="" />
                </div>
                <div className='flex-1'>
                    <h2 className='text-black text-3xl font-bold mb-2'>About Us</h2>
                    <h2 className='text-black text-3xl font-bold mb-2'>Lorem sit amet consectetur adipisicing.</h2>
                    <p className='text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo explicabo deleniti numquam labore commodi ipsum culpa.</p>
                    <p className='text-gray-500 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque voluptatem odit pariatur dolorem, quo ex accusamus obcaecati sit a vero consectetur, est tempora cupiditate!</p>
                    <button className='bg-orange-600 text-white px-4 py-2 rounded-md'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default About;