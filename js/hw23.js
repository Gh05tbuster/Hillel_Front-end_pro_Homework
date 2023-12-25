class SuperMath {
    obj = {
        x: 0,
        y: 0,
        sign: '',
    }

    input() {
        this.obj.x = prompt("Enter X:");
        this.obj.sign = prompt("Enter operation (+, -, *, /, %):");
        this.obj.y = prompt("Enter Y:");

        if (isNaN(+this.obj.x) || isNaN(+this.obj.y)) {
            this.input();
            this.check(this.obj);
        }
        else return this.obj;
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
                obj = this.input();
                this.check(obj);
            }

        } else {
            obj = this.input();
            this.check(obj);
        }
    }
}

const p = new SuperMath();
// const obj = {
//     x: 2,
//     y: 3,
//     sign: '*'
// }
const obj = p.input();
const r = p.check(obj);
console.log(`${obj.x} ${obj.sign} ${obj.y} = ${r}`);
