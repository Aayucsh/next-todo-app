"use client"
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [Task, setTask] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setTask([...Task, { title, desc }])
    setTitle("")
    setDesc("")
    console.log(Task)
  }

  function deleteItem(i) {
    let copyTask = [...Task]
    copyTask.splice(i, 1)
    setTask(copyTask)
  }

  let renderTask = <h1 className='text-xl sm:text-2xl text-gray-600 font-thin text-center'>No Task Available</h1>
  if (Task.length > 0) {
    renderTask = Task.map((t, i) => {
      return (
        <div key={i} className='rounded-md w-full sm:w-[80%] mx-auto mb-4 overflow-hidden'>
          <li className='flex flex-col sm:flex-row justify-between items-center p-4 sm:p-5 bg-[#007F5F] rounded'>
            <div className='flex flex-col sm:flex-row justify-between w-full sm:w-2/3 mb-3 sm:mb-0'>
              <h4 className='text-xl sm:text-2xl text-[#fff] font-semibold mb-2 sm:mb-0'>{t.title}</h4>
              <h5 className='text-lg sm:text-xl text-[#fff] font-medium'>{t.desc}</h5>
            </div>
            <button onClick={() => deleteItem(i)} className='w-full sm:w-auto bg-[#D32F2F] px-4 py-2 mt-3 sm:mt-0 hover:outline-dashed text-white font-bold rounded flex items-center justify-center'>
              Delete <MdDelete className='ml-2'/>
            </button>
          </li>
        </div>
      )
    })
  }

  return (
    <>
      <h1 className="bg-[#007F5F] text-[#ffffff] py-5 text-center text-3xl font-bold">To-Do List</h1>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-center items-center bg-[#] p-5'>
        <input type="text" className="w-full sm:w-auto mb-4 sm:mb-0 h-12 sm:mx-2 border-2 outline-none border-[#] px-4 rounded" placeholder="Enter Text Here" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" className="w-full sm:w-auto mb-4 sm:mb-0 h-12 sm:mx-2 border-2 outline-none border-[#] rounded px-4" placeholder="Enter Description Here" value={desc} onChange={e => setDesc(e.target.value)} />
        <button className="w-full sm:w-auto font-bold bg-[#007F5F] border-2 border-[#005ED4] text-white px-5 py-3 rounded">Add Task</button>
      </form>
      <hr />
      <div className='p-4 sm:p-8'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page
