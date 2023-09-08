import React from 'react'
import '../signup.css'
import VerificationCard from '../components/VerificationCard'


function Verfication() {
    return (
        <div>
            
            <div className='lg:h-[10px] my-0 '>

            <img className='lg:relative md:relative lg:w-[100%] lg:h-[105vh] md:h-[60vh] h-0 ' src='images/SignUpbg.png' alt='img' id='backgroundimg' />
                <div className='md:mx-auto'>
                    <VerificationCard />
                </div>
            </div>

        </div>
    )
}

export default Verfication
