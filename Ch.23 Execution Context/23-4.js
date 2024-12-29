// 1. 전역 변수 선언
const x = 1;

// 2. foo 함수 선언
function foo() {
    const y = 2;

		// 3. bar 함수 선언
    function bar() {
        const z = 3;
        console.log(x + y + z);
    }
    
    // 5. bar 함수 실행
    bar();
}

// 4. foo 함수 실행 
foo();