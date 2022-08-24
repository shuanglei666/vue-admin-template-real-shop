import {
  logout
} from '@/api/user'
import {
    loginRequest
  } from '@/api/login'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
// import router, {
//   resetRouter
// } from '@/router'
import {
  MessageBox,
  Message
} from 'element-ui'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}
const state = getDefaultState()


const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}
const actions = {
  // 用户名登录
  login({
    commit
  }, userInfo) {

    // const {
    //   username,
    //   password
    // } = userInfo
    // return new Promise((resolve, reject) => {
    //   loginRequest(userInfo).then(response => {
    //     const token = response.data.data.token
    //     commit('SET_TOKEN', token)
    //     setToken(token)
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
    // (111)用这个
    // return new Promise((resolve, reject) => { //
    //   // loginRequest(userInfo.username, userInfo.password).then(response => {     注意:这里当时一直没想出来,这样没有传进参数, 直接传过来userInfo放进传参就行！！！！！！
    //   loginRequest(userInfo).then(response => {
    //     resolve(response.data) // 这个是数据返回到login的里面登录方法的 , this.$store.dispatch('user/login', this.userinfo).then 后面的.then方法返回数据正常写，即可
    //   }).catch(error => {
    //     console.log(error)
    //     reject(error)
    //   })
    // })
    // (222)用这个 // 最简练的方法 
    return new Promise((resolve, reject) => { //
      // loginRequest(userInfo.username, userInfo.password).then(response => {     注意:这里当时一直没想出来,这样没有传进参数, 直接传过来userInfo放进传参就行！！！！！！
      loginRequest(userInfo)
        .then(response => {
          const token = response.data.data.token
          commit('SET_TOKEN', token)
          setToken(token)
          this.loading = false
          resolve()
          //  resolve(response.data) // resolve()里面写值就代表返回login页面.then(res) 里面的就有值了,如果没写resolve()里面没传参数,就代表停止传参数,数据保留在这个方法里面response，
          // 打印不到数据,但是有,因为有return方法停止的意思打印不到,所以先把return注释，然后获取token,然后打开注释,就ok成功跳转了, 这样又加深对promise的理解了
          // 下面是登录状态提示
          const {
            msg,
            status
          } = response.data.meta
          if (status == 200) {
            Message({
              message: msg,
              type: "success"
            });
          }
          //   else {                           // 错误提示写在响应拦截器里面了, utils => request.js里面错误提示
          // Message({
          //   message: response.data.meta.msg,
          //   type: "error"// 这里没有提示 //成功有
          // });
          //   }
          //   console.log(response, 'responseresponse');
        })
        .catch(error => { // 错误提示写在响应拦截器里面了, utils => request.js里面错误提示
          //   console.log(error, 'vux ---- error')
          reject() // 异常方法, reject()里面写error代表返回到 登录页面登录方法的.then 后面的 .catch 方法里面  , 如果reject里面没有写error的,代表不返回.catch方法异常捕捉
          //   Message({
          //     message: error,
          //     type: "error"
          //   });
        })
    })

  },

  // 获取用户信息
  // GetUserInfo({
  //   commit,
  //   state
  // }) {
  //   return new Promise((resolve, reject) => {
  //     getUserInfo(state.token).then(response => {
  //       const data = response.data.data
  //       if (data.perms && data.perms.length > 0) {
  //         commit('SET_PERMS', data.perms)
  //       } else {
  //         reject('getInfo: perms must be a non-null array !')
  //       }
  //       commit('SET_ROLES', data.roles)
  //       commit('SET_NAME', data.name)
  //       commit('SET_AVATAR', data.avatar)
  //       resolve(response)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
  // user logout
  logout({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        //    退出一定清除token
        removeToken() // must remove  token  first
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}


// export default user

export default {
  namespaced: true, // 防止报错
  state,
  mutations,
  actions
}
