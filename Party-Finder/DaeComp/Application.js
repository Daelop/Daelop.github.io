



async function submitApp(){
    const application = {
    'IGN': document.getElementById('pName').value,
    'server': document.getElementById('pServerOCE').value,
    'discord': 'PLACEHOLDER',
    'consent' : document.getElementById('discordConsent').value,
    'tos' : document.getElementById('TOS').value
}

const response = await fetch("https://tkh1d7xsf5.execute-api.ap-southeast-2.amazonaws.com/dev/items",{
  method: "POST",
  body: {
    message:JSON.stringify(application)
  }
})

  }
  