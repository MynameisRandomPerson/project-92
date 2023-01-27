function start()
{
    player1 = document.getElementById("p1").value;
    player2 = document.getElementById("p2").value;
    localStorage.setItem("player 1", player1);
    localStorage.setItem("player 2", player2);
    window.location = "project.game.html";
}