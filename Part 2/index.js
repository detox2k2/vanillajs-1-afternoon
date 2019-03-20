let id = document.getElementById('idInput');
let color = document.getElementById('colorInput');


const setCard = () => {
    const card = document.getElementById(id.value)
    
    card.style.color = color.value
}
