import { useForm } from 'react-hook-form';

const RecoverPassword = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex flex-col bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                <h3 className="font-bold text-xl text-center mb-6">Recover password</h3>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="e.g. danjordan@gmail.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("email", { required: "Enter a valid email address!", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address!" } })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 text-white"
                        disabled={isSubmitting}>
                        Send recovery email
                    </button>
                    <div>
                        <span className="text-gray-600">Back to <a href="/login" className="text-blue-600">Login</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RecoverPassword;
