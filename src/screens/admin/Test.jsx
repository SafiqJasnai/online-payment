import SideNav from "../../ui-materials/sidenav/SideNav";
// import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";

const Test = () => {

    // const navigate = useNavigate();

    const tableDetails = [
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
        {
            nama: 'Vin Bin Diesel',
            tunggakan: 'RM313.00'
        },
    ];


    return (<div>  
        <SideNav />
        <div className="pt-5 !pl-[200px]">
            <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Student
            </Label>
            <div className="flex flex-row items-center space-x-2">
                <div className="relative my-4 w-96">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="uppercase block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Nama penuh pelajar" required />
                </div>
                <div className="items-center justify-center">
                    <Button
                        // onClick={() => {
                        //     navigate('../student-details')
                        // }}
                    >Search</Button>
                </div>
            </div>
        </div>
        <div className="p-5 !pl-[200px] text-center grid grid-cols-3 gap-3 max-h-80" id="content">
            <div className="bg-white drop-shadow-md p-3 rounded-lg border">
                <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Student List
                </Label>
                <table class="w-full text-sm text-left text-gray-500 shadow-md mt-4">
                    <thead class="flex w-full text-xs text-gray-700 uppercase bg-gray-100">
                        <tr class="flex w-full">
                        <th scope="col" class="px-6 py-4">
                            Nama Pelajar
                        </th>
                        <th scope="col" class="px-6 py-4">
                            Tunggakan
                        </th>
                        </tr>
                    </thead>
                    <tbody class="flex flex-col items-center justify-between overflow-y-scroll w-full" style={{'height': '50vh'}}>
                        {tableDetails.map((student, i) => (
                            <tr class="flex w-full bg-white border-b hover:bg-gray-50 hover:cursor-pointer" key={i}>
                            <td class="px-6 py-4 uppercase">
                                {student.nama}
                            </td>
                            <td class="px-6 py-4">
                                {student.tunggakan}
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-white drop-shadow-md p-5 rounded-lg border"></div>
            <div className="bg-white drop-shadow-md p-5 rounded-lg border"></div>
        </div>
    </div>)
}

export default Test;