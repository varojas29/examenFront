<template>
    <div class="modal" :class="{'is-active': showMsg}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <progress v-if="sending" class="progress is-small is-danger" max="100">15%</progress>
            <div v-if="send">
                <h1 class="is-size-4 has-text-centered">Tu producto ha sido registrado exitosamente.</h1>
                <button class="button is-danger" @click="showMsg=false">Seguir agregando</button>
                <router-link class="button is-danger" to="/home">Ir al inicio</router-link>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
</template>