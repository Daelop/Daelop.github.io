
export default function PageContainer({children}) {
    const Styles = {
        pageContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
        }
    }
    return(
        <div style={Styles.pageContainerStyle}>
            {children}
        </div>
    )
}