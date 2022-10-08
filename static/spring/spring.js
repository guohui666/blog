window.onload = () => {
    var link = document.createElement('link')
    link.href = 'https://guohuihui.gitee.io/guohui-blog/spring/spring.css'
    link.rel = 'stylesheet'
    link.type = 'text/css'
    document.head.appendChild(link)
    var qrcodeElement = document.createElement('div')
    var headerContainer = document.getElementsByClassName('not-mobile')[0]

    qrcodeElement.setAttribute('class', 'spring-qrcode')
    qrcodeElement.innerHTML = `
    <img src="https://guohuihui.gitee.io/guohui-blog/spring/qrcode-green.webp" alt="">
`
    headerContainer.appendChild(qrcodeElement)


    var qrcodeElementMobile = document.createElement('div')
    var form = document.getElementsByClassName('form')[0]
    var main = document.getElementById('main')

    qrcodeElementMobile.setAttribute('class', 'spring-qrcode-mobile')
    qrcodeElementMobile.innerHTML = `<img src="https://guohuihui.gitee.io/guohui-blog/spring/qrcode-green.webp" alt="">`
    main.insertBefore(qrcodeElementMobile, form)


    var svgContainer = document.getElementsByClassName('social')[0]
    var svgElement = document.createElement('a')
    svgElement.setAttribute('rel noreferrer noopener',)
    svgElement.setAttribute('target', '_blank')
    svgElement.setAttribute('target', '_blank')
    svgElement.setAttribute('href', 'https://www.springboot.io')
    svgElement.innerHTML = `
    <span class="a-content" tabindex="-1">
    <svg t="1665200688559" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5981" width="200" height="200" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M810.666667 256h42.666666a128 128 0 0 1 128 128v363.221333A106.112 106.112 0 0 1 875.221333 853.333333h-39.168a42.666667 42.666667 0 0 0-41.386666 32.170667c-18.56 73.344-28.501333 96.512-68.949334 96.512-29.653333 0-56.149333-25.813333-134.485333-114.304a42.666667 42.666667 0 0 0-31.957333-14.378667h-131.84a42.666667 42.666667 0 0 1 0-85.333333h131.84a128 128 0 0 1 95.829333 43.136c22.058667 24.917333 40.448 44.970667 55.168 60.074667l1.706667-6.656A128 128 0 0 1 836.053333 768h39.168c11.477333 0 20.778667-9.301333 20.778667-20.778667V384a42.666667 42.666667 0 0 0-42.666667-42.666667h-42.666666v281.770667c0 47.36-38.357333 85.717333-85.333334 85.717333h-261.333333c-47.104 0-108.672 29.866667-137.642667 67.029334l-25.856 33.152c-28.885333 37.034667-55.381333 29.098667-59.178666-18.048l0.213333 2.986666c-3.797333-47.018667-44.8-86.016-92.202667-87.04l-21.333333-0.512a87.381333 87.381333 0 0 1-85.333333-86.997333V213.077333C42.666667 166.101333 80.768 128 127.786667 128h597.76C772.565333 128 810.666667 166.101333 810.666667 213.717333V256zM213.333333 256a42.666667 42.666667 0 1 0 0 85.333333h213.333334a42.666667 42.666667 0 1 0 0-85.333333H213.333333z m0 170.666667a42.666667 42.666667 0 1 0 0 85.333333h341.333334a42.666667 42.666667 0 0 0 0-85.333333H213.333333z" fill="#000000" p-id="5982"></path>
    </svg>
     </span>
    `
    svgContainer.appendChild(svgElement)

}
