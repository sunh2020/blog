import React from 'react'
import Card from '../../components/UI/Card';
import './style.css';

/**
* @author
* @function AboutMe
**/

const AboutMe = (props) => {
  return(
    <div>
     <Card style={{marginBottom: '20px'}}>
      <div className="postImageWrapper">
      <div style={{textAlign:'center'}}>
      <span>Featured</span>
          <h2>Flowers</h2>
          <span>posted on Augst 6, by Sun</span>
          <p>Hi, my name is Sun and a web devloper. I'm looking for an opportunity in Frontend web developer position. </p>
          <button>Read More</button>
      </div>
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

export default AboutMe