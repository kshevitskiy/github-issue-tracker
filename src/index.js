import './scss/index.scss';
const getIssues = require('./issues');

const getValues = (data) => {
  return data.reduce((issues, issue) => {
    issues[issue.date] = issues[issue.date] || [];
    issues[issue.date].push(issue);
    return issues;
  }, {});
}

getIssues().then(data => {
  const values = getValues(data)
  const issues = Object.keys(values).map((key) => ({date: key, issues: [...values[key]]}))
  console.log(issues)
})


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