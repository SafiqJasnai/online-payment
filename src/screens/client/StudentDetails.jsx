import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";

const StudentDetails = () => {

    const navigate = useNavigate();

    return (
    <section className="h-max bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 sm:p-8">
                    <div>
                        <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Maklumat Pelajar
                        </Label>
                        <p className='text-lg font-normal text-gray-500'>Pastikan maklumat pelajar tepat sebelum membuat pembayaran</p>
                    </div>
                    <div className="mt-6">
                        <Label
                            extraClasses={'text-base'}
                        >Nama: </Label>
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
                    <div className="mt-6">
                        <Label
                            extraClasses={'text-base'}
                        >Tunggakan: </Label>
                        <Label
                            extraClasses={'text-base text-slate-700 uppercase font-semibold text-red-500'}
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
                    Kembali
                </Button>
                <Button>Bayar</Button>
            </div>
        </div>
    </section>
    )
}

export default StudentDetails;