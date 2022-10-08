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
    svgElement.setAttribute('rel','noreferrer noopener',)
    svgElement.setAttribute('target', '_blank')
    svgElement.setAttribute('href', 'https://www.springboot.io')
    svgElement.innerHTML = `
    <span class="a-content" tabindex="-1">
        <svg t="1665212242101" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="1480" width="200" height="200">
        <path d="M51.2 894.293333a257.706667 30.72 0 1 0 515.413333 0 257.706667 30.72 0 1 0-515.413333 0Z" fill="#DAE9FF"
              p-id="1481"></path>
        <path d="M581.973333 933.546667a143.36 22.186667 0 1 0 286.72 0 143.36 22.186667 0 1 0-286.72 0Z" fill="#DAE9FF"
              p-id="1482"></path>
        <path
            d="M568.32 413.013333H201.386667c-11.946667 0-22.186667 8.533333-22.186667 18.773334 0 10.24 10.24 18.773333 22.186667 18.773333h366.933333c11.946667 0 22.186667-8.533333 22.186667-18.773333 0-10.24-10.24-18.773333-22.186667-18.773334z"
            fill="" p-id="1483"></path>
        <path
            d="M935.253333 479.573333l-360.106666 10.24c-22.186667 0-40.96 18.773333-40.96 40.96v238.933334c0 22.186667 18.773333 40.96 40.96 40.96h134.826666l3.413334 30.72 34.133333 15.36c6.826667 3.413333 18.773333 1.706667 23.893333-5.12l40.96-40.96h116.053334c22.186667 0 51.2-18.773333 51.2-40.96v-238.933334c1.706667-22.186667-22.186667-51.2-44.373334-51.2z"
            fill="#FFD5C2" p-id="1484"></path>
        <path
            d="M904.533333 479.573333H530.773333c-22.186667 0-40.96 18.773333-40.96 40.96v235.52c0 22.186667 18.773333 40.96 40.96 40.96H665.6l40.96 40.96c5.12 5.12 15.36 5.12 20.48 0l40.96-40.96h136.533333c22.186667 0 40.96-18.773333 40.96-40.96V520.533333c-1.706667-22.186667-18.773333-40.96-40.96-40.96z"
            fill="#FB560A" p-id="1485"></path>
        <path
            d="M675.84 187.733333l-515.413333 13.653334c-32.426667 0-58.026667 25.6-58.026667 58.026666V597.333333c0 32.426667 25.6 58.026667 58.026667 58.026667h194.56l18.773333 46.08 27.306667 13.653333c15.36 6.826667 35.84 3.413333 47.786666-8.533333l51.2-52.906667h194.56c32.426667 0 58.026667-25.6 58.026667-58.026666V259.413333c0-32.426667-44.373333-71.68-76.8-71.68z"
            fill="#DAE9FF" p-id="1486"></path>
        <path
            d="M643.413333 187.733333H109.226667C76.8 187.733333 51.2 213.333333 51.2 245.76v337.92c0 32.426667 25.6 58.026667 58.026667 58.026667h194.56l51.2 52.906666c11.946667 11.946667 30.72 11.946667 42.666666 0l51.2-52.906666h194.56c32.426667 0 58.026667-25.6 58.026667-58.026667V245.76c0-32.426667-25.6-58.026667-58.026667-58.026667z"
            fill="#3889FF" p-id="1487"></path>
        <path
            d="M143.36 363.52c3.413333-20.48 23.893333-37.546667 46.08-37.546667h172.373333c20.48 0 39.253333 17.066667 39.253334 37.546667 0 20.48-17.066667 37.546667-37.546667 37.546667h-187.733333c-22.186667 1.706667-37.546667-15.36-32.426667-37.546667zM143.36 464.213333c3.413333-17.066667 18.773333-30.72 35.84-30.72h305.493333c17.066667 0 32.426667 13.653333 34.133334 30.72v8.533334c1.706667 20.48-13.653333 37.546667-34.133334 37.546666H174.08c-20.48 0-35.84-17.066667-30.72-37.546666v-8.533334z"
            fill="#DAE9FF" p-id="1488"></path>
        <path
            d="M141.653333 325.973333h180.906667c17.066667 0 30.72 13.653333 30.72 30.72s-13.653333 30.72-30.72 30.72H141.653333c-17.066667 0-30.72-13.653333-30.72-30.72s15.36-30.72 30.72-30.72zM141.653333 433.493333H443.733333c17.066667 0 30.72 13.653333 30.72 30.72S460.8 494.933333 443.733333 494.933333H141.653333c-17.066667 0-30.72-13.653333-30.72-30.72s15.36-30.72 30.72-30.72z"
            fill="#FFFFFF" p-id="1489"></path>
        <path d="M819.2 179.2a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z" fill="#FFD6C2" p-id="1490"></path>
        <path d="M785.066667 179.2a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z" fill="#FB560A" p-id="1491"></path>
        </svg>

     </span>
    `
    svgContainer.appendChild(svgElement)

}

