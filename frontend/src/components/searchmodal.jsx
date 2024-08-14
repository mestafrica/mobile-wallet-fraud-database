import Navbar from '../components/Navbar'
import Jeff from '../assets/images/jeff.webp'
import { ArrowLeft, ThumbsDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const SearchModal = () => {
    return (
        <div>
            <Navbar />

            <div className='flex items-center gap-5 pl-28 pt-8'>
                <ArrowLeft className=' text-blue-900' />
                <h1 className='text-[23px] font-semibold'>Search Results</h1>
            </div>

            <div className="flex justify-center items-center min-h-screen pt-20">
                <div className='border border-gray-300 outline-none w-[40vw] h-[100vh] flex flex-col gap-5 rounded-lg p-4 bg-white shadow-lg'>
                    <div className='flex flex-col justify-center items-center pt-4'>
                        <img className='rounded-full w-[90px]' src={Jeff} alt="Nana Ofori Clement" />
                        <p className='text-black text-xl font-semibold'>Nana Ofori Clement</p>
                        <p>MTN 0556785432</p>
                        <div className='flex gap-3 mt-4'>
                            <span className='border outline-none flex justify-center items-center gap-2 bg-slate-200 w-60 rounded-md'>
                                Date Reported: <p className='font-semibold'>April 3, 2024</p>
                            </span>
                            <span className='border flex gap-2 outline-none bg-red-300 w-24 text-red-900 rounded-md'>
                                <ThumbsDown className='w-5' /> 10 votes
                            </span>
                        </div>
                    </div>
                    <h1 className='text-gray-400 text-[18px]'>Comments</h1>
                    <h2 className='text-[#4881F4] text-[18px]'>Reported by: Malik Kolade</h2>
                    <p className='text-gray-400'>With less than a month to go before European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agrrements to comply</p>

                    <h2 className='text-[#4881F4] text-[18px]'>Commented by: Malik Kolade</h2>
                    <p className='text-gray-400'>With less than a month to go before European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agrrements to comply</p>

                    <Link className='text-blue-700 text-[17px] underline underline-offset-auto  font-semibold'> 7 more comment </Link>

                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-[17px] text-red-700'>Report as incorrect</h1>
                        <h1 className='font-semibold text-[17px] text-blue-700 '>Flag number</h1>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default SearchModal 