let token={}
function auth(){fetch('https://discord.com/api/v10/users/@me')
.then((response)=>response.json())
.then((json)=>console.log(json));}
function test(){
    console.log('fine')
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code')
function TokenGen(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
     const code = urlParams.get('code')
   //theres a problem here i think fix plz :)  
   fetch('https://discord.com/api/oauth2/token',{
        method: 'POST',
        headers:{
            'content-type':'x-www-form-urlencoded'
        },
        body:{
            client_id:'1188079942777438298',
            client_secret:"4AKGB8vd5qjOiiB1VfsHD7WjglWX3NWL",
            grant_type:"authorization_code",
            code: code
        }
    })
    .then ((response)=>response.json())
    .then ((json)=>console.log(json))
}

function getUser(){
  
    fetch('https://discord.com/api/users/@me',{
        headers:{
            Authorization:`Bearer ${token}`
        }
        
    }
 )
 .then ((response)=>response.json())
 .then ((json)=>console.log(json))
}
async function printAuth(){
    token = TokenGen()
    setTimeout(()=>{getUser()},100)
}