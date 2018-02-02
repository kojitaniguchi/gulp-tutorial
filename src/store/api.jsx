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
    console.log('request succeeded with JSON response', json)
    return json
  }

  function consoleLog(json) {
    let data = json.data
    console.log('request succeeded with JSON response', data)
    return data
  }

function fetchData(keyword) {
    const myRequest = `/image/` + keyword.toString()
    // returnはfetchの前につけないとpromiseが返らない
    return  fetch(myRequest, {mode: 'cors'} )
    .then(checkStatus)
    .then(parseJSON)
    .catch((error, data) => { error })
}
export default fetchData
