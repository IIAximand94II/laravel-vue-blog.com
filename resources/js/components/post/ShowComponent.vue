<template>
    <div>
        <!--Section: Post data-mdb-->
        <section class="border-bottom mb-4">
            <img :src="post.image"
                 class="img-fluid shadow-2-strong rounded mb-4" alt="" />

            <div class="row align-items-center mb-4">
                <div class="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                    <img :src="post.image" class="rounded  rounded-circle shadow-1-strong me-2"
                         height="35" alt="" loading="lazy" />
                    <span> Published <u>15.07.2020</u> by</span>
                    <a href="" class="text-dark">{{ post.author.name }}</a>
                </div>

                <div class="col-lg-6 text-center text-lg-end">
                    <button @click.prevent="saveBookmarks" type="button" class="btn btn-primary px-3 me-1" style="background-color: #0082ca;">
                        <i class="fas fa-bookmark"></i>
                    </button>
                    <button type="button" class="btn btn-primary px-3 me-1">
                        <i class="fas fa-comments"></i>
                    </button>
                </div>
            </div>
        </section>
        <!--Section: Post data-mdb-->

        <!--Section: Text-->
        <section>
            <div v-html="post.content"></div>
        </section>
        <!--Section: Text-->

        <!--Section: Share buttons-->
        <section class="text-center border-top border-bottom py-4 mb-4">
            <p><strong>Share with your friends:</strong></p>

            <button type="button" class="btn btn-primary me-1" style="background-color: #3b5998;">
                <i class="fab fa-facebook-f"></i>
            </button>
            <button type="button" class="btn btn-primary me-1" style="background-color: #55acee;">
                <i class="fab fa-twitter"></i>
            </button>
            <button type="button" class="btn btn-primary me-1" style="background-color: #0082ca;">
                <i class="fab fa-linkedin"></i>
            </button>
            <button type="button" class="btn btn-primary me-1">
                <i class="fas fa-comments me-2"></i>Add comment
            </button>
        </section>
        <!--Section: Share buttons-->

        <!--Section: Comments-->
        <CommentComponent></CommentComponent>
        <!-- /Section: Comments-->
    </div>
</template>

<script>
import CommentComponent from "./CommentComponent";
export default {
    name: "ShowComponent",

    data(){
        return{
            post:null,
            comments: null,
            message: null,
        }
    },

    mounted() {
        this.getPost()
    },

    methods:{
        getPost(){
            //console.log(this.$route.params.id)
            let id = this.$route.params.id
            axios.get(`/api/post/${id}`)
            .then(res => {
                console.log(res.data.data)
                this.post = res.data.data
            })
        },

        saveBookmarks(){
            console.log('Save bookmarks')
            axios.post(`/api/post/${this.post.id}/bookmarks`)
            .then(res =>{

            })
        },

        getComments(){

        },
    },

    components: {CommentComponent}
}
</script>

<style scoped>

</style>
