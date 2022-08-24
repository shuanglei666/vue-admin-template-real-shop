<template>
    <div class="user-container">
        <div class="user-text">name: {{ name }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'User',
    computed: {
        ...mapGetters([
            'name'
        ])
    },
    mounted () {
    }
}


</script>

<style lang="scss" scoped>
.user {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
