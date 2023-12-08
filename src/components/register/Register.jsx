import { Link } from "react-router-dom";
import loginImage from '../../assets/images/carusel/register.jpg'
import { IoLogoGoogle } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
// import { useState } from "react";

const Register = () => {
    // const [error, setEror] = useState(true);
    const { createUser, updateProfilePicture } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfilePicture(name, photo)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfull registerd",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .then(eror => {
                console.error(eror);
                // setEror(eror)
            })
    }
    return (
        <div className='flex justify-between items-center flex-col lg:flex-row max-w-7xl mx-auto px-4 mt-16'>
            <div className='flex-1'>
                <img src={loginImage} alt="" />
            </div>
            <div className='flex-1 w-full bg-white px-4 py-4 shadow-xl rounded-lg mt-10'>
                <form onSubmit={handleRegister}>
                    <h2 className='text-4xl font-semibold mb-4'>Please Register Now</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                    <input className='w-full my-4 cursor-pointer bg-orange-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-400' type="submit" value="Register Now" />
                </form>
                <button className='w-full mt-4 cursor-pointer bg-orange-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-400 flex items-center justify-center'>Login With Google<IoLogoGoogle className='ml-2'></IoLogoGoogle></button>
                <p className='text-center mt-3'>Dont have an account <Link className='text-orange-600 font-bold ml-2 my-2' to="/login">Login</Link></p>
                {/* {
                    error ? <p>{error}</p>
                    :
                    []
                } */}
            </div>
        </div>
    );
};

export default Register;