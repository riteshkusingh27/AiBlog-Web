import {useState} from 'react'

const Login = () => {

     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")
    const handleSubmit = async(e)=>{
        e.preventDefault()
    }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

   <div  className="w-full max-w-sm p-6 max-md:m-6 border-b-amber-50 border-gray-200 shadow-xl shadow-primary/26 rounded-lg">
    <div className="flex flex-col items-center justify-center">
           <div className="w-full py-6 text-center">
            <h1 className="text-4xl  font-extrabold"><span className="text-primary font-bold">Admin</span> Login</h1>
            
           </div>
           <form onSubmit={handleSubmit} className="mt-6 w-full sm:max-w-md text-gray-700">
                   <div className="flex flex-col ">
                    <label htmlFor="" className="font-bold">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email}
                     type="email"  required placeholder="enter your email " 
                    className="border-b-2 border-gray-300 p-2 outline-none mb-6"/>
                   </div>
                   <div className="flex flex-col ">
                    <label htmlFor="" className="font-bold">Password</label>
                    <input  onChange={(e)=>setPassword(e.target.value)} value={password}
                    type="email"  required placeholder="enter your Password " 
                    className="border-b-2 border-gray-300 p-2 outline-none mb-6"/>
                   </div>

                   <button type="submit" className=" w-full h-10 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/30 transition-all">Login</button>




           </form>
    </div>
   </div>













    </div>
  )
}

export default Login