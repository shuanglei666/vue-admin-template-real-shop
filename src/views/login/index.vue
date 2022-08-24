<template>
    <div class="login_wrap">
        <el-form class="login_form" label-position="right" label-width="80px" :model="userinfo" :rules="loginRules"
            ref="loginForm">
            <!-- <h1>用户登录</h1> -->
            <el-form-item label="用户名" prop="username">
                <el-input v-model="userinfo.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="userinfo.password" type="password"></el-input>
            </el-form-item>
            <!-- <el-button type="primary" class="login_btn" @click.prevent="handleLogin">登录</el-button> -->
            <el-button class="login_btn" @click.prevent="handleLogin">登录</el-button>

        </el-form>
    </div>
</template>

<script>
//引入登录接口
import { loginRequest } from "@/api/user";

import {
    getToken,
    setToken,
    removeToken
} from '@/utils/auth'
export default {
    name: "login",
    data () {
        return {
            userinfo: {
                username: "admin",
                password: "123456"
            },
            loginRules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 5, max: 20, message: "长度在 5 到 20个字符", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    { min: 5, max: 60, message: "长度在 5 到 20 个字符", trigger: "blur" }
                ]
            }
        };
    },
    mounted () {
    },
    methods: {
        handleLogin () {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$store.dispatch('user/login', this.userinfo)
                        .then((res) => {
                            // console.log(res, 'chenggongle ');
                            //登录成功之后重定向到首页
                            this.loading = false
                            this.$router.push({ path: this.redirect || '/' });
                        }).catch((err) => {
                            console.log(err, 'login ----- err');
                            this.loading = false
                            // this.$message({
                            //     message: err,
                            //     type: "error"
                            // });
                        })
                } else {
                    // console.log(333);
                    return false
                }
            })
        },
    }
};
</script>

<style lang="scss" scoped>
.login_wrap {
    width: 100%;
    height: 100%;
    // background: #072765;
}

.login_form {
    width: 40%;
    height: 260px;
    padding: 30px;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;

    h1 {
        text-align: center;
        margin: 10px 0;
    }
}

.login_btn {
    width: 100%;
}
</style>

