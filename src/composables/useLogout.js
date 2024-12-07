import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { signOut } from 'firebase/auth'

const error = ref(null)


const logout = async() => {
    error.value = null
    try {
       const res = await signOut(projectAuth)
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return { logout, error }
}

export default useLogout