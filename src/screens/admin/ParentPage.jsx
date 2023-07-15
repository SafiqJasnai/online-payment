import SideNav from "../../ui-materials/sidenav/SideNav";
// import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";
import SVGApproved from "../../ui-materials/svg/SVGApproved";
import SVGRejected from "../../ui-materials/svg/SVGRejected";

const ParentPage = () => {

    // const navigate = useNavigate();

    const tableDetails = [
        {
            nama: 'Muhammad Safiq Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: false
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: false
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: false
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
        {
            nama: 'Vin Bin Diesel',
            approval_status: true
        },
    ];


    return (<div>  
        <SideNav />
        <div className="pt-5 !pl-[200px] max-h-screen max-w-screen justify-between flex">
            <div className="bg-white drop-shadow-md p-5 rounded-lg border w-8/12 max-h-content">
                <Label extraClasses={'text-xl'}>Parents</Label>
                <div className="flex flex-row items-center space-x-2">
                    <div>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="text" name="currentFees" id="currentFees" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="currentFees" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Student Full Name</label>
                    </div>
                    <div className="items-center justify-center">
                        <Button
                            // onClick={() => {
                            //     navigate('../student-details')
                            // }}
                        >Search</Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 space-x-3 justify-center">
                    <div className="">
                        <table className="w-full text-sm text-gray-500 shadow-md text-left">
                            <thead className="flex text-xs text-gray-700 uppercase bg-gray-100">
                                <tr className="flex items-center w-full">
                                <th scope="col" className="pl-4 py-4 w-1/2">
                                    Full Name
                                </th>
                                <th scope="col" className="pr-4 py-4 w-1/2">
                                    Approval Status
                                </th>
                                </tr>
                            </thead>
                            <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full" style={{'height': '61vh'}}>
                                {tableDetails.map((parent, i) => (
                                    <tr className="flex w-full bg-white border-b hover:bg-gray-50 hover:cursor-pointer items-center text-center justify-center" key={i}>
                                    <td className="pl-4 w-1/2 py-4 uppercase">
                                        {parent.nama}
                                    </td>
                                    <td className="px-2 w-1/2 py-4 flex items-center text-center justify-center">
                                        {parent.approval_status ? <SVGApproved /> : <SVGRejected />}
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white drop-shadow-md p-5 rounded-lg border">
                        <Label>Parent Details</Label>
                        <div className="w-full mt-4 mb-2 flex flex-row">
                            <div className="w-1/3">
                                <Label extraClasses={'text-sm'}>Full Name:</Label>
                            </div>
                            <div className="w-4/6">
                                <Label extraClasses={'text-sm font-medium'}>Muhammad Safiq Bin Jasnai</Label>
                            </div>
                        </div>
                        <div className="w-full mt-4 mb-2 flex flex-row">
                            <div className="w-1/3">
                                <Label extraClasses={'text-sm'}>Email:</Label>
                            </div>
                            <div className="w-4/6">
                                <Label extraClasses={'text-sm font-medium'}>safiqjasnai@gmail.com</Label>
                            </div>
                        </div>
                        <div className="w-full mt-4 mb-2 flex flex-row">
                            <div className="w-1/3">
                                <Label extraClasses={'text-sm'}>Phone:</Label>
                            </div>
                            <div className="w-4/6">
                                <Label extraClasses={'text-sm font-medium'}>0123456789</Label>
                            </div>
                        </div>
                        <div className="w-full mt-4 mb-2 flex flex-row">
                            <div className="w-1/3">
                                <Label extraClasses={'text-sm'}>Students Name:</Label>
                            </div>
                            <div className="w-4/6">
                                <div>
                                    <Label extraClasses={'text-sm font-medium'}>Muhammad Safiq Bin Jasnaii</Label>
                                </div>
                                <div>
                                    <Label extraClasses={'text-sm font-medium'}>Muhammad Safiq Bin Jasnaii</Label>
                                </div>
                                <div>
                                    <Label extraClasses={'text-sm font-medium'}>Muhammad Safiq Bin Jasnaii</Label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-1 mt-4">
                            <div>
                                <Button
                                    // onClick={() => {
                                    //     navigate('../student-details')
                                    // }}
                                >Approve</Button>
                            </div>
                            <div>
                                <Button
                                    extraClasses={'border-red-800 bg-red-700 hover:shadow-red-90'}
                                    // onClick={() => {
                                    //     navigate('../student-details')
                                    // }}
                                >Reject</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white drop-shadow-md p-5 rounded-lg border w-4/12 mx-5">
                <Label>Students Details</Label>
                <div className="bg-white drop-shadow-md p-5 rounded-lg border mt-4">
                    <div className="w-full flex flex-row">
                        <div className="w-1/3">
                            <Label extraClasses={'text-sm'}>Full Name:</Label>
                        </div>
                        <div className="w-4/6">
                            <div>
                                <Label extraClasses={'text-sm font-medium'}>Muhammad Safiq Bin Jasnai</Label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                        <div className="w-1/3">
                            <Label extraClasses={'text-sm'}>Age:</Label>
                        </div>
                        <div className="w-4/6">
                            <div>
                                <Label extraClasses={'text-sm font-medium'}>14</Label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                        <div className="w-1/3">
                            <Label extraClasses={'text-sm'}>Class:</Label>
                        </div>
                        <div className="w-4/6">
                            <div>
                                <Label extraClasses={'text-sm font-medium'}>123</Label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                        <div className="w-1/3">
                            <Label extraClasses={'text-sm'}>Current Outstanding Fees (RM):</Label>
                        </div>
                        <div className="w-4/6 flex items-center">
                            <div>
                                <Label extraClasses={'text-sm font-medium'}>RM 312</Label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md p-5 rounded-lg border mt-4">
                    <div className="w-full flex flex-row">
                        <div className="w-1/3">
                            <Label extraClasses={'text-sm'}>Full Name:</Label>
                        </div>
                        <div className="w-4/6">
                            <div>
                                <Label extraClasses={'text-sm font-medium'}>Muhammad Safiq Bin Jasnai</Label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                        <div className="w-1/3">
                            <Label extraClasses={'text-sm'}>Age:</Label>
                        </div>
                        <div className="w-4/6">
                            <div>
                                <Label extraClasses={'text-sm font-medium'}>14</Label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                        <div className="w-1/3">
                            <Label extraClasses={'text-sm'}>Class:</Label>
                        </div>
                        <div className="w-4/6">
                            <div>
                                <Label extraClasses={'text-sm font-medium'}>123</Label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                        <div className="w-1/3">
                            <Label extraClasses={'text-sm'}>Current Outstanding Fees (RM):</Label>
                        </div>
                        <div className="w-4/6 flex items-center">
                            <div>
                                <Label extraClasses={'text-sm font-medium'}>RM 312</Label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ParentPage;