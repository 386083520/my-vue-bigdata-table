<template>
    <div id="app">
        <div class="wraper">
            <bigdata-table
                :col-width="200"
                :header-height="80"
               :columns="columns"
               v-model="tableDataHandled"
            ></bigdata-table>
        </div>
    </div>
</template>
<script>
    import bigdataTable from './vue-bigdata-table';
    export default {
        name: 'app',
        data() {
            return {
                columns: [],
                tableDataHandled: [], // 带有数据的表格数据
            }
        },
        components: {
            bigdataTable
        },
        methods: {
            changeData (rowLen) {
                let dataArr = [];
                for (let i = 0; i < rowLen; i++) {
                    let arr = [
                        i + '00',
                        'count' + i,
                        '23.4534534345',
                        '0023' + i,
                        '123.234534534534',
                        'namenasdfsdfsdfsdfssdfsdfsdsdfsdfsf' + i,
                        '2014年1月1日'
                    ];
                    dataArr.push(arr);
                }
                this.tableDataHandled = dataArr;
                console.log('gsd', this.tableDataHandled)
            }
        },
        mounted() {
            this.changeData(100);
            let headers = ['这是数字', '这是字符1列', '这是纬度', '这是数字', '这是经度', '这是字符2列', '这是时间']
            let columns = headers.map((title, col) => {
                return {
                    title: title,
                    align: 'center'
                }
            })
            this.columns = columns;
        }
    }
</script>
<style lang="less">
    .wraper{
        margin: 0px auto;
        padding: 40px;
        width: 1000px;
        height: 500px;
        overflow: auto;
    }
</style>
