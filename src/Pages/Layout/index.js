import React from "react";
import Header from '../Header'
import Projects from '../Projects'
import About from '../About'
import Contact from "../Contact";

import { ScrollContainer } from 'react-scroll-motion'


const Layout = () => {
    return (
        <ScrollContainer>
            <Header />
            <Projects />
            <About />
            <Contact />  
        </ScrollContainer>
    )
}

export default Layout;