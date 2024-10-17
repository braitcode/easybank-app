import React from 'react';
import { choose } from './db/data';

const Choose = () => {
  return (
    <>
      <div className="bg-LightGrayishBlue xl:w-full xl:h-[650px] flex justify-center items-center">
        <div className="container lg:w-11/12 m-auto flex justify-center items-center">
          <div className="xl:w-[100%] w-[90%] flex flex-col gap-8">
            <div className="xl:flex xl:flex-col xl:items-start flex flex-col justify-center items-center gap-6">
              <h1 className="xl:text-[43px] text-[35px] text-center">
                Why Choose Easybank?
              </h1>
              <p className="xl:w-[60%] w-[85%] text-[20px]">
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>
            
            {/* Cards layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {choose.map((choose) => (
                <div
                  className="flex flex-col gap-6 md:w-auto xl:w-auto h-[300px] md:my-8"
                  key={choose.id}
                >
                  <div className="flex justify-center xl:justify-start">
                    <img src={choose.image} alt="" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h1 className="text-[24px] text-center xl:text-left">{choose.title}</h1>
                    <p className="text-[16px]">{choose.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
