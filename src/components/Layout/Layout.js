
import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Header, Nav, Main, Footer } from "./Layout.styled"
import { LoadingSpinner } from "Helpers/Helpers"

const Layout = () => {
     return ( 
     <div>
        <Header>
     <Nav>
        <ul>
          <li>
        <NavLink to="/" activeclassname="active">Home</NavLink>
        </li>
        <li>
        <NavLink to="/movies"  activeclassname="active-movies">Movies (keyWord)</NavLink>
        </li>
        </ul>
      </Nav></Header>
      <Main>
        <Suspense fallback = {<div>  
         <LoadingSpinner/></div>}>
      <Outlet/>
      </Suspense>
      </Main>
      <Footer>Footer</Footer>
      </div>
      )
}
export default Layout