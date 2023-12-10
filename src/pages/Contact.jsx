import contactImages from '../assets/images/contact.png';
const Contact = () => {
    return (
        <div className='my-24'>
            <div className='text-center mb-16'>
                <h2 className=' text-3xl font-bold mb-2'>Contact Us</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et provident iusto, <br /> omnis hic possimus, blanditiis quo ut laborum nostrum natus aspernatur officiis voluptates cupiditate nulla nobis.</p>
            </div>
            <div className='flex items-center justify-between flex-col md:flex-row max-w-7xl mx-auto'>
                <div className='flex-1'>
                    <img src={contactImages} alt="" />
                </div>
                <div className='flex-1'>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name='phone' placeholder="Number" className="input input-bordered" required />
                        </div>
                        <div className='mt-4'>
                            <textarea className='border-2 p-1 w-full rounded-r-lg border-gray-300' name="" id="" cols="30" rows="10">Text Here</textarea>
                        </div>
                        <input className='w-full my-4 cursor-pointer bg-orange-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-400' type="submit" value="Submit Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
