import React, { useState } from 'react'
import UploadItem from '../uploads/UploadItem'
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function CreateFeed() {

const [tab, setTab]= useState("image")

const {control,register,handleSubmit,reset,formState: { errors }} = useForm();

const CreatePost = (data)=>{

    const token = localStorage.getItem("Auth")

    const backendApiUrl = "https://instagram-backend-y55a.onrender.com"
     axios.post(`${backendApiUrl}/post/create`, {
       ...data,
       contentType : tab
    },{
        headers: {
            Authorization: "Bearer " + token,
          },
    }
    
    )
    .then((res) => {
      console.log("response", res)
      console.log("response", res.data)

      toast.success("You created a new post!")
      reset()
    })
    .catch((err) => {
      console.log("error", err);
       toast.error(err.response.data.message)
    })
}

  return (
    <>
      <div className="col-md-7 card text-center my-4 p-0">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item" style={{cursor:"pointer"}}>
        <a className={`nav-link ${tab === 'image' && 'active'}`} onClick={()=>setTab("image")}>Image</a>
      </li>
      <li className="nav-item" style={{cursor:"pointer"}}>
        <a className={`nav-link ${tab === 'video' && 'active'}`} onClick={()=>setTab("video")}>Video</a>
      </li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Upload Image</h5>
    <form onSubmit={handleSubmit(CreatePost)}>
    <Controller
        control={control}
        name="contentLink"
        rules={{required : true}}
        render={({ field: { onChange, value} }) => (
            <UploadItem onChange={onChange} value={value} type={tab}/>
        )}
      />
   
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register("description", { required: true })}></textarea>
     </div>
      
      <div className="d-grid">
      <button type="submit" className="btn btn-primary">Post</button>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default CreateFeed
