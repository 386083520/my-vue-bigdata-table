<template>
    <div class="vue-bigdata-table-item-table">
        <table v-show="fixedCol >= 0" :class="['vue-bigdata-table-data-table', 'vue-bigdata-table-fixed-table']" cellspacing="0" cellpadding="0" border="0">
            <tbody>
            <tr
                    v-for="(tr, index) in itemData"
                    :key="index">
                <td
                        v-if="i <= fixedColCom"
                        v-for="(td, i) in tr"
                        :class="['vue-bigdata-table-cell',
								setAlign(i),
								(typeof td === 'object' && td !== null) ? td.className : '',
								getSelectCellClasses()
							]"
                        :style="rowStyles" :key="i">
                    {{td}}
                </td>
            </tr>
            </tbody>
        </table>
        <table ref="itemTable" class="vue-bigdata-table-data-table vue-bigdata-table-content-table" :style="{position: 'absolute'}" cellspacing="0" cellpadding="0" border="0" width="100%">
            <colgroup>
                <col
                        :width="width" v-for="(width, i) in widthArr"
                        :key="'colgroup-' + i"
                >
            </colgroup>
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
            rowStyles: Object,
            widthArr: Array,
            fixedCol: Number
        },
        computed: {
            baseIndex () {
                return this.showIndex ? 1 : 0;
            },
            fixedColCom () {
                return this.showIndex ? (this.fixedCol - 1) : this.fixedCol;
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
