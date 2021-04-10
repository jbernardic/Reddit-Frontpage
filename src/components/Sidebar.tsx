import {useEffect, useState, useRef, CSSProperties} from 'react';
import styles from './styles/Sidebar.module.css';

const Sidebar = () =>{

    const contRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<CSSProperties>({
        position: "unset"
    });

    useEffect(() => {
        window.onscroll = () =>{
            if(!contRef || !contRef.current) return;
            if(window.scrollY > contRef.current.offsetTop+27 - 65){
                setStyle({position: "fixed"});
            }
            else{
                setStyle({position: "unset"});
                console.log("aa");
            }
        }
    }, [])


    return(
        <div ref={contRef} className={styles.container}>
            <div style={style} className={styles.links}>
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