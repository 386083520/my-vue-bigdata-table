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
        getTables (h) {

        }
    }
}
