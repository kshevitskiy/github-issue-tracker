const data = [
  { 
    title: 'Page changes', 
    status: 'issue--featured', 
    date: '19-07-2016' 
  },
  { 
    title: 'Review of last issues', 
    status: 'issue--featured', 
    date: '19-07-2016' 
  },
  { 
    title: 'Visual UI Update Review', 
    status: 'issue--default', 
    date: '18-07-2016' 
  },
  { 
    title: 'Sidebar changes', 
    status: 'issue--default', 
    date: '18-07-2016' 
  },
  { 
    title: 'Crash update', 
    status: 'issue--default', 
    date: '15-07-2016' 
  },
  { 
    title: 'Page visual UI Update Review', 
    status: 'issue--featured', 
    date: '15-07-2016' 
  },
  { 
    title: 'Sidebar update', 
    status: 'issue--default', 
    date: '15-07-2016' 
  },
  { 
    title: 'Crash issue', 
    status: 'issue--featured', 
    date: '14-07-2016' 
  },
  { 
    title: 'Visual update & Crash resolve', 
    status: 'issue--featured', 
    date: '14-07-2016' 
  },
  { 
    title: 'Sidebar changes', 
    status: 'issue--featured', 
    date: '14-07-2016' 
  },
  { 
    title: 'Review of last issues', 
    status: 'issue--default', 
    date: '14-07-2016' 
  },
  { 
    title: 'Visual UI Update Review', 
    status: 'issue--default', 
    date: '14-07-2016' 
  }
];

const values = data.reduce((issues, issue) => {
  issues[issue.date] = issues[issue.date] || [];
  issues[issue.date].push(issue);
  return issues;
}, {});

const issues = Object.keys(values).map((key) => ({date: key, issues: [...values[key]]}));


module.exports = issues;