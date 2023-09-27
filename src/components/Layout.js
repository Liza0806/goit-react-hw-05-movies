
import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
     return ( 
     <div>
        <header>
     <nav>
        <ul>
          <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/movies">Movies (keyWord)</NavLink>
        </li>
        </ul>
      </nav></header>
      <main>
      <Outlet/></main>
      <footer>Footer</footer>
      </div>
      )
}
export default Layout