import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../About.css'
import { values } from '../constants/aboutcontent';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { GrLinkNext, GrNext } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import { MdArrowBack } from 'react-icons/md';
AOS.init();
function About() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(current => !current);
  };


  return (
    <div className='bg-[#fff6ea] mx-auto'>
      <div>
        <Navbar />
      </div>

      <div id='bgcolor'>
        <div className="mx-auto flex lg:py-10 md:py-10 py-10 md:mx-auto flex-col items-center" >
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center lg:mb-10 md:mb-10 items-center text-center" id='main1'>
            <h2 className=' lg:text-xl md:text-xl lg:mx-auto text-xl lg:mb-5 md:mb-5 mb-5' data-aos="zoom-out" data-aos-delay="200" id='about1heading'>OUR STORY</h2>
            <div className='flex mx-auto'>

              <div className='lg:pl-10 md:pl-0 h-0 lg:mt-5 md:mt-5 mt-2'>
                <img className='lg:w-32 md:w-24 w-14' data-aos="fade-up" data-aos-delay="200" src='images/book2.png' alt='img' />
              </div>

              <div className='lg:-ml-24 md:-ml-24 lg:mr-28 md:mr-28 -ml-10 h-0 mt-0'>
                <img className='lg:w-32 md:w-24 w-14' data-aos="fade-down" data-aos-delay="200" src='images/book1.png' alt='img' />
              </div>

              <h1 className="title-font lg:text-8xl md:text-7xl lg:mx-auto text-5xl lg:mb-10 md:mb-10 mb-10 font-medium text-gray-900" data-aos="zoom-in" data-aos-delay="400" id='about2heading'>Tales Enrich

                <br />
                <div className="">our Innovation</div>
              </h1>

              <div className='lg:-mr-24 md:-mr-24 lg:ml-28 md:ml-28 -mr-10 h-0 lg:mt-28 md:mt-28 mt-20'>
                <img className='lg:w-32 md:w-24 w-14' data-aos="fade-up" data-aos-delay="200" src='images/book4.png' alt='img' />
              </div>

              <div className='lg:pr-10 md:pr-0 h-0 lg:mt-[90px] md:mt-[95px] mt-[70px]'>
                <img className='lg:w-32 md:w-24 w-14' data-aos="fade-down" data-aos-delay="200" src='images/book3.png' alt='img' />
              </div>
            </div>
            <p className="lg:w-[70%] md:w-[100%] w-[90%] text-black text-center lg:text-lg md:text-lg text-base lg:mx-44 md:mx-14 mx-0 font-normal lg:leading-9" id='about1' data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              At Up-bringing, we believe that every child deserves the opportunity to grow up happy, healthy, and confident. We understand that being a parent can be a challenging and overwhelming experience, and we want to make it easier for parents to provide their children with the best possible start in life.</p>
            <div className='w-[100%]' data-aos="zoom-in" data-aos-delay="200">
              <img className="object-cover object-center lg:mx-auto rounded-lg md:mt-0 mb-10" src="images/Group8.png" alt="img" />
            </div>
          </div>
        </div>

        {/* carousel */}
        <div className="carousel mx-auto lg:h-96 md:h-[75%] h-60 bg-[#1E0E13]">
          <div id="item1" className="lg:flex md:flex carousel-item w-[100%]">
            <img src="/images/about1.png" className="relative lg:w-1/2 md:w-1/2 w-0 " alt='img' />
            <div className='lg:w-1/2 md:w-1/2 text-black lg:px-28 md:px-10 lg:my-auto md:my-auto my-auto'>
              <h2 className='lg:text-5xl md:text-4xl text-4xl lg:text-left md:text-left text-center my- font-[Sunny] text-[#9850FF]'>Our Motive  </h2>

              <p className='lg:w-fit md:w-fit w-[95%] lg:h-[45vh] md:h-[20vh] h-[15vh] mx-auto text-white lg:text-base md:text-sm lg:text-left md:text-left text-justify text-base lg:leading-8 md:leading-6 leading-4' id='about2'>
                We were inspired to start Up-bringing after watching the founder's sister struggle to find the right resources to support her child's growth and development. She realized that there was a need for a comprehensive, all-in-one solution that would not only provide parents with high-quality toys and resources, but also become a part of the journey by providing support and guidance parents need to raise happy, healthy, intelligent children.</p>

              <div className="flex justify-end w-[100%] lg:py-2 md:py-2 py-2 gap-2">

                <a href="#item2" className="btn btn-xs bg-white">
                  <GrLinkNext />
                </a>

              </div>
            </div>
          </div>
          <div id="item2" className="flex carousel-item w-[100%]">
            <img src="/images/about2.png" className="relative lg:w-1/2 md:w-1/2 w-0 " alt='img' />
            <div className='lg:w-1/2 md:w-1/2 text-black lg:px-28 md:px-10 lg:my-auto md:my-auto my-auto'>
              <h2 className='lg:text-5xl md:text-4xl text-4xl lg:text-left md:text-left text-center font-[Sunny] text-[#B6F24E]'>Our SoLUTION </h2>
              <p className='lg:w-fit md:w-fit w-[95%] md:h-[20vh] lg:h-[45vh] h-[15vh] mx-auto lg:text-left md:text-left text-justify text-white lg:text-base md:text-sm text-base lg:leading-8 md:leading-6 leading-4' id='about2' >That's why we created Up-bringing, a platform that provides parents with everything they need to help their children grow mentally, ethically, and physically. Every 6 weeks, we deliver a curated selection of toys and resources that are specifically designed to support your child's development. And with our dashboard, you can easily track your child's progress and learn more about parenting through a fun, gamified approach.</p>
              <div className="flex w-[100%] lg:py-2 md:py-2 py-2 gap-2">
                <a href="#item1" className="btn btn-xs bg-white text-black justify-start">
                  <MdArrowBack />
                </a>


                <a href="#item3" className="btn btn-xs bg-white ml-auto">
                  <GrLinkNext />
                </a>
              </div>
            </div>
          </div>
          <div id="item3" className="flex carousel-item w-[100%]">
            <img src="/images/about3.png" className="relative lg:w-1/2 md:w-1/2 w-0 " alt='img' />
            <div className='lg:w-1/2 md:w-1/2 text-black lg:px-28 md:px-10 lg:my-auto md:my-auto my-auto'>
              <h2 className='lg:text-5xl md:text-4xl text-4xl lg:text-left md:text-left text-center font-[Sunny] text-[#FF4D4D]'>Our COMMUNITY</h2>
              <p className='lg:w-fit md:w-fit w-[95%] md:h-[20vh] lg:h-[45vh] h-[15vh] lg:text-left md:text-left text-justify text-white lg:text-base md:text-sm text-base lg:leading-8 md:leading-6 leading-4' id='about2' >But we're more than just a toy delivery service. We're a community of like-minded parents who share a common goal: to give our children the best possible start in life. With Up-bringing, you'll have access to a supportive network of parents who are going through the same challenges and joys of parenting as you are.</p>
              <div className="flex justify-start w-[100%] lg:py-2 md:py-2 py-2 gap-2">
                <a href="#item2" className="btn btn-xs bg-white text-black">
                  <MdArrowBack />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className=" lg:mx-auto md:mx-auto flex lg:py-10 md:py-10 py-10 flex-col items-center" id='bgcolor'>
        <div className="lg:flex-grow md:w-1/2 lg:my-20 md:my-20 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center" id='main1'>
          <h2 className=' lg:text-xl md:text-xl mx-auto text-xl lg:mb-5 md:mb-5 mb-5' id='about1heading'>OUR VALUES</h2>
          <h1 className="title-font lg:text-8xl md:text-7xl mx-auto text-5xl mb-10 font-medium text-gray-900" id='about2heading'>We believe that children

            <br />
            <div className=""> learn best through play</div>
          </h1>
          <p className="w-fit text-black text-justify lg:text-lg lg:mx-60 md:mx-20 mx-5 font-normal leading-8" id='about1'>These values guide everything we do at up-bringing, and we're committed to upholding them in all aspects of our business."</p>
          <div className='w-[100%]'>
          </div>
        </div>
      </div>



      <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 -gap-80 items-center lg:px-10" id='bgcolor'>
        {values.map((data) =>
          <div className='lg:mx-5 md:mx-5 text-black text-start border-black hover:text-white mb-10 ' >
            <div className=" lg:h-screen md:h-96 group lg:py-16 md:py-16 transition transform hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-blue-950" id='ourValues' key={data.id} >
              <div className='flex border-black'>

                <h2 className=' lg:text-5xl md:text-2xl text-2xl ml-10 font-bold lg:mb-40 md:mb-20' >{data.title}</h2>
                <div className="relative w-40 h-full">
                  <div className="w-[100%] h-32">
                    <div className="transition-all transform translate-y-8 w-[100%] h-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0">

                      <div className=" w-96">
                        <img className="absolute inset-0 object-cover mx-auto group-hover:opacity-"
                          src={data.img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className='w-2/3 ml-10 lg:text-xl md:text-base text-base mb-0 leading-8'>{data.content}</p>
            </div>
          </div>

        )}
      </div>




      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About
