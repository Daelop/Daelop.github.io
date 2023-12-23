function auth(){fetch('`https://discord.com/api/v10/users/@me')
.then((response)=>response.json())
.then((json)=>console.log(json));}
function test(){
    console.log('fine')
}