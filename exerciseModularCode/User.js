class User {
  #username;
  #jobuser;
  constructor(name, job) {
    this.#username = name;
    this.#jobuser = job;
  }

  introduce() {
    return `Hi my name is ${this.#username} and I'm a ${this.#jobuser}`;
  }

  get username() {
    return this.#username;
  }
  get jobuser() {
    return this.#jobuser;
  }
}

export default User;