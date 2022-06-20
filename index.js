// Add your code here
const functionData = {
    name : 'Steve',
    email : 'steve@steve.com'
}

function submitData(name, email) {
    const configurationObject = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            Accept : 'application/json'
        },
        body : JSON.stringify(functionData)
    }

    return fetch('http://localhost:3000/users', configurationObject)
    .then((response) => response.json())
    .then((object) => {
        console.log(object.id)
        
        const p = document.createElement('p');
        document.body.innerHTML = object.id
    })

    .catch((error) => {
        alert('Ooops! There\'s an error!')
        console.log(error.message)
        document.body.innerHTML = error.message
     })
}


f
    
