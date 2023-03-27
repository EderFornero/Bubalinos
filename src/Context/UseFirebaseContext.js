import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, query, collection} from 'firebase/firestore';

export const UseApiContext = createContext();

export const UseFirebaseContext = ({ children }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyD70sTAzI_SEZzGlgAD_D5IUQMuEhfpfBs",
        authDomain: "bubalinos-4b0aa.firebaseapp.com",
        projectId: "bubalinos-4b0aa",
        storageBucket: "bubalinos-4b0aa.appspot.com",
        messagingSenderId: "651126729054",
        appId: "1:651126729054:web:3e21f68955eef3d0f1c7cf",
        measurementId: "G-1XTEZGERCB"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    //states
    // const [users, setUsers] = useState([]);

    
    //function
    // const searchCollections = async (nameCollection) => {
    //     // LLAMADA SIMPLE PARA OBTENER TODOS LOS DATOS SOBRE CIERTAS COLECCIONES DE LA BASE DE DATOS.
    //     const collectionsData = await getDocs(query(collection(db, nameCollection)));
    //     const collections = collectionsData.docs.map((doc) => {
    //         return { id: doc.id, ...doc.data() };
    //     });
    //     setUsers(collections);
    // };


    return (
        <UseApiContext.Provider>
            {children}
        </UseApiContext.Provider>
    );
};

