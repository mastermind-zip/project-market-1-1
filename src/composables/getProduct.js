import { ref } from "vue"
import { doc, getDoc } from "firebase/firestore"
import { projectFirestore } from "@/firebase/config"

const getProduct = (id, collectionName) => {
    const product = ref(null)
    const error = ref(null)

    const load = async() => {
        try {
            const docRef = doc(projectFirestore, collectionName, id)
            const res = await getDoc(docRef)

            if(!res.exists()) {
                throw Error('Product does not exist');
            }
            product.value = { ...res.data(), id: res.id };
        } catch(err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    return { error, product, load };
}

export default getProduct