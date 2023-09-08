import React from 'react'

import SignupCard from '../components/SignupCard'
import '../signup.css'


function Signup() {
    return (
        <div>
            
            <div className='lg:h-[10px] my-0 '>

                <img className='lg:relative md:relative lg:w-[100%] lg:h-[105vh] md:h-[60vh] h-0 ' src='images/SignUpbg.png' alt='img' id='backgroundimg' />
                <div className='md:mx-auto'>
                    <SignupCard />
                </div>
            </div>

        </div>
    )
}

export default Signup
