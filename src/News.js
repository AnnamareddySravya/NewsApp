import React, { useState, useEffect } from 'react';
import NewsContent from './NewsContent';
import Spinner from './Spinner.gif';
import InfiniteScroll from 'react-infinite-scroll-component';
import './News.css'
function News({ category, setProgress,  }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 20;

  // const [showLoadingBar, setShowLoadingBar] = useState(0);

  useEffect(() => {
    setArticles([]);
    setLoading(true);
    setPage(1);
    getData();
  }, [category, setProgress]);

  // useEffect(() => {
  //   setShowLoadingBar(loading);
  // }, [loading]);
  // useEffect(() => {
  //   setProgress(0);
  //   setTimeout(()=>{
  //     setProgress(100);
  //   },2000)
  // },[setProgress]);

  async function getData() {
    try {
setProgress(50);

      let Url;
      if (category === 'Home') {
        Url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=632494a557b74e319b5e2726d2181dcb&page=${page}&pageSize=${pageSize}`;
      } else {
        Url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=632494a557b74e319b5e2726d2181dcb&page=${page}&pageSize=${pageSize}`;
      }
      let res = await fetch(Url);
      let data = await res.json();

      if (data.articles?.length > 0) {
        setArticles(prevarticles => [...prevarticles, ...data.articles]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setProgress(100);

      setLoading(false);

      
    }
  }

  return (
    <div className='container '>
      <h1 className='text-center news-h1'>NEWSWEB - {category} HeadLines</h1>

      {/* <TopLoading color="red" height={5} progress={showLoadingBar ?  70 : 100} /> */}

      <InfiniteScroll
        dataLength={articles.length}
        next={getData}
        hasMore={true}
        loader={<div className='text-center'>{loading && <img src={Spinner} alt='Loading...' />}</div>}
        scrollThreshold={0.9}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((article, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <NewsContent
                  title={article.title.slice(0, 35)}
                  description={article.description}
                  author={article.author}
                  imageURL={article.urlToImage}
                  url={article.url}
                  date={article.publishedAt}
                  source={article.source.name}
                />
              </div>
            ))}
          </div>
        </div>

      </InfiniteScroll>
    </div>
  );
}

export default News;