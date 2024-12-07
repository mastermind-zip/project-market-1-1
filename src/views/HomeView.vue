<template>
  <Navbar/>
  <main>
    <section class="section-hero">
      <div class="hero">
        <h1 class="heading-primary">Our product is perfect for you if you</h1>
        <ul class="list-features">
          <li class="list-item">need a time-saving solution</li>
          <li class="list-item">value a simple, user-friendly interface</li>
          <li class="list-item">product that scales with your business</li>
        </ul>
        <a href="#section-products-snippet" class="btn-show-more">Show more &dArr;</a>
      </div>
    </section>
    <section class="section-products-snippet" id="section-products-snippet">
      <div class="container products">
        <router-link class="product-item"
        v-for="doc in documents"
        :key="doc.id"
        :to="{name: 'details', params: {id: doc.id}}"
        >
        <div class="product-img-box">
          <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="product-img"
          alt="product picture">
        </div>
        <div class="product-info">
          <p class="product-title">{{ doc.product_name }}</p>
          <p class="product-short-desc">{{ doc.short_description }}</p>
        </div>
        </router-link>
      </div>
    </section>
  </main>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import getCollection from '@/composables/getCollection'
  export default {
    components: {
      props: ['product'],
      Navbar, Footer
    },
    setup(props) {
      const { documents, error } = getCollection('products')
      console.log(documents)
      const scrollTo = (position) => {
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        })
      }
      return { scrollTo, documents, error }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Koh+Santepheap:wght@100;300;400;700;900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Quicksand:wght@300..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.section-hero {
  padding: 12.8rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.386), rgba(0, 0, 0, 0.384)),
  url('src/assets/hector-martinez-EG49vTtKdvI-unsplash.jpg') no-repeat center / cover;
}

.hero {
  max-width: 130rem;
  min-height: 50vh;
  margin: 0 auto;
  padding: 0 3.2rem;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}

.list-features {
  margin: 8rem 0;
  list-style: none;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  
}

.list-item {
  max-height: fit-content;
  font-size: 1.6rem;
  background-color: #fdfdfd;
  color: #333;
  padding: 1.6rem;
  border-radius: 15px;
  align-content: center;
 
}

.btn-show-more:link,
.btn-show-more:visited {
  font-size: 1.8rem;
  text-decoration: none;
  color: #fdfdfd;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #fff;
  
}


.section-products-snippet {
  padding: 8rem 0 6.4rem 0;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.4rem;
  row-gap: 3.2rem;
}

.product-item {
  transition: all 0.5s;
}

.product-item:link,
.product-item:visited {
  text-decoration: none;
  color: #333;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  overflow: hidden;
  align-content:first baseline;

  box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.045);
}

.product-item:hover {
  transform: translateY(-1.4rem);
  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);

}

.product-img-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-img {
  width: 100%;
}

.product-info {
  padding: 2.4rem;
}

.product-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 500;
}

.product-short-desc {
  font-size: 1.6rem;
  font-weight: 300;

}



/* MEDIA QUERIES */


@media (max-width: 47em) {
  .list-features {
    grid-template-columns: 0.7fr;
    justify-content: center;
  }
  .products {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4.8rem;
  }
}

@media (max-width: 36em) {
  .products {
    grid-template-columns: 0.9fr;
    justify-content: center;
  }
}

@media (max-width: 26em) {
  .product-short-desc {
    font-size: 1.4rem;
  }
}

</style>
