import React from 'react'
import hobby  from '../../src/assets/hobbies.jpg'
import hobbies1  from '../../src/assets/hobbies1.jpg'
import hobbies2  from '../../src/assets/hobbies2.jpg'
import {AiFillHtml5,} from 'react-icons/ai'
import {BiLogoPython, BiLogoCss3, BiLogoTailwindCss, BiLogoAngular, BiLogoReact  } from 'react-icons/bi'


export const SecondContent = () => {
  return (
    <div className=' w-full py-4 px-4 text-lg'>
        <div className='p-4 my-4  max-w-[1240px]  mx-auto'>
            <div className='  p-4  text-justify pt-16 w-full grid md:grid-cols-2'>
              <img src={hobby} className=' mx-auto object-cover h-80'></img>
              <div>
               <h1 className='text-[#67e8f9]  text-5xl font-bold justify-center'>Discovering some stuff</h1>
                <p className='y m-16 text-lg'>I,m really interesting in some people who tottally good at coding, because they good at creating design and how their application works. I am really trying my self to discover how they do it,  but im trying some markup language like HTML5 adn for the design is CSS3. I'm also studied python for using for visualization and for basic fundamental use. </p>
                <div className= 'text-[#67e8f9] flex items-center justify-center '>
                  <div className='p-4'><AiFillHtml5 size={40}/></div>
                  <div className='p-4'><BiLogoPython size={40}/></div>
                  <div className='p-4'><BiLogoCss3 size={40}/></div>
                  <div className='p-4'><BiLogoTailwindCss size={40}/></div>
                  <div className='p-4'><BiLogoAngular size={40}/></div>
                  <div className='p-4'><BiLogoReact size={40}/></div>
                </div>
             </div>
            </div>
        </div>
        <div className='p-4 my-4  max-w-[1240px]  mx-auto '>
          <div className=' p-4  text-justify pt-16 w-full grid md:grid-cols-2'>
            <div className='m-10 text-justify '>
              <h1 className='text-[#67e8f9]  text-5xl font-bold'>Creating Dashboards</h1>
              <p className='mt-8'>Since im getting my Major in 3rd Year College , The Business Analytics, im trying to create some visualization and handling some data to create chart but all of that was failed bucause i need to learn more about Python to make a unconditional statement in coding</p>
              <button className='mt-10 bg-sky-500/75   h-12  w-32 rounded-md text-white'>Lets Started</button>
            </div>
            <img src={hobbies1} className=' mx-auto p-4 objec-cover h-80 '></img>
          </div> 
         </div>
        <div className='p-4 my-4 max-w-[1240px] mx-auto'>
          <div className='p-4 text-justify pt-16 w-full grid md:grid-cols-2'>
            <img src={hobbies2} className='mx-auto  object-cover h-96'></img>
            <div className='justify-center m-8'>
              <h1 className='text-[#67e8f9] text-5xl font-bold'>Playing Mobile Games</h1>
              <p className='mt-6'>Playing Mobile Games was my hobby when i'm totally done in a work. Also my friend invite me to play with . we played Mobile Legends bang bang and NBA2k mobile  </p>
            </div>
          </div>
        </div>
    </div>
  )
}
