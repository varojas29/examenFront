<template>
  <div>
    <div class="">
    <div class="texto">
      <h1 >404</h1>
       <h3>Not Found - Go home</h3>
      </div>
      <img class="notfound conjunto" src="/img/Not-found.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: 'PageNotFound'
}
</script>

<style lang="scss" scoped>
.notfound {
  width: 30%;
   
}

h1 {
  color:black;
  font-weight: bold;
  margin-top: 3rem;
  font-size: 15rem;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
}
.conjunto {
display:block;
margin:auto;
}

h3 {
  color: black;
 font-size: 3rem;
 text-align: center;
 font-family: 'Roboto Condensed', sans-serif;
 margin-top: -5rem;
}
</style>