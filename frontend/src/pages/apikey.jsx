import { Plus, X } from "lucide-react";
import Button from "../components/button"

const ApiKey = () => {
    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100 shadow-md border border-gray-500 rounded">
            <div className="bg-white p-8 rounded-lg shadow-md w-[600px] ">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold text-2xl py-8">Create New API Key</h2>
                    <X className="cursor-pointer text-gray-400" />
                </div>
                <hr className="border-gray-300 w-full" />
                <form>
                    <div className="mb-4 space-y-3 py-7">
                        <label className="text-lg font-semibold mb-2">API Key Name</label>
                        <input
                            type="text"
                            id="apiKeyName"
                            placeholder="e.g MWFD integration"
                            className="w-[515px] h-14 px-4 border border-gray-400 rounded-lg bg-[#F9FAFB]"
                        />
                    </div>

                    <div className="relative pb-4 space-y-3">
                        <label className="text-lg font-semibold">Domain restriction</label>
                        <br />
                        <div className="flex items-center">
                            <input
                                type="text"
                                id="apiUrl"
                                className="w-[500px] h-14 pl-[80px] pr-4 border border-gray-400 rounded-lg bg-[#F9FAFB] relative"
                                style={{
                                    background: "linear-gradient(to right, #F9FAFB 80px, #ccc 80px, #ccc 81px, #F9FAFB 81px)",
                                }}
                            />
                            <span className="absolute left-4 text-black font-semibold">https://</span>
                            <button
                                type="button"
                                className="absolute right-0 mr-4 text-white bg-blue-600 h-14 px-4 flex items-center rounded"
                            >
                                <Plus />
                            </button>
                        </div>
                    </div>


                    <div className="relative pb-6">
                        <div className="flex gap-3 absolute py-4 px-4">
                            <div className="flex bg-white border border-gray-500 rounded-lg w-44 outline-none ">
                                <span className="pl-3  text-black font-semibold" >https://copianto.ai</span>
                                <X className="text-gray-400" />
                            </div>
                            <div className="flex bg-white border border-gray-500 rounded-lg w-40 outline-none">
                                <span className="pl-4 text-black font-semibold">https://sanwo.ai</span>
                                <X className="text-gray-400" />
                            </div>
                        </div>
                        <input type="url" name="" id="" className="w-[520px] h-14 rounded-lg bg-[#E5E5E5] py-3 " />
                    </div>

                    <hr className="border-gray-300 my-4 pb-6 w-full" />

                    <div className="h-12  rounded-lg mt-4 ">

                        <Button variant="solid" style={{
                            width: '97%', height: '100%', color: 'white', borderRadius: '0.375rem', marginTop: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',
                        }}>Create Key</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApiKey;
