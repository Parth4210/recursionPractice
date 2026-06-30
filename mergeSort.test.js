const mergeSort = require("./mergeSort");

test("Test 1", ()=>{
    expect(mergeSort([2,1,3,4,5])).toEqual([1,2,3,4,5])
})