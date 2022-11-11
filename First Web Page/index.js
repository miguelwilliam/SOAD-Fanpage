if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    let tourButtons = document.getElementsByClassName('tour-btn')
    for (let i = 0; i < tourButtons.length; i++) {
        let tourButton = tourButtons[i]
        tourButton.addEventListener('click',tourButtonClicked)
    }
}

function tourButtonClicked(event) {
    let tourButton = event.target;
    let date = tourButton.parentElement.getElementsByClassName('tour-date')[0].innerText;
    let arena = tourButton.parentElement.getElementsByClassName('tour-arena')[0].innerText;
    alert('Ingresso reservado para '+date+' no '+arena+'.')
}