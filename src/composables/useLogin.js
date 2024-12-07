import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import {signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


const error = ref(null)
const user = ref(null)

const login = async(email, password) => {
    error.value = null
    try {
        const res = await signInWithEmailAndPassword(projectAuth, email, password) 
        error.value = null
        console.log('user logged in')
        user.value = res.user
        return res
    } catch(err) {
        console.log(err.value)
        error.value = 'incorrect credentials'
    }
}

const signInGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(projectAuth, provider)
    .then((res) => {
        console.log(res.user)
    })
    .catch((error) => {

    })
}

const useLogin = () => {
    return { error, login, user, signInGoogle }
}

export default useLogin