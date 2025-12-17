import "./Services.scss"
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        y: 100,
        x: -500
    },
    animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1.5,
            staggerChildren: 0.3,
        }
    },
}
const Services = () => {
    return (
        <motion.div className="Services" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textConteiner" variants={variants}>
                <p>I focus on helping your brand grow <br />
                    and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleConteiner" variants={variants}>
                <div className="title">
                    <img src="/meeting.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color: "#ff4c60"}}>Unique</motion.b>
                        ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color: "#ff4c60"}}>For Your</motion.b>
                        Bussines
                    </h1>
                    <button>what we do?</button>
                </div>
            </motion.div>
            <motion.div className="listConteiner" variants={variants}>
                <motion.div className="boox" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Creating a unique image and identity for
                        your brand that resonates with your
                        target audience.
                    </p>
                    <button><a href="#contact">Go</a></button>
                </motion.div>
                <motion.div className="boox" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web Development</h2>
                    <p>Building responsive and user-friendly websites
                        that effectively represent your brand
                        online.
                    </p>
                    <button><a href="#contact">Go</a></button>
                </motion.div>
                <motion.div className="boox" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Brand Identity</h2>
                    <p>Crafting a cohesive visual and verbal identity
                        that reflects your brand's values
                        and personality.
                    </p>
                    <button><a href="#contact">Go</a></button>
                </motion.div>
                <motion.div className="boox" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Marketing</h2>
                    <p>Developing and implementing effective marketing
                        strategies to promote your brand
                        and reach your target audience.
                    </p>
                    <button><a href="#contact">Go</a></button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services