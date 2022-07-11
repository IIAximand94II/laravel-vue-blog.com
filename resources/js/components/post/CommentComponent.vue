<template>
    <div>
        <!--Section: Comments-->
        <section class="border-bottom mb-3">
            <p class="text-center"><strong>Comments: 3</strong></p>

            <!-- Comment -->
            <div class="row mb-4">
                <div class="col-2">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                         class="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div class="col-10">
                    <p class="mb-2"><strong>Marta Dolores</strong></p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                        inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                        Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                    </p>
                </div>
            </div>

            <!-- Comment -->
            <div class="row mb-4">
                <div class="col-2">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                         class="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div class="col-10">
                    <p class="mb-2"><strong>Valeria Groove</strong></p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                        inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                        Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                    </p>
                </div>
            </div>

            <!-- Comment -->
            <div class="row mb-4">
                <div class="col-2">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                         class="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div class="col-10">
                    <p class="mb-2"><strong>Antonia Velez</strong></p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                        inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                        Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                    </p>
                </div>
            </div>
        </section>

        <!--Section: Reply-->
        <section>
            <p class="text-center"><strong>Leave a reply</strong></p>
            <form>
                <!-- Message input -->
                <div class="form-outline mb-4">
                    <label class="form-label mb-3" for="form4Example3">You comment</label>
                    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                </div>
                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                    Send
                </button>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    name: "CommentComponent"
}
</script>

<style scoped>

</style>
