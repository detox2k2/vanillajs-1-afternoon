let id = document.getElementById('idInput');
let colorField = document.getElementById('colorInput');


const setCard = () => {
    const card = document.getElementById(id.value);
    let color = colorField.value
    card.style.color = color
}
