<template>
    <div>
        <div class="container mb-6 formulario">
            <h1 class="is-size-3 my-6 pt-6 has-text-centered">Agrega tus productos<i class="hoja1 mdi mdi-leaf"></i></h1> 
            
            <div class="field is-horizontal">
                <!-- NAME -->
                <div class="field-label is-normal">
                    <label class="label">Nombre</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control">
                            <input class="input" type="text" v-model="product.name">
                        </p>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <!-- IMAGE -->
                <div class="field-label is-normal">
                    <label class="label">Imagen</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control">
                            <input class="input" type="text" v-model="product.img">
                        </p>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <!-- PRICE -->
                <div class="field-label is-normal">
                    <label class="label">Precio</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control">
                            <input class="input" type="text" v-model="product.price">
                        </p>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <!-- DESCRIPTION -->
                <div class="field-label is-normal">
                    <label class="label">Descripción</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control">
                            <textarea class="textarea" v-model="product.text"/>
                        </p>
                    </div>
                </div>
            </div>

            <div class="has-text-right mb-6 mt-5">
                <div class="my-5">
                    <!-- ERROR -->
                    <h6 class="has-text-danger" v-text="errorMsg"></h6>
                </div>
                <!-- BUTTON -->
                <button class="button is-black is-outlined" v-if="edit" @click="updateProduct(id)">Actualizar</button>
                <button class="button is-black" v-if="!edit" @click="createProduct(product.name)">Agregar</button>
            </div>

            <!-- TABLE -->
            <hr>
            <h1 class="mt-6 mb-5 is-size-3 has-text-centered">Productos registrados</h1>
            <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="p in computedProductList" :key="p.id">
                            <td>{{ p.data.name }}</td>
                            <td>{{ p.data.price }}</td>
                            <td>{{ p.data.text }}</td>
                            <td><img :src="p.data.img" style="max-width: 200px"></td>
                            <td><button class="button is-dark is-outlined" :disabled="edit == true" @click="editProduct(p.id)"><i class="mdi mdi-pencil"/></button></td>
                            <td><button class="button is-dark is-outlined" @click="deleteConfirmation(p.id,p.data.name)"><i class="mdi mdi-delete"/></button></td>
                        </tr>
                    </tbody>
            </table>
        </div>


        <!-- MODAL -->
        <div class="modal" :class="{'is-active': showModal}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <!-- HEAD -->
                <h1 class="is-size-4 modal-card-head" v-text="modalHead"></h1>
                <footer class="modal-card-foot">
                    <!-- CONFIRMATION -->
                    <div v-if="confirmation">
                        <button class="button is-black is-outlined" @click="deleteProduct">Sí</button>
                        <button class="button is-black is-outlined" @click="showModal=false">No</button>
                    </div>
                    <!-- LOADING-->
                    <progress v-if="loading" class="progress is-black" max="100">60%</progress>
                    <!-- PRODUCT ADDED -->
                    <div v-if="productAdded">
                        <button class="button is-success is-outlined" @click="showModal=false">Seguir aquí</button>
                        <router-link class="button is-black is-outlined" to="/home">Ir al inicio</router-link>
                    </div>
                </footer>
            </div>       
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Create',
    data(){
        return{
            id: undefined,
            product: {
                name: '',
                img: '',
                price: '',
                text: ''
            },
            selected: {
                name: '',
                id: ''
            },
            // MODAL
            showModal: false,
            modalHead: '',
            confirmation: false,
            loading: false,
            productAdded: false,
            // ERROR
            errorMsg: '',
        }
    },
    methods: {
        ...mapActions(['updateEdit']),
        createProduct(name){
            if(this.product.name != '' && this.product.img != '' && this.product.price != '' && this.product.text != ''){
                // MODAL
                this.loading = true
                this.showModal = true
                this.confirmation = false
                this.productAdded = false
                this.modalHead = `Registrando ${name}...`
                // 
                axios.post('https://us-central1-project-367345189914459242.cloudfunctions.net/products/product', this.product, { headers:{'Context-type': 'application/json'} })
                .then(() => {
                    this.loading = false
                    this.productAdded = true
                    this.modalHead = `Tu producto ${name} se ha registrado exitosamente.`
                    this.resetInputs()
                    this.$store.dispatch('getProducts')
                })
                .catch(() => {
                    this.errorMsg = '¡Ups! Algo salió mal. Intente más tarde.'
                })
            } else{
                this.errorMsg = '* Todos los campos son obligatorios.'
            }
        },
        resetInputs(){
            this.id = ""
            this.product.name = ""
            this.product.img = ""
            this.product.price = ""
            this.product.text = ""
            this.errorMsg = ""
        },
        deleteConfirmation(id,name){
            this.productAdded = false
            this.showModal = true
            this.confirmation = true
            this.modalHead = `¿Estás seguro que quieres borrar ${name}?`
            this.selected.name = name
            this.selected.id = id
        },
        deleteProduct(){
            this.productAdded = false
            this.confirmation = false
            this.loading = true
            this.modalHead = `Borrando ${this.selected.name}...`
            axios.delete(`https://us-central1-project-367345189914459242.cloudfunctions.net/products/product/${this.selected.id}`, { headers:{'Context-type': 'application/json'} })
            .then(() => {
                this.loading = false
                this.productAdded = true
                this.modalHead = 'Producto borrado exitosamente.'
                this.$store.dispatch('getProducts')
            })
        },
        editProduct(id){
            this.updateEdit()
            this.findProduct(id)
        },
        findProduct(id){
            axios.get(`https://us-central1-project-367345189914459242.cloudfunctions.net/products/product/${id}`, { headers:{'Context-type': 'application/json'} })
            .then((response) => {
                this.id = id
                this.product.name = response.data.name
                this.product.img = response.data.img
                this.product.price = response.data.price
                this.product.text = response.data.text
            })
        },
        updateProduct(id){
            let product = this.product
            axios.put(`https://us-central1-project-367345189914459242.cloudfunctions.net/products/product/${id}`, product, { headers:{'Context-type': 'application/json'} })
                .then(() => {
                    this.resetInputs()
                    this.$store.dispatch('getProducts')
                    this.updateEdit()
                })
                .catch(() => {
                    this.errorMsg = '¡Ups! Algo salió mal. Intente más tarde.'
                })
        }
    },
    computed: {
        ...mapState(['products', 'edit']),
        computedProductList() {
        return this.products
        }
    },
    mounted(){
        this.$store.dispatch('getProducts')
    },
}
</script>

<style lang="scss">
    .formulario {
        width: 60vw!important;
    }
    .hoja1{
        color: black;
        padding-left: 20px;
    }
</style>