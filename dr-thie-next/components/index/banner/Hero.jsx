import Image from "next/image";
import Services from "./ServiceList";
import bannerImage from '../../../public/images/banner-Image-purple.png';

export default function Hero({ styles, services }){

  return(
    <section className={ styles.hero }>
      <div className={ styles.imageContainer }>
        <Image  
          src={ bannerImage } 
          fill 
          alt="AOT services" 
        />
      </div>
      
      <Services styles={ styles } services={ services } />
    </section>
  );
}