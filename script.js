
function openLetter(type) {
    const imageSrc = type === 'sad' ? 'sad_letter.png' : 'lost_letter.png';
    document.getElementById("letterImage").src = imageSrc;
    document.getElementById("popup").classList.add("show");
}

function closePopup() {
    document.getElementById("popup").classList.remove("show");
}
