<template>
    <div class="sticky-footer">
        <main class="site-container site-container-elementor">
            <div class="site-page-content">
                <div class="my-project">
                    <h3 class="title"> Quan hệ cổ đông</h3>
                    <b-tabs content-class="mt-3">
                        <b-row>
                            <b-col cols="xl-9 md-12">
                                <b-tab title="BÁO CÁO TÀI CHÍNH" active>
                                    <div>
                                        <!-- <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass"></b-table> -->
                                        <table class="w-100">
                                            <thead>
                                                <tr>
                                                    <th class="w-10">STT</th>
                                                    <th>Ngày Đăng</th>
                                                    <th>Nội dung</th>
                                                    <th>Tải về</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="customer in customers" :key="customer.id">
                                                    <td>{{ customer.stt }}</td>
                                                    <td>{{ customer.date }}</td>
                                                    <td>{{ customer.content }}</td>
                                                    <td><a href="#"><b-icon :icon="customer.download"
                                                                aria-hidden="true"></b-icon></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-tab>
                            </b-col>
                            <b-col cols="xl-3 md-12">
                                <div class="search-category">
                                    <form @submit.prevent="onSubmit">
                                        <div class="form-group d-flex">
                                            <input type="text" class="form-control" id="searchTerm" v-model="searchTerm"><button type="submit" class="btn btn-primary ml-1">Search</button></input>
                                        </div>
                                    </form>
                                    <div class="sk-widget-shareholder-year">
                                        <ul>
                                            <li class="">
                                                <a href="#">
                                                    2020 </a>
                                            </li>
                                            <li class="">
                                                <a href="#">
                                                    2021 </a>
                                            </li>
                                            <li class="">
                                                <a href="#">
                                                    2022 </a>
                                            </li>
                                            <li class="">
                                                <a href="#">
                                                    2023 </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </b-col>
                        </b-row>

                        <b-tab title="BÁO CÁO THƯƠNG NIÊN">
                            <p>I'm a disabled tab!</p>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    props: {
    },
    name: 'ShareholderRelations',
    components: {},
    methods: {
        onSubmit(){
            console.log('this.searchTerm', this.searchTerm)
        }
    },
    data() {
        return {
            searchTerm: '',
            customers: [
                { stt: 1, date: '25/10/2023', content: 'BCTC quý III năm 2023', download: 'download' },
                { stt: 2, date: '27/10/2023', content: 'Báo cáo tài chính quý II năm 2023', download: 'download' }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.menu-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 60px 70px;
    position: absolute;
    width: 100%;
    z-index: 2;
}
.my-project{
    margin-top: 60px;
    h3.title{
        margin-left: 15px;
    }
}

.hight-default {
    height: unset;
}

table th {
    text-align: center;
    padding: 10px;
    background: #f5f5f5;
    font-weight: 500;
    color: #072c0b;
}

table td {
    vertical-align: middle;
    padding: 15px 10px;
    text-align: center;
    border-bottom: 1px rgba(124, 163, 125, .2) solid;
}

table tr:hover td {
    color: #072c0b;
}

.sk-widget-shareholder-year {
    ul {
        list-style: none;
        margin: 0;
        padding: 0 40px;
        -wwebkit-box-shadow: 0 3px 15px rgba(0, 0, 0, .1);
        box-shadow: 0 3px 15px rgba(0, 0, 0, .1);
        -webkit-border-radius: 5px;
        border-radius: 5px;

        li {
            padding: 20px 0;
            border-bottom: 1px #e5e5e5 solid;

            a {
                color: #6d6d6d;
            }
        }
    }

}
</style>