<template>
    <Menu theme="light" width="auto">
        <template v-for="item in menuData" v-if="menuData.length > 0">
            <Submenu  v-if="item.children && item.children.length > 0"></Submenu>
            <MenuItem  v-else :name="item.name" :to="item.name">{{item.label}}</MenuItem>
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
        }
    }
</script>

<style scoped>

</style>