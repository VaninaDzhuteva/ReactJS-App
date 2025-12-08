import { useContext, useState } from "react"
import { useNavigate } from 'react-router';
import { UserContext } from "../../contexts/UserContext.jsx"

export default function Register() {
    const { registerHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        setError('');

        const { email, password, confirmPassword} = formValues;

        if (!email || !password || !confirmPassword) {
            return setError('All fields are required!');
        }

        if (password !== confirmPassword) {
            return setError('Passwords must match!')
        }

        try {
            await registerHandler(email, password);
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <section id="register-page" className="content auth">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 tracking-tight text-gray-900">
                        Lets get started, sign up!
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    { error && 
                        <div className="mt-3 mb-3">
                            <p className="error">{error}</p>
                        </div>        
                    }

                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="text-m/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formValues.email}
                                    onChange={changeHandler}
                                    required
                                    className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="">
                                <label htmlFor="password" className="block text-m/6 font-medium text-gray-900">
                                    Password
                                </label>
                                
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formValues.password}
                                    onChange={changeHandler}
                                    required
                                    className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="">
                                <label htmlFor="password" className="block text-m/6 font-medium text-gray-900">
                                    Confirm Password
                                </label>
                                
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formValues.confirmPassword}
                                    onChange={changeHandler}
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md px-3 py-2 text-m/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}