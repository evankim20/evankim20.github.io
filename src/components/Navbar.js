import React from 'react'
import { HiMenu } from 'react-icons/hi';
import { Link, animateScroll as scroll } from 'react-scroll'
import { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const Toggle = () => {
        setToggle(!toggle)
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div id="nav">
            <div id="logo" onClick={scrollToTop}>evan kim</div>
            <button onClick={Toggle}>
                        <HiMenu />
            </button>
            <div className={toggle ? "links show-nav" : "links hide-nav"}>
                <div className="link-wrapper">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={toggle ? Toggle : () => {}}
                    > about </Link>
                </div>
                <div className="link-wrapper">
                    <Link
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={toggle ? Toggle : () => {}}
                    > experience </Link>
                </div>
                <div className="link-wrapper">
                    <Link
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={toggle ? Toggle : () => {}}
                    > education </Link>
                </div>
                <div className="link-wrapper">
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={toggle ? Toggle : () => {}}
                    > skills </Link>
                </div>                
                <div className="link-wrapper">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={toggle ? Toggle : () => {}}
                    > projects </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

