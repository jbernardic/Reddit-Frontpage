import styles from './styles/Post.module.css'

interface PostProps{
    title: string,
    body: string,
    author: string,
    subreddit: string,
    name: string,
    time: number,
    score: number,
    num_comments: number,
    key: number,
    thumbnail: {url: string, width: number, height: number}
}

function getTime(time:number){
    time = new Date().getTime() - time*1000;
    let years = Math.floor(time/3.154e+10);
    if(years > 0) return years + " years";
    let months = Math.floor(time/2.628e+9);
    if(months > 0) return months + " months";
    let days = Math.floor(time/8.64e+7);
    if(days > 0) return days + " days";
    let hours = Math.floor(time/3.6e+6);
    if(hours > 0) return hours + " hours";
    let minutes = Math.floor(time/60000);
    if(minutes > 0) return minutes + " minutes";
    let seconds = Math.floor(time/1000);
    return seconds + " seconds";
}

const Post:React.FC<PostProps> = (props) =>{
    let score:string = props.score < 1000 ? props.score+"" : Math.round(props.score/100)/10+"k";
    let num_comments:string = props.num_comments < 1000 ? props.num_comments+"" : Math.round(props.num_comments/100)/10+"k";
    let time:string = getTime(props.time);

    return(
        <div className={styles.post}>
                <div className={styles.vote}>
                    <i className="fas fa-caret-up"></i>
                    <span className={styles.voteText}>{score}</span>
                    <i className="fas fa-caret-down"></i>
                </div>
                <div className={styles.postContent}>
                    <div className={styles.info}>
                        <span className={styles.infoText}><h4>r/{props.subreddit}&nbsp;</h4> • Posted by u/{props.author} {time} ago</span>
                        <button className={styles.joinButton}><i className="fas fa-plus"></i>Join</button>
                    </div>
                    <div className={styles.postTitle}>{props.title}</div>
                    <div style={props.body === "" && props.thumbnail.url === "" ? {display: "none"} : {}} className={styles.postBody}>
                        <img alt="" src={props.thumbnail.url} style={{width: "100%"}}/>
                        <p>{props.body}</p>
                        <div> </div>
                    </div>
                    <div className={styles.postOptions}>
                        <a className={styles.commentsBtn} href="/#" ><i className="fas fa-comment-dots"></i>{num_comments} Comments</a>
                        <button className={styles.shareBtn}><i className="fas fa-share"></i>Share</button>
                        <button className={styles.saveBtn}><i className="fas fa-save"></i>Save</button>
                        <button className={styles.moreBtn}><i className="fas fa-ellipsis-h"></i></button>
                    </div>
                </div>
            </div>
    )
}

export default Post;