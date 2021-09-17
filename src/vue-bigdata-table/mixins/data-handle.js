export default {
    computed: {
        columnsHandled() {
            let columns = [...this.columns];
            return columns
        }
    },
    data() {
        return {
            insideTableData: []
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
        }
    }
}
