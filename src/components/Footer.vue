<template>
<div> 
  <div class="compofoot">
    <img class="logofoot" src="/img/logo-negro-01.png" alt="">
    <img class="logofoot" src="/img/logo-negro-01.png" alt="">
  </div>
  <div class="footer">
    <p>Copyright copy 2020,The Urban Jungle.cl <i class="instagram mdi mdi-instagram"></i> </p>
    
   
  </div>
  </div>
</template>
<script>

  export default {

  }
</script>

<style lang="scss" scoped>
 .footer {
  background-color: black !important;
}
p {
  color: white!important;
  text-align: center;
  padding:30px!important;
}

.logofoot{
  height: 200px;
}
.compofoot {
 display: flex;
justify-content: space-between;
}
.instagram {
  color: white;
  font-size: 32px;
  padding-left: 20px;
}
</style>
