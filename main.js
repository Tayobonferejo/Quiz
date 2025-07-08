(function(){
    const question = document.getElementsByName("language");
    let answer;

    document.getElementById('form').addEventListener("submit",function(event){
        event.preventDefault();

        for(let i = 0; i < question.length; i++){
        if(question[i].checked){
            answer = question[i].value;
        }
     }
        if(answer == "javaScript"){
            document.getElementById("h3").innerText = "right";
        }
            else
        {
            document.getElementById("h3").innerText = "wrong";
        }

    })
}())