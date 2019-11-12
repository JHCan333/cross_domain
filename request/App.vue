<template>
    <Layout class="cross_cover_body">
        <Header class="cross_header">跨域问题测试平台</Header>
        <Layout>
            <Sider class="cross_sider">
                <LeftMenu></LeftMenu>
            </Sider>
            <Content class="cross_content">
                <Breadcrumb :style="{margin: '24px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <div class="cross_">
                    <router-view></router-view>
                </div>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import LeftMenu from './components/leftMenu'

    export default {
        name: 'App',
        components: {
            LeftMenu
        },
        data () {
            return {
                siderStyle: {}
            }
        }
    }
</script>

<style scoped>
    .cross_cover_body {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }

    .cross_header {
        text-align: center;
        color: #fff;
        font-size: 30px;
        font-weight: bold;
    }

    .cross_sider {
        background: #fff;
        border-right:1px #dcdee2 solid;
    }

    .ivu-menu-vertical.ivu-menu-light:after{
        content: none;
    }

    .cross_content {
        padding: 24px;
        /*min-height: 280px;*/
        /*background: #fff;*/
        /*background-clip: content-box;*/
    }
</style>