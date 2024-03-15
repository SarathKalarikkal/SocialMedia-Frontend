import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { useNavigate } from 'react-router-dom'
import FeedList from '../feed/FeedList'
import CreateFeed from '../feed/CreateFeed'
import axios from 'axios'


function Home(props) {

  const navigate = useNavigate()

  const [posts, setPosts] = useState([])

 

const fechPost =()=>{
  const backendApiUrl = "https://instagram-backend-y55a.onrender.com";
    let token = localStorage.getItem("Auth");
     axios
      .get(`${backendApiUrl}/post/list?page=0&limit=3`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPosts(res.data.post);
      })
      .catch((err) => console.log("Error", err));
}

console.log("pp",posts);

useEffect(()=>{
  const token = localStorage.getItem("Auth")
  if(!token){
    navigate('/login')
  }
  fechPost()
},[])



  return (
    <>
    <MainLayout>
       <div className="container">
          <div className="row justify-content-center">      
              <CreateFeed />
               <div className="col-md-7">
                <hr />
                </div>   
              <FeedList posts={posts} />
          </div>
       </div>
    </MainLayout>
    </>
  )
}

export default Home