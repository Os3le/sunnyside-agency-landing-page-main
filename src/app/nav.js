
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import navImg from './images/desktop/image-header.jpg'
import logo  from './images/logo.svg'
import arrow from './images/icon-arrow-down.svg'
export default function header() {
  return (
    <nav className={styles.nav}>
      {/* <img src={navImg} alt="" className={styles.header}/> */}
      <Image
        src={navImg}
        alt=""
        className={styles.img}
      />
<div className="floater">
  <h1 className="creatives">We are creatives</h1>
  <Image className='arrow' src={arrow}/>
</div>
      <div className={styles.navitems}>
        <Image src={logo} className={styles.logo}/>
      
         <ul className={styles.navlist}>
           <Link href="./"className={styles.navlist_item}> <li >about</li></Link>
           <Link href="./search"className={styles.navlist_item}><li>services</li></Link>
           <Link href="./"className={styles.navlist_item}><li>project</li></Link>
           <Link href="./"className={styles.navlist_item}><li>connect</li></Link>
        </ul>
        </div>
    </nav>
  )
}