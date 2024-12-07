<template>
    <div class="main-container-blog">
        <div class="add-blog">
            <div class="blog-title-box">
                <h1 class="add-blog-heading">Do you want to share your feedback on our products?</h1>
                <p class="sub-heading">Fill out this form <b class="arrow">&rArr;</b></p>
            </div>
            <div class="add-blog-box">
                <form class="form-add-blog" @submit.prevent="handleSubmit">
                    <div>
                        <label for="" class="input-label">Title:</label>
                        <input type="text" class="article-info" 
                        placeholder="Title of your article"
                        v-model="title" required>
                    </div>
                    <div>
                        <label for="" class="input-label">Your thoughts:</label>
                        <textarea class="article-info" 
                        placeholder="Share here your opinion/thoughts/ideas..."
                        v-model="body" required/>
                    </div>
                    <div class="select-product" >
                        <div class="btn-select" @click="isClicked = !isClicked">
                            <span>{{product_name || 'Select the product'}}</span>
                            <ion-icon class="icon-select" name="chevron-down-outline"></ion-icon>
                        </div>
                        <div class="products-selection" v-if="isClicked">
                            <div>
                                <input type="text" 
                                placeholder="Search" 
                                class="search-box" 
                                v-model="searchTerm"
                                required />
                            </div>
                            <ul class="products-collection">
                                <li class="options"
                                v-for="doc in filteredProducts" :key="doc.id" 
                                @click="selectedProduct(doc.product_name)">
                                {{ doc.product_name }}</li>
                            </ul>
                        </div>
                    </div>
                    <p class="error" v-if="error">{{ error }}</p>
                    <button class="btn-submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import useCollection from '@/composables/useCollection';
import { timestamp } from '@/firebase/config';
import { doc } from 'firebase/firestore';
import { computed, ref } from 'vue';

    export default {
        setup() {
            const title = ref('')
            const body = ref('')
            const product_name = ref('')
            const isClicked = ref(false)
            const searchTerm = ref('')

            const { error, addDocument } = useCollection('articles')
            const { documents } = getCollection('products')

            const handleSubmit = async () => {
                if (!title.value.trim() || !body.value.trim() || !product_name.value.trim()) {
                    error.value = 'You can not submit only white spaces!'
                    return;
                }
                const article = {
                    title: title.value.trim(),
                    body: body.value.trim(),
                    product_name: product_name.value.trim(),
                    createdAt: timestamp(),
                };
                
                await addDocument(article);

                if (!error.value) {
                    title.value = '';
                    body.value = '';
                    product_name.value = '';
                    searchTerm.value = '';
                }
            };
                    

            const selectedProduct = (name) => {
                product_name.value = name
                isClicked.value = false
            }

            const filteredProducts = computed(() => {
                if(!searchTerm.value) {
                    return documents.value
                }
                return documents.value.filter(doc => 
                    doc.product_name.toLowerCase().includes(searchTerm.value.toLowerCase())
                )
            })

            return { title, body, handleSubmit, error, documents, product_name, isClicked, selectedProduct, searchTerm, filteredProducts }
        }
    }
</script>

<style scoped>

.main-container-blog {
    max-width: 120rem;
    padding: 0 3.2rem;
    margin: 0 auto;
}

.add-blog {
    min-height: 70vh;
    background-color: #7cb9e8;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.8rem;
    justify-content: center;
    align-items: center;
    padding: 3.2rem;
    border-radius: 15px;
}

.add-blog-heading {
    font-size: 3.6rem;
    color: #fff;
    line-height: 1.5;
    font-weight: 500;
    text-align: center
}

.sub-heading {
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
    margin-top: 2.4rem;
}

.form-add-blog {
    display: grid;
    grid-template-columns: 0.8fr;
    gap: 3.2rem;
    align-items: center;
    justify-content: center;
    position: relative;
}

.input-label {
    display: block;
    font-size: 2.2rem;
    color: #fff;
    font-weight: 400;
    margin-bottom: 1.2rem;
    
}

.article-info {
    width: 100%;
    padding: 1.6rem;
    border-radius: 7px;
    border: none;
    font-size: 1.4rem;
    letter-spacing: 1.2px;
}

.select-product {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 11px;
    background-color: #fff;
    position: relative;

}

.select-product .input-label {
    align-self: self-start;
}

.btn-select {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;
    font-size: 1.6rem;
}

.products-selection {
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 100;
    top: 83%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.search-box {
    width: -webkit-fill-available;
    padding: 1.2rem;
    border: none;
    border-bottom: 1px solid #b0aeaef2;
    margin-bottom: 1.2rem;
}

.search-box:focus {
    outline: none;
}

.products-collection {
    list-style: none;
    background-color: #fff;
    max-height: 9rem;
    overflow-y: scroll;


}

.options {
    font-size: 1.6rem;
    text-align: center;
    color: #333;
    margin-bottom: 1.2rem;
}

.btn-submit {
    text-align: center;
    font-size: 2rem;
    padding: 1.2rem 0;
    width: 100%;
    color: #fff;
    background-color: #5782a2;
    border-radius: 5px;
    border: none;
}

.error {
    font-size: 1.6rem;
    color: #fff;
    
}

@media (max-width: 56em) {
    .form-add-blog {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 47em) {
    .add-blog-heading {
        font-size: 2.4rem;
    }
}

@media (max-width: 36em) {
    .add-blog {
        gap: 3.2rem
    }
    .add-blog-heading {
        font-size: 2rem;
        text-align: left;
    }
    .sub-heading {
        text-align: left;
    }
    .input-label {
        font-size: 1.6rem;
    }
    .article-info {
        font-size: 1.2rem;
    }
    .options {
        font-size: 1.4rem;
    }
    .btn-select {
        font-size: 1.4rem;
    }
    .btn-submit {
        font-size: 1.4rem;
    }
}

@media (max-width: 31em) {
    .add-blog {
        grid-template-columns: 1fr;
    }
    .add-blog-heading {
        text-align: center;
    }
    .sub-heading {
        text-align: center;
    }
    .arrow {
        display: none;
    }
}

</style>

