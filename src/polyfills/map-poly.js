import React from 'react'

const mapPoly = () => {
    Array.prototype.myMap = function (cb) {
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            arr.push(cb(this[i], i));
        }
        return arr;
    }
    const nums = [1, 2, 3, 4];
    const zz = nums.myMap((nu, i) => nu * 2);
    console.log(zz);
}

export default mapPoly



