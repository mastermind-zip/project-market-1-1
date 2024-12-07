<template>
  <header class="header" :class="{ 'nav-open': isSideNav }">
    <div class="header-brand ">
      <router-link :to="{ 'name': 'home' }">
        <img src="../assets/logo-black.png" alt="Product logo" class="logo-img">
      </router-link>
      <router-link :to="{ 'name': 'home' }" class="brand-name">Product</router-link>
    </div>

    <nav class="main-nav">
      <ul class="main-nav-list">
        <li>
          <router-link class="main-nav-link" :to="{ 'name': 'blog' }">Blog</router-link>
        </li>
        <li>
          <router-link class="main-nav-link" :to="{ 'name': 'home' }">Markets</router-link>
        </li>
        <li>
          <a href="#section-products-snippet" class="main-nav-link" >Shop now</a>
        </li>
        <li v-if="!user">
          <router-link class="main-nav-link nav-login" :to="{ 'name': 'credentials' }" target="_blank">Sign In / Register</router-link>
        </li>
        <li v-if="user">
          <router-link class="main-nav-link user-name" :to="{ 'name': 'home' }">{{ user.displayName }}</router-link>
        </li>
        <li v-if="user" @click="logout">
          <router-link class="main-nav-link logout" :to="{ 'name': 'home' }">Logout</router-link>
          <ion-icon name="log-out-outline" class="menu-icon logout"></ion-icon>
        </li>
      </ul>
    </nav>

    <button class="btn-side-menu" @click="toggleNav" >
      <ion-icon name="apps-outline" class="menu-icon"></ion-icon>
      <ion-icon name="close-outline" class="menu-icon"></ion-icon>
    </button>
  </header>
</template>

<script>
import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';
import { RouterLink } from 'vue-router';

    export default {
      data() {
        return {
          isSideNav: false, 
        };
      },
      methods: {
        toggleNav() {
          this.isSideNav = !this.isSideNav; 
        },
      },
      setup() {
        const { user } = getUser()
        
        const { logout } = useLogout()
        return { user, logout }
      }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9.6rem;
  padding: 1.2rem 4.8rem;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.logo-img {
  width: 5.2rem;
}

.brand-name,
.brand-name:link,
.brand-name:visited {
  font-size: 1.8rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: var(--clr-palette-1);
}

.main-nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;
}

.main-nav-link:link,
.main-nav-link:visited {
  display: inline-block;
  font-size: 1.6rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: #222;
  transition: all 0.3s;
}

.main-nav-link:hover,
.main-nav-link:active {
  color: #7cb9e8;
}

.main-nav-link.nav-login:link,
.main-nav-link.nav-login:visited {
  padding: 1rem 1.5rem;
  border-radius: 10px;
  background-color: #7CB9E8;
  color: #fdfdfd;
}

.main-nav-link.nav-login:hover,
.main-nav-link.nav-login:active {
  background-color: #abd3f1;
}

li:last-child {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.user-name:link,
.user-name:visited {
  color: #7cb9e8;
}


.btn-side-menu {
  border: none;
  cursor: pointer;
  background-color: transparent;

  display: none;

}

.menu-icon {
  width: 3.2rem;
  height: 3.2rem;
  color: #333;
}

.menu-icon[name = "close-outline"] {
  display: none;
}



@media (max-width: 56em) {

  html {
    font-size: 56.25%;
  }

  .header {
    padding: 2.4rem;
  }

  .btn-side-menu {
    display: block;
    z-index: 9999;
    background-color: transparent;
  }

  .main-nav {
    background-color: #fdfdfd;
    padding: 0 2.4rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    min-height: 110vh;
    
    display: flex;
    justify-content: right;
    align-items: center;
    transition: all 0.5s ease-in;

    opacity: 0;
    pointer-events: none;
    visibility: hidden;

    /* transform: translateX(100%); */
  }

  .main-nav-list {
    flex-direction: column;
    align-items: flex-end;
    gap: 3.2rem;
    text-align: right;
  }

  .main-nav-link:link,
  .main-nav-link:visited {
    font-size: 2rem;
  }
  
  .main-nav-link.nav-login:link,
  .main-nav-link.nav-login:visited {
    padding: 0;
    background-color: transparent;
    color: #222;
  }
  .main-nav-link.nav-login:hover,
  .main-nav-link.nav-login:active {
    color: #f58680;
  }

  .nav-open .main-nav {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    /* transform: translateX(0);     */
  }
  
  .nav-open .menu-icon[name="apps-outline"] {
    display: none;
  }
  .nav-open .menu-icon[name="close-outline"] {
    display: block;
    transform: translateX(15%);
  }

  
}

</style>