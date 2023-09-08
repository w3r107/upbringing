import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import '../signupcard.css'

function VerificationCard() {

 



    return (
        <div className='lg:absolute md:absolute lg:w-3/5 md:w-fit lg:top-0 md:top-0 top-0 md:mx-24 lg:mx-64' id='card1'>

            <div className='lg:h-[80vh] md:h-[50vh] h-[100vh] lg:w-3/4 mx-auto lg:my-[8%] mb-0 lg:py-0 md:py-0 lg:rounded-3xl' id='card2'>
                <div className="container mx-auto flex flex-wrap py-5 flex-col items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-10 md:mb-0">
                        <img className='w-[100px] h-[55px]' src='images/Group1.png' alt='img' />
                    </Link>
                </div>
                <h2 className='lg:text-5xl text-4xl text-center lg:mx-20 mx-5 lg:mb-10 mb-20' id='signupHeading'>
                    We start the journey of
                    making your kid <span id='signupsubHeading'> <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                'Engineer', 'Doctor', 'Enterpreneur', 'Scientist', 'Musician', 'Footballer', 'Teacher'
                            ],
                        }} /></span>
                </h2>
                <div className='flex'>
                    <h2 className='flex mx-auto lg:mb-0 mb-5 text-black text-xl font-bold'>
                        Verification Successful
                        <div className=' text-green-500 mx-1 my-auto'>
                            <BsFillCheckSquareFill />
                        </div>
                    </h2>
                </div>
                <p className='mx-auto my-5 font-semibold text-center'>
                    Say goodbye to "I'm bored" and hello to "Woohoo!"
                </p>
                <div className='w-fit mx-auto my-10'>

<Link to="/" className="ml-auto font-sans bg-red-500 text-white border-0 py-1 px-5 focus:outline-none hover:bg-white hover:text-red-400 rounded-lg text-base my-5 md:mt-0" id='button1'>We're All Set
</Link>
</div>


            </div>
        </div>
    )
}

export default VerificationCard
