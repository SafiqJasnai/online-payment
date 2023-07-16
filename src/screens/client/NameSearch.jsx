import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";
import SVGDelete from "../../ui-materials/svg/SVGDelete";
// import Label from "../../ui-materials/label/Label";

const NameSearch = () => {

    const navigate = useNavigate();

    return (
    <section className="bg-sky-900 h-screen">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
            <div className="p-6 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Register your account
                </h1>
                <Button
                    extraClasses={'text-slate-950 bg-white mt-3'}
                    // onClick={() => {
                    //     navigate('../student-details')
                    // }}
                >+Add another student</Button>
                <div className="space-y-4 md:space-y-6"><div className="flex flex-row items-center space-x-2">
                    <div>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="text" name="currentFees" id="currentFees" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="currentFees" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Student Full Name</label>
                    </div>
                    <div className="items-center justify-center">
                        <Button
                            // onClick={() => {
                            //     navigate('../student-details')
                            // }}
                        >Search</Button>
                    </div>
                </div>
                <div>
                    <Label extraClasses={'text-base font-semibold'}>Added student</Label>
                    <div className="flex flex-row mt-2 items-center space-x-2">
                        <Label extraClasses={'text-sm font-medium'}>Muhammad Safiq Bin Jasnai</Label>
                        <button className="">
                            <SVGDelete />

                        </button>
                    </div>
                </div>
                <div className="w-full">
                    <Button 
                        extraClasses={'w-full'}
                        onClick={() => 
                            navigate('../register', { replace: false })}
                    >Next</Button>
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

export default NameSearch;