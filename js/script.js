let socialBlock = document.getElementById('socialMedias')
let button = document.getElementById('button')
socialBlock.style.display = 'none'

button.addEventListener('click', () => {
    if (socialBlock.style.display == 'none') {
        socialBlock.style.display = 'block'
    } else {
        socialBlock.style.display = 'none'
    }
});

