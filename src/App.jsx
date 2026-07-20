
import { useEffect, useRef, useState } from "react";

import './App.css'

import {motion} from 'framer-motion'

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import Work from './components/work/Work'


export default function App() {

    const homeRef = useRef(null)
    const workRef = useRef(null)
    const pricingRef = useRef(null)


    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false)
        }


        handleResize()

        window.addEventListener("resize", handleResize) //handleResize function is ran everytime screen size changes

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            
            {!isMobile && (
                <Navbar
                    scrollToSection={scrollToSection}
                    refs={{homeRef, workRef}}
                />
            )}
            


            <motion.section 
            initial={{opacity: 0, y:50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 0.8}}
            viewport={{ once: false, amount: 0.1 }}
            ref={homeRef}>
                <Home scrollToSection={scrollToSection} refs={{workRef}}/>
            </motion.section>

            <motion.section
            initial={{opacity: 0, y:50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 0.8}}
            viewport={{ once: false, amount: 0.1 }}
             ref={workRef}>
                <Work />
            </motion.section>
        </>
    )
}