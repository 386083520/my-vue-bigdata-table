<template>
    <div id="app">
        <div class="wraper">
            <bigdata-table></bigdata-table>
        </div>
    </div>
</template>
<script>
    import bigdataTable from './vue-bigdata-table';
    export default {
        name: 'app',
        components: {
            bigdataTable
        }
    }
</script>
