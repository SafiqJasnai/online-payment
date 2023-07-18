import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";
import ClientHeader from "../../ui-materials/header/ClientHeader";
import { Toaster } from "react-hot-toast";
import { getSessionUserName } from "../../middleware/session-utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import apiValidateToken from "../../apis/apiValidateToken";
import { toastBadNews, toastGoodNews } from "../../utils/lib-toast/HotToastUtils";

const StudentPayment = () => {

    const navigate = useNavigate();

    const validateToken = () => {
        
        apiValidateToken()
            .then((response) => {
                const data = response?.data;
                let message = '';
                if (data?.status === 200) {
                    const userName = getSessionUserName();
                    message = userName ? `Welcome ${userName}`: 'Login done';
                } else {
                    message = 'Session expired';
                    navigate('../login', { replace: true });
                }
                return toastGoodNews(message);
            })
            .catch((error) => {
                navigate('../login', { replace: true });
                let message = '';
                if (!error) {
                    message = 'Please contact support team. Errorcode-CP103.';
                }
                else if (error?.response?.data?.message) {
                    message = 'Session expired';
                }
                else if (error.response?.status === 401) {
                    message = 'User unauthorized';
                } 
                else if (error?.message || error?.code) {
                    message = `"${error?.message}" (${error?.code})`;
                } else {
                    message = error.toString(); // axios to take care
                    // msg = JSON.stringify(error).toString(); // if non-axios parsing
                }
                return toastBadNews(message);
            });
    }
    
    useEffect(()=> {
        validateToken();
    });

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
            <Toaster />
        </div>
    </section>
    </>)
}

export default StudentPayment;