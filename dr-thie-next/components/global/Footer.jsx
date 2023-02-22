import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer({ styles }){

  const router = useRouter();

  const handleClick = (e, path) => {
    e.preventDefault();

    router.push({
      pathname: path,
    })
  }

  return (
    <footer className={ styles.footer }>
      <article>
        <div className={ [styles.footerHeader, styles.footerComponent].join(' ') }>
          <h2><span>AOT</span> Services</h2>
          <ul>
            <li><Link href="/" onClick={ (e) => { handleClick(e, '/') } }>Home</Link></li>
            <li><Link href="/about" onClick={ (e) => { handleClick(e, '/about') } }>About Us</Link></li>
            <li><Link href="/services" onClick={ (e) => { handleClick(e, '/services') } }>Services</Link></li>
            <li><Link href="/contact" onClick={ (e) => { handleClick(e, '/contact') } }>Contact</Link></li>
          </ul>
        </div>


        <div className={ [styles.info, styles.footerComponent].join(' ') }>
          <p>{`2023 Ariana's Occupational Therapy Services`}</p>
          <div className={ [ styles.contactInfo].join(' ') }>
            <Link href={ `tel:${7787449178}` }>(778) 744-9178</Link>
            <Link href="malito:admin@aotservices.ca">admin@aotservices.com</Link>
          </div>
        </div>
      </article>
    </footer>
  );
}