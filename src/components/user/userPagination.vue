<template>
    <div >
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5, 10]" :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
    </div>
</template>
<script>
export default {
    props: {
        queryInfo: {
            type: Object,
            default: () => { }
        },
        total: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
        };
    },
    created () {
        console.log(this.queryInfo.pagesize, 'paginationtotalll');
    },
    methods: {
        handleSizeChange (val) {
            // console.log(`每页 ${val} 条`);
            this.$emit('page-size-change', val);
        },
        handleCurrentChange (val) {
            // console.log(`当前页: ${val}`);
            this.$emit('current-page-change', val);
        }
    },

}
</script>