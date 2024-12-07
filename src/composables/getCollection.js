import { ref } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { projectFirestore } from '../firebase/config'

const getCollection = (collectionName) => {

    const documents = ref(null)
    const error = ref(null)

    const collectionRef = collection(projectFirestore,collectionName)
    const q = query(collectionRef)

    onSnapshot(q, async(snap) => {
        let res = []
        snap.docs.forEach(doc => {
            doc.data() && res.push({...doc.data(), id: doc.id })
        })
        documents.value = res 
        error.value = null
    }, err => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch the data'
    })

    return { error, documents }
}

export default getCollection