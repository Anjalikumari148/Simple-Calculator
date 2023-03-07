(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clearButton = document.querySelector('.btn-clear');
    //as we have so many buttons so we need to fign which button is pressed
    buttons.forEach(function(button) {
        //event listener to find out which button pressed
        button.addEventListener("click", function(e) {
            let value = e.target.dataset.num;
            // we need to push those value inside a screen
            screen.value += value;
        });
    })

    equal.addEventListener('click', function(e) {
        /*after the pressing the equal sign we need that whatever value on the screen
               should be disappear and new eqauated value show on the screen*/
        if (screen.value === ' ') {
            screen.value = "please enter";
        } else {
            //evaluated value
            let answer = eval(screen.value);
            screen.value = answer; // the value evauated store in ans variable
        }
    })
    clearButton.addEventListener('click', function(e) {
        screen.value = " ";
    })


})();