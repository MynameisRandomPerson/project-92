score1 = 0;
score2 = 0;
player1 = localStorage.getItem("player 1");
player2 = localStorage.getItem("player 2");
document.getElementById("playername1").innerHTML = player1 + "'s score is : ";
document.getElementById("playername2").innerHTML = player2 + "'s score is : ";
document.getElementById("playerscore1").innerHTML = score1;
document.getElementById("playerscore2").innerHTML = score2;
document.getElementById("quest").innerHTML = "Question turn is for " + player1;
document.getElementById("ans").innerHTML = "Answer turn is for " + player2;

questionturn = player1;
answerturn = player2;

function send()
{
    firstnumber = document.getElementById("no.1").value;
    secondnumber = document.getElementById("no.2").value;
    answer = parseInt(firstnumber) * parseInt(secondnumber);



    question = "<h4>" + firstnumber + " x " + secondnumber + "</h4>";
    input = "<br><br><input id='answer_input' placeholder='Answer'>";
    butt = "<br><br><button id = 'confirm' class='btn btn-info' onclick'check()'>Check</button>";
    div = question + input + butt;
    document.getElementById("answer-div").innerHTML = div;
    document.getElementById("no.1").innerHTML = "";
    document.getElementById("no.2").innerHTML = "";
}

function check()
{
    person_answer = document.getElementById("answer_input").value;
    if(answer == person_answer)
    {
        if(answerturn == player1)
        {
            score1 = score1 + 1;
            answerturn = player2;
        }
        else
        {
            score2 = score2 + 1;
            answerturn = player1;
        }

        if(questionturn == player1)
        {
            questionturn = player2;
        }
        else
        {
            questionturn = player1;
        }
    }
    else
    {
        if(answerturn == player1)
        {
            answerturn = player2;
        }
        else
        {
            answerturn = player1;
        }

        if(questionturn == player1)
        {
            score1 = score1 + 1;
            questionturn = player2;
        }
        else
        {
            score2 = score2 + 1;
            questionturn = player1;
        }
    }
    document.getElementById("playerscore1").innerHTML = score1;
    document.getElementById("playerscore2").innerHTML = score2;
    document.getElementById("quest").innerHTML = "Question turn is for " + questionturn;
    document.getElementById("ans").innerHTML = "Answer turn is for " + answerturn;
}