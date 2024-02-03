
let handleCounterClick = () => {
    // to get the reference of the element with id counter
    let counterElement = document.querySelector('#counter');
    // to increase the current count by 1 every time the button is clicked
    counterElement.innerHTML = Number(counterElement.innerHTML) + 1;
}
// counterElement.addEventListener('click', counterElement);

