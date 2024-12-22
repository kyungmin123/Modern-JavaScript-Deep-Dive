// 일반 함수 호출
function foo() {
    console.log("foo's this: ", this);
    function bar() {
        console.log("bar's this: ", this);
    }
    bar();
}
foo();
