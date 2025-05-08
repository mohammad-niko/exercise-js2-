// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:

const allSpans = document.querySelectorAll(".circle");

allSpans.forEach((span) =>
  span.classList.contains("purple")
    ? span.classList.replace("purple", "blue")
    : (span.classList.replace("blue","purple"))
);
