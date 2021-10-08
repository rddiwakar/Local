import "../stylesheet/postform.css";
function MyPost(){
    return(
        <div className="myPost">
            <section className="postform-post">
                <div className="form-post-header">
                    <img className="logo-img" src ="https://pbs.twimg.com/profile_images/1395655338628587524/XOxnFDlg_400x400.jpg" alt="profile"  />
                    <h3>rddiwakar</h3>
                </div>
                <hr />
                <div>
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus necessitatibus assumenda facilis vero maxime cum molestias aliquid error quam nostrum velit illum sit, quos qui quibusdam et id neque. Eum!</p>
                </div>
                <div>
                    <img className="postimg" src="https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg" alt="dog" />
                </div>
                <div>
                    <button>Like</button>
                </div>
            </section>
        </div>
    )
}
export default MyPost;