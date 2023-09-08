import React from 'react'
import '../signup.css'
import Informationcard from '../components/Informationcard'


function Information() {
    return (
        <div>
            
            <div className='lg:h-[10px] my-0 '>

            <img className='lg:relative md:relative lg:w-[100%] lg:h-[105vh] md:h-[60vh] h-0 ' src='images/SignUpbg.png' alt='img' id='backgroundimg' />
                <div className='md:mx-auto'>
                    <Informationcard />
                </div>
            </div>

        </div>
    )
}

export default Information
