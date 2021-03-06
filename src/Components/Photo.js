import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

function Photo(props){
    const post = props.post;
    return <figure className="figure">
                <Link to={`/Single/${post.id}`}><img src={post.imageLink} className="photo"
                alt={post.description} /></Link>
                <figcaption>
                    <p>{post.description}</p>
                </figcaption>
                <div className="button-container">
                    <Link className="button" to="" onClick={()=>{
                        props.startRemovingPost(props.index, post.id)
                        props.history.push('/')
                    }}>Remove</Link>
                    <Link className="button" to={'/Single/'+post.id}>
                        <div className="comment-count">
                            <div className="speech-bubble"></div>
                            {props.comments[post.id]? props.comments[post.id].length:0}
                        </div>
                    </Link>
                </div>
            </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}

export default Photo;