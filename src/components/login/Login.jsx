import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/carusel/register.jpg';
import { IoLogoGoogle } from "react-icons/io";
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfull Login",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error => {
            console.error(error)
        });
    }
    return (
        <div className='flex justify-between items-center flex-col lg:flex-row max-w-7xl mx-auto px-4'>
            <div className='flex-1'>
                <img src={loginImage} alt="" />
            </div>
            <div className='flex-1 w-full bg-white px-4 py-4 shadow-xl rounded-lg mt-10'>
                <form onSubmit={handleLogin}>
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