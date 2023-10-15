import React from 'react'
import bedroom from "../assets/bedroom.jpg"
import Image from 'next/image'
import { CiLocationOn, CiUser } from 'react-icons/ci'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaCalendarDays, FaStar } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai"
import uk from "../assets/uk.jpg"
import france from "../assets/france.jpg"
import turkey from "../assets/turkey.jpg"
import hotel1 from "../assets/hotel1.jpg"
import hotel2 from "../assets/hotel2.jpg"
import hotel3 from "../assets/hotel3.jpg"
import hotel4 from "../assets/hotel4.jpg"
import hotel5 from "../assets/hotel5.jpg"
import france1 from "../assets/france1.jpg"
import france2 from "../assets/france2.jpg"
import france3 from "../assets/france3.jpg"
const Content = () => {
  return (
    <main>
    <div className="py-6">
      <div className="relative w-full mx-auto px-4 sm:px-6 md:px-2">
        {/* Replace with your content */}
          <Image src={bedroom} alt="bedroom" className='h-[200px] rounded-2xl object-cover'/>
          <div className='bg-white lg:h-[72px] rounded-2xl md:max-w-4xl m-auto lg:my-8 left-0 right-0 lg:absolute lg:-bottom-16 lg:py-3 lg:px-6'>
            <div className='flex lg:flex-row flex-col justify-between items-center space-x-3'>
                <div className='inline-flex shrink-0 justify-between items-center gap-6'>
                    <div className='flex flex-1 items-center  space-x-3 text-[#AEB7C6] text-lg'>
                        <CiLocationOn size={20}/>
                        <span>Where Are You Going?</span>
                       
                    </div>
                    
              
                    <div className='border-l border-[#AEB7C6] h-6'></div>            
                </div>
                <div className='flex flex-1 justify-between items-center gap-6'>
                    <div className='flex items-center  space-x-3 text-[#AEB7C6] text-lg'>
                    <FaCalendarDays size={20}/>
                        <span>Check-in Date</span>
                       
                    </div>
                    
                    <MdKeyboardArrowDown size={20}/>
                    <div className='border-l border-[#AEB7C6] h-6'></div>            
                </div>
                <div className='flex flex-1 justify-between items-center gap-6'>
                    <div className='flex items-center  space-x-3 text-primary text-lg'>
                        <CiUser size={20}/>
                        <span>3 adults</span>                     
                    </div>       
                    <MdKeyboardArrowDown size={20}/>        
                </div>
                <button className='bg-[#4A4E73] py-3 px-6 text-white shadow-2xl rounded-2xl'>Search</button>
            </div>
          </div>
        {/* /End replace */}
        
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 md:px-2 my-8 space-y-6">
        <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-medium text-primary">Trending destinations</h1>
        <div className='flex items-center space-x-3'>
            <div className='border text-primary bg-white border-primary h-6 w-6 rounded-lg'>
                <MdKeyboardArrowLeft />
            </div>
            <div className='text-white rounded-lg bg-primary h-6 w-6'>
                <MdKeyboardArrowRight />
            </div>
        </div>
        </div>
       <div className='flex flex-wrap gap-6'>
           <Card img={france} title="Montmartre, France" text="Visiting the best tourist areas choosen by the audience" amt="450,000,00" rating={4/5} />
           <Card img={turkey} title="Montmartre, France" text="Visiting the best tourist areas choosen by the audience" amt="450,000,00" rating={4/5} />
           <Card img={uk} title="Montmartre, France" text="Visiting the best tourist areas choosen by the audience" amt="450,000,00" rating={4/5} />
       </div>
       <div className='flex space-x-3 justify-center'>
        <div className='bg-[#D9D9D9] rounded-full h-3 w-3'></div>
        <div className='bg-[#D9D9D9] rounded-full h-3 w-3'></div>
        <div className='bg-primary rounded-full h-3 w-3'></div>
       </div>
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 md:px-2 space-y-3">
        <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-medium text-primary">Best Offers</h1>
        <div className='text-primary'>
          <p>View All</p>
        </div>
        </div>
       <div className='flex justify-between gap-6 flex-wrap'>
           <OfferCard img={hotel1} title="7Seasons Apartments" text="Kensington/London" amt="65,00" position="right" />
           <OfferCard img={hotel2} title="Along With The Villa" text="Hungary/Budopost" amt="65,00" position="right" />
           <OfferCard img={hotel3} title="Resort and Recreation" text="Wiliametreat/Bowen" amt="65,00" position="right" />
           <OfferCard img={hotel4} title="Beautiful and Classyy" text="Citadlines Opera Paris/France" amt="65,00" position="right" />
           <OfferCard img={hotel5} title="Permanent Peace" text="Sugar Apartments/Brazil" amt="65,00" position="right" />
       </div>
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 md:px-2 my-2 space-y-3">
        <h1 className="text-2xl font-medium text-primary">Explore France</h1>
     
       <div className='flex justify-between gap-6 flex-wrap'>
           <FranceCard img={france1} title="Eiffel Tower, Paris, France" text="france area" amt="450,000,00" rating={4/5} />
           <FranceCard img={france2} title="L'Arc de Triomphe de l'Etolie" text="france area" amt="450,000,00" rating={4/5} />
           <FranceCard img={france3} title="Paris,France" text="france area" amt="450,000,00" rating={4/5} />
       </div>
      </div>
    </div>
  </main>
  )
}

