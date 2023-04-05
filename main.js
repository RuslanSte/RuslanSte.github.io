
const btnMenu = document.querySelector(`.menu`)
const btnCross = document.querySelector(`.cross`)
const fix = document.querySelector(`.fix`)
const elem = document.getElementsByClassName(`href`)

btnMenu.addEventListener(`click`, function () {
    fix.style[`display`] = `block`
})

btnCross.addEventListener(`click`, function () {
    fix.style[`display`] = `none`
})

for (let item of elem) {
    item.addEventListener(`click`, function (event) {
        for (let it of elem) {
            it.classList.remove(`select`)
        }
        event.target.classList.add(`select`)
        if (window.innerWidth <= 425) fix.style[`display`] = `none`
    })
}

window.addEventListener('scroll', function() {
    if (this.scrollY < `690`) {
        for (let it of elem) {
            it.classList.remove(`select`)
        }
        elem[0].classList.add(`select`)
        return
    }
    if (this.scrollY < `1150`) {
        for (let it of elem) {
            it.classList.remove(`select`)
        }
        elem[1].classList.add(`select`)
        return
    }
    if (this.scrollY < `1750`) {
        for (let it of elem) {
            it.classList.remove(`select`)
        }
        elem[2].classList.add(`select`)
        return
    }
    if (this.scrollY < `3400`) {
        for (let it of elem) {
            it.classList.remove(`select`)
        }
        elem[3].classList.add(`select`)
        return
    }
    for (let it of elem) {
        it.classList.remove(`select`)
    }
    elem[4].classList.add(`select`)
    return
  });