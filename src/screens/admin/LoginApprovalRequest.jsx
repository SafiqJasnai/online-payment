import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import AdminHeader from "../../ui-materials/header/AdminHeader";
import Label from "../../ui-materials/label/Label";
import SVGApproved from "../../ui-materials/svg/SVGApproved";
import SVGRejected from "../../ui-materials/svg/SVGRejected";

const LoginApprovalRequest = () => {

    const navigate = useNavigate();

    const tableDetails = [
        {
            nama: 'Vin Bin Diesel',
            status: false
        },
        {
            nama: 'Vin Bin Diesel',
            status: true
        },
        {
            nama: 'Vin Bin Diesel',
            status: true
        },
        {
            nama: 'Vin Bin Diesel',
            status: false
        },
        {
            nama: 'Vin Bin Diesel',
            status: true
        },
    ]

    return (<>
        <AdminHeader />
        <section className="bg-gray-50">
            <div className="p-6 sm:p-8 overflow-auto">
                <div className="mb-4">
                    <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Login Approval Request
                    </Label>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="relative my-4 w-96">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="uppercase block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Nama Ibu Bapa/Penjaga" required />
                        </div>
                        <div className="items-center justify-center">
                            <Button
                                // onClick={() => {
                                //     navigate('../student-details')
                                // }}
                            >Search</Button>
                        </div>
                        {/* <div className="items-center justify-center">
                            <Button
                                onClick={() => {
                                    navigate('../add-student')
                                }}
                            >+Add new student</Button>
                        </div> */}
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 shadow-md">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nama Ibu Bapa/Penjaga
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableDetails.map((parents, i) => (
                        <tr key={i} class="bg-white border-b hover:bg-gray-50">
                            <td class="px-6 py-4 uppercase">
                                {parents.nama}
                            </td>
                            <td class="px-6 py-4">
                                {parents.status ? <SVGApproved /> : <SVGRejected />}
                            </td>
                            <td class="px-6 py-4">
                                <div className="">
                                    <Button 
                                        onClick={() => {
                                            navigate('../login-request-details')
                                        }}
                                        extraClasses={'flex-col items-center justify-center w-16 '}
                                    >
                                        View
                                    </Button>
                                    {/* <Button 
                                        extraClasses={' flex-col items-center justify-center ml-2 border-red-500 bg-red-500 hover:shadow-red-900 w-16'}
                                    >
                                        Delete
                                    </Button> */}
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    </>)
}

export default LoginApprovalRequest;