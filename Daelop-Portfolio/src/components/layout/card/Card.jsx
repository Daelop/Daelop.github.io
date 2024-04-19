import UseBreakpoints from "../../style/UseBreakpoints" 

const Styles = {

    cardHeaderStyle: {
        borderBottom: '1px solid #ccc',
        padding: '10px',
        textAlign: 'center',
    },
    cardBodyStyle: {
        padding: '10px',
    },
    cardFooterStyle: {
        borderTop: '1px solid #ccc',
        padding: '10px',
        textAlign: 'center',
    },
    cardImageStyle: {
        width: '80%',
        height: 'auto',
    }

}

export function Card({children}) {
    const {breakpoint} = UseBreakpoints();
    const Styles = {
        cardStyle: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            margin: '20px',
            padding: '10px',
            width: breakpoint === 'sm'? '150px': '300px',
            height: 'auto'
        },}

    return(
        <div style={Styles.cardStyle}>
            {children}
        </div>
    )
}

export function CardHeader({children}) {

    return(
        <div style={Styles.cardHeaderStyle}>
            <h3>{children}</h3>
        </div>
    )
}

export function CardBody({children}) {
    
        return(
            <div style={Styles.cardBodyStyle}>
                <p>
                 {children}   
                </p>
            </div>
        )
    }
export function CardFooter({children}) {
    
        return(
            <div style={Styles.cardFooterStyle}>
                {children}
            </div>
        )
    }
export function CardImage({src, alt}) {
        
            return(
                <div style={Styles.cardImageStyle}>
                    <img src={src} alt={alt} />
                </div>
            )
}
