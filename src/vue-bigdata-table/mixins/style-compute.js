export default {
    data() {
        return {
            tableWidth: 0,
            widthArr: []
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
            let colWidthArr = [200, 200, 2200, 200 ,200];
            return colWidthArr
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
