
import {useState} from 'react'
import { useParams } from 'react-router-dom'        
import { useEffect } from 'react'
import {blog_data} from '../assets/assets'

const Blog = () => {
    const {id} = useParams();
    const [data,setData] = useState(null);
    // single blog data 
    const fetchblog = async()=>{
        blog_data.find(item=>
            item._id ==id? setData(item) : null
        )
    }

    // useEffect to fetch b
    useEffect(()=>{
        fetchblog();
    },[])

  return  data?(
    <div>
        <h1>blog</h1>
    </div>
  ) : <div>Loading</div>
}

export default Blog