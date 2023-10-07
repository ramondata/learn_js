#! usr/bin/env node

//some functions in JavaScript

function print(name) {
    console.log("Hello " + name);

}

const MyName = "Ramon";

print(MyName);

function filter(List) {
    for(let iter = 0; iter <= 19; iter++) {
        if (List[iter] <= 10) {
            console.log("less than or equal 10")
        } else {
            console.log("greater than 10")
        }
    }
}

const SampleNumbers = [0,1,2,3,4,5,6,7,8,9,10,12,14,16,17,18,20,21,21,21]

filter(SampleNumbers)