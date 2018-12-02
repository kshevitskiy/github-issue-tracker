const axios = require('axios')
const endpoint = 'https://api.github.com/repos/vuejs/vue/issues'

const getIssues = () => {
  return axios.get(endpoint)
    .then(function (response) {
      // handle success
      return response.data.map((issue) => {
        return {
          title: issue.title,
          status: 'issue--default',
          date: issue.updated_at
        }
      })
    })
    .catch(function (error) {
      // handle error
      console.log('Error ', error);
    });
}

module.exports = getIssues