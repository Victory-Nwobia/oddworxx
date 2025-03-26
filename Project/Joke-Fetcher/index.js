async function newjoke(){
    try{
        let response = await fetch('https://official-joke-api.appspot.com/random_joke');
        let data = await response.json();

        document.getElementById('joke-text').innerText = `${data.setup} - ${data.punchline}`;
    }
    catch(error){
        document.getElementById('joke-text').innerText = "Failed to load joke";
        console.error('error fetching joke : ', error);
    }
}