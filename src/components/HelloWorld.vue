<template>
    <div>
        <div data-testId="hello-component">{{msg}}</div>
        <span>Holiwis</span>
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: 'wajajaj'
        }
    }
}
</script>

<style>

</style>