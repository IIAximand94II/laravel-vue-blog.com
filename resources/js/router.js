import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component:() => import('./components/main/MainComponent'),
            name: 'main.index'
        },
        {
            path:'/blog/category',
            component:() => import('./components/main/CategoryComponent'),
            name: 'main.category'
        },
        {
            path:'/blog/tag',
            component:() => import('./components/main/TagComponent'),
            name: 'main.tag'
        },
        {
            path:'/post/show',
            component:() => import('./components/post/ShowComponent'),
            name: 'post.show'
        },
        {
            path:'/user/login',
            component:() => import('./components/user/LoginComponent'),
            name: 'user.login'
        },
        {
            path:'/user/registration',
            component:() => import('./components/user/RegistrationComponent'),
            name: 'user.registration'
        },
        {
            path:'/user/personal',
            component:() => import('./components/user/PersonalComponent'),
            name: 'user.personal'
        },
        {
            path:'/post/create',
            component:() => import('./components/post/CreateComponent'),
            name: 'post.create'
        },
        {
            path:'/post/edit',
            component:() => import('./components/post/EditComponent'),
            name: 'post.edit'
        },
    ]
})

export default router
