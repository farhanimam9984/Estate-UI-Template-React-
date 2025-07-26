import React from 'react'
import { motion } from "motion/react"
const About = () => {
  return (
    <>
    <motion.div 
     initial={{opacity:0, x:200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
            
    className='flex flex-col items-center justify-center conatiner mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
<h1 className='text-2xl sm:text-4xl font-semibold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
<p className='text-gray-400 max-w-80 text-center mb-8 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, expedita?</p>

<div className='flex flex-col md:flex-row items-center md:items-start md:gap-15'>
    <img className='w-full sm:w-1/2 max-w-lg ' src="/images/brand_img.png" alt="brand image" />
    <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
        <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
<div>
    <p className='text-4xl font-medium text-gray-800 '>10+</p>
    <p>Year of Excellence</p>
</div>
<div>
    <p className='text-4xl font-medium text-gray-800 '>12+</p>
    <p>Project Completed</p>
</div>
<div>
    <p className='text-4xl font-medium text-gray-800 '>20+</p>
    <p>Mn. Sq. Ft. Delivered</p>
</div>
<div>
    <p className='text-4xl font-medium text-gray-800 '>25+</p>
    <p>Ongoing Projects</p>
</div>
        </div>
        <p className='my-10 max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis reprehenderit officiis atque saepe. Tenetur facere nostrum ducimus delectus, iusto corrupti. Cumque quis excepturi nihil deserunt debitis, accusantium eum sed voluptates ipsam totam. Accusantium dolores at ipsum, ut, dolorum ipsam animi illum minima atque similique corrupti quos tempore debitis quam veritatis?</p>
        <button className='bg-blue-500 text-white px-2 py-3 rounded-lg'>Learn More</button>
    </div>
    
</div>
    </motion.div>
    
    </>
  )
}

export default About