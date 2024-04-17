// Immediately Invoked Function Expression (IIFE)

//named IIFE
(function name () {
    console.log("Name Displayed");
})();

((name) => {
    console.log(`Name Display : ${name}`);
})('uday')