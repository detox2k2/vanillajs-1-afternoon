let arr = [];

function play (parameter){
    let player = document.getElementById('player');
    let element = document.getElementById(parameter);
    if(player.innerText === 'X'){
        player.innerText = 'O';
        element.innerText ='X';
        arr += player.innerText;
    } else {
        player.innerText = 'X';
        element.innerText = 'O';
        arr += player.innerText;
    }
    var zero = document.getElementById('0').innerText;
    var two = document.getElementById('2').innerText;
    var three = document.getElementById('3').innerText;
    var four = document.getElementById('4').innerText;
    var five = document.getElementById('5').innerText;
    var six = document.getElementById('6').innerText;
    var seven = document.getElementById('7').innerText;
    var eight = document.getElementById('8').innerText;
    var one = document.getElementById('1').innerText;
    if(zero === "O" && one === "O" && two === "O"){
        alert("O is the winner");
        location.reload(true);
    } else if(zero === "X" && one === "X" && two === "X"){
        alert("X is the winner");
        location.reload(true);
    } else if(zero === 'O' && three === 'O' && six === 'O'){
        alert("O is the winner");
        location.reload(true);
    } else if(zero === 'X' && three === 'X' && six === 'X'){
        alert("X is the winner");
        location.reload(true);
    } else if(zero === 'X' && four === 'X' && eight === 'X'){
     alert("X is the winner");
     location.reload(true);
    } else if(zero === 'O' && four === 'O' && eight === 'O'){
     alert("O is the winner")
     location.reload(true);
    } else if(two === 'O' && four === 'O' && six === 'O'){
      alert("O is the winner");
      location.reload(true);
    } else if(two === 'X' && four === 'X' && six === 'X'){
      alert("X is the winner")
      location.reload(true);
    } else if(two === 'X' && five === 'X' && eight === 'X'){
        alert("X is the winner")
      location.reload(true);
    } else if(two === 'O' && five === 'O' && eight === 'O'){
        alert("O is the winner");
        location.reload(true);
    } else if(six === "O" && seven === "O" && eight === "O"){
        alert("O is the winner");
        location.reload(true);
    } else if(six === 'X' && seven === 'X' && eight === 'X'){
        alert("X is the winner")
        location.reload(true);
    } else if ( arr.length >= 9){
      alert("CAT is the winner")
      location.reload(true);
}
}