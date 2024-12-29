const x = 1;

function foo() {
    const y = 1;
    function bar() {
        const z = 1;   // x: 1, y: undefined
    }
    bar();
}

foo();