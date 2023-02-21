import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
// import image1 from './images/desktop/image-stand-out.jpg'
import image2 from './images/desktop/image-transform.jpg'
import image3 from './images/desktop/image-stand-out.jpg'
// import image4 from './images/desktop/image-stand-out.jpg'
import image5 from './images/desktop/image-graphic-design.jpg'
import image6 from './images/desktop/image-photography.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main} >
      <div className='white'>
         <div className='container'>
          <h1 className='title'>Transform your <br/>brand</h1>
          <p className='description'>
          We are a full sevice creative agency specializing in <br/>
          helping brands grow fast. Engage your clients through <br/>
          compelling visuals that do most of the marketing for you
          </p>
          <span className="learn_more">learn more</span>
         </div>
      </div>
      
        <Image
        src={image2}
        alt=""
        className={styles.box_img}
      /> 

         <Image
        src={image3}
        alt=""
        className={styles.box_img}
      />

      <div className='white'>
      <div className='container'>
          <h1 className='title'>stand out to the right <br/> audience</h1>
          <p className='description'>
         Using a collaborative formula of designers, researchers, <br/>
         photographers, videographers, and copywriters, we'll<br/>
          build and extend your brand in digital places
          </p>
          <span className="learn_more">learn more</span>
         </div>
      </div>

         <Image
        src={image5}
        alt=""
        className={styles.box_img}
      />
      
         <Image
        src={image6}
        alt=""
        className={styles.box_img}
      />
    </main>
  )
}
