import { useNavigate } from "react-router-dom";
import Button from "../../ui-materials/buttons/Button";
import Label from "../../ui-materials/label/Label";

const Login = () => {

    const navigate = useNavigate();

    return (
    <section className="h-max bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center">
                        <Label className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome
                        </Label>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Button 
                            text={'Login as Admin'}
                            extraClasses={'w-60'}
                            onClick={() => {
                                navigate('/student-table')
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Button 
                            text={'Login as Client'}
                            extraClasses={'w-60'} 
                            onClick={() => {
                                navigate('/search-name')
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login;