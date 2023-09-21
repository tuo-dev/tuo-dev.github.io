//scroll

const header = document.querySelector('header');
const footer = document.querySelector('.footer_innerbox');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('on');
  } else {
    header.classList.remove('on');
  }
  if (window.scrollY >= document.body.clientHeight - window.innerHeight - 20) {
    footer.classList.add('on');
  } else {
    footer.classList.remove('on');
  }
});

//click

const navToggleBtn = document.querySelector('.nav_toggle');
const navList = document.querySelector('.nav_menu');
let toggleState = false;
navToggleBtn.addEventListener('click', () => {
  if (!toggleState) {
    navList.classList.add('on');
    navToggleBtn.classList.add('active');
  } else {
    navList.classList.remove('on');
    navToggleBtn.classList.remove('active');
  }
  toggleState = !toggleState;
});

const navBtnList = navList.querySelectorAll('li');
const startBtn = document.querySelector('.start_btn');
const headerFixed = header.querySelector('.header_innerbox').getBoundingClientRect().bottom;
const aboutContain = document.querySelector('#about_contain');
const projectContain = document.querySelector('#project_contain');

startBtn.addEventListener('click', () => {
  window.scrollTo({
    top: aboutContain.offsetTop - headerFixed,
    behavior: 'smooth',
  });
});

navBtnList.forEach((btnLi) => {
  const btn = btnLi.querySelector('button');
  const btnId = btn.getAttribute('id');
  btn.addEventListener('click', () => {
    if (btnId === 'home_btn') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (btnId === 'about_btn') {
      window.scrollTo({
        top: aboutContain.offsetTop - headerFixed,
        behavior: 'smooth',
      });
    } else if (btnId === 'project_btn') {
      window.scrollTo({
        top: projectContain.offsetTop - headerFixed,
        behavior: 'smooth',
      });
    } else if (btnId === 'contact_btn') {
      window.scrollTo({
        top: document.body.clientHeight - window.innerHeight,
        behavior: 'smooth',
      });
    }
    toggleState = false;
    navList.classList.remove('on');
    navToggleBtn.classList.remove('active');
  });
});

const onTopBtn = document.querySelector('.on_top');
onTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//form

const form = document.querySelector('#myForm');
const submitBtn = document.querySelector('#submit_btn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('메세지를 전송하시겠습니까?')) {
    form.submit();
    alert('메세지가 전송되었습니다.');
    form.reset();
  }
});

// swiper

let swiper;
function mySwiper() {
  if (window.innerWidth < 1200 && !swiper) {
    swiper = new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    });
  } else if (window.innerWidth >= 1200 && swiper) {
    swiper.destroy();
    swiper = undefined;
  }
  if (window.innerWidth > 1024) {
    toggleState = false;
    navList.classList.remove('on');
    navToggleBtn.classList.remove('active');
  }
}
window.addEventListener('load', mySwiper);
window.addEventListener('resize', mySwiper);
