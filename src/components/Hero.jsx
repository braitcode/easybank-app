import React from 'react'
import mockups from "../assets/images/image-mockups.png"

const Hero = () => {
  return (
    <>
      <div className="w-full xl:h-[400px] h-[750px] md:h-auto xl:mt-[-2rem] mt-[-5rem] md:mt-[-8rem] md:mb-16">
        <div className="container lg:w-11/12 m-auto flex justify-center">
         <div className="xl:w-[80%] w-[90%] xl:flex xl:flex-row flex flex-col-reverse items-center gap-[10%]">
            <div className="flex flex-col items-center xl:items-start gap-8">
                <h1 className='w-[70%] xl:leading-[3rem] xl:text-[50px] text-[35px] leading-10 text-center xl:text-left'>Next generation digital banking</h1>
                <p className='xl:w-[80%]  xl:text-[18px] text-[16px] text-center text-GrayishBlue xl:text-left'>Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.</p>
                <div className="bg-LimeGreen w-[150px] h-[40px] flex justify-center rounded-full">
                    <button className='text-white font-semibold'>Request Invite</button>
                </div>
            </div>
            <div className="">
                <img src={mockups} alt="" className=''/>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Hero