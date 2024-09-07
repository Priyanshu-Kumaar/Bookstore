import React, { useEffect,useState } from 'react';
import Cards from './Cards';
import axios from "axios";
import {Link} from "react-router-dom";

const Course = () => {
    const [book,setBook]=useState([]);
    useEffect(()=>{

        //Calling data from Database 
        const getBook=async()=>{
            try {
             const res= await axios.get('http://localhost:3001/book');
             setBook(res.data)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        getBook();
    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-20 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'>We're delighted to have you {" "}
                <span className='text-pink-500'> here!:)</span>
            </h1>
            <p className='mt-12 '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa alias magnam quo numquam, eos dolorem! Eos, at itaque. Consequatur necessitatibus dolor libero aliquam cumque magnam illum alias totam consequuntur maxime!
                Distinctio quas architecto labore expedita! Eum, voluptates cum! Ut in cupiditate quam amet aliquid, enim quidem, obcaecati autem accusantium aperiam recusandae maxime deleniti esse quae vero? Iure rem tenetur laborum!
                Sed nulla error, eum nesciunt voluptates tempora at eaque sunt perspiciatis. In modi, corrupti nesciunt commodi hic ab molestiae enim repellat, saepe fugit eius possimus, provident qui perferendis architecto autem.
            </p>

            <Link to="/">
            <button className='bg-pink-600 text-white px-4 py-2 mt-6  rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>

          
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
             {
                book.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))
             }
        </div>



    </div>
    
    
    </>
  )
}

export default Course