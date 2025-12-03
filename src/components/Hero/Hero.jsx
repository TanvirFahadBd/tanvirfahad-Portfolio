import { animate } from "framer-motion"

import "./Hero.scss"
import { motion } from "framer-motion";





let textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 3,
            repeat: Infinity
        },
    },
};

let silderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="Hero">
            <div className="wrapperH">
                <motion.div className="textConteiner" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>
                        TANVER FAHAT
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        Front-End Web Developer
                        <span>And Grapihcs Designer</span>

                    </motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <button><a href="#porthfolio">See the letest Work</a></button>
                        <button><a href="#contact"> contact me</a></button>
                    </motion.div>

                    <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
                </motion.div>
            </div>
            <motion.div className="sliderImageConteiner" variants={silderVariants} initial="initial" animate="animate">
                Gamer Web Developer Grapihcs Designer
            </motion.div>
            <div className="imageConteiner">
                <img src="/heroe.png" alt="" />
            </div>
        </div>
    )
}

export default Hero