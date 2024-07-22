import React, {useEffect,useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner"

import NewsDetails from './NewsDetails'



const News = (props) => {

  // HandlePreviousButton = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   })
  //   this.UpdateComponent();
  // }

  // HandleNextButton = async () => {
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.UpdateComponent();
  // }

  const Capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const  UpdateComponent= async ()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parseddata = await data.json()
    setArticles( parseddata.articles)
    setTotalResults(parseddata.totalResults);
    setLoading(false)
    props.setProgress(100);
  }
  
  useEffect(() => {
        document.title=`${Capitalize(props.category)} - NewsMonkey`
        UpdateComponent();
        // eslint-disable-next-line
  }, [])

  const fetchMoreData= async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)
    setLoading(true)
    let data = await fetch(url);
    let parseddata = await data.json()
    setArticles(articles.concat(parseddata.articles))
    setTotalResults( parseddata.totalResults) 
    setLoading(false)  
  }


    return (
      <>
          <h1 className='text-center' style={{margin:"90px 0px 30px 0px"}}>NewsMonkey - Top {Capitalize(props.category)} Headlines</h1>
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={loading && <Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element,index) => {
              return <div className="col-md-4" key={index}><NewsDetails title={element.title?element.title:"Title Does not available for this"} description={element.description ? element.description.slice(0, 90) : ''} imgUrl={element.urlToImage ? element.urlToImage : "https://img.onmanorama.com/content/dam/mm/en/news/india/images/2021/8/10/congress-cpm-bjp-logo.jpg"} url={element.url} date={element.publishedAt} author={element.author} name={element.source.name} /></div>
            })}
          </div>
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" onClick={this.HandlePreviousButton} className="btn btn-dark">&#11104; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" onClick={this.HandleNextButton} className="btn btn-dark">Next &#11106;</button>
          </div> */}
          </div>
          </InfiniteScroll>
          
      </>
    )
}

export default News
