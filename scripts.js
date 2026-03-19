// Mobile nav toggle
const burger = document.getElementById('burger')
const menu   = document.getElementById('menu')

if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open')
    burger.setAttribute('aria-expanded', open)
  })

  // Close on any menu link click
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => menu.classList.remove('open'))
  })

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') menu.classList.remove('open')
  })
}

// Dynamic copyright year
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()
