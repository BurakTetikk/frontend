function sayHello() {
    const inputElement = document.querySelector('#input-text');
    document.querySelector('#greeting').innerText = `Hello, ${inputElement.value}!`;
}