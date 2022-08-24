<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
    </section>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        key () {
            return this.$route.path
        }
    }
}
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 50px);
    display: block;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: 20px;
    background-color: rgb(233, 237, 241);
     overflow: hidden;
}
.fixed-header + .app-main {
    padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
    .fixed-header {
        padding-right: 15px;
    }
}
</style>
