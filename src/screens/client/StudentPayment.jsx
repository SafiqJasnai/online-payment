// import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";
import ClientHeader from "../../ui-materials/header/ClientHeader";

const StudentPayment = () => {

    // const navigate = useNavigate();

    return (<>
    <ClientHeader/>
    <section className="my-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mb-6">
                <div className="p-6 sm:p-8">
                    <div>
                        <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Maklumat Pelajar
                        </Label>
                        <p className='text-base font-normal text-gray-500'>Pastikan maklumat pelajar tepat sebelum membuat pembayaran</p>
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
                    <div className="my-6">
                        <Label
                            extraClasses={'text-base'}
                        >Tunggakan: </Label>
                        <Label
                            extraClasses={'text-base uppercase font-semibold text-red-500'}
                        >-RM313.00</Label>
                    </div>
                    <Button>Bayar</Button>
                </div>
            </div>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 sm:p-8">
                    <div>
                        <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Maklumat Pelajar
                        </Label>
                        <p className='text-base font-normal text-gray-500'>Pastikan maklumat pelajar tepat sebelum membuat pembayaran</p>
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
                    <div className="my-6">
                        <Label
                            extraClasses={'text-base'}
                        >Tunggakan: </Label>
                        <Label
                            extraClasses={'text-base uppercase font-semibold text-red-500'}
                        >-RM313.00</Label>
                    </div>
                    <Button>Bayar</Button>
                </div>
            </div>
        </div>
    </section>
    </>)
}

export default StudentPayment;