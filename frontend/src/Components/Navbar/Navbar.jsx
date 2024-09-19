import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { BiBoltCircle } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsChatLeftDots } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { PiLightning } from "react-icons/pi";
import DarkMode from './DarkMode';

const AppNavbar = () => {
    return (
        <>
            <section className='hidden lg:flex'>
                <Navbar expand="lg" className="dark:bg-gray-900 w-full dark:text-white duration-200 relative z-40 shadow-md">
                    <Container>
                        <Navbar.Brand className='!text-primary font-normal !text-3xl tracking-wider uppercase cursor-pointer flex items-center'>
                            V<BiBoltCircle />ltify</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto gap-20 flex items-center">
                                <Nav.Link className='!text-gray-700 text-md hover:!text-primary dark:!text-primary dark:hover:!text-white duration-200 p-0'>Menu</Nav.Link>
                                <Nav.Link className='!text-gray-700 text-md hover:!text-primary dark:!text-primary dark:hover:!text-white duration-200 p-0'>Shop</Nav.Link>
                                <Nav.Link className='!text-gray-700 text-md hover:!text-primary dark:!text-primary dark:hover:!text-white duration-200 p-0'>About</Nav.Link>
                                <Nav.Link className='!text-gray-700 text-md hover:!text-primary dark:!text-primary dark:hover:!text-white duration-200 p-0'>Blog</Nav.Link>
                                <NavDropdown title={<span className='!text-gray-700 text-md hover:!text-primary dark:!text-primary dark:hover:!text-white duration-200 p-0'>Quick Links</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.2" className='!text-gray-700 hover:bg-secondary/20 hover:text-black dark:bg-gray-900 dark:hover:text-white duration-200'>
                                        Trending Products
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className='!text-gray-700 hover:bg-secondary/20 hover:text-black dark:bg-gray-900 dark:hover:text-white duration-200'>
                                        Best Selling
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4" className='!text-gray-700 hover:bg-secondary/20 hover:text-black dark:bg-gray-900 dark:hover:text-white duration-200'>
                                        Top Rated
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="ms-auto">
                                <ul className='flex justify-between items-center gap-4 p-0 m-0'>
                                    <li className='relative group hidden sm:block'>
                                        <input type="search" name="search" id="" placeholder='Search' className='searchbar' />
                                        <GoSearch className='text-xl !text-primary dark:hover:text-gray-400 absolute top-[-5px] translate-y-1/2 right-1 
                                cursor-pointer hover:text-primary duration-200' />
                                    </li>
                                    <li className='relative'><IoCartOutline className='text-2xl !text-primary hover:text-primary cursor-pointer' />
                                        <span className='absolute top-[-14px] right-[-5px] !text-primary'>4</span></li>
                                    <li><DarkMode /></li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>

            {/* mobile */}

            <section className='bg-white p-[15px_10px] dark:bg-gray-900 w-full dark:text-white block shadow-md lg:hidden'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='!text-primary font-normal !text-2xl tracking-wider uppercase cursor-pointer flex items-center m-0'>
                            v<BiBoltCircle />ltify
                        </h1>
                    </div>
                    <ul className='p-0 m-0 flex items-center gap-4'>
                        <li className='text-[23px] text-gray-600 hover:text-primary cursor-pointer'><GoSearch /></li>
                        <li className='relative'><IoCartOutline className='text-[27px] text-gray-600 hover:text-primary cursor-pointer' />
                            <span className='absolute top-[-14px] right-[-5px] text-gray-600'>4</span></li>
                        <li><DarkMode /></li>
                    </ul>
                </div>
            </section>

            {/* bottom manu */}

            <section className='bg-white fixed bottom-0 w-full z-50 p-[15px_10px] shadow-lg dark:bg-gray-800 dark:text-white lg:hidden'>
                <ul className='flex justify-around items-center p-0 m-0'>
                    <li className='text-2xl text-gray-600 transition duration-500 ease-in-out transform scale-100 hover:scale-125 hover:text-primary'><IoHomeOutline /></li>
                    <li className='text-2xl text-gray-600 transition duration-500 ease-in-out transform scale-100 hover:scale-125 hover:text-primary'><HiOutlineShoppingBag /></li>
                    <li className='text-2xl text-gray-600 transition duration-500 ease-in-out transform scale-100 hover:scale-125 hover:text-primary'><BsChatLeftDots /></li>
                    <li className='text-2xl text-gray-600 transition duration-500 ease-in-out transform scale-100 hover:scale-125 hover:text-primary'><HiOutlinePencilAlt /></li>
                    <li className='text-2xl text-gray-600 transition duration-500 ease-in-out transform scale-100 hover:scale-125 hover:text-primary'><PiLightning /></li>
                </ul>
            </section>
        </>
    )
}

export default AppNavbar
