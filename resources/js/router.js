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
            path:'/category/:id',
            component:() => import('./components/main/CategoryComponent'),
            name: 'category.index'
        },
        {
            path:'/tag/:id',
            component:() => import('./components/main/TagComponent'),
            name: 'tag.index'
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
        {
            path:'/post/:id',
            component:() => import('./components/post/ShowComponent'),
            name: 'post.show'
        },
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-csrf-token')

    if(!token){
        if(to.name==='user.login' || to.name==='user.registration'){
            return next()
        }else{
            return next({name:'user.login'})
        }
    }else{
        if(to.name==='user.login' || to.name==='user.registration' && token){
            return next({name:'user.personal'})
        }
    }

    next()
})


export default router
