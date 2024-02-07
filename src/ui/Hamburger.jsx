import { motion } from "framer-motion";

export function HamburgerOpen({ setHamburgerShow }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            onClick={() => setHamburgerShow(false)}
            className="cursor-pointer md:hidden"
        >
            <div className="w-14 h-2 bg-active mb-1 rounded-full"></div>
            <div className="w-14 h-2 bg-active mb-1 rounded-full"></div>
            <div className="w-14 h-2 bg-active rounded-full"></div>
        </motion.div>
    )
}

export function HamburgerClose({ setHamburgerShow }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            onClick={() => setHamburgerShow(true)}
            className="cursor-pointer md:hidden"
        >
            <div className></div>
            <div className="w-10 h-2 bg-active mb-1 rounded-full rotate-45"></div>
            <div className="w-10 h-2 bg-active mb-1 rounded-full -rotate-45"></div>
        </motion.div>
    )
}
