import "../stylesheet/newsbody.css"

function NewsBody(){
    return(
        <div className="newsbody">
            <section className="newsbody-header">
                <h1>Local Morning News</h1>  
            </section>
            <hr />
            <section>
                <ul>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mai labore consequuntur nostrum neque f</p>
                            <small> 1hr ago</small>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mai labore consequuntur nostrum neque f</p>
                            <small> 1hr ago</small>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mai labore consequuntur nostrum neque f</p>
                            <small> 1hr ago</small>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mai labore consequuntur nostrum neque f</p>
                            <small> 1hr ago</small>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}
export default NewsBody;