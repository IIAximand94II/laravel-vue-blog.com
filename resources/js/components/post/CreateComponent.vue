<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <form class="bg-white rounded shadow-5-strong p-5">
                <h2 class="text-center">Create post</h2>
                <!-- Name input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="title">Title</label>
                    <input type="text" id="title" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <div ref="dropzone" class="dropzone p-3 text-white">
                        <div class="dz-message">
                            <h5 class="text-center">Add title image</h5>
                        </div>
                    </div>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label">Catrgoty</label>
                    <v-select :options="categories"></v-select>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" >Content</label>
                    <vue-editor v-model="content"></vue-editor>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label">Tags</label>
                    <v-select multiple="" :options="tags"></v-select>
                </div>

                <!-- 2 column grid layout for inline styling -->
                <div class="row mb-4">
                    <button type="submit" class="btn btn-primary btn-block">Registration</button>
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
            categories: [
                'Category 1',
                'Category 2',
                'Category 3',
                'Category 4',
            ],

            tags: [
                'tag 1',
                'tag 2',
                'tag 3',
                'tag 4',
                'tag 5',
            ]
        }
    },

    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: 'fd',
            maxFiles: 1,
            autoProcessQueue: false,
            addRemoveLinks: true,
        })
    },
}
</script>

<style scoped>
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
