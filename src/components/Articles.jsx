import React from 'react'
import { article } from './db/data'

const Articles = () => {
  return (
    <>
        <div className="w-full xl:h-[700px] flex justify-center items-center">
            <div className="container lg:w-11/12 m-auto flex justify-center items-center">
                <div className="xl:w-[100%] w-[90%] flex flex-col gap-6">
                    <div className="flex justify-center xl:justify-start">
                        <h1 className='text-[43px]'>Latest Articles</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {article.map((article) => (
                            <div className="flex flex-col gap-6 md:w-auto xl:w-auto xl:h-[300px] md:my-8" key={article.id}>
                                <div className="">
                                    <img src={article.image} alt="" className='h-[200px] w-[100%]'/>
                                </div>
                                <div className="flex flex-col gap-2 p-3">
                                    <h1 className='text-[10px] text-gray-400 '>{article.title}</h1>
                                    <p className='text-[18px] leading-[1.5rem] hover:text-LimeGreen cursor-pointer text-gray-500'>{article.subtitle}</p>
                                    <p className='text-[13px] text-gray-400'>{article.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default Articles