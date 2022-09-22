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
}
