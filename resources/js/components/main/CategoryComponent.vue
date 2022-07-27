<template>
    <section>
        <!-- Post  v-for -->
        <div class="row" v-for="post in posts">
            <div class="col-md-4 mb-4">
                <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                    <img :src="post.preview_image" class="img-fluid" />
                    <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </a>
                </div>
            </div>

            <div class="col-md-8 mb-4">
                <h5>{{ post.title }}</h5>
                <p v-html="post.excerpt">

                </p>

                <div class="row">
                    <div class="col-3">
                        <router-link :to="{path: `/post/${post.id}`}" type="button" class="btn btn-primary">Read</router-link>
                    </div>
                    <div class="col-6 ">
                        <a href="#"><i class="far fa-thumbs-down  fa-pull-right m-2"></i></a>
                        <span class=" fa-pull-right m-1">1</span>
                        <a href="#"><i class="far fa-thumbs-up  fa-pull-right m-2"></i></a>
                    </div>
                    <div class="col-3">
                        <a href="#"><i class="far fa-bookmark fa-pull-right m-2"></i></a>
                        <a href="#"><i class="far fa-comment fa-pull-right m-2"></i></a>
                    </div>
                </div>

            </div>
        </div>

        <!-- Pagination -->
        <nav class="my-4 mt-5" aria-label="...">
            <ul class="pagination pagination-circle justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
        <!--Section: Content-->
    </section>
</template>

<script>
import SidebarComponent from "../sidbar/SidebarComponent";
export default {
    name: "CategoryComponent",

    data(){
        return{
            posts:null,
        }
    },

    mounted() {
        this.getPosts()
    },

    methods:{
        getPosts(){
            console.log(this.$route.params.id)
            axios.get(`/api/category/${this.$route.params.id}`)
                .then(res => {
                    //console.log(res.data.data)
                    this.posts = res.data.data
                    //console.log(this.posts);
                })
        },
    },

    components: {SidebarComponent}
}
</script>

<style scoped>

</style>
