import React from 'react'

function Narbar() {
  return (
    <nav className='sticky top-0 bg-[rgba(0,0,0,0.92)] text-stone-400'>
        <div className='max-w-[980px] mx-auto'>
            <ul className='px-[10px] flex items-center justify-between pl-[calc(max(22px, env(safe-area-inset-left)))] pr-[calc(max(22px, env(safe-area-inset-right)))]'>
                <li><a href= "#"><img className ='w-[115px]' src="https://developer.apple.com/assets/elements/icons/brandmark/apple-developer-brandmark-i.svg" /></a></li>
                <li><a className='text-[12px] md:text-[15px]'href="#">News</a></li>
                <li><a className='text-[12px] md:text-[15px]'href="#">Discover</a></li>
                <li><a className='text-[12px] md:text-[15px]'href="#">Design</a></li>
                <li><a className='text-[12px] md:text-[15px]'href="#">Develop</a></li>
                <li><a className='text-[12px] md:text-[15px]'href="#">Distribuit</a></li>
                <li><a className='text-[12px] md:text-[15px]'href="#">Support</a></li>
                <li><a className='text-[12px] md:text-[15px]'href="#">Account</a></li>
                <li><a className='text-[12px] md:text-[15px]'href='#'><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2244%22%20viewBox%3D%220%200%2016%2044%22%3E%3Cpath%20d%3D%22M15.25%2C28.28l-3.9-3.9a6%2C6%2C0%2C1%2C0-.86.87l3.9%2C3.9a.6.6%2C0%2C0%2C0%2C.86%2C0%2C.62.62%2C0%2C0%2C0%2C0-.87ZM1.86%2C20.57a4.81%2C4.81%2C0%2C1%2C1%2C4.81%2C4.81A4.81%2C4.81%2C0%2C0%2C1%2C1.86%2C20.57Z%22%20style%3D%22fill%3A%20%23fff%22%2F%3E%3C%2Fsvg%3E"/></a></li>
             </ul>
        </div>
    </nav>
  )
}

export default Narbar