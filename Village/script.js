// guardar e-mails no local storage
const emails = document.querySelector('input')
const btnSend = document.querySelector('button')
const errInfo = document.querySelector('.error')
const listEmail = []

btnSend.addEventListener('click', () => {
  try {
    listEmail.push(emails.value)
    localStorage.setItem('listEmail', JSON.stringify(listEmail))
  } catch {
    errInfo.attributes.removeNamedItem('hidden')
  }
})

// função de configuração para o slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
