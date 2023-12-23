function auth(){fetch('https://discord.com/api/oauth2/authorize?client_id=1188079942777438298&response_type=code&redirect_uri=https%3A%2F%2Fdaelop.github.io%2FParty-Finder%2FDaeComp%2FdaeComp.html&scope=identify')
.then((response)=>response.json())
.then((json)=>console.log(json));}
function test(){
    console.log('fine')
}