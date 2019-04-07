const navFirst = document.querySelector('.navbar-first')
const navFirstHeight = navFirst.getBoundingClientRect().height
const headerLogo = document.querySelector('.header-logo')
const header = document.querySelector('header')
const headerHeight = header.getBoundingClientRect().height
const main = document.querySelector('main')

document.addEventListener('scroll', () => {
    if (window.pageYOffset > navFirstHeight) {
        header.classList.add('header-fixed')
        main.style.paddingTop = `${headerHeight}px`
        navFirst.style.display = 'none'
        headerLogo.style.padding = '12px 15px 0'
        headerLogo.style.display = 'block'
    } else {
        header.classList.remove('header-fixed')
        main.removeAttribute('style')
        navFirst.removeAttribute('style')
        headerLogo.removeAttribute('style')
    }
})