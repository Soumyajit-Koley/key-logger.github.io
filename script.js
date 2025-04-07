const canvas = document.querySelector('table')
const keyLog = []

window.addEventListener('keydown',(event) => {
    const keyName = event.key
    const keyCode = event.keyCode
    const keyValue = event.code

    const logTrack = {
        Name:keyName,
        Code:keyCode,
        Value:keyValue
    }
    
    keyLog.push(logTrack)
    
    const newNode = document.createElement('tr')
    newNode.innerHTML = `
            <td>${logTrack.Name}</td>
            <td>${logTrack.Code}</td>
            <td>${logTrack.Value}</td>
    `
    canvas.appendChild(newNode)
})