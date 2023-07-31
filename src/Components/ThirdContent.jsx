import React from 'react'
import {BiSolidBasketball, BiSolidMusic, BiCoffeeTogo} from 'react-icons/bi'
import {GiDonut, GiVolleyballBall} from 'react-icons/gi'
import {SiBookstack} from 'react-icons/si'



const ThirdContent = () => {
  return (
    <div className='w-full px-4 mt-24 '>
        <div className='p-4 my-4  max-w-[1240px]  mx-auto '>
            <h1 className=' px-12 text-5xl text-[#67e8f9] font-bold '>Others</h1>
            
            <div className='grid md:grid-cols-2 gap-2 mt-20 text-[#9ca3af]'>

            <div className='rounded-md m-5   hover:bg-[#0ea5e9] duration-300 hover:text-white'>
                <div className='grid md:grid-cols-1  place-items-center p-12'>
                    <BiSolidBasketball size={60} className='text-center '/>
                    <h1 className='mt-2 text-3xl'>Basketball</h1>
                    <p className='pt-5 m-5 text-justify  '>Playing Basketball is one of my favorite sport in my life. Everymorning when i wake up , i will go to basketball court and play with my other friends. </p>
                </div>
            </div>

            <div className=' rounded-md m-5  hover:bg-[#0ea5e9] duration-300 hover:text-white'>
                <div className='grid md:grid-cols-1 place-items-center p-12'>
                    <GiVolleyballBall  size={60}/>
                    <h1 className='mt-2 text-3xl'>Volleyball</h1>
                    <p className='pt-5 m-5 text-justify  '>Volleyball, i'm not totally good at this game but i really tried my best to learn how to spike and some rules to play this sport</p>
                </div>
            </div>

            <div className='rounded-md m-5  hover:bg-[#0ea5e9] duration-300 hover:text-white'>
                <div className='grid md:grid-cols-1 place-items-center p-12'>
                    <BiSolidMusic  size={60}/> 
                    <h1 className='mt-2 text-3xl'>Playing Music</h1>
                    <p className='pt-5 m-5 text-justify  '>Listening  to music is one of the best hobbies in my life, its motivate me sometimes and give me some inspirational thing that i needed to learn in my life</p>               
                </div>      
            </div>

            <div className='rounded-md m-5  hover:bg-[#0ea5e9] duration-300 hover:text-white'>
                <div className='grid md:grid-cols-1 place-items-center p-12'>
                    <BiCoffeeTogo  size={60}/>
                    <h1 className='mt-2 text-3xl'>Drinking Coffee</h1>
                    <p className='pt-5 m-5 text-justify  '>Drinking Coffee in the morning is the best. give mo energy all day and it my every morning drink before i go to school</p>
                </div>      
            </div>

            <div className=' rounded-md m-5  hover:bg-[#0ea5e9] duration-300 hover:text-white'>
                <div className='grid md:grid-cols-1 place-items-center p-12'>
                    <GiDonut  size={60}/>
                    <h1 className='mt-2 text-3xl'>Eating Donut</h1>
                    <p className='pt-5 m-5 text-justify'>Donut is one of my favorite food , its very delicious and sweet. everytime when i go home i will buy some donut and eat in midnight</p>
                </div>      
            </div>

            <div className='rounded-md m-5  hover:bg-[#0ea5e9] duration-300 hover:text-white'>
                <div className='grid md:grid-cols-1 place-items-center p-12'>
                    <SiBookstack  size={60}/>    
                    <h1 className='mt-2 text-3xl'>Read Some Books</h1>
                    <p className='pt-5 m-5 text-justify  '>Books, when the title is very interesting to read , i will read it . because discovering some stuff is one my hobbies</p>
                </div>      
            </div>

            </div>
        </div>
    </div>
  )
}

export default ThirdContent