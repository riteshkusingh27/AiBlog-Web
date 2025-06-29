import React from 'react'
import {assets} from '../../assets/assets'

const TablePage = ({blog,fetchBlogs,index}) => {

    const {title,createdAt} = blog; 
    const BlogDate = new Date(createdAt);

  return (
    <tr className="border-y border-gray-600">
        <th classNae="px-2 py-2">
            {index}
        </th>
        <td className="px-2 py-3">{title}</td>
        <td className="px-2 py-3 max-sm:hidden">{BlogDate.toDateString()}</td>
        <td className="px-2 py-3 max-sm:hidden">
            <p className={`${blog.isPublished?'text-grenn-500':"text-orange-500"}`} 
            >{blog.isPublished?'Published ' :'Unpublished'}</p>
        </td>
        <td className="px-2 py-4 flext text-sm gap-3">
                  <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
                    {blog.isPublished?'Publish ' :'Unpublish'}
                    </button>   
                    <img src={assets.cross_icon} classNmae="w-8 hover:scale-110 transition-all cursor-pointer" alt="" />   
        </td>
    </tr>
  )
}

export default TablePage