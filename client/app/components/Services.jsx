import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"



const Services = () => {
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}> 
      <motion.h4 className='mb-2 text-center text-lg font-Ovo' initial={{opacity: 0, y:-20}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5, delay:0.3}}> What I Offer </motion.h4>
      <motion.h2 className='text-center text-5xl font-Ovo' initial={{opacity: 0, y:-20}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5, delay:0.3}}> My Services </motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay:0.7}}>
         I am an experienced full stack developer and a DSA problem solver try to solve problems of the day for simply no reason whatsoever so thanks ...
      </motion.p>

      <motion.div className='grid grid-cols-auto gap-6 my-10' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.9}}>
        {serviceData.map(({icon, title, description, link}, index) => (
            <motion.div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white' whileHover={{scale: 1.05}}>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='my-4 text-lg text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                <a href={link} className='flex gap-2 items-center t-5 text-sm'>
                    Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
                </a>
            </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default Services
