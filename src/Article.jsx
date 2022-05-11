import React, { useState } from "react";
const Article = ({id,heading,image,date,time,desc,removeArt})=>{
    const [fullDesc, setFullDesc] = useState(false);
    return(
        <div className="article">
            <h2 className="articleHeading">{heading}</h2>
            <p>{date} | {time}</p>
            <img src={image} alt="" />
            <p>{fullDesc?desc:`${desc.substring(0,300)}...`} <button className="showSize" onClick={()=>setFullDesc(!fullDesc)}>Read {fullDesc?'less':'more'}</button> </p>
            <button className="removeButton" onClick={()=>removeArt(id)}>Remove</button>
        </div>
    )
}
export default Article;