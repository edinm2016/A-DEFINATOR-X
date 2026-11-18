const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('#menu-button');
const response = document.querySelector('#response');
const input = document.querySelector('#research-input');

menuButton.addEventListener('click', () => sidebar.classList.toggle('open'));

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((link) => link.classList.remove('active'));
    item.classList.add('active');
    document.querySelector('#view-name').textContent = item.dataset.view;
    sidebar.classList.remove('open');
  });
});

document.querySelector('#research-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question) { response.textContent = 'Add a research question to create a local inquiry thread.'; return; }
  response.textContent = `Inquiry captured: “${question}” — prototype mode stores this only in the current page session.`;
  input.value = '';
});

input.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') document.querySelector('#research-form').requestSubmit(); });

document.querySelectorAll('.module-action').forEach((button) => {
  button.addEventListener('click', () => { response.textContent = `${button.dataset.module} selected. This prototype presents the workflow and its roadmap; advanced reasoning functions are planned.`; window.scrollTo({ top: document.querySelector('.prompt-panel').offsetTop - 20, behavior: 'smooth' }); });
});

document.querySelector('#show-planned').addEventListener('click', () => {
  const map = document.querySelector('#capability-map');
  map.hidden = !map.hidden;
  if (!map.hidden) map.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
