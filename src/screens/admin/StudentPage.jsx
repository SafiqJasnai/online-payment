import SideNav from "../../ui-materials/sidenav/SideNav";
// import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";

const StudentPage = () => {

    // const navigate = useNavigate();

    const tableDetails = [
        {
            nama: 'Muhammad Safiq Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
    ];


    return (<div>  
        <SideNav />
        <div className="pt-5 !pl-[200px] max-h-screen max-w-screen justify-between flex">
            <div className="bg-white drop-shadow-md p-5 rounded-lg border w-8/12 max-h-content">
                <Label extraClasses={'text-xl'}>Students</Label>
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
                                    Current Outstanding Fees (RM)
                                </th>
                                </tr>
                            </thead>
                            <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full" style={{'height': '61vh'}}>
                                {tableDetails.map((student, i) => (
                                    <tr className="flex w-full bg-white border-b hover:bg-gray-50 hover:cursor-pointer items-center text-center justify-center " key={i}>
                                    <td className="pl-4 w-1/2 py-4 uppercase">
                                        {student.nama}
                                    </td>
                                    <td className="px-2 w-1/2 py-4">
                                        {student.tunggakan}
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white drop-shadow-md p-5 rounded-lg border">
                        <Label>Student Details</Label>
                        <div className="relative z-0 w-full mb-6 group mt-3">
                            <input type="text" name="studentFullName" id="studentFullName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="studentFullName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group mt-3">
                            <input type="text" name="parentFullName" id="parentFullName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="parentFullName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Parent Full Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group mt-3">
                            <input type="text" name="studentAge" id="studentAge" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="studentAge" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group mt-3">
                            <input type="text" name="studentClass" id="studentClass" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="studentClass" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group mt-3">
                            <input type="text" name="currentFees" id="currentFees" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="currentFees" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Outstanding Fees (RM)</label>
                        </div>
                        <div className="flex flex-row space-x-1">
                            <div>
                                <Button
                                    // onClick={() => {
                                    //     navigate('../student-details')
                                    // }}
                                >Update</Button>
                            </div>
                            <div>
                                <Button
                                    extraClasses={'border-red-800 bg-red-700 hover:shadow-red-90'}
                                    // onClick={() => {
                                    //     navigate('../student-details')
                                    // }}
                                >Delete</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white drop-shadow-md p-5 rounded-lg border w-4/12 mx-5">
                <div className="bg-white">
                    <Label>Add new student</Label>
                    <div className="pt-1">
                        <Label extraClasses={'text-gray-500 text-sm'}>( Submit by form or</Label>
                        <Button
                        extraClasses={'ml-2'}
                            // onClick={() => {
                            //     navigate('../student-details')
                            // }}
                        >Upload .CSV File</Button>
                        <Label extraClasses={'ml-2 text-gray-500 text-sm'}>)</Label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="text" name="studentFullName" id="studentFullName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="studentFullName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="text" name="parentFullName" id="parentFullName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="parentFullName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Parent Full Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="text" name="studentAge" id="studentAge" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="studentAge" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="text" name="studentClass" id="studentClass" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="studentClass" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group mt-3">
                        <input type="text" name="currentFees" id="currentFees" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="currentFees" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Outstanding Fees (RM)</label>
                    </div>
                    <Button
                        // onClick={() => {
                        //     navigate('../student-details')
                        // }}
                    >Add new student</Button>
                </div>
            </div>
        </div>
    </div>)
}

export default StudentPage;