import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";
import SVGEdit from "../../ui-materials/svg/SVGEdit";
// import Label from "../../ui-materials/label/Label";

const ClientRegister = () => {

    const navigate = useNavigate();

    return (
    <section className="bg-sky-900 h-screen">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Register your account
                </h1>
                <div className="space-y-4 md:space-y-6">
                    <div>
                        <Label extraClasses={'text-base font-semibold'}>Student List</Label>
                        <div className="flex flex-row mt-2 items-center space-x-2">
                            <Label extraClasses={'text-sm font-medium'}>Muhammad Safiq Bin Jasnai</Label>
                            <button 
                                onClick={() => 
                                    navigate('../student-search', { replace: false })}
                            >
                                <SVGEdit />
                            </button>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="text" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="w-full">
                        <Button 
                            extraClasses={'w-full'}
                            onClick={() => 
                                navigate('../login', { replace: false })}
                        >Sign Up</Button>
                    </div>
                    <p className="text-sm font-light text-gray-500">
                      Already have an account? <a href="/#/login" className="font-medium text-primary-600 hover:underline">Sign In</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </section>
    )
}

export default ClientRegister;