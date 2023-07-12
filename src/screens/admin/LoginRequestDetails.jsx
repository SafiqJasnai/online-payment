import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";
import AdminHeader from "../../ui-materials/header/AdminHeader";

const LoginRequestDetails = () => {

    const navigate = useNavigate();

    return (<>
    <AdminHeader/>
    <section className="h-screen bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 sm:p-8">
                    <div>
                        <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Login Request Details
                        </Label>
                    </div>
                    <div className="mt-6 mb-2">
                        <Label
                            extraClasses={'text-base'}
                        >Nama Ibu Bapa/Penjaga: </Label>
                        <Label
                            extraClasses={'text-base text-slate-700 uppercase font-semibold'}
                        >Diesel</Label>
                    </div>
                    <div className="mb-2">
                        <Label
                            extraClasses={'text-base'}
                        >Nama Penuh Pelajar: </Label>
                        <Label
                            extraClasses={'text-base text-slate-700 uppercase font-semibold'}
                        >Vin Bin Diesel</Label>
                    </div>
                    <div className="mb-2">
                        <Label
                            extraClasses={'text-base'}
                        >Email: </Label>
                        <Label
                            extraClasses={'text-base text-slate-700 uppercase font-semibold'}
                        >diesel@gmail.com</Label>
                    </div>
                    <div className="mb-2">
                        <Label
                            extraClasses={'text-base'}
                        >Phone No.: </Label>
                        <Label
                            extraClasses={'text-base text-slate-700 uppercase font-semibold'}
                        >012-3456789</Label>
                    </div>
                </div>
            </div>
            <div className="mt-6 space-x-2">
                <Button
                    onClick={() => {
                        navigate(-1)
                    }}
                    extraClasses={'border-slate-500 bg-slate-500 hover:shadow-slate-900 mr-6'}
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        navigate('../login-request')
                    }}
                    extraClasses={'border-red-500 bg-red-500 hover:shadow-red-900 '}
                >Reject/Delete</Button>
                <Button
                    onClick={() => {
                        navigate('../#/login-request')
                    }}
                    extraClasses={'border-green-500 bg-green-500 hover:shadow-green-900 '}
                >Approve</Button>
            </div>
        </div>
    </section>
    </>)
}

export default LoginRequestDetails;