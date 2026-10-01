const toggle = document.querySelector('[data-menu]');
const nav = document.querySelector('#navigation');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); toggle.focus();
  }
});
const search = document.querySelector('#subject-search');
const semester = document.querySelector('#semester');
if (search && semester) {
  document.querySelector('[data-filters]').hidden = false;
  const normalize = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const filter = () => {
    const query = normalize(search.value.trim()); let visible = 0;
    document.querySelectorAll('[data-subject]').forEach(row => {
      const match = (!semester.value || row.dataset.semester === semester.value) && normalize(row.textContent).includes(query);
      row.hidden = !match; if (match) visible++;
    });
    document.querySelectorAll('[data-semester-group]').forEach(group => {
      group.hidden = ![...group.querySelectorAll('[data-subject]')].some(row => !row.hidden);
    });
    document.querySelector('#subject-count').textContent = `${visible} ${visible === 1 ? 'materia' : 'materias'}`;
    document.querySelector('#no-subjects').hidden = visible !== 0;
  };
  search.addEventListener('input', filter); semester.addEventListener('change', filter); filter();
  document.querySelector('[data-clear]')?.addEventListener('click', () => { search.value = ''; semester.value = ''; filter(); search.focus(); });
}
