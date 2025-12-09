import { useContext, useState } from "react"
import { useNavigate } from 'react-router';
import { UserContext } from "../../contexts/UserContext.jsx"
import { useForm } from "../../hooks/useForm.js";

export default function Login() {
    const { loginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const onSubmit = async (values) => {
        setError('');

        const { email, password } = values;

        if (!email || !password) {
            return setError('All fields are required!');
        }

        try {
            await loginHandler(email, password);
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }

    const {
        bindField, formAction
    } = useForm(onSubmit, {
        email: '',
        password: '',
    });


    return (
        <section id="login-page" className="content auth max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 tracking-tight text-gray-900">
                    Welcome Back!
                </h2>
                <h3 className="mt-10 text-center text-2xl/9 tracking-tight text-gray-900">
                    Please, login to continue!
                </h3>
            </div>

            <div className="mt-10 sm:mx-auto">


                {error &&
                    <div className="mt-3 mb-3">
                        <p className="error">{error}</p>
                    </div>
                }

                <form action={formAction} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-m/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                type="email"
                                {...bindField('email')}
                                required
                                className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <label htmlFor="password" className="text-m/6 font-medium text-gray-900">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                type="password"
                                {...bindField('password')}
                                required
                                className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md px-3 py-2 text-m/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>

        </section>
    )
}