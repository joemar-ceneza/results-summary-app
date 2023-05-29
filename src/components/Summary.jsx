import BoltIcon from '@mui/icons-material/Bolt';
import MemoryIcon from '@mui/icons-material/Memory';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Summary() {
    return (
        <div className="w-6/12 text-sm rounded-sm p-8 max-sm:w-full">
            <h1 className="text-gray-700 text-base">Summary</h1>
            <div className="w-full my-5">
                <div className="flex justify-between bg-red-100 p-3 my-3 rounded-lg">
                    <div className="flex flex-row">
                        <BoltIcon style={{color: "#F87171", marginRight: "0.5rem", fontSize: "1.3rem"}}/>
                        <h3 className="text-red-400">reaction</h3>
                    </div>
                    <p className="text-gray-700">80<span className="text-gray-400"> / 100</span></p>
                </div>
                <div className="flex justify-between bg-yellow-100 p-3 my-3 rounded-lg">
                    <div className="flex flex-row">
                        <MemoryIcon style={{color: "#FBBF24", marginRight: "0.5rem", fontSize: "1.3rem"}}/>
                        <h3 className="text-yellow-400">memory</h3>
                    </div>
                    <p className="text-gray-700">92<span className="text-gray-400"> / 100</span></p>
                </div>
                <div className="flex justify-between bg-green-100 p-3 my-3 rounded-lg">
                    <div className="flex flex-row">
                        <RecordVoiceOverIcon style={{color: "#34D399", marginRight: "0.5rem", fontSize: "1.3rem"}}/>
                        <h3 className="text-green-400">verbal</h3>
                    </div>
                    <p className="text-gray-700">61<span className="text-gray-400"> / 100</span></p>
                </div>
                <div className="flex justify-between bg-violet-100 p-3 my-3 rounded-lg">
                    <div className="flex flex-row">
                        <VisibilityIcon style={{color: "#818CF8", marginRight: "0.5rem", fontSize: "1.3rem"}}/>
                        <h3 className="text-violet-400">visual</h3>
                    </div>
                    <p className="text-gray-700">72<span className="text-gray-400"> / 100</span></p>
                </div>
            </div>
            <button className="w-full bg-gray-700 rounded-full text-xs tracking-wider text-white capitalize py-3 hover:bg-gradient-to-t from-blue-700 to-violet-600">continue</button>
        </div>
    );
}