const student = {
    name: 'Jane',
    age: 33,
    arrowTest: function() {
        const arrowTest2 = () => {
            console.log("Hi, I'm ", this.name )
        }
        arrowTest2();
    }
}

student.arrowTest();


const student = {
    name: 'Jane',
    age: 33,
    arrowTest: function() {
        const arrowTest2 = function () {
            console.log(this.name)
        }
        arrowTest2();
    }
}

student.arrowTest();