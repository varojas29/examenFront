<template>
    <div>
        <div data-testId="hello-component">{{msg}}</div>
        <span>Síguenos en TikTok</span>
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: 'Light, Camera, Laser!'
        }
    }
}
</script>

<style>

</style>