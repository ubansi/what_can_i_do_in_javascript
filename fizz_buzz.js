function getFizzBuzzAns(num) {
    var FIZZ = 'Fizz';
    var BUZZ = 'Buzz';

    var isFizz = num % 3 === 0;
    var isBuzz = num % 5 === 0;

    if (isBuzz && isFizz) {
        return FIZZ + BUZZ;
    }
    if (isFizz) {
        return FIZZ;
    }
    if (isBuzz) {
        return BUZZ;
    }

    return num;
}
