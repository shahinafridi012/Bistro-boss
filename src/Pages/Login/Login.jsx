import image from '../../assets/others/authentication.gif';
import logo from '../../assets/logo.png';
import bg_image from '../../assets/others/authentication.png';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
            })
    };

    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    return (
        <div>
            <div
                className="w-full h-[600px]"
                style={{ backgroundImage: `url(${bg_image})` }}
            >
                <div className="pt-8">
                    <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl mt-10">
                        <div
                            className="hidden bg-cover lg:block lg:w-4/6"
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>

                        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
                            </div>

                            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                                Welcome back!
                            </p>

                            <a
                                href="#"
                                className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <div className="px-4 py-2">
                                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                                        {/* SVG paths for Google icon */}
                                    </svg>
                                </div>
                                <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                            </a>

                            <form onSubmit={handleLogin}>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                                    <a
                                        href="#"
                                        className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                                    >
                                        or login with email
                                    </a>
                                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                                </div>

                                <div className="mt-4">
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                        htmlFor="LoggingEmailAddress"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="LoggingEmailAddress"
                                        name="email"
                                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                        type="email"
                                    />
                                </div>

                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                            htmlFor="loggingPassword"
                                        >
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                                        >
                                            Forget Password?
                                        </a>
                                    </div>
                                    <input
                                        id="loggingPassword"
                                        name="password"
                                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                        type="password"
                                    />
                                </div>

                                <div className="mt-4">
                                    <LoadCanvasTemplate />
                                    <div className="mt-3">
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                            htmlFor="captcha"
                                        >
                                            Captcha
                                        </label>
                                        <input
                                            ref={captchaRef}
                                            name="captcha"
                                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                            type="text"
                                        />
                                        <button
                                            onClick={handleCaptcha}
                                            type="button"
                                            className="btn block border-0 border-b-4 btn-outline btn-xs"
                                        >
                                            Validate
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <input
                                        disabled={disabled}
                                        className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                                        type="submit"
                                        value="Login"
                                    />
                                </div>
                            </form>

                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                                <Link to='/signup'>

                                    <button

                                        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                                    >
                                        or sign up
                                    </button>
                                </Link>


                                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
