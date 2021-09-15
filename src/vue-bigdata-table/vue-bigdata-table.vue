<template>
    <div class="vue-bigdata-table-outer" ref="outer">
        <div  :class="wrapperClasses" :style="tableWidthStyles">
            <div class="vue-bigdata-table-wrapper" ref="outWrapper">
                <div :class="['vue-bigdata-table-header-wrapper', fixed ? 'header-wrapper-fixed' : '']" :style="headerStyle">
                    <table>
                        <tr>
                            <th v-for="(col, i) in columnsHandled">
                                <span>{{col.title}}</span>
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="vue-bigdata-table-content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import mixins from './mixins';
    export default {
        name: 'bigdataTable',
        mixins: [ ...mixins ],
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
            }
        },
        mounted() {
            setTimeout(() => {
                console.log('gsd1', this.value)
                console.log('gsd2', this.columns)
            }, 1000)
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
