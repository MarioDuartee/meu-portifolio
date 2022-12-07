const projectOpen = document.querySelectorAll('.btn')
console.log(projectOpen)

projectOpen.forEach(btn => btn.addEventListener('click', function () {
    console.log(this.textContent)
}))