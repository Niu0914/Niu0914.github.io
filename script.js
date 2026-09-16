const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  setMenu(false);
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.topbar')) setMenu(false);
});

window.matchMedia('(min-width: 851px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

// Content is fully readable without JavaScript; enable filtering only when ready.
const filters = document.querySelector('.research-filters');
const papers = [...document.querySelectorAll('.paper-card')];
const filterStatus = document.querySelector('#filter-status');

filters.hidden = false;
filters.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;

  filters.querySelectorAll('button').forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });

  let count = 0;
  papers.forEach((paper) => {
    const visible = button.dataset.filter === 'all' || paper.dataset.category === button.dataset.filter;
    paper.hidden = !visible;
    if (visible) count += 1;
  });
  filterStatus.textContent = `已显示 ${count} 项研究成果`;
});

// Match the section at the reading position, including sections taller than a viewport.
const sections = [...document.querySelectorAll('main section[id]')];
const sectionLinks = [...document.querySelectorAll('#nav a[href^="#"], .aside-inner > a[href^="#"]')];
let scrollScheduled = false;

function updateActiveSection() {
  const readingLine = Math.min(180, window.innerHeight * .3);
  let current = sections[0].id;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= readingLine) current = section.id;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
    current = 'contact';
  }
  sectionLinks.forEach((link) => {
    if (link.getAttribute('href') === `#${current}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  scrollScheduled = false;
}

function scheduleSectionUpdate() {
  if (scrollScheduled) return;
  scrollScheduled = true;
  window.requestAnimationFrame(updateActiveSection);
}

window.addEventListener('scroll', scheduleSectionUpdate, { passive: true });
window.addEventListener('resize', scheduleSectionUpdate);
window.addEventListener('load', updateActiveSection);
updateActiveSection();

// Include expanded technical details and courses in the print version.
let closedBeforePrint = [];
window.addEventListener('beforeprint', () => {
  closedBeforePrint = [...document.querySelectorAll('details:not([open])')];
  closedBeforePrint.forEach((detail) => { detail.open = true; });
});
window.addEventListener('afterprint', () => {
  closedBeforePrint.forEach((detail) => { detail.open = false; });
  closedBeforePrint = [];
});

document.querySelector('#year').textContent = new Date().getFullYear();
