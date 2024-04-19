import { useEffect,useState } from "react";
import CheckMediaSize from "./CheckMediaSize";

export default function UseBreakpoints() {
    const [breakpoint, setBreakpoint] = useState('sm');
    const width = CheckMediaSize();

    useEffect(() => {
        if(width > 1200) {
            setBreakpoint('xl');
        } else if(width > 992) {
            setBreakpoint('lg');
        } else if(width > 768) {
            setBreakpoint('md');
        } else {
            setBreakpoint('sm');
        }
    }, [width]);

    return {breakpoint};
}