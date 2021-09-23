<template>
    <div class="vue-bigdata-table-item-table">
        <table>
            <tbody>
                <tr
                        v-for="(tr, index) in itemData"
                        :key="index">
                    <td
                            v-for="(td, i) in tr"
                            :class="['vue-bigdata-table-cell',
								setAlign(i),
								(typeof td === 'object' && td !== null) ? td.className : '',
								getSelectCellClasses()
							]"
                            :style="rowStyles">
                        {{td}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            itemData: Array,
            showIndex: Boolean,
            columns: Array,
            rowStyles: Object
        },
        computed: {
            baseIndex () {
                return this.showIndex ? 1 : 0;
            }
        },
        methods: {
            setAlign (i) {
                console.log('gsdsetAlign', i + this.baseIndex)
                let columns = this.columns[i + this.baseIndex];
                if (!columns) return;
                let col = columns;
                return this.prefix + '-' + col.align;
            },
            getSelectCellClasses (row, col) {

            }
        }
    }
</script>

<style scoped>

</style>
