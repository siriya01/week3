import { HomePage } from ''./pages/home.js''
import { AdminPage } from './pages/admin.js'

const routes = {
  '/': HomePage,
  '/admin': AdminPage,
}

function render() {
  const path = location.hash.slice(1) || '/'   // "#/admin" → "/admin"
  const page = routes[path] || HomePage
  document.querySelector('#app').innerHTML = page()
}

window.addEventListener('hashchange', render)  // เปลี่ยนหน้าเมื่อคลิกลิงก์
render()                                        // แสดงหน้าแรกตอนเปิดเว็บ