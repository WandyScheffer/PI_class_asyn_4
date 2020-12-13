const calcule_multiples = () => {
    const input_number = document.querySelector("input[type='number']");
    const input_select = document.querySelector("select");
    const value = input_number.value;
    if ( value == '') {
        alert("Por favor, digite um número...");
        return;
    }

    input_select.innerHTML = '';

    for (let i= 1; i <= 10; i++) {
        const option = document.createElement("option");
        option.innerText = `${i} X ${value} = ${value * i}`
        input_select.appendChild(option);
    }
}