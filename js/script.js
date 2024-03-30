let socialBlock = document.getElementById('socialMedias');
let button = document.getElementById('button');
let skillListButton = document.getElementById('skillListButton');
let skillList = document.getElementById('skillList');
socialBlock.style.display = 'none';
skillList.style.display = 'none';
button.addEventListener('click', () => {
    if (socialBlock.style.display == 'none') {
        socialBlock.style.display = 'block'
    } else {
        socialBlock.style.display = 'none'
    }

    if(skillList.style.display == 'table') {
        skillList.style.display = 'none'
    }
});
skillListButton.addEventListener('click', () => {
    if (skillList.style.display == 'none') {
        skillList.style.display = 'table';
    } else {
        skillList.style.display = 'none'
    }

    if(socialBlock.style.display == 'block') {
        socialBlock.style.display = 'none'
    }
})
