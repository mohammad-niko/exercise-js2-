/*
  todo1: what is the difference between an asynchronous function and a synchronous function?
*/

// ! Answer

// Definition: Synchronous functions execute one after the other in a sequence. The program waits for each operation to complete before moving on to the next one.

// Blocking: They block the execution of other code until they are finished.



// Definition: Asynchronous functions, on the other hand, do not block the execution of the program. They can start a task, continue executing other code, and then return to finish the task later, typically using mechanisms like callbacks, promises, or async/await.

// Non-blocking: They allow the program to continue running while waiting for an operation (like a file read, HTTP request, etc.) to complete.