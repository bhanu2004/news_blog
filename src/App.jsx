import React, { useState } from "react";
import newsData from "./data";
import News from "./News";

const App = ()=>{
    const [news, setNews] = useState(newsData);
    const RemoveArticle=(id)=>{
        const newNews = news.filter((news)=> news.id !=id);
        setNews(newNews);
    }
    if(news.length==0){
        return(
            <div className="container">
                <div className="heading"><h1>NEWS TOMMOROW</h1></div>
                        <div className="noNews">
                            <h1>No new news left</h1>
                            <button className="refresh" onClick = {()=>setNews(newsData)}>Refresh</button>
                        </div>
                
            </div>
        )
    }
    else{
        return(
            <>
                <div className="container">
                    <div className="heading"><h1>NEWS TOMMOROW</h1></div>
                    <News removeArt={RemoveArticle} newsData = {news} />
                    
                </div>
                
            </>
        )
    }
}
export default App;