import Button from "../../ui-materials/buttons/Button";
import AdminHeader from "../../ui-materials/header/AdminHeader";
import SVGDelete from "../../ui-materials/svg/SVGDelete";
import SVGEdit from "../../ui-materials/svg/SVGEdit";

const StudentTable = () => {

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
    ]

    return (<>
        <AdminHeader />
    <section className="h-max bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-screen xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 sm:p-8 overflow-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nama Pelajar
                </th>
                <th scope="col" class="px-6 py-3">
                    Tunggakan
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {tableDetails.map((student, i) => (
            <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                <td class="px-6 py-4 uppercase">
                    {student.nama}
                </td>
                <td class="px-6 py-4">
                    {student.tunggakan}
                </td>
                <td class="px-6 py-4">
                    <div className="space-y-2">
                        <Button extraClasses={'flex-col items-center justify-center ml-2 w-16 '}><SVGEdit /></Button>
                        <Button 
                            extraClasses={' flex-col items-center justify-center ml-2 border-red-500 bg-red-500 hover:shadow-red-900 w-16'}
                        >
                            <SVGDelete />
                        </Button>
                    </div>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
                </div>
            </div>
            <div className="mt-6 space-x-4">
                <Button>Add new student</Button>
            </div>
        </div>
    </section>
    </>)
}

export default StudentTable;