import { motion } from 'framer-motion'
import React from 'react'

export default function ScreenMain({
    children
}) {
  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="duration-100">
            <section className="">
                {children}
            </section>
        </motion.main>
    </div>
  )
}
