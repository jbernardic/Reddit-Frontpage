import styles from './styles/Posts.module.css'
import Post from './Post';
import PostFilter from './PostFilter';

const Posts = () =>{
    return(
        <div className={styles.posts}>
            <h4>Popular posts</h4>
            <PostFilter/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}
export default Posts;