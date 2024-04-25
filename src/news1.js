import React, {useState,useEffect} from 'react'
import NewsContent  from './NewsContent'
import Spinner from './Spinner.gif'
import InfiniteScroll  from 'react-infinite-scroll-component';
function News1({category}) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const pageSize = 15;
    ;
    
    
    
      useEffect(() => {
        setArticles([]);
        setLoading(true);
        setPage(1);

        getInfo();
      }, [category]);
    
      async function getInfo() {
        
        setLoading(true);

        let ele;
        if (category === 'Home') {
          ele = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9f2071af0f0745fab68148db3a06dbe6&page=${page}&pageSize=${pageSize}`;
        } else {
          ele = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9f2071af0f0745fab68148db3a06dbe6&page=${page}&pageSize=${pageSize}`;
        }
    
        let res = await fetch(ele);
        let data = await res.json();
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(prevInfo => [...prevInfo, ...data.articles]);
          setPage(prevPage => prevPage + 1);
        }
        setLoading(false);
      }
    
    
  return (
    <div>
     <h1 className='text-center'>NEWSWEB - {category} Headlines</h1>
     <InfiniteScroll
        dataLength={articles.length}
        next={getInfo}
        hasMore={true}
        loader={<div className='text-center'><img src={Spinner} alt='Loading...' /></div>}
        scrollThreshold={0.9}
      >
        <div className='row'>
          {articles.map((article, index) => (
            <div className='col-md-3' key={index}>
              <NewsContent title={article.title.slice(0, 35)} description={article.description}author={article.author} imageURL={article.urlToImage} url={article.url} date={article.publishedAt} source={article.source.name}/>
            </div>
          ))}
        </div>
      </InfiniteScroll>

    
    </div>
  )
}

export default News1
