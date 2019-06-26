const readAll = () => {
    return fetch('/.netlify/functions/tester').then((response) => {
      return response.json()
      console.log(response)
      console.log(response.json())
    })
  }
  readAll()
  console.log("½")
  console.log(readAll())