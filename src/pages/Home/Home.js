import React from 'react'
import Layout from '../../components/Layout/Layout';
import "../../styles/HomeStyle.css";
import Section1 from './Section1';
import Section2 from "./Section2";
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
//import Section6 from './Section6';
import Section7 from './Section7';

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home section hero banner */}
        <Section1/>

        {/* home section about */}
        <Section2/>

        {/* home section menu */}
         <Section3/>

         {/* home section promotion */}
         <Section4/>

         {/*Home section shop 5  */}
         <Section5/>

         {/* home section blog slider */}
         {/* <Section6/> */}

         {/* home section contact */}
         <Section7/>
         
      </Layout>
    </>
  );
}

export default Home;
