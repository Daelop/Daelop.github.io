import {Header, HeaderNav, HeaderLogo, HeaderNavItem} from './components/layout/Header'
import {Card, CardHeader, CardBody, CardFooter, CardImage} from './components/layout/card/Card'
import Heading from './components/layout/Heading'
import CardsContainer from './components/layout/card/CardsContainer'
import PageContainer from './components/layout/PageContainer'
import './App.css'

function App() {
  

  return (
    <>
    
    <Header>
      <HeaderNav>
        <HeaderNavItem href={'#home'}>Home</HeaderNavItem>
        <HeaderNavItem href={'#about'}>About</HeaderNavItem>
        <HeaderNavItem href={'#projects'}>Projects</HeaderNavItem>
        <HeaderNavItem href={'#contact'}>Contact</HeaderNavItem>
      </HeaderNav>
      <HeaderLogo src="DaeLogo.png" alt="logo" />
    </Header>
    <a id='home'></a>
    <PageContainer> 
    <a id='about'></a>
      <Heading>About Me</Heading>
      <p>I am Software Engineer/Web Developer currently looking for work in the Auckland area or remotely. Below, you can see some of the skills I have developed so far as a developer. I am, however, always aiming to broaden my skill set and develop my current skills further.</p>
    <CardsContainer>
      <Card>
        <CardHeader>Frontend</CardHeader>
        <CardBody>HTML, CSS, JavaScript, React, Next.js, Bootstrap, Material-UI</CardBody>
        <CardFooter>Experience: 6 months</CardFooter>
      </Card>
      <Card>
        <CardHeader>Backend</CardHeader>
        <CardBody>Node.js, Express, MongoDB, RESTful APIs</CardBody>
        <CardFooter>Experience: 6 months</CardFooter>
      </Card>
      <Card>
        <CardHeader>Other</CardHeader>
        <CardBody>Git, GitHub, Docker</CardBody>
        <CardFooter>Experience: 6 months</CardFooter>
      </Card>
    </CardsContainer>
    <a id='projects'></a>
    <Heading>Projects</Heading>
    <p>Here are some of the projects I have worked on.</p>
    <CardsContainer>
      <Card>
        <CardHeader>Party Finder</CardHeader>
        <CardBody>Party Finder is a web platform for finding, creating and managing community gaming events.</CardBody>
        <CardFooter><ul><li><a href='https://github.com/Daelop/Party-Finder-2.0'>GitHub Repository</a></li></ul></CardFooter>
      </Card>
    </CardsContainer>
    </PageContainer>
    </>
  )
}

export default App
