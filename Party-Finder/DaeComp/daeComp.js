function auth(){fetch('/users/@me')
.then((response)=>response.json())
.then((json)=>console.log(json));}
function test(){
    console.log('fine')
}