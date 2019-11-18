<template>
    <div>
        <Input style="width:500px;" v-model="cookieCode">
            <span slot="prepend">设置的cookie字段：</span>
        </Input>
        <Input style="width:500px;" v-model="cookieValue">
            <span slot="append">点击此处设置该cookie字段的值</span>
        </Input>
    </div>
</template>

<script>
    import '@/static/js/jquery-cookie.js'
    export default {
        name: 'cookieNoSolve',
        data(){
            return {
                cookieCode:'testCookie',
                cookieValue:'testCookie'
            }
        },
        methods(){
            setCookie(){
                let {cookieCode,cookieValue} = this
            }
        }
    }
</script>

<style scoped>

</style>