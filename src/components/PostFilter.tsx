import styles from './styles/PostFilter.module.css'

const PostFilter:React.FC<{filter:(string | undefined), setFilter:(i:string)=>void}> = (props) =>{
    const getStyle = (filter: string) => props.filter === filter ? styles.s : "";
    return(
    <div className={styles.filterBox}>
        <button onClick={() => props.setFilter("hot")} className={getStyle("hot")}><i className="fas fa-fire"></i>Hot</button>
        <button onClick={() => props.setFilter("new")} className={`${getStyle("new")} ${styles.new}`}><i className="fas fa-certificate"></i>New</button>
        <button onClick={() => props.setFilter("top")} className={getStyle("top")}><i className="fas fa-angle-up"></i>Top</button>
        <button onClick={() => props.setFilter("rising")} className={getStyle("rising")}><i className="fas fa-chart-line"></i>Rising</button>
    </div>
   ) 
}
export default PostFilter;