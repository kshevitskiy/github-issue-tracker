import './scss/index.scss';

const changeStatus = (event) => {
  const icon = event.target;
  if( icon.classList.contains('issue--default') ) {
    icon.classList.remove('issue--default');
    icon.classList.add('issue--featured');
    return;
  }

  icon.classList.remove('issue--featured');
  icon.classList.add('issue--default');
}

window.changeStatus = changeStatus;