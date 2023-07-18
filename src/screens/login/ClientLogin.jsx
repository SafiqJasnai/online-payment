import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import { setSessionEmail, setSessionToken, setSessionUserName, setSessionUserToken } from "../../middleware/session-utils";
import { toastBadNews, toastPromise } from "../../utils/lib-toast/HotToastUtils";
import apiUserLogin from "../../apis/apiUserLogin";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const ClientLogin = () => {

    const navigate = useNavigate();
    const [userCredentials, setUserCredentials] = useState({});

    const responseHandler = (response) => {
        // localStorage.getItem('consoleLogging') && console.log({ apiResponse: response });
        const data = response?.data;
        let message = '';
        if (data?.accessToken) {
            setSessionToken(data?.accessToken);
            setSessionUserToken(data?.data?.token);
            const userName = data?.data?.fullName;
            const email = data?.data?.email;
            setSessionUserName(userName);
            setSessionEmail(email);
            setTimeout(
                () => 
                navigate('../student-payment', { replace: true }), 
                1000
            );
            // navigate('../student-payment', { replace: true });

            message = userName ? `Welcome ${userName}`: 'Login done';
            return message;
        } else {
            message = data?.message;
            return message;
        }        
    }

    const errorHandler = (error) => {
        localStorage.getItem('consoleLogging') && console.log({ errorData: error });
        let message = '';
        if (!error) {
            message = 'Please contact support team. Errorcode-CP103.';
        }
        else if (error?.response?.data?.message) {
            message = error.response.data.message;
        }
        else if (error.response?.status === 401) {
            message = 'User unauthorized';
        } 
        else if (error?.message || error?.code) {
            message = `"${error?.message}" (${error?.code})`;
        } else {
            message = error.toString(); // axios to take care
            // msg = JSON.stringify(error).toString(); // if non-axios parsing
        }
        return message;
    }

    return (
    <section className="bg-sky-900 h-screen">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign in to your account
                </h1>
                <div className="space-y-4 md:space-y-6">
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            value={userCredentials.email || ''}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                            border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                            onChange={(e) => {
                                const { value, name } = e.target;
                                setUserCredentials({
                                    ...userCredentials,
                                    [name]: value
                                })
                            }}
                        />
                        <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={userCredentials.password || ''}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                            border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
                            focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                            onChange={(e) => {
                                const { value, name } = e.target;
                                setUserCredentials({
                                    ...userCredentials,
                                    [name]: value
                                })
                            }}
                        />
                        <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="w-full">
                        <Button 
                            extraClasses={'w-full'}
                            onClick={()=>{
                                if (Object.keys(userCredentials).length === 0) {
                                    toastBadNews('Email and Password are required');
                                } else {
                                    toastPromise({
                                        promise: apiUserLogin(userCredentials),
                                        loadingMessage: 'Logging you in...',
                                        responseHandler: response => responseHandler(response),
                                        errorHandler: error => errorHandler(error),
                                    });
                                }
                                // apiLogin(formData).then(resHandler).catch(errHandler);
                            }}
                        >Sign In</Button>
                    </div>
                    <p className="text-sm font-light text-gray-500">
                      Don’t have an account yet? <a href="/#/student-search" className="font-medium text-primary-600 hover:underline">Sign up</a>
                  </p>
                </div>
                <Toaster />
            </div>
        </div>
    </div>
    </section>
    )
}

export default ClientLogin;