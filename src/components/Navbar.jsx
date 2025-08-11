import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import marco_logo from "../assets/marco-logo-no-bg.png";
import { useNavigate } from "react-router-dom"; 


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); 


  // Define all navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Project01 HTML and CSS", path: "https://ramosmarco95.github.io/html-css-projects/" },
    { name: "Project02 Vue Framework", path: "https://ramosmarco95.github.io/swdv143vueproject2/", external: true },
    { name: "Project03 React Framework", path: "https://ramosmarco95.github.io/swdv143reactproject3/", external: true },
    { name: "Project04 Angular Framework", path: "https://ramosmarco95.github.io/swdv143angularproject4/", external: true },
    { name: "Sign In", path: "/login" },
    { name: "Contact Form", path: "/contact" },
    { name: "404", path: "/404" }
  ];
  // Filter items based on search input
  const filteredNavItems = navItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/"><img src={marco_logo} style={{ height: "40px", borderRadius: "25%", backgroundColor: "beige" }} alt="logo"/></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="experience">Experience</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </Link>
            <ul className="dropdown-menu">
             
              <li><Link className="dropdown-item" to="/">Project01 HTML and CSS</Link></li>
              <li><Link className="dropdown-item" to="https://ramosmarco95.github.io/swdv143vueproject2/" target="-blank">Project02 Vue Framework</Link></li>
              <li><Link className="dropdown-item" to="https://ramosmarco95.github.io/swdv143reactproject3/" target="-blank">Project03 React Framework</Link></li>
              <li><Link className="dropdown-item" to="https://ramosmarco95.github.io/swdv143angularproject4/" target="-blank">Project04 Angular Framework</Link></li>
              <li><hr className="dropdown-divider"></hr></li>
             
            </ul>
          </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/login">Sign In</Link></li>
                <li><Link className="dropdown-item" to="/contact">Contact Form</Link></li>
                <li><Link className="dropdown-item" to="/404">404</Link></li>
                <li><hr className="dropdown-divider"></hr></li>
               
              </ul>
            </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              const firstMatch = filteredNavItems.find(item => !item.external);
              if (firstMatch) {
                navigate(firstMatch.path);
              } else {
                alert("No matching page found.");
              }
            }}>
            Search
          </button>

        </form>
      </div>
    </div>
  </nav>
    <Outlet />
  </>
  )
}


export default Navbar