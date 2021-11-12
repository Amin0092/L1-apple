let pro = document.querySelector('.pro')
let max = document.querySelector('.max')
let img = document.querySelector('img')
let blue = document.querySelector('.blue')
let gold = document.querySelector('.gold')
let silver = document.querySelector('.silver')
let black = document.querySelector('.black')


max.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-family-select?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=95&amp;.v=1631306948000')
    max.classList.toggle('m-active')
    pro.classList.remove('m-active')

    blue.onclick = () => {
        img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1631652955000')
        blue.classList.add('c-active')
        gold.classList.remove('c-active')
        silver.classList.remove('c-active')
        black.classList.remove('c-active')
    }
    gold.onclick = () => {
        img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000')
        blue.classList.remove('c-active')
        gold.classList.add('c-active')
        silver.classList.remove('c-active')
        black.classList.remove('c-active')
    }
    silver.onclick = () => {
        img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000')
        blue.classList.remove('c-active')
        gold.classList.remove('c-active')
        silver.classList.add('c-active')
        black.classList.remove('c-active')
    }
    black.onclick = () => {
        img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000')
        blue.classList.remove('c-active')
        gold.classList.remove('c-active')
        silver.classList.remove('c-active')
        black.classList.add('c-active')
    }
}
pro.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-select?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=95&amp;.v=1631306948000')
    pro.classList.add('m-active')
    max.classList.remove('m-active')

    blue.onclick = () => {
        img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1631652955000')
        blue.classList.add('c-active')
        gold.classList.remove('c-active')
        silver.classList.remove('c-active')
        black.classList.remove('c-active')
    }
    gold.onclick = () => {
        img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000')
        blue.classList.remove('c-active')
        gold.classList.add('c-active')
        silver.classList.remove('c-active')
        black.classList.remove('c-active')
    }
    silver.onclick = () => {
        img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000')
        blue.classList.remove('c-active')
        gold.classList.remove('c-active')
        silver.classList.add('c-active')
        black.classList.remove('c-active')
    }
    black.onclick = () => {
        img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000')
        blue.classList.remove('c-active')
        gold.classList.remove('c-active')
        silver.classList.remove('c-active')
        black.classList.add('c-active')
    }
}

