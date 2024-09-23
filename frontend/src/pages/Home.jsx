import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg3 from '../assets/images/hero-img03.png'


function Home() {
  return (
    <>
    {/* Hero Section */}
    <>
    <section className='hero_section pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* Hero Content */}
          <div>
            <div className = "lg:w-[570px]">
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>we help people to live a healthy life</h1>
              <p className='text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic laboriosam excepturi iure
                 eius rem quae quibusdam voluptatibus omnis minus deserunt, praesentium 
                 nostrum doloremque a minima voluptates sed unde inventore.</p>

                 <button className="btn">Request an Appointment</button>
            </div>

            {/* Hero counter */}

            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-700 font-headingColor'>30+</h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Years of Experiences</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-700 font-headingColor'>10+</h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Clinic Locations</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-700 font-headingColor'>100%</h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Patient Satisfaction</p>
              </div>


            </div>
          </div>

          {/* Hero content */}
          <div className='flex gap-[30px] justify-end'>
            <div className='w-full'>
              <img src={heroImg01} alt="" />
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg2} alt="" className='w-full mb-[50px]'/>
              <img src={heroImg3} alt="" className='w-full mt-[80px]'/>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>

    </>
  )
}

export default Home