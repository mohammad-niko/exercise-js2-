import User from "./User.js";
class Teacher extends User {
  #titleunit;
  constructor(name, job, title) {
    super(name, job);
    this.#titleunit = title;
  }

  lesson() {
    console.log(
      `Hi my name is ${this.username} . i teach ${
        this.#titleunit
      } because  I'm a ${this.jobuser}`
    );
  }

  get titleunit(){
    return this.#titleunit
  }

  set titleunit(newTitle){
    (newTitle.length > 3)? this.#titleunit = newTitle : "Name must be at least 3 characters long.";
  }
}

export default Teacher;