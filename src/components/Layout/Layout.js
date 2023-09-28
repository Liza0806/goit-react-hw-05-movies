
import { NavLink, Outlet } from "react-router-dom"
import { Header, Nav, Main, Footer } from "./Layout.styled"
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
      <Outlet/></Main>
      <Footer>Footer</Footer>
      </div>
      )
}
export default Layout