<template>
    <div class="row">
        <!--Grid column-->
        <div class="col-md-12 mb-4">
            <!-- User -->
            <section class="border-bottom mb-4 pb-4">
                <div class="row">
                    <div class="col-3">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                             class="img-fluid shadow-1-strong rounded" alt="" />
                    </div>

                    <div class="col-9">
                        <p class="mb-2"><strong>Anna Maria Doe</strong></p>
                        <p>Register date: 02.06.2022</p>
                        <p>Email: admin@mail.com</p>
                        <p>Email: admin@mail.com</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                            inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                            Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                        </p>
                    </div>
                </div>
            </section>
            <section class="mb-4 pb-4">
                <div class="row">

                    <div id="my-block" class="mt-2">
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" data-parent="#user-block" href="#user-posts" role="button" aria-expanded="false" aria-controls="user-posts">
                                Your posts
                            </a>
                            <button class="btn btn-primary" data-parent="#user-block"  type="button" data-bs-toggle="collapse" data-bs-target="#user-bookmarks" aria-expanded="false" aria-controls="user-bookmarks">
                                Your bookmarks
                            </button>
                            <button class="btn btn-primary"data-parent="#user-block" type="button" data-bs-toggle="collapse" data-bs-target="#user-comments" aria-expanded="false" aria-controls="user-comments">
                                Your comments
                            </button>
                        </p>


                        <div id="user-block">

                            <!-- User Posts -->
                            <div class="collapse" id="user-posts">
                                <div class="row">
                                    <div v-for="post in posts" class="col-lg-4 col-md-12 mb-4">
                                        <div class="card">
                                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" />
                                                <a href="#!">
                                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                                </a>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <h5 class="card-title">{{ post.title }}</h5>
                                                    </div>
                                                    <div class="col-6">
                                                        <i class="fa-pull-right" style="font-size: 0.8em">{{ post.date }}</i>
                                                    </div>
                                                </div>
                                                <p class="card-text" v-html="post.excerpt">

                                                </p>
                                                <div>
                                                    <a href="#!" class="btn btn-primary">Read</a>

                                                    <span class="m-2">
                                        <a href="#"><i class="far fa-thumbs-down m-2"></i></a>
                                        <span>1</span>
                                        <a href="#"><i class="far fa-thumbs-up m-2"></i></a>
                                    </span>

                                                    <a href="#"><i class="far fa-bookmark fa-pull-right m-2"></i></a>
                                                    <a href="#"><i class="far fa-comment fa-pull-right m-2"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- User Bookmarks -->
                            <div class="collapse" id="user-bookmarks">
                                <div class="row">
                                    <div v-for="bookmarkPost in bookmarks" class="col-lg-4 col-md-12 mb-4">
                                        <div class="card">
                                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" />
                                                <a href="#!">
                                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                                </a>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <h5 class="card-title">Post title</h5>
                                                    </div>
                                                    <div class="col-6">
                                                        <i class="fa-pull-right" style="font-size: 0.8em">Date: 11-11-2011</i>
                                                    </div>
                                                </div>
                                                <p class="card-text">
                                                    Some quick example text to build on the card title and make up the bulk of the
                                                    card's content.
                                                </p>
                                                <div>
                                                    <a href="#!" class="btn btn-primary">Read</a>

                                                    <span class="m-2">
                                        <a href="#"><i class="far fa-thumbs-down m-2"></i></a>
                                        <span>1</span>
                                        <a href="#"><i class="far fa-thumbs-up m-2"></i></a>
                                    </span>

                                                    <a @click.prevent="saveBookmarks(post.id)" href="#"><i class="far fa-bookmark fa-pull-right m-2"></i></a>
                                                    <a href="#"><i class="far fa-comment fa-pull-right m-2"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- User Comments -->
                            <div class="collapse" id="user-comments">
                                <div class="row">
                                    <div class="row mb-4" v-for="comment in comments">
                                        <div class="col-2">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                                                 class="img-fluid rounded-circle shadow-1-strong rounded" alt="" />
                                        </div>

                                        <div class="col-9">
                                            <p class="mb-2"><strong>{{ comment.author.name }}</strong></p>
                                            <p>
                                                {{ comment.message }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <!--End User-->
        </div>
        <!--Grid column-->
    </div>
</template>

<script>
export default {
    name: "PersonalComponent",

    data(){
        return{
            posts: [],
            bookmarks:[],
            comments:[],
        }
    },

    mounted() {
        this.getPosts()
        this.getBookmarks()
        this.getComments()
    },

    methods:{
        getPosts(){
            axios.get('/api/user/posts')
            .then(res => {
                console.log(res.data.data)
                this.posts = res.data.data
            })
        },

        getBookmarks(){
            axios.get('/api/user/bookmarks')
                .then(res => {
                    console.log(res.data.data)
                    this.bookmarks = res.data.data
                })
        },

        getComments(){
            axios.get('/api/user/comments')
                .then(res => {
                    console.log(res.data.data)
                    this.comments = res.data.data
                })
        },

        saveBookmarks(id){
            console.log('Save bookmarks')
            axios.post(`/api/post/${id}/bookmarks`)
                .then(res =>{

                })
        },
    }
}
</script>

<style scoped>

</style>
