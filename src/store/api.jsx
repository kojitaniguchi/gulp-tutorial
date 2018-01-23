
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
    let json = response.json()
    return json
  }

  function consoleLog(json) {
    let data = json.data
    console.log('request succeeded with JSON response', data)
    return data
  }

  const fetchData = (keyword) => {
    const myRequest = `https://imgjusapi.herokuapp.com/image/` + keyword.toString()
     fetch(myRequest, {mode: 'cors'} )
    .then(checkStatus)
    .then(parseJSON)
    .then(consoleLog)
    .then((data) => { return data })
    .catch((error) => { error });
  }

export default fetchData
