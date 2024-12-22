function convertArgsToArray() {
    console.log(arguments);

    // arguments 객체를 배열로 변환
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    return arr;
}

convertArgsToArray(1, 2, 3);