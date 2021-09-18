export default {
    computed: {
        columnsHandled() {
            let columns = [...this.columns];
            return columns
        }
    },
    data() {
        return {
            insideTableData: [],
            itemNum: 0,
            scrollLeft: 0,
            currentIndex: 0
        }
    },
    methods: {
        setInitIndex (tableData) {
            console.log('gsd888', tableData)
            return tableData.map((item, i) => {
                let row = item;
                row.initRowIndex = i;
                return row;
            });
        },
        renderTable (h) {
            return h('div', {
                style: this.tableWidthStyles
            }, this.getTables(h));
        },
        setTableData () {
            console.log('gsdsetTableData', this.insideTableData)
        },
        getTables (h) {
            let table1 = this.getItemTable(h, this.table1Data, 1);
            let table2 = this.getItemTable(h, this.table2Data, 2);
            let table3 = this.getItemTable(h, this.table3Data, 3);
        },
        getItemTable (h, data, index) {
        },
        handleScroll (e) {
            let ele = e.srcElement || e.target;
            let { scrollTop, scrollLeft } = ele; // scrollTop是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量
            this.scrollLeft = scrollLeft;
            this.currentIndex = parseInt((scrollTop %(this.moduleHeight * 3)) / this.moduleHeight)
            this.scrollTop = scrollTop;
            this.$nextTick(() => {
                this.setTopPlace();
            });
        }
    }
}
