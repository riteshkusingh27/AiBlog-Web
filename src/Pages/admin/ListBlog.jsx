import React from 'react'
import { useState } from 'react'
import {assets,blog_data} from '../../assets/assets'
import { useEffect ,useState } from 'react'

const ListBlog = () => {


    //   state to stoere the blog data
      
    const [blogs,setBlogs] = useState([])
    const fetchBlogs = async () => {
             setBlogs(blog_data)
    }
    useEffect(()=>{
        fetchBlogs()
    },[])


  return (
    <div>

       <div className="">

       </div>


    </div>
  )
}

export default ListBlog