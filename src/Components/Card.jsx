import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
const Card = (props) => {
    let course =props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
        //logic
        if(likedCourses.includes(course.id)){
            //phele se like hua pada tha
            setLikedCourses((prev) => prev.filter((cid) => (cid !==course.id)));
            toast.warning("like removed");
        }
        else{
            //phele se like nahi hai ye course
            //insert karna h ye course liked courses mai
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty phele se 
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("Liked Succeddfully");

        }
         
    }




    return(
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-1 bottom-1
             grid place-items-center '>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ?
                        (<FcLikePlaceholder font-size="1.75rem"/>) : 
                        (<FcLike font-size="1.75rem"/>)
                    }
                </button>
            </div>
                      
            </div>

            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>
        </div>
    )

}

export default Card