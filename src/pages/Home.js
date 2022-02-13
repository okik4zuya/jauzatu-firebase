import React from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import NavbarSimple from "../components/NavbarSimple";

function Home() {
  return (
    <div className='z-10'>
      <NavbarSimple />
    </div>
  );
}

export default Home;
