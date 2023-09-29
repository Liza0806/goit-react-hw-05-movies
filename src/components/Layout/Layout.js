
import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Header, Nav, Main, Footer } from "./Layout.styled"
import { ColorRing } from  'react-loader-spinner'

const Layout = () => {
     return ( 
     <div>
        <Header>
     <Nav>
        <ul>
          <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/movies">Movies (keyWord)</NavLink>
        </li>
        </ul>
      </Nav></Header>
      <Main>
        <Suspense fallback = {<div>  
          <ColorRing
        visible={true}
        height="180"
        width="180"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      /></div>}>
      <Outlet/>
      </Suspense>
      </Main>
      <Footer>Footer</Footer>
      </div>
      )
}
export default Layout