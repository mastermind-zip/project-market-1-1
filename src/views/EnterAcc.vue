<template>
<div class="enter-acc">
    <div class="container forms-container">
        <div v-if="isExcisted">
            <Login @login="enterChat"/>
            <p class="account-text">
                    Doesn't have an account? <b @click="isExcisted = !isExcisted"> Create one&rarr;</b>
            </p>
        </div>
        <div v-if="!isExcisted">
            <<Signup @signup="enterChat" />
            <p class="account-text">
                Already have one?<b @click="isExcisted = !isExcisted"> Sign in &rarr;</b>
            </p>
        </div>
    </div>
</div>
</template>

<script>
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


    export default {
        components: {
            Login, Signup
        }, 
        setup() {
            const isExcisted = ref(true)
            const router = useRouter()
            const enterChat = () => {
                router.push({name: 'home'})
            }

            return { isExcisted, enterChat }
        }  
    }
</script>

<style scoped>
.enter-acc {
    background: linear-gradient(rgba(0, 0, 0, 0.561), rgba(0, 0, 0, 0.423)),url('src/assets/jason-briscoe-Gw_sFen8VhU-unsplash.jpg') no-repeat center / cover;
}
.forms-container {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.account-text {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 2.4rem;
    text-align: center;
}

.account-text b {
    font-weight: 700;
    cursor: pointer;

}
</style>