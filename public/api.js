const readAll = () => {
    return fetch('/.netlify/functions/tester').then((response) => {
      return response.json()
    })
  }
  export default {
    read: readAll
  }