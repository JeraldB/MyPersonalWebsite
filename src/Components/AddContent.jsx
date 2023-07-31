import React from 'react'
import Face_man1 from './../assets/Face_Man.jpg'
import Face_man2 from './../assets/face_man2.jpg'
import Face_man3 from './../assets/face_man1.jpg'

const AddContent = () => {
  return (
    <div className=' w-full pt-24 px-4 max-w-[1240px] mx-auto '>
      
      <div className='flex items-center text-center  justify-center text-[#67e8f9] font-bold'>
        <h1 className=' text-6xl '>My Golden Rule</h1>
      </div>

      <div className='mt-52 grid md:grid-cols-1 m-10'>
        
        <section>
        <div className='p-5 shadow-lg '>

          <div>
          <img src={Face_man1}  className=' h-40 w-40 mt-[-150px] rounded-full shadow-lg'></img>
          </div>
          
          <div className='text-center items-center justify-center '>
          <h1 className='text-5xl font-bold text-[#67e8f9]'>To love God is to put Him first</h1>
          <p className='mt-12 text-18 '>The number-one commandment is to love God “with all your heart and with all your soul and with all your mind and with all your strength” (Mark 12:30). It’s an undivided love. God is our priority. If we love God with all our hearts, souls, minds, and strength, then we won’t allow other things to crowd in. Our love for God is manifested by loving people (Mark 12:31), but we do not love the things of the world. “Earth has nothing I desire besides you” (Psalm 73:25). We cannot love this present world and God at the same time (1 John 2:15); love for what the world offers can lead us astray (2 Timothy 4:10).</p>
          </div>
        </div>
        </section>

        <section className=' mt-44 '>
        <div className='p-5 shadow-lg '>

          <div className='flex items-end justify-end'>
          <img src={Face_man2} className=' h-40 w-40 mt-[-100px] rounded-full shadow-lg '></img>
          </div>

          <div className='text-center items-center justify-center mt-0'>
          <h1 className='text-5xl font-bold text-[#67e8f9]'>Keep Smiling</h1>
          <p className='mt-12 text-18'>Do you know how powerful a simple smile is? One simple can change someone’s bad day into a good day. Therefore, keep smiling; it will change your perceptions too!</p>
          </div>
        </div>
        </section>

        <section className='mt-44'>
        <div className='p-5 shadow-lg '>

          <div>
          <img src={Face_man3} className='h-40 w-40 mt-[-100px] rounded-full shadow-lg'></img>
          </div>
          
          <div className='text-center items-center justify-center mt-0'>
          <h1 className='text-5xl font-bold text-[#67e8f9]'>Learn good habits from everyone you meet</h1>
          <p className='mt-12 text-18 '>Every day we meet so many people during the morning walk, at the gym, on the bus, in the metro, at work, at college, at café, a restaurant, and whatnot. Every person you meet has a unique good habit or quality which we should learn or adapt from them.</p>
          </div>
        </div>
        </section>

      </div>
    </div>
  )
}

export default AddContent