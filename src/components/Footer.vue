<template>
  <footer>
      {{footerText}}
  </footer>
</template>

<script>
export default {
    data(){
        return {
            footerText: 'Copyright TheUrbanJungle.cl ©'
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