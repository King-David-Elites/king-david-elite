import React from 'react'
import { Header, UL, LI, LogoText, Brand, Login } from './Navbar.Style'
import kde_whiteBg from './Image/kde_whiteBg.png'
import { useNavigate } from 'react-router-dom'
import { MdMenu } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';

const Navbar = ({ bg, sticky, active }) => {

    const [activeNav, setActiveNav] = useState(false);

    const showMenu = () => {
        setActiveNav(!activeNav);
    }

    const navigate = useNavigate()

    const navOptions = [
        {
            title: "REAL ESTATE",
            link: "/real-estate"
        },
        {
            title: "CARS",
            link: "/cars"
        },
        {
            title: "ABOUT",
            link: "/about",
        },
        {
            title: "AFFILIATE",
            link: "/affiliate"
        }
    ]


    const token = localStorage.getItem("token")

    return (
        <>

            <Header className='bg-cover' bg={bg} position={sticky}>

                <nav className={activeNav ? 'navigation active' : 'navigation'}>
                    <ul>
                        <div className='closed'>
                            <ImCross className='close' color='#000' onClick={showMenu} />
                        </div>
                        {
                            navOptions.map((nav, i) => {
                                return (
                                    <>
                                        <li
                                            key={i}
                                            onClick={() => navigate(nav.link)}

                                        >
                                            <div className={active === i && "item-active"}>
                                                {nav.title}
                                            </div>

                                        </li>
                                    </>


                                )
                            })
                        }
                    </ul>
                </nav>
                <Brand onClick={() => navigate("/")}>
                    <div style={{ width: "4em", height: "auto" }}>
                        <img src={kde_whiteBg}
                            className='w-[100%] h-[100%]'
                            alt="brandlogo" />
                    </div>
                    <LogoText>KING DAVID ELITES</LogoText>

                    <div className='menu-icon'>
                        <MdMenu size={50} className='menu' onClick={showMenu} />
                    </div>
                </Brand>

                <div>
                    <UL>
                        {
                            navOptions.map((nav, i) => {
                                return (
                                    <LI
                                        key={i}
                                        onClick={() => navigate(nav.link)}

                                    >
                                        <div className={active === i && "item-active"}>
                                            {nav.title}
                                        </div>

                                    </LI>
                                )
                            })
                        }
                    </UL>
                </div>

                <Login>
                    {
                        token ?
                            <div onClick={() => navigate("/dashboard")} className='dashboard'>DASHBOARD</div>
                            :
                            <div className="login" onClick={() => navigate("/signup")}>Login/Sign Up</div>
                    }

                </Login>
            </Header>
        </>
    )
}

export default Navbar