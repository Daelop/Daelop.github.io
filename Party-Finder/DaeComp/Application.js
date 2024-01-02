
class application{
    constructor(discord, IGN, server, consent, tos){
        this.discord = discord;
        this.IGN = IGN;
        this.server = server;
        this.consent = consent;
        this.tos = tos;
        this.userClass = 'Applicant'
    }
}

function submitApp(){
    const IGN = document.getElementById('pName').value
    const server = document.getElementById('pServerOCE').value
    const discord = 'PLACEHOLDER'
    const consent = document.getElementById('discordConsent').value
    const tos = document.getElementById('TOS').value
    fetch ("/users/users.json",{
        method: "POST",
        body: JSON.stringify(new application(discord, IGN, server, consent, tos))
    }
    )

}