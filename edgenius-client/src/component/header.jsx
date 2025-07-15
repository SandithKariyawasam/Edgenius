import React from 'react';
import '../assets/css/style.css';

import { initHeaderMenuToggle } from '../utils/headerMenuToggle';

const Header = () => {

    // useEffect(() => {
    //     const cleanup = initHeaderMenuToggle();
    //     return () => {
    //         if (cleanup) cleanup();
    //     };
    // }, []);

    return (
        <div>
            <div className='d-flex difference justify-content-between sticky-nav'>
                <div className='logo'></div>
                <div className='box menu' id='nav-btn'>
                    <svg id="i1" className="icon" viewBox="20 30 60 40">
                        <path id="top-line-1" d="M30,37 L70,37 Z"></path>
                        <path id="middle-line-1" d="M30,50 L70,50 Z"></path>
                        <path id="bottom-line-1" d="M30,63 L70,63 Z"></path>
                    </svg>
                </div>
            </div>

            <div id='takeover-nav'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='align-items-center bg-black col-12 col-md-7 d-flex justify-content-center nav-col nav-contact order-1 order-md-0 position-relative px-3 py-5'>
                            <div className='bg-topographic h-100 position-absolute w-100'></div>
                            <div className='content position-relative'>
                                <h2 className='mb-5 nav-title white'>
                                    Discover top-quality courses from industry experts.
                                    <span className="d-inline green">.</span>
                                </h2>
                                <ul className='contact-items list-unstyled mb-5 white'>
                                    <li className='pb-4'>
                                        <a className='text-decoration-none' href='#'>+94 76 942 3847</a>
                                    </li>
                                    <li className='pb-4'>
                                        <a className='text-decoration-none' href='#'>edugenius@platform.com</a>
                                    </li>
                                    <li>
                                        <a className='text-decoration-none' href='#'>Colombo, Sri Lanka</a>
                                    </li>
                                </ul>
                                <div className='social'>
                                    <a className='green text-decoration-none' href='#'>linkedin</a>
                                    <span className='mx-2 white'>|</span>
                                    <a className='green text-decoration-none' href='#'>facebook</a>
                                    <span className='mx-2 white'>|</span>
                                    <a className='green text-decoration-none' href='#'>instagram</a>
                                </div>
                            </div>
                        </div>
                        <div className='align-items-center bg-green col-12 col-md-5 d-flex nav-col nav-menu order-0 order-md-1 pb-3 pb-md-5 pt-5 px-3 px-md-5'>
                            <ul className='list-unstyled nav-items'>
                                <li className='pb-3'>
                                    <a className='text-decoration-none' href='#'>Courses</a>
                                </li>
                                <li className='pb-3'>
                                    <a className='text-decoration-none' href='#'>About</a>
                                </li>
                                <li className='pb-3'>
                                    <a className='text-decoration-none' href='#'>Blog</a>
                                </li>
                                <li>
                                    <a className='text-decoration-none' href='#'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
