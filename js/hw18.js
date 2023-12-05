const pow = (num, degree) => {
    if (degree > 0) {
        return num * pow(num, degree - 1);
    } else
        return 1;
}

const res = pow(2, 5);
console.log(res);
