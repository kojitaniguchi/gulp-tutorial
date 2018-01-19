
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  function parseJSON(response) {
    return response.json().data
  }

  function fetchData(keyword) {
    const myRequest = `https://sinatra-api-kojitaniguchi.c9users.io/image/${keyword}`
    fetch(myRequest, {mode: 'cors'} )
    .then(checkStatus)
    .then(parseJSON)
    .then(payload => { payload })
    .catch(error => { error });
  }

export { fetchData }
