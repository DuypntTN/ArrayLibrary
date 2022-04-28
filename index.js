class Array {
    constructor() {
        this.length = 0;
        this.data = [];
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        if (item) {
            this.data.push(item);
            this.length++;
        }
    }
    print() {
        console.log(this.data);
    }
    replaceAtrribute(a, b) {
        for (let i = 0; i < this.data.length; i++) {
            this.data[i][b] = this.data[i][a];
            delete this.data[i][a];
        }
    }
    sort(attr) {
        let flag = true;
        let attrArray = [];
        for (let i = 0; i < this.data.length; i++) {
            let temp = this.data[i];
            Object.keys(temp).forEach(key => {
                attrArray.push(key);
            })
        }
        attrArray.find(a => a === attr) ? flag = false : flag = true;
        if (flag)
            return false
        else {
            this.data.sort((a, b) => {
                return a[attr] - b[attr];
            })
            return true;
        }
    };
    sort(attr, order) {
        let flag = true;
        let attrArray = [];
        for (let i = 0; i < this.data.length; i++) {
            let temp = this.data[i];
            Object.keys(temp).forEach(key => {
                attrArray.push(key);
            })
        }
        attrArray.find(a => a === attr) ? flag = false : flag = true;
        if (flag)
            return false
        else {
            if (order === 'asc') {
                this.data.sort((a, b) => {
                    return a[attr] - b[attr];
                })
            }
            else {
                this.data.sort((a, b) => {
                    return b[attr] - a[attr];
                })
            }
            return true;
        }
    }
}




