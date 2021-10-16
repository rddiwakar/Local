// import NewsTopic from "./newsTopic";

import "../stylesheet/newssection.css";

function NewsSection({topics}){
        console.log(topics)
    return(
        <div className="newsbody">
            <section className="newsbody-header">
                <h1>Local Morning News</h1>  
            </section>
            <hr />
            <section>
                <ul>
                    {topics.map((topic)=>{
                        return (<li>
                                    <div>
                                        <a href={topic.url} target="_blank">
                                            <h4>{topic.title}</h4>
                                            <p>{topic.description.slice(0,80)}.....</p>
                                            <small>{topic.publishedAt}</small>
                                        </a>
                                    </div>
                                </li>)
                    })}
                    
                </ul>
            </section>
        </div>
    )
}
export default NewsSection;