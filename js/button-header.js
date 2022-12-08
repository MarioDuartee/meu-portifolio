const buttonHeader = document.querySelectorAll('.btn-header')

buttonHeader.forEach(btn => btn.addEventListener('click', function () {
    const typeBtn = this.value
    typeBtn == 'curriculo' ? window.location.href = 'https://drive.google.com/file/d/1Gz4QugfSQS0dwU79sExv7kFZA1M3NnZZ/view' : window.location.href = 'https://wa.me/qr/3RCHVE5KAGELD1'
}))
