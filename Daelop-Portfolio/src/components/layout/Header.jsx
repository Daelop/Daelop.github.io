import CheckHover from "../style/CheckHover"
import UseBreakpoints from "../style/UseBreakpoints" 


export function Header({children}) {
    const {breakpoint} = UseBreakpoints();
    const Styles = {
    headerStyle: {
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        height: breakpoint === 'sm'? '60px': '110px',
        top: '0',
        position: 'sticky',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        margin: '0',
    },}
    return(
        <header style={Styles.headerStyle}>
            {children}
        </header>
    )
}
export function HeaderNav({children}) {
    const Styles = {
        navStyle: {
            display: 'flex',
            justifyContent: 'center',
        }
    }
    return(
        <nav style={Styles.navStyle}>
            {children}
        </nav>
    )
}
export function HeaderNavItem({children, href}) {
   const {breakpoint} = UseBreakpoints();
   const {hover, handleMouseEnter, handleMouseLeave} = CheckHover();
    const Styles = {
        navItemStyle: {
            display: 'flex',
            alignItems: 'center',
            margin: '0 10px',
            padding: '5px',
        },
        navItemLinkStyle: {
                color: 'black',
                cursor: 'pointer',
                textDecoration: hover? 'underline': 'none',
                scale: breakpoint === 'sm'? 1: 1.5,
        }
    }
    return(
        <div style={Styles.navItemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a style={Styles.navItemLinkStyle} href={href}>{children}</a>
        </div>
    )

}

export function HeaderLogo({src, alt}) {
    const {breakpoint} = UseBreakpoints();
    const Styles = {
        logoStyle: {
            width: breakpoint === 'sm'? '50px': '100px',
            height: 'auto'
        }
    }
    
    return(
        <div >
            <img style={Styles.logoStyle} src={src} alt={alt} />
        </div>
    )
}