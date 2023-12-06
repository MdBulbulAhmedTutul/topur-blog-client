import { Link } from "react-router-dom";
import loginImage from '../../assets/images/carusel/register.jpg'

const Register = () => {
    return (
        <div className='flex items-center flex-col lg:flex-row justify-between max-w-7xl mx-auto mt-16'>
            <div className='flex-1'>
                <img src={loginImage} alt="" />
            </div>
            <div className='flex-1'>
                <form className="card-body mb-2">
                    <h2 className='text-4xl font-semibold'>Please Register Now</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="card-body p-0">
                    <button className="btn btn-primary">Login with Google</button>
                </div>
                <p className='text-center mt-2'>Dont have an account <Link className='text-red-600 font-bold' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;