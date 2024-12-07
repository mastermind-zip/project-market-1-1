<template>
    <Navbar/>
    <section class="section-product">
        <div class="product-container">
            <div class="prev-product" >
                <ion-icon class="icon-navigation" name="chevron-back-circle-outline" ></ion-icon>
            </div>
            <div class="project-overview" v-if="product">
                <img src="../assets/photo_card.jpg" class="product-img" alt="product image">
                <div class="product-information">
                    <h1 class="heading-primary">{{ product.product_name }}</h1>
                    <p class="product-description">{{ product.long_description }}</p>
                    <p class="product-price">{{product.product_pricing}} $</p>
                </div>
            </div>
            <div v-else>
                <Spinner/>
            </div>
            <div class="next-product" >
                <ion-icon class="icon-navigation" name="chevron-forward-circle-outline" ></ion-icon>
            </div>
        </div>
    </section>
    <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '../components/Navbar.vue' 
import {useRoute, useRouter } from 'vue-router';
import getProduct from '@/composables/getProduct';
import Spinner from '@/components/Spinner.vue';
import getCollection from '@/composables/getCollection';


export default {
    props: ['id'],
    components: {
        Navbar,
        Footer,
        Spinner
    },
    setup (props) {
        const route = useRoute()
        const {load, product, error } = getProduct(route.params.id, 'products')
        const { documents } = getCollection('products')
        load()
        return { product, error, documents }
    }
}
</script>

<style scoped>

.section-product {
    padding: 9.6rem 0 12.8rem 0;
}

.product-container {
    max-width: 140rem;
    padding: 0 3.2rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.1fr 1.8fr 0.1fr;
    align-items: center;
}

.icon-navigation {
    width: 5.2rem;
    height: 5.2rem;
    color: #333;
}

.icon-navigation:active {
    color: #7CB9E8;
}
.prev-product {
    justify-self: center;
}
.next-product {
    justify-self: center;
    grid-column: 3 / -1;
}

.project-overview {
    grid-column: 2 / 3;
    grid-row: 1 / -1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
}

.heading-primary {
    color: #333;
    text-shadow: 1px 3px 0px rgba(0, 0, 0, 0.068);
}

.product-img {
    width: 90%;
    border-radius: 5px;
    align-self: center;
    justify-self: center;
}

.product-information {
    padding-top: 4.8rem;
    padding-right: 4.8rem;
    display: flex;
    flex-direction: column;
}

.product-description {
    color: #222;
    font-size: 1.6rem;
    line-height: 1.7;
    font-weight: 400;
}

.product-price {
    font-size: 2.4rem;
    align-self: self-end;
    background-color: #222;
    color: #fff;
    border-radius: 5rem;
    margin: 2.4rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
}




@media (max-width: 73em) {
    .product-description {
        font-size: 1.4rem;
    }
    .product-price {
        font-size: 2rem;
    }
}

@media (max-width: 65em) {
    .product-img {
        align-self: self-start;
    }
    .product-information {
        padding-top: 0;
    }
    .product-description {
        line-height: 1.3;
    }
}

@media (max-width: 56em ) {
    .project-overview {
        grid-template-columns: 1fr;
    }
    .product-img {
        width: 65%;
    }
    .product-information {
        padding: 0 2.4rem;
    } 
    .heading-primary {
        align-self: center;
    }
    .icon-navigation { 
        width: 3.6rem;
        height: 3.6rem;
    }
}


@media (max-width: 27.5em) {
    .section-product {
        padding: 6.4rem 0;
    }
    .product-container {
        padding: 0 1rem;
    }
    .product-information {
        padding: 0 2.4rem;
    } 
    .product-description {
        font-size: 1.2rem;
    }
    .product-price {
        font-size: 1.4rem;
    }
}


</style>