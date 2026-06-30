const fibonacci = require("./fibonacci");

test("hell naw",()=>{
    expect(fibonacci(8)).toEqual([0,1,1,2,3,5,8,13])
})