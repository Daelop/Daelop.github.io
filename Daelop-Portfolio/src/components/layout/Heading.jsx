import UseBreakpoints from "../style/UseBreakpoints" 


export default function Heading({children}) {
    const {breakpoint} = UseBreakpoints();

const Styles = {
    headingStyle: {
        borderBottom: '1px solid #ccc',
        padding: '10px',
        textAlign: 'center',
        fontSize: breakpoint === 'sm'? '1.5rem': '3rem',
        width: '80%'
    }
}
    return(
        <div style={Styles.headingStyle}>
            <h1>    
            {children}
            </h1>
        </div>
    )
}