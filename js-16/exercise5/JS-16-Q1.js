// ? why event bubbling is bad and how can we prevent it?

//Unwanted Triggers: When you click a child element, the event bubbles up and might also trigger event handlers on parent elements — even if you didn’t mean to.
//  Example: Clicking a button also accidentally triggers a click on the parent container.

// Performance Issues: If you have a big nested structure and lots of bubbling events, it can cause performance problems, especially if many handlers are running on parent elements.

// Debugging Becomes Hard: When multiple levels react to the same event, it's harder to trace which handler is firing and in which order.
// We can prevent it using e.stopPropagation().

// ! Answers ======================================
// it can sometimes lead to undesirable behavior. This is particularly true when you have event listeners on multiple levels of the DOM hierarchy.

// to prevent event bubbling, we can use the stopPropagation() or stopImmediatePropagation()
