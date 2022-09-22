
window.onload(()=>{
    var link = document.createElement( 'link' );
    link.href = 'https://guohuihui.gitee.io/guohui-blog/spring/spring.css';
    link.rel ='stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);

    var qrcodeElement = document.createElement('div')
    var headerContainer = document.getElementsByClassName('not-mobile')[0]

    qrcodeElement.setAttribute('class', 'spring-qrcode')
    qrcodeElement.innerHTML = `
    <img src="https://guohuihui.gitee.io/guohui-blog/spring/qrcode-green.png" alt="">
`
    headerContainer.appendChild(qrcodeElement)
})
