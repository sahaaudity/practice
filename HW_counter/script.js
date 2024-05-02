    let count = 0;

    const displayElement = document.getElementById('count');
    const incrementButton = document.querySelector('.button_in'); // Select by class
    const decrementButton = document.querySelector('.button_de'); // Select by class

    function incrementCount() {
        if (count < 10) {
            count++;
            displayElement.innerText = count;
        }
    }

    function decrementCount() {
        if (count > 0) {
            count--;
            displayElement.innerText = count;
        }
    }

    incrementButton.addEventListener('click', incrementCount);
    decrementButton.addEventListener('click', decrementCount);

