import styles from './styles/Trending.module.css'

const Trending = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.trendingTitle}>Trending today</div>
            <div className={styles.trending}>
                <div>
                    <h2 className={styles.title}>Lorem</h2>
                    <div className={styles.content}>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                    <div className={styles.info}><img alt=""/>ICON r/Lorem and more</div>
                </div>
                <div>
                    <h2 className={styles.title}>Lorem</h2>
                    <div className={styles.content}>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                    <div className={styles.info}><img alt=""/>ICON r/Lorem and more</div>
                </div>
                <div>
                    <h2 className={styles.title}>Lorem</h2>
                    <div className={styles.content}>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                    <div className={styles.info}><img alt=""/>ICON r/Lorem and more</div>
                </div>
                <div>
                    <h2 className={styles.title}>Lorem</h2>
                    <div className={styles.content}>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                    <div className={styles.info}><img alt=""/>ICON r/Lorem and more</div>
                </div>
            </div>
        </div>
    )
}

export default Trending;