import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {AiOutlineClose, AiOutlineHeart} from "react-icons/ai";
import {SlBag} from "react-icons/sl";
import {MdOutlineExpandMore} from "react-icons/md";
import Image from "next/image";
const SearchBar = () => {
    return (
        <div className='bg-white pb-1'>
            <div className='container w-full lg:w-[85%] py-2 ' >

                <div className="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row gap-y-5 md:gap-y-3">

                    <div className='flex-1 flex justify-start items-center'>
                        <Image src="/logo.png" width={100} height={100} alt="logo"/>
                    </div>

                    <div className='flex-[2] border-[1px] border-[#b2b2b2] py-3 px-4 relative  overflow-hidden'>

                        <div className='flex-1 flex justify-start items-center px-3 '>
                            <span className='flex-1 min-w-max  flex justify-between items-center border-r-[1px] border-gray '>
                                All Cetegory <MdOutlineExpandMore size={22} className='text-[#b2b2b2] mr-3' />
                            </span>

                            <div className='flex-[2] '>
                                <input type="text "
                                       placeholder='What do you need'
                                       className='outline-none border-0 text-black focus:placeholder:text-gray-700 focus:caret-black z-0 w-full ml-4 w-full -z-10 transition-all duration-[3000] ease-in-out'
                                />
                            </div>
                        </div>

                        <span className='absolute right-0 top-0 w-auto h-auto bg-yellow py-[1rem] px-4 z-10 overflow-hidden '> <BiSearchAlt2 size={22}/></span>
                    </div>


                    <div className="flex-1 flex justify-start md:justify-end items-center space-x-4">

                        <div className='flex justify-between items-center space-x-6 text-xl'>
                           <div className='relative'>
                                <AiOutlineHeart className='text-xl text-black font-bold'/>
                               <span className='w-4 h-4 rounded-full text-[10px] text-center bg-yellow text-white p-[8px] flex justify-center items-center absolute -top-1.5 -right-2 z-10'>2</span>
                           </div>
                            <div className=' relative  '>
                                <span className='w-4 h-4 rounded-full text-[10px] text-center bg-yellow text-white p-[8px] flex justify-center items-center absolute -top-1.5 -right-2 z-10'>4</span>

                               <div className="bagIcon ">
                                   <SlBag className='text-xl text-black font-bold '/>
                                   <div className="bagProduct flex justify-center items-center flex-col gap-y-3 p-5  bg-white transition-all duration-500 absolute top-[80px] -right-[80px] w-[350px] opacity-0 -z-40 rounded-md border-[.2px] border-opacity-30 border-yellow  ">
                                       <div className="w-full flex justify-between space-y-3 gap-x-4 items-center">
                                           <Image src='/select-product-1.jpg' className="flex-1" width={80} height={80} alt='selected product' />
                                           <div className="flex-[3] flex justify-between items-center gap-x-2">
                                               <div className="flex-[4] flex justify-start items-start space-y-1.5 flex-col">
                                                   <h5 className='text-yellow text-base'>$145.00 x 1 </h5>
                                                   <h2 className="text-base text-blackMd ">Kabino Bedside Table</h2>
                                               </div>
                                               <button className='flex-1 cursor-pointer bg-transparent text-gray hover:text-black '><AiOutlineClose size={25} color={'#6e6a6a'}  /></button>
                                           </div>
                                       </div>
                                       <div className="w-full flex justify-between space-y-3 gap-x-4 items-center">
                                           <Image src='/select-product-1.jpg' className="flex-1" width={80} height={80} alt='selected product' />
                                           <div className="flex-[3] flex justify-between items-center gap-x-2">
                                               <div className="flex-[4] flex justify-start items-start space-y-1.5 flex-col">
                                                   <h5 className='text-yellow text-base'>$145.00 x 1 </h5>
                                                   <h2 className="text-base text-blackMd ">Kabino Bedside Table</h2>
                                               </div>
                                               <button className='flex-1 cursor-pointer bg-transparent text-gray hover:text-black '><AiOutlineClose size={25} color={'#6e6a6a'}  /></button>
                                           </div>
                                       </div>
                                       <hr className='bg-gray opacity-[.15] mt-3 w-full '/>
                                       <div className='flex justify-between mt-2  w-full '>
                                           <h6 className="text-yellow text-base uppercase">total</h6>
                                           <h6 className="text-yellow text-base uppercase">$220.00</h6>
                                       </div>
                                       <button className="uppercase w-full text-white bg-black  hover:bg-transparent rounded-md hover:text-black  border-[2px] border-transparent hover:border-black cursor-pointer py-2 text-[13px] font-bold transition-all duration-300 ease-in ">view card</button>
                                       <button className="uppercase w-full text-white bg-yellow hover:bg-transparent rounded-md hover:text-yellow border-[2px] border-transparent hover:border-yellow cursor-pointer py-2 text-[13px] font-bold transition-all duration-300 ease-in ">check out</button>
                                   </div>
                               </div>

                            </div>
                        </div>
                        <strong className='font-bold text-lg text-black ml-3 '>$154.00</strong>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchBar;