import styles from './styles/Post.module.css'

const Post = () =>{
    return(
        <div className={styles.post}>
                <div className={styles.vote}>
                    <h4><i className="fas fa-caret-up"></i></h4>
                    <span className={styles.voteText}><h4>Vote</h4></span>
                    <h4><i className="fas fa-caret-down"></i></h4>
                </div>
                <div className={styles.postContent}>
                    <div className={styles.info}>
                        <span className={styles.infoText}>r/Lorem • Posted by u/Lorem 2 hours ago</span>
                        <button className={styles.joinButton}><i className="fas fa-plus"></i>Join</button>
                    </div>
                    <div className={styles.postTitle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero quas inventore voluptas.
                    </div>
                    <div className={styles.postBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur eligendi fugit sequi optio dicta. Ipsa tempora vel accusamus debitis est incidunt itaque minus corporis at a. Voluptatibus explicabo, voluptas delectus ab eum laborum nisi, velit repellendus impedit, soluta quae laudantium! A iusto sapiente ad iste nesciunt impedit nemo placeat.
                    </div>
                    <div className={styles.postOptions}>
                        <a className={styles.commentsBtn} href="/#" ><i className="fas fa-comment-dots"></i>24 Comments</a>
                        <button className={styles.shareBtn}><i className="fas fa-share"></i>Share</button>
                        <button className={styles.saveBtn}><i className="fas fa-save"></i>Save</button>
                        <button className={styles.moreBtn}><i className="fas fa-ellipsis-h"></i></button>
                    </div>
                </div>
            </div>
    )
}

export default Post;