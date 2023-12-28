class Student {
    attendance = new Array(25);
    classes = 0;
    marks = {
        math: 0,
        english: 0,
        programming: 0,
    }

    constructor(firstName, lastName, bitrhYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bitrhYear = bitrhYear;
    }

    getAge() {
        const date = new Date();
        const currentYear = date.getFullYear();
        return currentYear - this.bitrhYear;
    }

    present() {
        if (this.classes < 25)
            this.attendance[this.classes++] = true;
    }

    absent() {
        if (this.classes < 25)
            this.attendance[this.classes++] = false;
    }

    setMark(subj, mark) {
        if (mark >= 0 && mark <= 100)
            this.marks[subj] = mark;
    }

    averageMark() {
        const marksValues = Object.values(this.marks);
        return marksValues.reduce((acc, curr) => acc + curr) / marksValues.length;
    }

    averageAttendance() {
        return this.attendance.reduce((acc, curr) => acc + curr) / this.attendance.length;
    }

    summary() {
        const avrg = this.averageMark();
        const att = this.averageAttendance();

        if (avrg >= 90 && att >= 0.9) return 'Well done, keep it up';
        else if (avrg >= 90 || att >= 0.9) return 'I know you can do better';
        else return `You're a dummy`;
    }

    simulateAttendance(att) {   // change this value to adjust attendance
        for (let i = 0; i < this.attendance.length; i++) {
            let rnd_1_10 = Math.floor(Math.random() * 10) + 1;
            rnd_1_10 <= att ? this.present() : this.absent();
        }
    }
}

const jon = new Student('Jon', 'Snow', 1998);
const sam = new Student('Samwell', 'Tarly', 2002);
const sansa = new Student('Sansa', 'Stark', 2000);

const jonAge = jon.getAge();
console.log(`Jon is about ${jonAge}.`);
jon.setMark('math', 60);
jon.setMark('english', 80);
jon.setMark('programming', 75);
jon.simulateAttendance(7);
const jonSum = jon.summary();
console.log(`${jonSum}, Jon.`);

const samAge = sam.getAge();
console.log(`Sam is about ${samAge}.`);
sam.setMark('math', 95);
sam.setMark('english', 95);
sam.setMark('programming', 100);
sam.simulateAttendance(10);
const samSum = sam.summary();
console.log(`${samSum}, Sam.`);

const sansaAge = sansa.getAge();
console.log(`Sansa is about ${sansaAge}.`);
sansa.setMark('math', 90);
sansa.setMark('english', 95);
sansa.setMark('programming', 80);
sansa.simulateAttendance(10);
const sansaSum = sansa.summary();
console.log(`${sansaSum}, Sansa.`);
