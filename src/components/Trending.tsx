import styles from './styles/Trending.module.css'

const Trending = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.title}><h4>Trending today</h4></div>
            <div className={styles.trending}>
                <div>
                    <h2 className={styles.postTitle}> </h2>
                    <div className={styles.content}> </div>
                    <div className={styles.info}><img alt=""/> </div>
                </div>
                <div>
                    <h2 className={styles.postTitle}> </h2>
                    <div className={styles.content}> </div>
                    <div className={styles.info}><img alt=""/> </div>
                </div>
                <div>
                    <h2 className={styles.postTitle}> </h2>
                    <div className={styles.content}> </div>
                    <div className={styles.info}><img alt=""/> </div>
                </div>
                <div>
                    <h2 className={styles.postTitle}> </h2>
                    <div className={styles.content}> </div>
                    <div className={styles.info}><img alt=""/> </div>
                </div>
            </div>
        </div>
    )
}

export default Trending;