<template>
    <div class="text-box">
        <h1 class="heading-primary">Welcome Back!</h1>
    </div>
    <form class="form-login" @submit.prevent="handleSubmit">
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
        <button type="submit" class="btn-submit">Sign In</button>
        <p class="google-auth" @click="GoogleAuth">Do you want to use <b>Google</b> for authorization?</p>
    </form>
</template>

<script>
import useLogin from '@/composables/useLogin';
import { ref } from 'vue';

    export default {
        setup(props, context) {
            const email = ref('')
            const password = ref('')
            const {error, login, signInGoogle} = useLogin()

            const handleSubmit = async() => {
                await login(email.value, password.value) 
                if(!error.value) {
                    context.emit('login')
                }
            }
            const GoogleAuth = async() => {
                await signInGoogle()
                if(!error.value) {
                    context.emit('login')
                }
            }

            return { email, password, handleSubmit, error, GoogleAuth}
        }
    }
</script>

<style>
.text-box {
    padding: 0 6.4rem;
    text-align: center;
}
.form-login {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.2rem;
    text-align: center;
}

.info-field {
    padding: 1.6rem;
    font-size: 1.6rem;
    border-radius: 9px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border: none;

}

.error-msg {
    color: #fff;
    font-size: 1.4rem;
    text-transform: uppercase;
}

.btn-submit {
    font-size: 1.8rem;
    padding: 1.2rem 1.6rem;
    width: 55%;
    justify-self: center;
    border-radius: 15px;
    color: #111;
    background-color: #fff;
    border: none;
    box-shadow: none;
}

.google-auth {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
}

.google-auth b {
    color: #7CB9E8;
    text-decoration: underline;
    font-weight: 600;
}
</style>