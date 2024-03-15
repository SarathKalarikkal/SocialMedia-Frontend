import React from 'react'

function FeedItem(props) {
  console.log("pjshdasjj",props)
  return (
    <>
     <div className="col-md-7 card mb-3" style={{padding:0}}>
      {props.post.contentType === "video" ?
      <video autoPlay controls className="card-img-top">
      <source src={`https://instagram-backend-y55a.onrender.com/public/images/${props.post.contentLink}`} type="video/mp4" />
    </video>
    :
    <img src={`https://instagram-backend-y55a.onrender.com/public/images/${props.post.contentLink}`} className="card-img-top" alt="post" />
    }
        
             <div className="card-body p-4">
                <div className="row">
                    <div className="col-6 d-flex gap-3" style={{fontSize:"25px"}}>
                      <i className="fa-solid fa-heart text-danger"></i>
                      <i className="fa-regular fa-comment"></i>
                      <i className="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className="col-6 d-flex justify-content-end gap-3" style={{fontSize:"25px"}}>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                  </div>
               <h5 className="card-title mt-2">100 Likes</h5>
               <p className="card-text mb-0">
                <strong>{props.post.postedBy.fullName}</strong> {props.post.description}
               </p>
               <p className="card-text text-secondary mb-0">
                View All 10 Comments
               </p>
               <p className="card-text">
                 <small className="text-muted">3 mins ago</small>
               </p>
             </div>
           </div>
    
    </>
  )
}

export default FeedItem