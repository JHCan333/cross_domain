<template>
    <div>
        <normal></normal>
        <by-cors></by-cors>
        <by-jsonp></by-jsonp>
        <by-webSocket></by-webSocket>
    </div>
</template>

<script>
    import { ByCORS, Normal,ByJsonp,ByWebSocket } from './components'

    export default {
        name: 'App',
        components: {
            'by-cors': ByCORS,
            'normal': Normal,
            'by-jsonp': ByJsonp,
            'by-webSocket': ByWebSocket
        }
    }
</script>

<style scoped>

</style>