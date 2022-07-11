<template>
    <div>
        <HeaderComponent></HeaderComponent>

        <!-- Main -->

        <main class="my-5">
            <div class="container">
                <!--Grid row-->
                <div class="row">
                    <!--Grid column-->
                    <div class="col-md-9 mb-4">
                        <!-- MAIN COMPONENT -->

                        <router-view></router-view>

                        <!-- END MAIN COMPONENT -->
                    </div>
                    <!--Grid column-->

                    <!-- SIDEBAR -->
                    <SidebarComponent></SidebarComponent>
                    <!-- END SIDEBAR -->

                </div>
                <!--Grid row-->
            </div>
        </main>

        <!-- END Main -->

        <FooterComponent></FooterComponent>
    </div>

</template>

<script>
import HeaderComponent from "./layouts/HeaderComponent";
import FooterComponent from "./layouts/FooterComponent";
import MainComponent from "./main/MainComponent";
import SidebarComponent from "./sidbar/SidebarComponent";
export default {
    name: "Index",
    components: {SidebarComponent, MainComponent, FooterComponent, HeaderComponent, },
}
</script>

<style scoped>

</style>
