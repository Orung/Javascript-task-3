function intergerNumber(number) {
    let replace;
    let array = [];

    for (let i = 1; i <= number; i++) {
        if ((i % 2) == 0 && (i % 3) == 0 && (i % 5) == 0) {
            replace = "yu-gi-oh"
        } else if ((i % 2) == 0 && (i % 3) == 0) {
            replace = "yu-gi"
        } else if ((i % 2) == 0 && (i % 5) == 0) {
            replace = "yu-oh"
        } else if ((i % 3) == 0 && (i % 5) == 0) {
            replace = "gi-oh"
        } else if ((i % 2) == 0 || (i % 3) == 0 || (i % 5) == 0) {
            if ((i % 2) == 0) {
                replace = "yu";
            } else if ((i % 3) == 0) {
                replace = "gi";
            } else {
                replace = "oh";
            }
        } else {
            replace = i
        }

        array.push(replace)

    }
    console.log(array)
}

intergerNumber(100);