
import Subject from "./Subject";
import data from "../data/data";
import { useState } from "react";

export default function Summary() {
    // eslint-disable-next-line
    const [subjects, setSubject] = useState(data);
    return (
        <div className="w-6/12 text-sm rounded-sm p-8 max-sm:w-full">
            <h1 className="text-gray-700 text-base">Summary</h1>
            <Subject 
                subject = {subjects}
            />
            <button className="w-full bg-gray-700 rounded-full text-xs tracking-wider text-white capitalize py-3 hover:bg-gradient-to-t from-blue-700 to-violet-600">continue</button>
        </div>
    );
}