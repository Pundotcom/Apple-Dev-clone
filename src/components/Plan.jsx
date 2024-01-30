import React from 'react'

function Plan() {
  return (
    <div className='text-white bg-gradient-to-b from-[#2e3e58] to-[#21283c] py-[50px]'>
        <div className='w-[980px] mx-auto text-center'>
            <div className='p-[1.2rem]'>
                <h2 className='text-[40px] font-bold'>New to Apple platforms?</h2>
                <p className='text-[19px] mt-[0.4em]'>Get familiar with the tools and technologies you’ll use to build apps and games. The <br />Apple development ecosystem provides everything you need to bring incredible <br />experiences to people around the world.</p>
                <ul className='grid grid-cols-6 mt-5'>
                    <li >
                        <a className='inline-block hover:underline' href="#" >
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-ios-i.svg" alt="" />
                            <span>iOS</span>
                        </a>
                    </li>
                    <li >
                        <a className='inline-block hover:underline' href="#" >
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-ipados-i.svg" alt="" />
                            <span>iPadOS</span>
                        </a>
                    </li>
                    <li >
                        <a className='inline-block hover:underline' href="#" >
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-macos-i.svg" alt="" />
                            <span>masOS</span>
                        </a>
                    </li>
                    <li >
                        <a className='inline-block hover:underline' href="#" >
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-tvos-i.svg" alt="" />
                            <span>tvOS</span>
                        </a>
                    </li>
                    <li >
                        <a className='inline-block hover:underline' href="#" >
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-visionos-i.svg" alt="" />
                            <span>visionOS</span>
                        </a>
                    </li>
                    <li >
                        <a className='inline-block hover:underline' href="#" >
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-watchos-i.svg" alt="" />
                            <span>watchOS</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Plan