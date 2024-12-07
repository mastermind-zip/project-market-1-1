import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null)

const signup = async(email, password, displayName) => {
    error.value = null

    try {
        const res = await createUserWithEmailAndPassword(projectAuth, email, password)
        if(!res) {
            throw new Error('Could not complete signup')
        }
        await updateProfile(res.user, {displayName})
        error.value = null
        console.log(res.user.email)
        return res
    } catch(err) {
        error.value = 'incorrect credentials'
        console.log(err.message)
    }
}

const useSignup = () => {
    return { error, signup }
}

export default useSignup