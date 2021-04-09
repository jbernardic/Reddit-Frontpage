import styles from './styles/Posts.module.css'

const Posts = () =>{
    return(
        <div className={styles.posts}>
            <h4>Popular posts</h4>
            <div className={styles.filterBox}>
                <button className={`${styles.o}`}><i className="fas fa-fire"></i>Hot</button>
                <button className={`${styles.dropDown} ${styles.o}`}>Croatia<i className="fas fa-caret-down"></i></button>
                <button className={styles.new}><i className="fas fa-certificate"></i>New</button>
                <button className={`${styles.o}`}><i className="fas fa-chart-line"></i>Top</button>
                <button className={`${styles.dropDown} ${styles.o}`}>Today<i className="fas fa-caret-down"></i></button>
            </div>
        </div>
    );
}
export default Posts;