import React from 'react'

const NewsDetails =(props)=> {
    return (
      <>
        <div className="card my-3" >
        <img className="card-img-top" height={240} src={props.imgUrl} alt='News Details' />
          <div className="card-body">
            <h4 className="card-title"><span style={{width: "100%"}}className="badge  expand-lg badge-secondary">{props.name}</span></h4>
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}....</p>
            <p className="card-text"><small className='text-muted'>By {props.author?props.author:"unknown"} on {new Date(props.date).toGMTString()}</small></p>
            <a href={props.url} rel="noreferrer" target='_blank' className="btn btn-sm  btn-primary">Read More</a>
          </div>
        </div>
      </>
    )
}

export default NewsDetails
