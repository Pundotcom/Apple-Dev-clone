import React from 'react'

function Promo() {
  return (
    <div>
        <ul className='flex flex-wrap '>
            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[rgba(0,0,0,0.92)] border-solid '>
                <div className="overflow-hidden  text-center bg-[url('https://devimages-cdn.apple.com/wwdc-services/articles/images/D49844A8-C710-4B9C-AA23-0C249E48B1AD/2048.jpeg')] bg-cover h-full bg-center">
                    <a href="#">
                        <h3 className='text-[40px] font-bold mt-[52px]'>Hello Developer</h3>
                        <p className='text-[21px]'>The first edition of 2024 is all <br /> about Apple Vision Pro.</p>
                    </a>
                </div>
            </li>
            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[rgba(0,0,0,0.92)] border-solid '>
                <div className="overflow-hidden  text-center bg-[url('https://developer.apple.com/events/images/hero-large_2x.jpg')] bg-cover h-full bg-center">
                    <a href="#">
                        <h3 className='text-[40px] font-bold mt-[52px]'>Hello Developer</h3>
                        <p className='text-[21px]'>The first edition of 2024 is all <br /> about Apple Vision Pro.</p>
                    </a>
                </div>
            </li>
            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[rgba(0,0,0,0.92)] border-solid '>
                <div className="overflow-hidden  text-center bg-[url('https://developer.apple.com/home/images/tile-event-asa-2023/w-large_2x.jpg?2')] bg-cover h-full bg-center">
                    <a href="#">
                        <h3 className='text-white text-[40px] font-bold mt-[52px]'>Hello Developer</h3>
                        <p className='text-white text-[21px]'>The first edition of 2024 is all <br /> about Apple Vision Pro.</p>
                    </a>
                </div>
            </li>
            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[rgba(0,0,0,0.92)] border-solid bg-[rgba(0,0,0,0.92)]'>
                <div className="overflow-hidden  text-center bg-[url('https://developer.apple.com/home/images/tile-ssc/large_2x.png?2')] bg-cover h-full bg-center">
                    <a href="#">
                        <h3 className='text-white text-[40px] font-bold mt-[52px]'>Hello Developer</h3>
                        <p className='text-white text-[21px]'>The first edition of 2024 is all <br /> about Apple Vision Pro.</p>
                    </a>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Promo