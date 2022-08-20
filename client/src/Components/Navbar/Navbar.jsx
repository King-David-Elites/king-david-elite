import React from 'react'
import { Header, UL, LI, ULI, LogoText, Brand } from './Navbar.Style'
import kde_whiteBg from './Image/kde_whiteBg.png'
import { useNavigate } from 'react-router-dom'
import { MdMenu } from 'react-icons/md';

const Navbar = ({ bg, sticky, active }) => {

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



    return (
        <>
            <Header className='bg-cover' bg={bg} sticky={sticky}>
                <Brand onClick={() => navigate("/")}>
                    <div style={{ width: "4em", height: "auto" }}>
                        <img src={kde_whiteBg}
                            className='w-[100%] h-[100%]'
                            alt="brandlogo" />
                    </div>
                    <LogoText>KING DAVID ELITES</LogoText>
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

                <Brand onClick={() => navigate("/dashboard")}>
                    <div className='dashboard'>DASHBOARD</div>
                    <div className="h-[8%] w-[full] z-[10]">
                        <div className="dashboardIcon">
                            <MdMenu size={20} />
                            {/* <span className='text'>DASHBOARD</span> */}
                        </div>
                    </div>
                </Brand>
            </Header>
        </>
    )
}

export default Navbar