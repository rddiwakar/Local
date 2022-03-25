

import "../stylesheet/newssection.css";
import DashHeader from "./dashheader";

function NewsSection({topics, setTopics}){
       
    return(
        <div className="newsbody">
            {window.innerWidth < 760 ? <DashHeader setTopics={setTopics} />:<>
                <section className="newsbody-header">
                    <h1>News</h1>  
                </section>
                <hr />
            </>}
            
            <section>
                <ul>
                    {topics.map((topic)=>{
                        return (<li key={topic.title + Math.random()}>
                                    <div>
                                        <a href={topic.url} target="_blank" rel="noreferrer">
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