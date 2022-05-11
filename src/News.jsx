import React from "react";
import Article from "./Article";
const News = ({removeArt,newsData})=>{
    // const data = newsData.JSON();

        return(
            <div className="newsSection">
                {newsData.map((news)=>{
                    return <Article removeArt = {removeArt} key={news.id} {...news} />
                })}
              
            </div>
        )


}
export default News;