<template>
    <Navbar/>
    <section class="section-blogs">
        <div class="main-container">
            <h1 class="heading-primary">Welcome to our blog</h1>
            <p class="sub-heading">Everyone here can share their opinion on our product.</p>
            <h3 class="section-name">Latest article</h3>
            <div class="blogs-container" v-if="documents">
                <div class="blog" v-for="doc in documents" :key="doc.id">
                    <div class="blog-img-box">
                        <img src="../assets/photo_card.jpg" alt="blog image" class="blog-img">
                    </div>
                    <div class="blog-text-box">
                        <h2 class="blog-title">{{ doc.title }}</h2>
                        <p class="blog-body">{{ doc.body }}</p>
                    </div>
                    <div class="blog-credits">
                        <p class="blog-product-name">{{ doc.product_name }}</p>
                        <p class="blog-date">{{ formatDate(doc.createdAt) }}</p>
                    </div>
                </div>
            </div>
            <div v-else>
                <Spinner/>
            </div>
        </div>
    </section>
    <section class="section-blog-add">
        <BlogAdd/>
    </section>
    <Footer/>
</template>

<script>
import BlogAdd from '@/components/BlogAdd.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Spinner from '@/components/Spinner.vue';
import getCollection from '@/composables/getCollection';
import { ref } from 'vue';

    export default {
        components: {
            Navbar,
            Footer,
            BlogAdd,
            Spinner
        },
        setup() {
            const isClicked = ref(false)

            const { error, documents } = getCollection('articles')

            
            
            const scrollTo = (position) => {
                if(isClicked.value == true ) {
                    window.scrollTo({
                        top: position,
                        behavior: 'smooth'
                    })
                }
            }

            const formatDate = (timestamp) => {
                if (timestamp) {
                    const date = timestamp.toDate()
                    return date.toLocaleDateString('en-GB')
                }
                return ''
            }
            const getSnippet = (text) => {
                return text.length > 100 ? text.slice(0, 60) : text
            }

            return { isClicked, documents, scrollTo, formatDate, error, getSnippet }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
.section-blogs {
    padding: 9.6rem 0;
}

.main-container{
    max-width: 140rem;
    padding: 0 3.2rem;
    margin: 0 auto;
}

.heading-primary {
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    color: #222;
    font-weight: 600;
    margin-bottom: 0.4rem;
}

.sub-heading {
    font-size: 1.8rem;
    margin-bottom: 2.4rem;
    color: #656565;
    opacity: 1;
}

.section-name {
    text-align: center;
    font-size: 2.2rem;
    margin-top: 3.2rem;
    margin-bottom: 2.4rem;
    padding: 0.8rem 0;
    border-top: 2px solid #89c0ea;
    border-bottom: 2px solid #89c0ea;
}

.blogs-container {
    display: grid;
    grid-template-columns: 0.9fr;
    column-gap: 2.4rem;
    row-gap: 2.4rem;
}

.blog {
    display: grid;
    grid-template-columns: 0.4fr 1.5fr;
    grid-template-rows: 1.6fr 0.4fr;
    align-items: start;
    gap: 2.4rem;
}

.blog-img-box {
    grid-row: 1 / -1;
}
.blog-img {
    width: 100%;
}

.blog-title {
    font-size: 2.4rem;
    color: #333;
    font-weight: 500;
}

.blog-body {
    margin-top: 1.4rem;
    font-size: 1.6rem;
    line-height: 1.5;
}

.blog-credits {
    grid-row: 2 / -1;
    text-align: right;
    border-bottom: 1px solid #39393a48;
}

.blog-product-name {
    font-size: 1.6rem;
    padding-bottom: 1.2rem;
}

.blog-date {
    font-size: 1.6rem;
    opacity: 1;
    color: #39393a91;
    padding-bottom: 0.4rem;
}

.section-blog-add {
    padding: 8rem 0;
}


@media (max-width: 64em) {
    .blog {
        grid-template-columns: 0.8fr 1.2fr;
    }
}

@media (max-width: 56em) {
    .blogs-container {
        grid-template-columns: 1fr;
    }
    .blog {
        grid-template-columns: 1fr 1fr;
    }
    .section-blog-add {
        padding: 2rem 0 8rem 0 ;
    }   
}

@media (max-width: 44em) {
    .blog {
        grid-template-columns: 1fr;
    }
    .blog-img-box {
        display: none;
    }
}

</style>

