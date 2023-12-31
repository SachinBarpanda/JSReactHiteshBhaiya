// Immediately Invoked Function Expression

(function chai(){
    console.log("DB Connected");
})();

( (name) => {
    console.log(`DB Connected again ${name}`);
})("At Port 3000");