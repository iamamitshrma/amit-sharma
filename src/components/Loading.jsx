'use client'

import { motion } from "framer-motion"
export default function Loading({ text }) {
    return (
        <div className="flex items-center justify-center flex-col h-[70vh]">
            <h1 className="text-darkGray font-bold text-5xl">L<motion.span className="text-active" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 1, repeat: 10 }}>o</motion.span>ading...</h1>
            <p className="text-lightGray">{text}</p>
        </div>
    )
}