import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Button from '../components/button'
import PasswordInput from '../components/passwordInput'

const AccountPage = () => {
    return (
        <div >
            <Navbar />

            <div className='flex items-center gap-2 pl-36 pt-8'>
                <a href="/"><ArrowLeft className='w-14 text-blue-900' /></a>
                <h1 className='text-[23px] font-bold'>My account</h1>
            </div>



            <form className='flex flex-col pl-40 gap-20 pt-10'>

                <div className="flex gap-6">

                    <div className='flex flex-col gap-x-3 gap-y-4'>

                        <div className="flex flex-col gap-3">
                            <label className='font-semibold text-[#2A313E]'>First name</label>
                            <input
                                type="text"
                                id="firstname"
                                placeholder="First name"
                                className="w-80 flex flex-col px-4 py-2 border-2 border-gray-400 text-gray-600 rounded-lg outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className='font-semibold text-[#2A313E]' >Email address</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Email address"
                                className="w-80 flex flex-col px-4 py-2 border-2 border-gray-400 text-gray-600 rounded-lg outline-none"
                            />
                        </div>

                        <div className="">
                            <Button variant="solid" >
                                Update details
                            </Button>
                        </div>

                    </div>



                    <div className='flex flex-col gap-x-3 gap-y-4' >

                        <div className="flex flex-col gap-3">
                            <label className='font-semibold text-[#2A313E]'>Last name</label>
                            <input
                                type="text"
                                id="lastname"
                                placeholder="Last name"
                                className="w-80 flex flex-col px-4 py-2 border-2 border-gray-400 text-gray-600 rounded-lg outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className='font-semibold text-[#2A313E]'>Phone number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Phone number"
                                className="w-80 flex flex-col px-4 py-2 border-2 border-gray-400 text-gray-600 rounded-lg outline-none"
                            />
                        </div>

                    </div>

                </div>

                <div className='flex gap-6'>

                    <div className='flex flex-col gap-x-3 gap-y-4'>

                        <div className='w-80 flex flex-col gap-3'>
                            <label className='font-semibold text-[#2A313E]'>Old Password</label>
                            <PasswordInput />
                        </div>

                        <div className="">
                            <Button variant="solid">
                                Change Password
                            </Button>
                        </div>
                    </div>


                    <div className='w-80 flex flex-col gap-3'>
                        <label className='font-semibold text-[#2A313E]'>New Password</label>
                        <PasswordInput />
                    </div>


                </div>




            </form>

        </div>
    )
}

export default AccountPage