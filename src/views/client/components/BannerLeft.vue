<template>
    <div class="banner-left">
        <div class="text-content-section">
            <div class="title">
                <div class="d-flex ">
                    <h5>
                        <img src="~@/assets/styles/images/star.png" />
                        {{textBanner}}
                    </h5>
                </div>
                <h3> {{ listSlider.title }} </h3>
                <p>
                    {{ listSlider.description }}
                </p>
            </div>
            <div class="button-view">
                <a class="sk-btn sk-btn-1" href="#">
                    <span>
                        <img class="default" src="~@/assets/styles/images/arrow-blue-right.png" />
                        <img class="hover" src="~@/assets/styles/images/arrow-white-right.png" />
                    </span>
                    {{ listSlider.textButton || 'Xem thêm'}}
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BannerLeft",
    props: {
        listSlider: {
            type: Array,
            required: false,
        },
        textBanner: {
            type: String,
            default: 'Default text banner',
            required: false,
        }
    },
    data() {
        return {
            listSlider: [],
            textBanner: '',
        }
    },
    mounted() {

    }

}
</script>