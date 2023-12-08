import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/carusel/register.jpg';
import { IoLogoGoogle } from "react-icons/io";


const Login = () => {
    return (
        <div className='flex justify-between items-center flex-col lg:flex-row max-w-7xl mx-auto px-4'>
            <div className='flex-1'>
                <img src={loginImage} alt="" />
            </div>
            <div className='flex-1 w-full'>
                <form>
                    <h2 className='text-4xl font-semibold mb-4'>Please Login Now</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    </div>
                    <input className='w-full my-4 cursor-pointer bg-orange-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-400' type="submit" value="Login Now" />
                </form>
                <button className='w-full mt-4 cursor-pointer bg-orange-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-400 flex items-center justify-center'>Login With Google<IoLogoGoogle className='ml-2'></IoLogoGoogle></button>
                <p className='text-center mt-3'>Dont have an account <Link className='text-orange-600 font-bold ml-2 my-2' to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;