export default function Result() {
    return (
        <div className="w-6/12 bg-gradient-to-t from-blue-700 to-violet-600 rounded-3xl text-center text-white p-8 max-sm:w-full">
            <h1 className="font-medium text-gray-300 tracking-wider">your result</h1>
            <div className="flex justify-center">
                <div className="bg-indigo-700 rounded-full h-36 w-36 flex justify-center flex-col items-center my-5 ">
                    <p className="font-semibold text-5xl my-1">76</p>
                    <p className="text-gray-400 lowercase">of 100</p>
                </div>
            </div>
            <h2 className="font-semibold text-2xl ">great</h2>
            <p className="text-xs tracking-wider leading-5 text-gray-300 normal-case my-3 px-4">
                You scored higher than 65% of the people who have taken these tests.
            </p>
        </div>
    );
}