const state = {
    token: null,

    user: null,

}

const getters = {
    token: state => {
        return state.token
    }
}

const actions = {

    getToken({state, commit, dispatch}){
        commit('setToken', localStorage.getItem('x-csrf-token'))
        console.log(state.token)
    },

    getUserInfo({state, commit, dispatch}, data){
        commit('setUser', data)
    },

    // logout(){
    //     axios.post('/logout')
    //         .then(res => {
    //             localStorage.removeItem('x-csrf-token')
    //             this.$router.push({name:'main.index'})
    //             console.log('logout')
    //         })
    // }

}

const mutations = {
    setToken(state, token){
        state.token = token
    },

    setUser(state, person){
        state.user = person
    }
}

export default {
    state, mutations, getters, actions
}
