import React, {useState, useEffect}from 'react';
import Card from '../UI/Card';
import './style.css';

import blogPost from '../../data/blog.json';
import Post from '../../containers/Post';

/**
* @author
* @function BlogPost

**/

const BlogPost  = (props) => {

    const [ post, setPost ] = useState({
     id: "",
     blogCategory: "",
     blogTitle : "",
     slug: "",
     postedOn: "",
     author: "",
     blogImage: "",
     blogText: ""
    });

    const [ slug, setSlug ] = useState('');
    

    useEffect(() => {
      const slug = props.match.params.slug;
      const post = blogPost.data.find(post => post.slug == slug);
      setPost(post);  
      setSlug(slug);
    }, [post, props.match.params.slug]);

    if (post.blogImage == "") return null;

  return(
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                 <span className="blogCategory">{post.blogCategory}</span>
                 <h1 className="postTitle">{post.blogTitle}</h1>
                 <span className="postedby">posted on{post.postedOn} by {post.author}</span>
                </div>

                <div className="postImageContainer">
                    <img src={require(`../../blogPostImages/` + post.blogImage).default} alt="Post Image" />
                </div>

                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>

                </div>
            </Card>
        </div>
    
   )

 }

export default BlogPost
