<template>
 <div>
    <footer>
        <h1>{{mensaje}}</h1>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
        mensaje: 'hola'
    }
   }
}
</script>

<style>
 footer{
     background-color: black;
     padding: 10px;
     text-align: center;
 }
</style>