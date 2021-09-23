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
            let t0 = 0;
            let t1 = 0;
            let t2 = 0;
            if (scrollTop > this.moduleHeight) {
                switch (this.currentIndex) {
                    case 0:
                        t0 = parseInt(scrollTop / (this.moduleHeight * 3)) // 52/30 1.? -> 1
                        t1 = t2 = t0;
                        break;
                    case 1:
                        parseInt((scrollTop - this.moduleHeight) / (this.moduleHeight * 3));
                        t0 = t1 + 1;
                        t2 = t1;
                        break;
                    case 2:
                        t2 = parseInt((scrollTop - this.moduleHeight * 2) / (this.moduleHeight * 3)); // 52 - 20 -> 32/30 1.?
                        t0 = t1 = t2 + 1; // 2,2,1
                        break;
                }
            }
            this.times0 = t0;
            this.times1 = t1;
            this.times2 = t2;
            this.topPlaceholderHeight = parseInt(scrollTop / this.moduleHeight) * this.moduleHeight; // 52/10 5.2
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
