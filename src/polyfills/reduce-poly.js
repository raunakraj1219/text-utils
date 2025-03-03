import React from 'react'
const arr = [1, 2, 3, 4]

const z = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0)

const reducePoly = () => {
    Array.prototype.myReduce = function (cb, init) {
        let acc = init;
        for (let i = 0; i < this.length; i++) {
            acc = cb(acc, this[i], i)
        }
        return acc;
    }
}

export default reducePoly


Array.prototype.myPoly = function (cb, init) {
    let acc = init;
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i], i);
    }
    return acc;
}


