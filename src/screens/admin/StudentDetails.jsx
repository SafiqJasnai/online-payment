import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";
import AdminHeader from "../../ui-materials/header/AdminHeader";

const StudentDetails = () => {

    const navigate = useNavigate();

    return (<>
    <AdminHeader/>
    <section className="h-screen bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 sm:p-8">
                    <div>
                        <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Student Details
                        </Label>
                    </div>
                    <div className="mt-6">
                        <Label
                            extraClasses={'text-base'}
                        >Nama Penuh: </Label>
                        <Label
                            extraClasses={'text-base text-slate-700 uppercase font-semibold'}
                        >Vin Bin Diesel</Label>
                    </div>
                    <div className="">
                        <Label
                            extraClasses={'text-base'}
                        >Umur: </Label>
                        <Label
                            extraClasses={'text-base text-slate-700 uppercase font-semibold'}
                        >8</Label>
                    </div>
                    <div className="">
                        <Label
                            extraClasses={'text-base'}
                        >Name Ibu Bapa/Penjaga: </Label>
                        <Label
                            extraClasses={'text-base text-slate-700 uppercase font-semibold'}
                        >Diesel</Label>
                    </div>
                    <div className="mt-6">
                        <Label
                            extraClasses={'text-base'}
                        >Tunggakan: </Label>
                        <Label
                            extraClasses={'text-base uppercase font-semibold text-red-500'}
                        >-RM313.00</Label>
                    </div>
                </div>
            </div>
            <div className="mt-6 space-x-4">
                <Button
                    onClick={() => {
                        navigate(-1)
                    }}
                    extraClasses={'border-slate-500 bg-slate-500 hover:shadow-slate-900 '}
                >
                    Back
                </Button>
                <Button
                    onClick={() => {
                        navigate('../edit-student-details')
                    }}
                >Edit</Button>
            </div>
        </div>
    </section>
    </>)
}

export default StudentDetails;