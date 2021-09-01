import Post from "../post/Post";
import "./feed.css";

import Share from '../Share/Share'

export default function Feed() {

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="jobs_feed"> 
          <Share /> 
          <br/>      
          Services Feed        
        </div>
        
        <Post />
      </div>
    </div>
  );
}