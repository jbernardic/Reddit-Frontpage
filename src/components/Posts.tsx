import styles from './styles/Posts.module.css'
import Post from './Post'
import PostFilter from './PostFilter'
import {useEffect, useState} from 'react'

let postsLoaded = 0;
let isLoading = false;
let after = "";
let filterValue = "hot";
let loadedPosts:any[] = [];
const Posts = () =>{
    const [posts, setPosts] = useState<any[]>([]);
    const [filter, setFilter] = useState(filterValue);
    const setFilterFunc = (filter: string) => {
        setFilter(filter);
        filterValue = filter;
    }

    function loadPosts(amount: number){
        isLoading = true;
        return fetch(`https://www.reddit.com/r/popular/${filterValue}/.json?&limit=${amount}&after=${after}`)
        .then(res => res.json())
        .then(data => data.data.children.map((item:any, idx:number) =>{
                let text:string = item.data.selftext;
                let textLength = text.length;
                text = text.slice(0, 700);
                let img_url:string = item.data.url_overridden_by_dest;
                if(img_url === undefined || (!img_url.includes(".png") && !img_url.includes(".jpg"))){
                    img_url = "";
                }
                if(textLength > 700) text+="...";
                return (<Post title={item.data.title} body={text}
                author={item.data.author} subreddit={item.data.subreddit} time={item.data.created_utc} score={item.data.score}
                num_comments={item.data.num_comments} key={postsLoaded+idx} name={item.data.name} thumbnail={{url: img_url, width: item.data.thumbnail_width, height: item.data.thumbnail_height}}/>);
            })).then((data:any) => {
                loadedPosts.push(...data);
                setPosts([...loadedPosts]);
                isLoading=false;
                postsLoaded+=amount;
                after = data[data.length-1].props.name;
            });
        }
    useEffect(() =>{
        setPosts([]);
        loadedPosts = [];
        postsLoaded = 0;
        after = "";
        loadPosts(20);
    }, [filter]);
    useEffect(() =>{        
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
            <PostFilter filter={filter} setFilter={setFilterFunc}/>
            {posts.map((post) =>{
                return post;
            })}
        </div>
    );
}
export default Posts;