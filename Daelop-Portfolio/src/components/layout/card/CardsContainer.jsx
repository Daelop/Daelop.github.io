

const Styles = {
    cardsContainerStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '20px',
    }

}

export default function CardsContainer({children}) {
    return(
        <div style={Styles.cardsContainerStyle}>
            {children}
        </div>
    )
}