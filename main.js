function redactSentence(){
    let sentence = document.getElementById("sentence").value;
    let redacted = document.getElementById("redact").value.split(",");
    let redactedSentence = sentence
    

    for(let word of redacted){
        redactedSentence = redactedSentence.replace(word.trim(), 
        "*****")
    }

    document.getElementById("redact-content").textContent = redactedSentence

}