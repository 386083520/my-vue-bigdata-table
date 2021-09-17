<template>
    <div class="vue-bigdata-table-outer" ref="outer">
        <div  :class="wrapperClasses" :style="tableWidthStyles">
            <div class="vue-bigdata-table-wrapper" ref="outWrapper">
                <div :class="['vue-bigdata-table-header-wrapper', fixed ? 'header-wrapper-fixed' : '']" :style="headerStyle">
                    <table>
                        <colgroup>
                            <col :width="width" v-for="(width, i) in widthArr" :key="'header-key-fixed-' + i" />
                        </colgroup>
                        <tr>
                            <th v-for="(col, i) in columnsHandled">
                                <span>{{col.title}}</span>
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="vue-bigdata-table-content">
                    <div :style="{height: `${topPlaceholderHeight}px`}"></div>
                    <render-dom :render="renderTable"></render-dom>
                    <div :style="{height: `${bottomPlaceholderHeight}px`}"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mixins from './mixins';
    import renderDom from './components/renderDom';
    export default {
        name: 'bigdataTable',
        mixins: [ ...mixins ],
        components: {
            renderDom
        },
        props: {
            fixed: {
                type: Boolean,
                default: false
            },
            headerHeight: {
                type: Number,
                default: 52
            },
            value: {
                type: Array
            },
            columns: {
                type: Array
            },
            colWidth: {
                type: Number,
                default: 100
            },
            headerHeight: {
                type: Number,
                default: 52
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.insideTableData = this.setInitIndex(this.value);
            })
        },
        watch: {
            insideTableData () {
                console.log('gsd666')
                this._tableResize();
            },
            value () {
                this.$nextTick(() => {
                    this.insideTableData = this.setInitIndex(this.value);
                })
            }
        },
        data () {
            return {
                prefix: 'vue-bigdata-table'
            };
        }
    }
</script>

<style lang="less">
    @import './vue-bigdata-table.less';
</style>
