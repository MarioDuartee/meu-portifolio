const buttonHeader = document.querySelectorAll('.btn-header')

buttonHeader.forEach(btn => btn.addEventListener('click', function () {
    const typeBtn = this.value
    typeBtn == 'curriculo' ? window.location.href = 'https://drive.google.com/file/d/1ZaDkW2xoizxlZdtmc4hmPZG2emtPUp7-/view' : window.location.href = 'https://wa.me/qr/3RCHVE5KAGELD1'
}))
