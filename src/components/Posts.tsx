import styles from './styles/Posts.module.css'
import Post from './Post'
import PostFilter from './PostFilter'
import {useEffect, useState} from 'react'

let postsLoaded = 0;
let isLoading = false;
let after = "";
const loadedPosts:any[] = [];
const Posts = () =>{
    const [posts, setPosts] = useState<any[]>([]);

    function loadPosts(amount: number){
        isLoading = true;

        return fetch(`https://www.reddit.com/r/popular.json?&limit=${amount}&after=${after}`)
        .then(res => res.json())
        .then(data => data.data.children.map((item:any, idx:number) =>{
                let text:string = item.data.selftext;
                let textLength = text.length;
                text = text.slice(0, 700);
                if(textLength > 700) text+="...";
                return (<Post title={item.data.title} body={text}
                author={item.data.author} subreddit={item.data.subreddit} time={item.data.created_utc} score={item.data.score}
                num_comments={item.data.num_comments} key={postsLoaded+idx} name={item.data.name}/>);
            })).then((data:any) => {
                loadedPosts.push(...data);
                setPosts([...loadedPosts]);
                isLoading=false;
                postsLoaded+=amount;
                after = data[data.length-1].props.name;
            });
        }

    useEffect(() =>{
        loadPosts(20);
        document.addEventListener("scroll", () =>{
            let maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrollY = Math.floor(window.scrollY)+1;
            if(scrollY > maxScroll-1000 && !isLoading){
               loadPosts(10);
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