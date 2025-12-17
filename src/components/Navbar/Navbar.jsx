import Hero from "../Hero/Hero";
import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss"
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
           <Sidebar/>
            <div className="wrapper">
                <motion.h1 initial={{ opacity: 0,scale:0.5}}
                    animate={{ opacity: 1 ,scale:1}} transition={{ duration: 0.5 }}>
                    <a href="#">Tanver Fahat</a>
                </motion.h1>
                <div className="social">
                    <a href="https://www.facebook.com/tanvir.fahad.601196"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.behance.net/tanvirfahad1"><i className="fa-brands fa-behance"></i></a>
                    <a href="https://github.com/TanvirFahadBd"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/tanver-fahat-34b879327"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar