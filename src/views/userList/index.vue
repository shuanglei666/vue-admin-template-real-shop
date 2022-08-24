<template>
    <div>
        <el-card>
            <userFrom></userFrom>
            <tableList :userList='userList' :queryInfo='queryInfo' v-if="userList.length > 0"></tableList>
            <userPagination :total='total' :queryInfo='queryInfo' v-if="total > 0" @page-size-change="handleSizeChange"
                @current-page-change="handleSizeChange"></userPagination>
        </el-card>
    </div>
</template>
<script>
import userFrom from '@/components/user/userFrom.vue'
import tableList from '@/components/user/tableList.vue'
import userPagination from '@/components/user/userPagination.vue'
import { getUsersList } from '@/api/table'

export default {
    components: {
        userFrom,
        tableList,
        userPagination
    },
    data () {
        return {
            userList: [],
            queryInfo: {
                query: '',
                pagenum: 1, // 当前页
                pagesize: 2 // 每页显示多少条数据
            },
            total: 0
        }
    },
    created () {
        this.getUsersListFun();
    },
    methods: {
        getUsersListFun () {
            getUsersList(this.queryInfo).then((res) => {
                // console.log(res, 'resssss');
                this.userList = res.data.data.users
                this.total = res.data.data.total
                // console.log(res.data.data.total, 'totallllll');
            }).catch((error) => {
                console.log(error, 'errorrrr');
            })
        },
        // 监听pageSize改变的事件，并发送新的网络请求
        handleSizeChange (newSize) {
            this.queryInfo.pagesize = newSize;
            this.getUsersListFun();
        },
    }
}
</script>