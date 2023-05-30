import { v4 as uuidv4 } from "uuid";

export default function Subject(props) {
    return(
        <div className="w-full my-5">
            {props.subject.map((subject) => {
                return(
                    <div className="flex justify-between p-3 my-3 rounded-lg" style={{backgroundColor: subject.bgColor}} key={uuidv4()} id={uuidv4()}>
                        <div className="flex flex-row">
                            <img src={subject.icon} alt={subject.name} className={subject.color} style={{marginRight: "0.5rem", fontSize: "1.3rem"}} />
                            <h3 className={subject.txtColor}>{subject.name}</h3>
                        </div>
                        <p className="text-gray-700">{subject.score}<span className="text-gray-400">{subject.overall}</span></p>
                    </div>
                );
            })}
        </div>
    );
}