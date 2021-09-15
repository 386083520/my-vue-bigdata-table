<template>
    <div id="app">
        <div>
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
