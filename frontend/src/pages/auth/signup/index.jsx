import { useForm } from 'react-hook-form';
import PasswordInput from '../../../components/passwordInput';
import PhoneInput from '../../../components/phoneInput';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col bg-white w-3/4 md:w-1/3 lg:w-1/4 p-8 rounded-lg shadow-md">
                <h3 className='font-bold text-xl text-center mb-4'>Sign up</h3>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First name</label>
                            <input
                                type="text"
                                id="firstname"
                                placeholder="e.g. Dan"
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                {...register("firstname", { required: "Enter your firstname!" })}
                            />
                            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last name</label>
                            <input
                                type="text"
                                id="lastname"
                                placeholder="e.g. Jordan"
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                {...register("lastname", { required: "Enter your lastname!" })}/>
                            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="e.g. danjordan@gmail.com"
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            {...register("email", { required: "Enter a valid email address!" })}/>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                        <PhoneInput id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <PasswordInput id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <button
                        type="submit"
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 text-white'
                        disabled={isSubmitting}
                    >
                        Sign up
                    </button>
                    <div>
                        <span className="text-gray-600">Already have an account? <a href="/login" className="text-blue-600">Login</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
