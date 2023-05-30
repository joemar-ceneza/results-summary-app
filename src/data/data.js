import { v4 as uuidv4 } from "uuid";
import ReactionImage from "../images/icon-reaction.svg";
import MemoryImage from "../images/icon-memory.svg";
import VerbalImage from "../images/icon-verbal.svg";
import VisualImage from "../images/icon-visual.svg";

const data = [
    {
        id: uuidv4(),
        bgColor: "#FEE2E2",
        txtColor: "text-red-400",
        color: "#F87171",
        icon: ReactionImage,
        name: "reaction",
        score: "80",
        overall: " / 100",
    },
    {
        id: uuidv4(),
        bgColor: "#FEF3C7",
        txtColor: "text-yellow-400",
        color: "#FBBF24",
        icon: MemoryImage,
        name: "memory",
        score: "92",
        overall: " / 100",
    },
    {
        id: uuidv4(),
        bgColor: "#D1FAE5",
        txtColor: "text-green-400",
        color: "#34D399",
        icon: VerbalImage,
        name: "verbal",
        score: "61",
        overall: " / 100",
    },
    {
        id: uuidv4(),
        bgColor: "#DBEAFE",
        txtColor: "text-blue-400",
        color: "#60A5FA",
        icon: VisualImage,
        name: "visual",
        score: "72",
        overall: " / 100",
    },
];

export default data;