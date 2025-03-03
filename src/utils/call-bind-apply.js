import React from 'react'

const callBindApply = () => {

    const obj = { name: "Raunak" }
    function sayHello(age) {
        return "Hello " + this.name + " is " + age
    }
    // call
    console.log(sayHello.call(obj, 25))

    // apply - requires param in the form of array - only difference 
    console.log(sayHello.apply(obj, [24]))

    // bind - can't be executed directly - provides a function which is different from above two
    const bindFunc = sayHello.bind(obj);
    console.log(bindFunc(22));



    const temp = [1, 2, 3, 4];
    const maxNum = Math.max.apply(null, temp)
    console.log({ maxNum })

}

export default callBindApply

const z = { name: "Ramesh" }
function hell(age) {
    return `HH ${this.name}+`
}

hell.call(z);
hell.bind()
