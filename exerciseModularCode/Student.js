import User from "./User.js";
class Student extends User {
  #usersubject;
  constructor(name, job, subject) {
    super(name, job);
    this.#usersubject = subject;
  }
  study() {
    console.log(
      `${this.introduce()} nmidonam hala harchi ${this.#usersubject}`
    );
  }
}
export default Student;