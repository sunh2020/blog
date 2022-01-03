import React from 'react'
import './style.css';
import Card from '../../../components/UI/Card';
import flower2 from '../../../blogPostImages/flower2.jpg';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
    <Card style={{marginBottom: '20px'}}>
      <div className="postImageWrapper">
          <img src={flower2} alt="flower2" />
      </div>

      <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>Flowers</h2>
          <span>posted on May 10, by Sun</span>
          <p>Flowers are a gift to this earth. </p>
          <button>Read More</button>
      </div>
      

    </Card>

    </div>
   )

 }

export default RecentPosts