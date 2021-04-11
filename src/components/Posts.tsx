import styles from './styles/Posts.module.css'
import Post from './Post'
import PostFilter from './PostFilter'
import {useEffect, useState} from 'react'
import {getPosts} from './api/redditapi'

const Posts = () =>{
    const [posts, setPosts] = useState<any[]>([]);
    useEffect(() =>{
        getPosts("popular", 25).then(data => data.map((item:any, idx:number) =>{
            let text:string = item.data.selftext;
            let textLength = text.length;
            text = text.slice(1, 1000);
            if(textLength > 1000) text+="...";
            return (<Post title={item.data.title} body={text}
            author={item.data.author} subreddit={item.data.subreddit} time={item.data.created_utc} score={item.data.score}
            num_comments={item.data.num_comments} key={idx}/>);
            })).then(data => {setPosts(data);});
    }, []);

    return(
        <div className={styles.posts}>
            <h4>Popular posts</h4>
            <PostFilter/>
            {posts.map((post) =>{
                return post;
            })}
        </div>
    );
}
export default Posts;