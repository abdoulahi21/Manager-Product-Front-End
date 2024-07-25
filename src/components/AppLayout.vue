<template>
    <div>
        <AppHeader />
        <AppBody />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppBody from './AppBody.vue'
import AppFooter from './AppFooter.vue'
export default {
    components: {
        AppHeader,
        AppBody,
        AppFooter
    }
}
</script>

<style>

</style>