import { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const useCreaterList = () => {
  const [createrDocs, setCreaterDocs] = useState(null);

  useEffect(() => {
    (async () => {
      setCreaterDocs(await getCreaterData());
    })();
  }, []);
  const getCreaterData = async () => {
    // createrではなくcreator
    const createrDocName = ["anime", "blockchain", "certificate", "event", "framework", "intro", "jobs", "lang", "program", "reward"];
    let docData = new Object();
    await Promise.all(
      createrDocName.map(async (docName) => {
        const docRef = doc(firestore, "creater", docName);
        const docSnap = await getDoc(docRef);
        docData[docName] = docSnap.data();
      })
    );
    return docData;
  };

  return createrDocs;
};
