import styles from './styles/Posts.module.css'
import Post from './Post'
import PostFilter from './PostFilter'
import {useEffect, useState} from 'react'
import {getPosts} from './api/redditapi'

let postsUpdated = 25;

const Posts = () =>{
    const [posts, setPosts] = useState<any[]>([]);

    function updatePosts(amount: number){
        getPosts("popular", amount).then(data => data.map((item:any, idx:number) =>{
            let text:string = item.data.selftext;
            let textLength = text.length;
            text = text.slice(0, 700);
            if(textLength > 700) text+="...";
            return (<Post title={item.data.title} body={text}
            author={item.data.author} subreddit={item.data.subreddit} time={item.data.created_utc} score={item.data.score}
            num_comments={item.data.num_comments} key={idx}/>);
            })).then(data => {setPosts(data);});
    }

    useEffect(() =>{
        updatePosts(postsUpdated);
        postsUpdated+=25;
        document.addEventListener("scroll", () =>{
            let maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if(window.scrollY > maxScroll-500){
                window.scroll(0, maxScroll-500);
                updatePosts(postsUpdated);
                postsUpdated+=25;
            }
        })
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