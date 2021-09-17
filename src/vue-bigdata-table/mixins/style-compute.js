export default {
    data() {
        return {
            tableWidth: 0,
            widthArr: [],
            topPlaceholderHeight: 50, // 顶部占位容器高度
        }
    },
    computed: {
        wrapperClasses () {
            return [
                this.prefix,
                this.fixed ? `${this.prefix}-fixed` : ''
            ];
        },
        tableWidthStyles () {
            return {width: this.tableWidth + 'px'};
        },
        headerStyle () {
            return {
                height: this.headerHeight + 'px',
                transform: 'translateX(0)'
            };
        },
        colWidthArr () {
            let colWidthArr = [200, 200, 200, 200 ,200, 200, 200];
            return colWidthArr
        },
        bottomPlaceholderHeight () {
            return 50 // TODO
        }
    },
    methods: {
        _tableResize () {
            this.$nextTick(() => {
                this.widthArr = this.colWidthArr;
                console.log('gsd777', this.widthArr)
            })
        }
    }
}
