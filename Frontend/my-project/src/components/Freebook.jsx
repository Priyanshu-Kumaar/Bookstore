import React,{useState,useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import Slider from "react-slick";
import Cards from './Cards';



const Freebook = () => {

  const [book,setBook]=useState([]);
  useEffect(()=>{
  //Calling data from Database 
  const getBook=async()=>{
      try {
       const res= await axios.get('http://localhost:3001/book');
       const data=res.data.filter((data)=>data.category=="Free");
       setBook(data);
          
      } catch (error) {
          console.log(error)
          
      }
  }
  getBook();
  },[setBook])
    

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };




  return (
   <>
   <div className='max-w-screen-2xl container mx-auto px-4  md:px-20 '>
    <div>
    <h1 className='font-semibold text-xl pb-2'>
   Free offered Courses
 </h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum nam reiciendis cum, praesentium quo minus architecto unde libero ut rerum ipsam consectetur assumenda in! Sequi natus vel voluptate temporibus. </p>
    </div>
<div>
   <Slider {...settings}>
    {book.map((item)=>(
      <Cards item={item} key={item.id}/>

    ))}
      </Slider>
   </div>
   </div>



   </>
  )
}

export default Freebook