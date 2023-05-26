import BoltIcon from '@mui/icons-material/Bolt';
import MemoryIcon from '@mui/icons-material/Memory';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function App() {
    return (
        <div className="flex justify-center items-center min-h-screen font-bodyFont capitalize">
            <div className="flex max-sm:flex-col max-w-xl max-sm:max-w-xs bg-white rounded-3xl shadow-2xl">
                <div className="w-6/12 max-sm:w-full bg-gradient-to-t from-blue-700 to-violet-600 rounded-3xl text-center text-white p-8">
                    <h1 className="font-medium text-gray-300 tracking-wider">your result</h1>
                    <div className="flex justify-center">
                        <div className="bg-indigo-700 rounded-full h-36 w-36 flex justify-center flex-col items-center my-5 ">
                            <p className="font-semibold text-5xl my-1">76</p>
                            <p className="text-gray-400 lowercase">of 100</p>
                        </div>
                    </div>
                    <h2 className="font-semibold text-2xl ">great</h2>
                    <p className="text-xs tracking-wider leading-5 text-gray-300 normal-case my-3 px-4">You scored higher than 65% of the people who have taken these tests.</p>
                </div>
                <div className="w-6/12 max-sm:w-full text-sm rounded-sm p-8">
                    <h1 className="text-gray-700 text-base">Summary</h1>
                    <div className="w-full my-5">
                        <div className="flex justify-between bg-red-100 p-3 my-3 rounded-lg ">
                            <div className="flex flex-row">
                                <BoltIcon style={{color: "#F87171", marginRight: "0.5rem", fontSize: "1.3rem"}}/>
                                <h3 className="text-red-400">reaction</h3>
                            </div>
                            <p className="text-gray-700">80 <span className="text-gray-400">/ 100</span></p>
                        </div>
                        <div className="flex justify-between bg-yellow-100 p-3 my-3 rounded-lg">
                            <div className="flex flex-row">
                                <MemoryIcon style={{color: "#FBBF24", marginRight: "0.5rem", fontSize: "1.3rem"}}/>
                                <h3 className="text-yellow-400">memory</h3>
                            </div>
                            <p className="text-gray-700">92 <span className="text-gray-400">/ 100</span></p>
                        </div>
                        <div className="flex justify-between bg-green-100 p-3 my-3 rounded-lg">
                            <div className="flex flex-row">
                                <RecordVoiceOverIcon style={{color: "#34D399", marginRight: "0.5rem", fontSize: "1.3rem"}}/>
                                <h3 className="text-green-400">verbal</h3>
                            </div>
                            <p className="text-gray-700">61 <span className="text-gray-400">/ 100</span></p>
                        </div>
                        <div className="flex justify-between bg-violet-100 p-3 my-3 rounded-lg">
                            <div className="flex flex-row">
                                <VisibilityIcon style={{color: "#818CF8", marginRight: "0.5rem", fontSize: "1.3rem"}}/>
                                <h3 className="text-violet-400">visual</h3>
                            </div>
                            <p className="text-gray-700">72 <span className="text-gray-400">/ 100</span></p>
                        </div>
                    </div>
                    <button className="w-full bg-gray-700 rounded-full text-xs tracking-wider text-white capitalize py-3 hover:bg-gradient-to-t from-blue-700 to-violet-600">continue</button>
                </div>
            </div>
        </div>
    );
}