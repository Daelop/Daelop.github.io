const fs = require('fs')


function submitApp(){
    const application = {
    'IGN': document.getElementById('pName').value,
    'server': document.getElementById('pServerOCE').value,
    'discord': 'PLACEHOLDER',
    'consent' : document.getElementById('discordConsent').value,
    'tos' : document.getElementById('TOS').value
}
    const filePath= `/Users/Applicants/${application.discord}.JSON`
    const applicant = JSON.stringify(application)
    fs.writeFile(filePath,applicant, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });


}