<template>
    <Menu theme="light" width="auto" @on-select="onSelect">
        <template v-for="item in menuData" v-if="menuData.length > 0">
            <Submenu  v-if="item.children && item.children.length > 0"></Submenu>
            <MenuItem  v-else :name="item.label" :to="item.name">{{item.label}}</MenuItem>
        </template>
    </Menu>
</template>

<script>
    import menuData from '../router/menu'
    
    export default {
        name: 'leftMenu',
        data(){
            return {
                menuData
            }
        },
        methods:{
            onSelect(name){
                this.$emit('change-router',name)
            }
        }
    }
</script>

<style scoped>

</style>