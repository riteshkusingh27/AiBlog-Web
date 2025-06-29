import React from 'react'
import {assets,dashboard_data} from '../../assets/assets'
import {useEffect,useState} from 'react'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState({
        blogs:0,
        comments:0,
        drafts:0,
        recentBlogs:[]
    })

    const fetchDashboardData = async () => {
        setDashboardData(dashboard_data)
    }
    useEffect(() => {
         fetchDashboardData()
    }, [])
    
  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">

           <div className="flex flex-wrap gap-5 ">

                      {/* diplay dashboard div  */}
            <div className="flex items-center  gap-4 bg-white p-4 rounded min-w-58 hover:scale-105 transition-all">
                <img src={assets.dashboard_icon_1} alt="" />
                <div>
                <p className="text-xl  font-semilbold text-gray-600">{dashboardData.blogs}</p>
                <p className="text-gray-400 font-light">Blogs</p>
            </div>
            </div>
            <div className="flex items-center  gap-4 bg-white p-4 rounded min-w-58 hover:scale-105 transition-all">
                <img src={assets.dashboard_icon_2} alt="" />
                <div>
                <p className="text-xl  font-semilbold text-gray-600">{dashboardData.comments}</p>
                <p className="text-gray-400 font-light">Comments</p>
            </div>
            </div>
            <div className="flex items-center  gap-4 bg-white p-4 rounded min-w-58 hover:scale-105 transition-all">
                <img src={assets.dashboard_icon_3} alt="" />
                <div>
                <p className="text-xl  font-semilbold text-gray-600">{dashboardData.drafts}</p>
                <p className="text-gray-400 font-light">Drafts</p>
            </div>
            </div>
            

           </div>

                  {/* dahboard analytics div  */}


    </div>
  )
}

export default Dashboard