import React from 'react'

function ADP() {
  return (
    <section className='py-[50px] bg-gradient-to-br from-[#bf46a5] to-[#341d8c] border-[12px] border-[rgba(0,0,0,0.92)] border-solid bg-[rgba(0,0,0,0.92)]'>
        <div className='flex justify-center text-center text-white'>
            <div >
                <img className='mx-auto'width={142} src="https://developer.apple.com/app-store/features/images/members.svg" alt="" />
                <h2 className='text-[40px] font-bold'>Apple Developer Program</h2>
                <h5 className='text-[19px]'>Join the Apple DeveloperProgram to reach customers around the  <br />world on the App Storefor iPhone, iPad, Mac, Apple TV, and <br />Apple Watch. You’ll also get access to beta software, advanced app <br /> capabilities, extensive beta testing tools, and app analytics.</h5>
            </div>
        </div>
    </section>
  )
}

export default ADP