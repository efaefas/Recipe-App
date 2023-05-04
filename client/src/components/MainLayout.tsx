import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom'
import { URLEnum } from '../RouterEnum'
// import { getUserActiveRole } from '../util'

import './MainLayout.css';

function MainLayout(item: { token?: string, username?: string, component: JSX.Element }) {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const navigate = useNavigate()
    const fncLogOut = () => {
        // localStorage.removeItem('token')
        // sessionStorage.removeItem('token')
        // localStorage.removeItem('username')
        navigate(URLEnum.HOME)
    }

    const navigateToDashboard = () => {
        // const role = getUserActiveRole()
        // console.log('role:::', role)
        // if (role == null)
        //   return URLEnum.LOGIN

        // switch (role) {
        //   case 'FARS_ADMIN':
        //     return URLEnum.DASHBOARD
        //   case 'FARS_DISTIBUTION_STAFF':
        //     return URLEnum.DASHBOARD
        //   case 'FARS_COLLECTION_STAFF':
        //     return URLEnum.DASHBOARD
        //   default:
        //     return URLEnum.LOGIN
        // }
        return URLEnum.HOME;
    }

    const handleWindowResize = () => {
        setIsSidebarExpanded(window.innerWidth >= 768);
    };

    useEffect(() => {
        // Add window resize event listener
        window.addEventListener("resize", handleWindowResize);

        // Initialize sidebar state based on window width
        setIsSidebarExpanded(window.innerWidth >= 768);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const fncSideBarToggle = () => {
        setIsSidebarExpanded((prevState) => !prevState);
    };

    const sidebarClass = isSidebarExpanded
        ? "sidebar-expanded"
        : "sidebar-collapsed";


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed-size">
                <div className="container-fluid">

                    <button className="btn btn-sm btn-outline-secondary d-block d-md-none ml-auto mb-2" onClick={fncSideBarToggle}>
                        <span className="fas fa-bars"></span>
                    </button>

                    <div className="d-flex align-items-center">
                        <NavLink className="navbar-brand" to={URLEnum.DASHBOARD}>Fars</NavLink>

                        <a className="nav-link" href={URLEnum.BASE}>Welcome Page</a>
                    </div>

                    <div className="d-flex align-items-center">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    User
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="logout">Logout</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>


            <div className="big_wrapper">
                <div className="wrapper">
                    {/* <div className="collapse sidebar-collapse d-md-block" id="sidebarSupportedContent"> */}
                    <div className={`sidebar ${sidebarClass}`} id="sidebarSupportedContent">
                        <Nav className="flex-column" id="sidebar">
                            <Nav.Item>
                                <NavLink className="nav-link" to={URLEnum.USERS}>Users</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-link" to={URLEnum.CENTERS}>Centers</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-link" to={URLEnum.TRANSPORTS}>Transports</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-link" to={URLEnum.FOOD}>Food</NavLink>
                            </Nav.Item>
                        </Nav>

                    </div>
                    <div className="main-content">
                        <div className="wrapper_inner">{item.component}</div>
                    </div>
                </div>




            </div>

        </>
    );
}

export default MainLayout