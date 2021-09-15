<template>
    <div class="vue-bigdata-table-outer" ref="outer">
        <div  :class="wrapperClasses" :style="tableWidthStyles">
            <div class="vue-bigdata-table-wrapper" ref="outWrapper">
                <div :class="['vue-bigdata-table-header-wrapper', fixed ? 'header-wrapper-fixed' : '']" :style="headerStyle">
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
