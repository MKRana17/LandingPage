const title = document.querySelector('h1');
const styleText = document.querySelector('.style');

title.addEventListener('mouseenter', () => {
    title.style.transform = 'scale(1.1)';
    styleText.style.transform = 'scale(1.1)';
});

title.addEventListener('mouseleave', () => {
    title.style.transform = 'scale(1)';
    styleText.style.transform = 'scale(1)';
});


const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
    btn.style.transform = 'scale(1.1)';
});

btn.addEventListener('mouseout', () => {
    btn.style.transform = 'scale(1)';
});

const socialIcons = document.querySelectorAll('.icons');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.color = '#fff';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
        icon.style.color = '#5493ab';
    });
});

