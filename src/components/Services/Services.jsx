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
                    <button>Go</button>
                </motion.div>
                <motion.div className="boox" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Creating a unique image and identity for
                        your brand that resonates with your
                        target audience.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="boox" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Creating a unique image and identity for
                        your brand that resonates with your
                        target audience.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="boox" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Creating a unique image and identity for
                        your brand that resonates with your
                        target audience.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services