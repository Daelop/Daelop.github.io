import { useState } from "react";

export default function CheckHover() {
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }
    return {hover, handleMouseEnter, handleMouseLeave};
}