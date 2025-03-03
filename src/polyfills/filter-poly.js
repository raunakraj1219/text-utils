import React from 'react'

const filterPoly = () => {
    Array.prototype.myFilter = function (cb) {
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i)) {
                arr.push(this[i]);
            }
        }
        return arr;
    }
}

export default filterPoly


// Array.prototype.myFilter = function (cb) {
//     let res = [];

//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i))
//             res.push(this[i]);
//     }
// }

// Array.prototype.mymap = function (cb) {
//     let res = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i], i));
//     }
//     return res;
// }


Array.prototype.myFilter = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i)) {
            arr.push(this[i]);
        }
    }

    return arr;
}