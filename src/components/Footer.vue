<template>
    <footer class="footer">
        <div class="container footer-grid">
            <div class="logo-col">
                <img class="footer-logo" src="../assets/logo-black_trans.png" alt="Your product logo">
                <p class="copyright">
                    Copyright &copy; <span class="year">2027</span> by me, Inc. All rights reserved.
                </p>
            </div>
            <nav class="nav-col">
                <p class="footer-heading">
                    More about product
                </p>
                <ul class="footer-nav">
                    <li><router-link class="footer-link":to="{ 'name': 'blog' }">Blog</router-link></li>
                    <li><router-link class="footer-link":to="{ 'name': 'home' }">Markets</router-link></li>
                    <li><router-link class="footer-link":to="{ 'name': 'home' }">Shop now</router-link></li>
                    <li><router-link class="footer-link":to="{ 'name': 'credentials' }" target="_blank">Sign in/Register</router-link></li>
                </ul>
            </nav>
            <div class="contacts-col">
                <p class="footer-heading">
                    Contact Us
                </p>
                <address class="footer-nav">
                    <p class="address">623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
                    <a href="tel:415-201-6370"><p class="contacts">415-201-6370</p></a>
                    <a href="mailto:hello@omnifood.com"><p class="contacts">hello@omnifood.com</p></a>
                </address>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.footer {
    padding: 8rem 0;
    border-top: 1px solid #eee;
}

.footer-grid {
    display: grid;
    grid-template-columns: 0.5fr 0.8fr 1fr;
    column-gap: 6.4rem;
    row-gap: 4.8rem;
}

.logo-col {
    display: flex;
    flex-direction: column;
}

.footer-logo {
    width: 70%;
}

.copyright {
  font-size: 1.4rem;
  line-height: 1.6;
  color: #767676;
  margin-top: 3.2rem;
}

.nav-col {
    padding-left: 2.4rem;
    border-left: 1px solid #89c0ea;
}

.footer-heading {
    font-size: 2rem;
    color: #222;
    font-weight: 500;
    padding-bottom: 3.2rem;
    
}

.footer-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
}


.footer-link,
.footer-link:link,
.footer-link:visited {
    text-decoration: none;
    font-size: 1.6rem;
    color: #333;
    padding-bottom: 0.2rem;
    transition: all 0.1s;
}

.footer-link:hover,
.footer-link:active {
    color: #777;
    border-bottom: 1px solid #7cb9e8;
}

.contacts-col {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 2.4rem;
    border-left: 1px solid #89c0ea;

}

.address {
    font-size: 1.6rem;
}

.contacts {
    font-size: 1.6rem;
    font-style: normal;
    color: #333;
}
.footer-nav a {
    text-decoration: none;
}

@media (max-width: 36em) {

    .footer-grid {
        grid-template-columns: 1fr 1fr;
        column-gap: 1.6rem;
    }

    .logo-col {
        grid-column: 1 / -1;
        align-items: center;
        text-align: center;
    }

    .footer-logo {
        width: 30%;
    }

    .nav-col {
        border: none;
    }

    .contacts-col {
        border: none;
    }

    
    .footer-heading {
        font-size: 1.8rem;
    }

    .footer-link {
        font-size: 1.4rem;
    }
    .address {
        font-size: 1.4rem;
    }
    .contacts {
        font-size: 1.4rem;
    }
}

@media (max-width: 22em) {
    .footer-grid {
        grid-template-columns: 1fr;
    }
    .footer-heading {
        font-size: 2rem;
    }
}

</style>