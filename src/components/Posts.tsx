import styles from './styles/Posts.module.css'

const Posts = () =>{
    return(
        <div className={styles.posts}>
            <h4>Popular posts</h4>
            <div className={styles.filterBox}>
                <button className={styles.hot}><i className="fas fa-fire"></i>Hot</button>
                <button className={styles.country}>Croatia<i className="fas fa-caret-down"></i></button>
                <button className={styles.new}><i className="fas fa-certificate"></i>New</button>
                <button className={styles.top}><i className="fas fa-chart-line"></i>Top</button>
            </div>
        </div>
    );
}
export default Posts;