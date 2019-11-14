<template>
    <Menu theme="light" width="auto" @on-select="onSelect" :openNames="openNames">
        <template v-for="item in menuData" v-if="menuData.length > 0">
            <Submenu  v-if="item.children && item.children.length > 0" :name="item.label">
                <template slot="title">{{item.label}}</template>
                <template v-for="item2 in item.children">
                    <MenuItem  :name="item2.label" :to="item2.name">{{item2.label}}</MenuItem>
                </template>
            </Submenu>
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
        },
        computed:{
            // 将二级菜单默认打开
            openNames(){
                let openList = []
                menuData.map((seg)=>{
                    if(!!seg.children && seg.children.length > 0){
                        openList.push(seg.label)
                    }
                })
                return openList
            }
        }
    }
</script>

<style scoped>

</style>