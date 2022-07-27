<template>
    <div class="col-md-3 mb-4">
        <!--Section: Sidebar-->
        <section class="sticky-top" style="top: 80px;">
            <!--Section: Ad-->
            <section class="text-center border-bottom pb-4 mb-4">
                <h3>Category</h3>
                <ul class="nav flex-column">
                    <li v-for="category in categories" class="nav-item">
                        <router-link class="nav-link"  :to="{path:`/category/${category.id}`}">{{ category.title }}</router-link>
                    </li>
                </ul>
            </section>
            <!--Section: Ad-->

            <!--Section: Tags-->
            <section class="text-center">
                <h5 class="mb-4">Tags</h5>
                <div>
                    <span v-for="tag in tags">
                        <router-link  type="button" :to="{path:`/tag/${tag.id}`}" class="btn btn-light btn-sm ripple-surface m-1">{{ tag.title }}</router-link>
                    </span>
                </div>
            </section>
            <!--Section: Tags-->
        </section>
        <!--Section: Sidebar-->
    </div>
</template>

<script>
export default {
    name: "SidebarComponent",

    data(){
        return{
            categories:[],
            tags:[],
        }
    },

    mounted() {
        this.getCategories()
        this.getTags()
    },

    methods:{
        getCategories(){
            axios.get('/api/category/all')
                .then(res => {
                    this.categories = res.data.data
                    //console.log(this.categories)
                })
        },

        getTags(){
            axios.get('/api/tag/all')
                .then(res => {
                    this.tags = res.data.data
                    //console.log(this.tags)
                })
        },
    },


}
</script>

<style scoped>

</style>
