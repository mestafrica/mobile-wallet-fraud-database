import React, { useState } from 'react';
import { CodeXml, FileCode, DatabaseIcon } from 'lucide-react';
import SearchInput from "../components/searchInput";
import ApiCard from '../components/apiCard';
import Navbar from '../components/Navbar';
import ReportedCard from '../components/reportedCard';
import DocumentCard from '../components/documentCard';
import Button from "../components/button";

const Home = () => {
    
    const [visibleCard, setVisibleCard] = useState('API-keys');
    const handleLinkClick = (cardId) => {
        setVisibleCard(cardId);
    };

    return (
        <div>
            <Navbar />

            <h1 className='text-center justify-normal text-3xl font-semibold mt-6 '>Real-time database to curb <br /> mobile money fraud.</h1>

            <div className='flex justify-center mt-9 '>
                <div className='w-full max-w-md'>
                    <SearchInput />
                </div>
                <a href="/search">
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-2.5 ml-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Search
                </button>
                </a>
            </div>

            <div className='mt-5'>
                <header className='flex justify-center items-center  '>

                    <div className="relative top-14 transform -translate-y-1/2 w-[53.5vw] border-t border-gray-300 "></div>

                    <div className='absolute flex justify-center items-center gap-10 top-[287px] '>

                        <div onClick={() => handleLinkClick('API-keys')} className="cursor-pointer  flex flex-col items-center gap-4 py-3 group  z-10">
                            <span className='flex gap-2 text-gray-500'><CodeXml /> API Keys</span>
                            <span className='h-0.5 rounded-full w-60 bg-transparent transition-all group-hover:w-60 group-hover:bg-blue-500 group-focus-visible:bg-slate-200'></span>
                        </div>

                        <div onClick={() => handleLinkClick('Reported')} className="cursor-pointer flex flex-col items-center gap-4 py-3 group relative z-10">
                            <span className='flex gap-2 text-gray-500'><DatabaseIcon /> Reported Numbers</span>
                            <span className='h-0.5 rounded-full w-64  bg-transparent transition-all group-hover:w-64 group-hover:bg-blue-500 group-focus-visible:bg-slate-200'></span>
                        </div>

                        <div onClick={() => handleLinkClick('Documentation')} className="cursor-pointer flex flex-col items-center gap-4 py-3 group relative z-10">
                            <span className='flex gap-2 text-gray-500'><FileCode /> Documentation</span>
                            <span className='h-0.5 rounded-full w-60  bg-transparent transition-all group-hover:w-60 group-hover:bg-blue-500 group-focus-visible:bg-slate-200'></span>
                        </div>
                    </div>


                </header>
            </div>






            <main>
                {visibleCard === 'API-keys' && (
                    <div id='API keys' className='pt-28'>
                        <ApiCard />
                    </div>
                )}

                {visibleCard === 'Reported' && (
                    <div id='Reported' className='pt-28'>
                        <ReportedCard />
                    </div>
                )}

                {visibleCard === 'Documentation' && (
                    <div id='Documentation' className='pt-28'>
                        <DocumentCard />
                    </div>
                )}
            </main>
        </div>
    );
}

export default Home;
