<template>
    <el-table :data="userList" stripe border style="width: 100%">
        <el-table-column prop="id" label="" width="50"></el-table-column>
        <el-table-column prop="username" label="姓名">
        </el-table-column>
        <el-table-column prop="email" label="邮箱">
        </el-table-column>
        <el-table-column prop="mobile" label="电话">
        </el-table-column>
        <el-table-column prop="role_name" label="角色">
        </el-table-column>
        <el-table-column prop="mg_state" label="状态">
            <template slot-scope="scope">
                <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"
                    @change="switchChange(scope.row)">
                </el-switch>
            </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
            <template slot-scope="scope">
                <el-button icon="el-icon-edit" type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">
                </el-button>
                <el-button icon="el-icon-setting" size="mini" type="warning"
                    @click="handleDelete(scope.$index, scope.row)"></el-button>
                <el-button icon="el-icon-delete-solid" size="mini" type="danger"
                    @click="handleDelete(scope.$index, scope.row)"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { changUserStateRequest } from '@/api/table'

export default {
    props: {
        userList: {
            type: Array,
            default: () => { }
        },
        queryInfo: {
            type: Object,
            default: () => {
                return {
                    query: '',
                    pagenum: 1, // 当前页
                    pagesize: 2 // 每页显示多少条数据
                }
            }
        },
    },
    data () {
        return {
            // query: {
            //     pagenum: 10,
            //     pagesize: 10
            // }
        }
    },
    created () {
        // console.log(this.queryInfo, 'queryInfossssss');
    },
    methods: {
        switchChange (row) {
            changUserStateRequest(row.id, row.mg_state)
                .then((res) => {
                    // console.log(res, 'resmg_state');
                    const { msg, status } = res.data.meta
                    if (status !== 200) {
                        this.$message({
                            type: 'error',
                            message: '更新状态失败'
                        })
                    }
                    if (status === 200) {
                        this.$message({
                            type: 'success',
                            message: msg
                        })
                    }
                })
                .catch((error) => {
                    console.log(error, 'error');
                })
        }
    }
}
</script>