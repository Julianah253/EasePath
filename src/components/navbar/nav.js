window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('window-scroll', window.scrollY > 0)
})