export default {
    data() {
        return {
            tableWidth: 0,
            widthArr: [],
            wrapperHeight: 0,
            topPlaceholderHeight: 50, // 顶部占位容器高度
            moduleHeight: 0,
            scrollTop: 0
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
        },
        itemRowHeight () {
            return this.rowHeight === undefined ? 48 : this.rowHeight;
        }
    },
    methods: {
        updateHeight () {
            this.$nextTick(() => {
                let wrapperHeight = this.$refs.outer.offsetHeight;
                this.itemNum = Math.ceil((wrapperHeight - this.headerHeight) / this.itemRowHeight + this.appendNum)
                this.moduleHeight = this.itemNum * this.itemRowHeight;
                this.wrapperHeight = wrapperHeight;
                this.setTopPlace()
            })
        },
        setTopPlace () {
            let scrollTop = this.scrollTop;
            this.setTableData();
        },
        _tableResize () {
            this.$nextTick(() => {
                this.updateHeight();
                this.widthArr = this.colWidthArr;
                console.log('gsd777', this.widthArr)
            })
        }
    }
}
