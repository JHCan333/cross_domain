<template>
    <div>
        <normal></normal>
        <by-cors></by-cors>
        <by-jsonp></by-jsonp>
    </div>
</template>

<script>
    import { ByCORS, Normal,ByJsonp } from './components'

    export default {
        name: 'App',
        components: {
            'by-cors': ByCORS,
            'normal': Normal,
            'by-jsonp': ByJsonp,
        }
    }
</script>

<style scoped>

</style>