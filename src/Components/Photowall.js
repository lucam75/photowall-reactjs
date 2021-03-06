import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function Photowall(props){
    return <div>
                <div className="photoGrid row">
                    {props.posts.sort((a,b) =>{return b.id - a.id}).map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
                </div>
            </div>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Photowall;