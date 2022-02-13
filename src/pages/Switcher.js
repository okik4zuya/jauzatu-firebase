import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase-config";
import Dashboard from "./Dashboard";
import Edit from "./Edit";
import Loading from "../components/Loading";
import PageNotFound from "./PageNotFound";

//Import Tema
import ThemeOne from "../theme/ThemeOne";
import ThemeTwo from "../theme/ThemeTwo";

function Switcher({}) {
  const currentURL = window.location.pathname.slice(1);
  const invitationsCollectionRef = collection(db, "invitations");
  const q = query(invitationsCollectionRef, where("slug", "==", currentURL));
  const [value, setValue] = useState({ loading: true });

  // Assign retrieved data to 'value' state
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(q);
      setValue({
        ...data.docs.map((doc) => doc.data())[0],
      });
    };
    getPosts();
  }, []);
  console.log(value.tema);

  {
    /*Tambah Template mulai dari sini*/
  }
  switch (value.tema) {
    case "Tema 01":
      return <ThemeOne value={value} />;
      break;
    case "Tema 02":
      return <ThemeTwo value={value} />;
      break;
    default:
      if (currentURL === "dashboard") {
        return <Dashboard />;
      } else if (currentURL === "edit") {
        return <Edit />;
      } else if (value.loading) {
        return <Loading />;
      } else if (!value.length) {
        return <PageNotFound />;
      }
      return <PageNotFound />;
      break;
    //code block
  }
}

export default Switcher;
