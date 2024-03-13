
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC2ja6h0vExZKL5DC5y7431mj9FfF_EMyQ",
    authDomain: "react-2024-23fa8.firebaseapp.com",
    projectId: "react-2024-23fa8",
    storageBucket: "react-2024-23fa8.appspot.com",
    messagingSenderId: "145135672644",
    appId: "1:145135672644:web:40bd4051e60373acb14b11"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();


//OBTENER PRODUCTOS
export const getProducts = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//OBTENER PRODUCTO
export const getProduct = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

//ACTUALIZAR PRODUCTO
export const updateProduct = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
    
}

//ELIMINAR PRODUCTO
export const deleProduct = async (id)=>{
    await deleteDoc(doc(db,"productos",id))
    
}

// updateProduct("KY8kkDDAq1rAH7kyrQFI",{
// "stock": 9
// })
