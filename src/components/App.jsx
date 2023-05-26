export default function App() {
    return (
        <div className="flex justify-center items-center min-h-screen capitalize">
            <div className="bg-gradient-to-t from-blue-700 to-violet-600 rounded-3xl text-center text-white p-8">
                <h1 className="font-medium tracking-wider">your result</h1>
                <div className="flex justify-center">
                    <div className="rounded-full h-36 w-36 flex flex-col items-center justify-center bg-indigo-800 my-7 ">
                        <p className="text-6xl font-semibold my-1">76</p>
                        <p className="lowercase text-gray-400">of 100</p>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold">great</h2>
                <div className="">
                    <p className="w-44 text-xs my-3 tracking-wide leading-5 text-gray-300">you scored higher than 65% of the people who have taken these tests.</p>
                </div>
            </div>
            <div className="bg-white rounded-sm hidden">
                <h1>Summary</h1>
                <div>
                    <h3>reaction</h3>
                    <p>80 / 100</p>
                </div>
                <div>
                    <h3>memory</h3>
                    <p>80 / 100</p>
                </div>
                <div>
                    <h3>verbal</h3>
                    <p>80 / 100</p>
                </div>
                <div>
                    <h3>visual</h3>
                    <p>80 / 100</p>
                </div>
            </div>
        </div>
    );
}