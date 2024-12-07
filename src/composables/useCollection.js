import { ref } from 'vue'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore' 
import { projectFirestore } from '@/firebase/config'
import getUser from './getUser'


const useCollection = (collectionName) => {
    const error = ref(null)

    const { user } = getUser()

    

    const addDocument = async(doc) => {
        error.value = null
        try {
            if (user.value) {
                console.log(user)
                const colRef = collection(projectFirestore, collectionName)
                await addDoc(colRef, {
                ...doc,
                createdAt: serverTimestamp()
            })
            } else {
                throw new Error('Need to be authorized first')
            }
        } catch(err) {
            console.log(err.message)
            error.value = 'Could not add the document, you need to be authorized'
        }
    }
    return { error, addDocument }
}

export default useCollection