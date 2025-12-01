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
                    <a href="/home">Tanver Fahat</a>
                </motion.h1>
                <div className="social">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar