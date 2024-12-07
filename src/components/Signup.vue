<template>
    <div class="text-box">
        <h1 class="heading-primary">Start your journey</h1>
    </div>
    <form class="form-login" @submit.prevent="handleSubmit">
        <input type="text" 
        class="info-field" 
        v-model="displayName"
        placeholder="enter your nickname"
        required
        />
        <input type="email" 
        class="info-field" 
        v-model="email"
        placeholder="enter your email"
        required
        />
        <input type="password"
        class="info-field" 
        v-model="password"
        placeholder="enter your password"
        required
        />
        <div class="error-msg" v-if="error">
            {{ error }}
        </div>
        <button type="submit" class="btn-submit">Sign Up</button>
        <p class="google-auth" @click="GoogleAuth">Do you want to use <b>Google</b> for authorization?</p>
    </form>
</template>

<script>
import useLogin from '@/composables/useLogin';
import useSignup from '@/composables/useSignup';
import { ref } from 'vue';

    export default {
        setup(props, context) {
            const displayName = ref('')
            const email = ref('')
            const password = ref('')

            const { error, signup } = useSignup()

            const { signInGoogle } = useLogin()
            
            const handleSubmit = async() => {
                await signup(email.value, password.value, displayName.value) 
                if(!error.value) {
                    context.emit('signup')
                    console.log('user signed up');
                } 
                
                console.log(error)
            }

            const GoogleAuth = async() => {
                signInGoogle()
                if(!error.value) {
                    context.emit('signup')
                }
                else {
                    console.log(error.value);
                }
            }
            return { displayName, email, password, error, handleSubmit, GoogleAuth }
        }
    }
</script>

<style scoped>

</style>