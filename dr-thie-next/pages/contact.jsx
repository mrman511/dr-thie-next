import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

import ContactHeader from '../components/contact/ContactHeader';
import ContactMe from '../components/contact/Contact';

import contactStyles from '../styles/Contact.module.scss';

export default function Contact(){

  const router = useRouter();
  const [subject, setSubject] = useState(undefined);

  useEffect(()=>{
    if (router.query.subject && !subject){
      setSubject(router.query.subject)
    }
  }, [router.query.subject, subject])

  return (
    <>
      <Head>
        <title>Contact - Dr. Ingrid Thie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image" />
      </Head>
      <Header styles={ styles } alt={ true }/>

      <main className={ [ styles.main, contactStyles.main ].join(' ') }>
        <ContactHeader styles={ contactStyles }/>
        <ContactMe styles={ contactStyles } subject={ subject } setSubject={ setSubject }/>
      </main>

      <Footer styles={ styles }/>

    </>
  );
}