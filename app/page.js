"use client"
import React,{useState} from 'react'
import { MdDelete } from "react-icons/md";

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [Task, setTask] = useState([])

function handlesubmit(e){
  e.preventDefault()
  setTask([...Task, {title,desc}])
  settitle("")
  setdesc("")
  console.log(Task)
}
function deleteitem(i){
  let copytask = [...Task]
  copytask.splice(i,1)
  setTask(copytask)
}
let renderTask = "No Task Available"
if(Task.length>0){
renderTask = Task.map((t,i)=>{
  return <li className='flex justify-between items-center mb-5 bg-slate-300 rounded mt-5 p-8'>
    <div className='flex justify-between w-1/2'>
      <h4 className='text-2xl text-[#111] font-semibold'>{t.title}</h4>
      <h5 className='text-xl text-[#111] font-medium'>{t.desc}</h5>
    </div>
    <button onClick={()=> deleteitem(i)} className='bg-[#E5325D] px-4 py-2 hover:outline-dashed text-white font-bold rounded flex items-center'>Delete <MdDelete className='ml-2'/></button>
  </li>
})
}
  return (

    <>
    <h1 className="bg-[#1877F2] text-[#ffffff] py-5 text-center text-3xl font-bold">To-Do List</h1>
    <form onSubmit={handlesubmit} className='flex justify-center items-center bg-[#]'>
    <input type="text" className=" mt-5 h-12 m-5 border-2 outline-none border-[#] px-7 ml-0 rounded " placeholder="Enter Text Here" value={title} onChange={e=>{settitle(e.target.value)}}/>
    <input type="text" className="mt-5 h-12 m-5 border-2 outline-none border-[#] rounded px-7 ml-0 " placeholder="Enter Description Here" value={desc} onChange={e=>{setdesc(e.target.value)}}/>
    <button className="font-bold bg-[#1877F2] border-2 border-[#005ED4] text-white px-5 py-3 rounded" >Add Task</button>
    </form>
    <hr />
    <div className=' p-8 '>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page
