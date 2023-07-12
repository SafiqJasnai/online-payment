import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";

const EditStudentDetails = () => {

    const navigate = useNavigate();

    return (
    <section className="h-screen bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 sm:p-8">
                    <div className="mb-6">
                        <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Student Details
                        </Label>
                        <p className='text-base font-normal text-gray-500'>Edit student details</p>
                    </div>
                    <div className="mb-6">
                        <Label for="name" extraClasses={"block mb-2 text-sm font-medium text-gray-900"}>Nama Penuh</Label>
                        <input type="name" id="name" className="uppercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-6">
                        <Label for="age" extraClasses={"block mb-2 text-sm font-medium text-gray-900"}>Umur</Label>
                        <input type="text" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-6">
                        <Label for="age" extraClasses={"block mb-2 text-sm font-medium text-gray-900"}>Tunggakan (RM)</Label>
                        <input type="text" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10.00" required />
                    </div>
                </div>
            </div>
            <div className="mt-6 space-x-4">
                <Button
                    onClick={() => {
                        navigate('../student-table')
                    }}
                    extraClasses={'border-slate-500 bg-slate-500 hover:shadow-slate-900 '}
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        navigate('../student-table')
                    }}
                >Update</Button>
            </div>
        </div>
    </section>
    )
}

export default EditStudentDetails;