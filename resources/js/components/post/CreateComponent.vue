<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <form class="bg-white rounded shadow-5-strong p-5">
                <h2 class="text-center">Create post</h2>
                <!-- Name input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="title">Title</label>
                    <input type="text" id="title" v-model="title" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <div ref="dropzone" class="dropzone p-3 text-white">
                        <div class="dz-message">
                            <h5 class="text-center">Add title image</h5>
                        </div>
                    </div>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label">Category</label>
                    <v-select placeholder="Select category" v-model="categories.value" label="title" :options="categories"></v-select>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" >Content</label>
                    <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="content"></vue-editor>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label">Tags</label>
                    <v-select placeholder="Select tag" v-model="tags.value"  label="title" multiple :options="tags"></v-select>
                </div>

                <!-- 2 column grid layout for inline styling -->
                <div class="row mb-4">
                    <button type="submit" @click.prevent="store" class="btn btn-primary btn-block">Registration</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';
import Dropzone from 'dropzone'

export default {
    name: "CreateComponent",

    data(){
        return{
            title: null,
            content: null,
            dropzone:null,
            categories: [],
            tags: [],
        }
    },

    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: '/api/post',
            maxFiles: 1,
            autoProcessQueue: false,
            addRemoveLinks: true,
        })
        this.getCategories()
        this.getTags()
    },

    methods:{
        store(){
            const data = new FormData()
            let files = this.dropzone.getAcceptedFiles()
            files.forEach(file =>{
                data.append('image', file)
                //this.dropzone.removeFile()
            })
            let tags_id = this.tags.value
            tags_id.forEach(tag => {
                data.append('tags[]', tag.id)
            })
            data.append('category_id', this.categories.value.id)
            data.append('title', this.title)
            data.append('content', this.content)

            axios.post('/api/post', data)
            .then(res => {

            })
        },

        handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
            let data = new FormData();
            data.append("image", file);

            axios.post("/api/post/images", data)
                .then(result => {
                    const url = result.data.url; // Get url from response
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();
                })
                .catch(err => {
                    console.log(err);
                });
        },

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
    }
}
</script>

<style>
.dz-success-mark,
.dz-error-mark{
    display:none;
}

.dropzone {
    background: grey;
    border-radius: 5px;
    border: 4px dashed #FAFAFA93;
    border-image: none;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}
</style>
