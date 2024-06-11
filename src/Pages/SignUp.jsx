import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthCotext } from "../Provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthCotext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
                <img src={login} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl border p-5">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
                <p>Already havean account <Link to="/login" className="text-orange-600 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;