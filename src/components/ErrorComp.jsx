'use client'
import { motion } from "framer-motion"
export default function ErrorComp({ error }) {
    return (
        <div className="flex items-center justify-center flex-col h-[70vh]">
            <h1 className="text-darkGray font-bold text-5xl">Err<motion.span className="text-red-800" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 1, repeat: Infinity }}>o</motion.span>r: {error?.response?.status}</h1>
            <p className="text-lightGray mb-2">{error?.response?.data?.error?.message || ""}</p>
            <p className="text-lightGray font-thin">Something is wrong to fetch the data or network problem!</p>
        </div>
    )
}