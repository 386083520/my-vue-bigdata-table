import ItemTable from '../components/item-table.vue';
export default {
    computed: {
        columnsHandled() {
            let columns = [...this.columns];
            return columns
        }
    },
    data() {
        return {
            times0: 0, // 当前是第几轮
            times1: 0,
            times2: -1,
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
            let count1 = this.times0 * this.itemNum * 3;
            this.table1Data = this.insideTableData.slice(count1, count1 + this.itemNum);
            let count2 = this.times1 * this.itemNum * 3;
            this.table2Data = this.insideTableData.slice(count2 + this.itemNum, count2 + this.itemNum * 2);
            let count3 = this.times2 * this.itemNum * 3;
            this.table3Data = this.insideTableData.slice(count3 + this.itemNum * 2, count3 + this.itemNum * 3);
            console.log('gsd666', this.table1Data, count2, count3)
        },
        getTables (h) {
            let table1 = this.getItemTable(h, this.table1Data, 1);
            let table2 = this.getItemTable(h, this.table2Data, 2);
            let table3 = this.getItemTable(h, this.table3Data, 3);
            if (this.currentIndex === 0) {
                return [table1, table2, table3];
            } else if (this.currentIndex === 1) {
                return [table2, table3, table1];
            } else {
                return [table3, table1, table2];
            }
        },
        getItemTable (h, data, index) {
            return h(ItemTable, {
                props: {
                    itemData: data,
                    showIndex: this.showIndex,
                    columns: this.columnsHandled,
                    rowStyles: this.rowStyles,
                    widthArr: this.colWidthArr,
                    fixedCol: this.fixedCol
                },
                on: {},
                key: 'table-item-key' + index,
                ref: {},
                attrs: {
                    'data-index': index
                }
            })
        },
        handleScroll (e) {
            let ele = e.srcElement || e.target;
            let { scrollTop, scrollLeft } = ele; // scrollTop是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量
            this.scrollLeft = scrollLeft;
            this.currentIndex = parseInt((scrollTop %(this.moduleHeight * 3)) / this.moduleHeight) // 52%30 = 22 22/10= 2.2
            this.scrollTop = scrollTop;
            this.$nextTick(() => {
                this.setTopPlace();
            });
        }
    }
}
