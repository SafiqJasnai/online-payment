import React from "react";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

const ClientHeader = () => {

    const navigate = useNavigate();

    return(<header>
        <nav
          className={`relative h-14 flex w-full items-center justify-between bg-slate-600 py-2 text-white shadow-lg 
          focus:text-neutral-700 md:flex-wrap 
          md:justify-start`}
          data-te-navbar-ref>
            <div className="overflow-auto">
                <a className="mx-4 hover:font-bold" href="/">Home</a>
                <a className="mx-4 hover:font-bold" href="/#/student-payment">Pembayaran</a>
                {/* <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a>
                <a className="mx-2" href="/">Home</a> */}

            </div>
            <div className="ml-auto mr-4">
                <Button 
                    extraClasses={'border-slate-500 bg-slate-500 hover:shadow-slate-400'}
                    onClick={() => 
                        navigate('../', { replace: false })
                    }
                >
                    Log Out
                </Button>
            </div>
        </nav>
    </header>
    )
}

export default ClientHeader;