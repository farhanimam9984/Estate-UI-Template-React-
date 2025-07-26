import React from 'react';
import { projectsData,  } from '../assets/assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react"

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
    className='container mx-auto   px-6 md:px-20 lg:px-32 w-full overflow-hidden my-10' id='Projects'>
      <h1 className='text-2xl font-semibold sm:text-4xl mb-2 text-center'>
        Projects <span className='underline underline-offset-4 font-light decoration-1'>Completed</span>
      </h1>
      <p className='text-gray-500 max-w-80 mx-auto text-center'>
        Crafting spaces, Building Legacies — Explore Our Portfolio
      </p>

      <div className='overflow-hidden mt-20'>
        <Slider {...settings}>
          {projectsData.map((project, index) => (
            <div key={index} className='px-4'>
              <div className='relative bg-white rounded-xl shadow-md overflow-hidden'>
                <img className='w-full h-90 object-cover' src={project.image} alt={project.title} />
                <div className='absolute left-0 right-0 bottom-0 flex justify-center items-center p-4 bg-white bg-opacity-90'>
                  <div className='text-center'>
                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                    <p className='text-gray-800 text-sm'>
                      {project.price} <span className='mx-2'>||</span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Projects;