export default Content

function Card({img, title, text, amt, rating}){
    return(
           <div className='flex flex-1 md:flex-row flex-col bg-white py-6 px-3 space-x-3 rounded-2xl'>
                <Image src={img} alt={title} className='w-24 h-24 object-cover rounded-xl'/>
                <div className='space-y-2 md:w-1/2'>
                    <div className='flex md:flex-row flex-col justify-between'>
                        <h1 className='text-[#424855] font-semibold md:text-xl text-base'>{title}</h1>
                        <span className='flex items-center space-x-2 text-[#F59F00]'>
                            <FaStar />
                          <span className='text-sm text-[#C4C6CA]'>{rating}</span>
                        </span>
                    </div>
                    <p className='text-[#D5D9E1]'>{text}</p>
                    <h4 className='md:text-lg font-medium'>${amt}</h4>
                </div>
           </div>
    )
}

function OfferCard({img, title, text, amt, position}){
    return(
       <div className='bg-white p-2 space-y-2 flex flex-col flex-1 rounded-2xl shadow-lg'>
         <Image src={img} alt={title} className='rounded-2xl object-cover'/>
         <h1 className='font-medium'>{title}</h1>
         <span className='flex items-center space-x-1 text-[#C6CCD7]'>
            <CiLocationOn size={20}/>
            <p className='text-sm'>{text}</p>
         </span>
         <div className='flex justify-between'>
            <span>
            <span className='text-primary font-medium'>${amt}</span>
            <span className='text-[#CFD2D8] text-sm'>/{position}</span>
            </span>
            <div className='text-[#CDD3DC] border border-[#CDD3DC] p-1 rounded-xl'>
              <AiOutlineHeart />
            </div>
         </div>
        </div>
    )
}
function FranceCard({img, title, text, amt}){
    return(
           <div className='flex flex-1 md:flex-row flex-col gap-2 bg-white p-3 space-x-3 rounded-2xl shadow-lg'>
                <Image src={img} alt={title} className='w-20 h-20 object-cover rounded-xl'/>
                <div className='space-y-2 md:w-1/2'>
                        <h1 className='text-[#424855] font-semibold md:text-lg text-base'>{title}</h1>
                    <p className='text-[#D5D9E1]'>{text}</p>
                    <h4 className='text-base font-medium'>${amt}</h4>
                </div>
           </div>
    )
}