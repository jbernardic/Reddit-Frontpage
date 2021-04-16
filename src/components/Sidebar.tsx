import {useEffect, useState, useRef, CSSProperties} from 'react';
import styles from './styles/Sidebar.module.css';

const Sidebar = () =>{

    const linksRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<CSSProperties>({
        position: "unset"
    });

    useEffect(() => {
        let offsetY = linksRef.current?.offsetTop;
        window.onscroll = () =>{
            if(!offsetY || window.innerWidth <= 960) return;
            if(window.scrollY > offsetY - 58){
                setStyle({position: "fixed"});
            }
            else{
                setStyle({position: "unset"});
            }
        }
    }, [linksRef])


    return(
        <div className={styles.container}>
            <div className={styles.comCats}>
                <div>POPULAR COMMUNITIES<i className="fas fa-chevron-down"></i></div>
                <div>GAMING<i className="fas fa-chevron-down"></i></div>
                <div>SPORTS<i className="fas fa-chevron-down"></i></div>
                <div>TV<i className="fas fa-chevron-down"></i></div>
                <div>TRAVEL<i className="fas fa-chevron-down"></i></div>
                <div>HEALTH & FITNESS<i className="fas fa-chevron-down"></i></div>
                <div>FASHION<i className="fas fa-chevron-down"></i></div>
            </div>
            <div ref={linksRef} style={style} className={styles.links}>
                <div>
                    <div><a href="/#">Help</a></div>
                    <div><a href="/#">Reddit App</a></div>
                    <div><a href="/#">Reddit Premium</a></div>
                    <div><a href="/#">Reddit Coins</a>  </div>
                    <div><a href="/#">Reddit Gifts</a></div>
                    <div><a href="/#">Communities</a></div>
                    <div><a href="/#">Rereddit</a></div>
                    <div><a href="/#">Topics</a></div>
                </div>
                <div>
                    <div><a href="/#">About</a></div>
                    <div><a href="/#">Careers</a></div>
                    <div><a href="/#">Press</a></div>
                    <div><a href="/#">Advertise</a></div>
                    <div><a href="/#">Blog</a></div>
                    <div><a href="/#">Terms</a></div>
                    <div><a href="/#">Content Policy</a></div>
                    <div><a href="/#">Privacy Policy</a></div>
                    <div><a href="/#">Mod Policy</a></div>
                </div>
                <div>Reddit Inc © 2021. All rights reserved</div>
            </div>
        </div>
    )
}
export default Sidebar;