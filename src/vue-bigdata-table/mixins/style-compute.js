import { getScrollbarWidth } from '../util/index';
export default {
    data() {
        return {
            tableWidth: 0,
            widthArr: [],
            wrapperHeight: 0,
            topPlaceholderHeight: 50, // 顶部占位容器高度
            moduleHeight: 0,
            scrollTop: 0,
            totalRowHeight: 0,
            indexWidthInside: 0
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
        placeholderHeight () {
            return this.totalRowHeight - this.moduleHeight * 3; // 占位容器的总高度(上 + 下)
        },
        bottomPlaceholderHeight () {
            return (this.placeholderHeight - this.topPlaceholderHeight) < 0 ? 0 : this.placeholderHeight - this.topPlaceholderHeight;
        },
        itemRowHeight () {
            return this.rowHeight === undefined ? 48 : this.rowHeight;
        },
        rowStyles () {
            return this.rowHeight !== undefined ? {height: `${this.rowHeight}px`} : {};
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
                this.setComputedProps();
                let scrollBarWidth = this.totalRowHeight > this.wrapperHeight ? getScrollbarWidth() : 0;
                this.outerWidth = this.$refs.outer.offsetWidth - 2 - scrollBarWidth;
                let width = this.colWidth * this.columns.length + (this.showIndex ? this.indexWidthInside : 0);
                console.log('gsdwidth', width, this.outerWidth)
                this.tableWidth = this.fixedWrapperWidth ? this.outerWidth : (width > this.outerWidth ? width : this.outerWidth);
                this.widthArr = this.colWidthArr;
                console.log('gsd777', this.widthArr)
            })
        },
        setComputedProps () {
            const len = this.insideTableData.length;
            this.totalRowHeight = len * this.itemRowHeight;
        }
    }
}
