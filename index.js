export class NormalArray {
    constructor() {
        this.length = 0;
        this.data = [];
    }
    // Get value by index
    Get(index) {
        return this.data[index];
    }
    // Push value to the end of array
    Push(item) {
        if (item) {
            this.data.push(item);
            this.length++;
        }
    }
    // Print array
    Print() {
        console.log(this.data);
    }
    // Replace attribute a with b
    ReplaceAttribute(a, b) {
        for (let i = 0; i < this.data.length; i++) {
            this.data[i][b] = this.data[i][a];
            delete this.data[i][a];
        }
    }
    // Sort by attribute
    Sort(attr) {
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
    // Sort by attribute and order
    Sort(attr, order) {
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
// export default {
//     NormalArray
// }


