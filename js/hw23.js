class SuperMath {
    input() {
        obj.x = prompt("Enter X:");
        obj.sign = prompt("Enter operation (+, -, *, /, %):");
        obj.y = prompt("Enter Y:");

        if (isNaN(+obj.x) || isNaN(+obj.y)) {
            this.input();
            this.check(obj);
        }
        else return obj;
    }

    check(obj) {
        if (obj.x && obj.y && obj.sign) {
            if (confirm(`You want to do ${obj.x} ${obj.sign} ${obj.y}?`)) {
                switch (obj.sign) {
                    case '+':
                        return +obj.x + +obj.y;
                    case '-':
                        return obj.x - obj.y;
                    case '*':
                        return obj.x * obj.y;
                    case '/':
                        console.log(`${obj.x} ${obj.sign} ${obj.y} = ${obj.x / obj.y}`);
                        return obj.x / obj.y;
                    case '%':
                        return obj.x % obj.y;
                    default: return 0;
                }
            } else {
                this.input();
                this.check(obj);
            }

        } else {
            this.input();
            this.check(obj);
        }
    }
}

const p = new SuperMath();
const obj = {
    x: 2,
    y: 3,
    sign: '*'
}
// const obj = p.input();
const r = p.check(obj);
console.log(`${obj.x} ${obj.sign} ${obj.y} = ${r}`);