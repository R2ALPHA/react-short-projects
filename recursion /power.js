function power(base, exponent) {
    if (exponent === 1) {
        return base;
    }

    return base * power(base, exponent - 1);
}

// Tests 
let p = power(2, 3);
