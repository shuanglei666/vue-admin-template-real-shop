<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <!-- <el-form-item label="审批人"> -->
            <el-form-item>
                <el-input placeholder="请输入内容" v-model="formInline.query">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-form-item>
            <!-- <el-form-item label="活动区域"> -->
                <el-button type="primary">主要按钮</el-button>
            <!-- </el-form-item> -->

        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            formInline: {
                query: '',
            }
        }
    }
}
</script>