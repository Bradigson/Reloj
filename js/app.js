function startTime(){
    var today = new Date(), hours = today.getHours(), minutes = today.getMinutes(),
    date = today.getDate(), day = today.getDay(), month = today.getMonth();

    hours = (hours == 0) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;

    hours = checkTime(hours);
    minutes = checkTime(minutes);



    var hr = document.getElementById("time").innerHTML = hours,
    min = document.getElementById("min").innerHTML = minutes;
    var time = setTimeout(
        function(){
            startTime();
        },500);

    
    var segundos = today.getSeconds();
    if(segundos < 10){
        segundos = "0" + segundos;
    }
    document.getElementById("sec").innerHTML = segundos;
}

function checkTime(e){
    if(e < 10){
        e = "0" + e;
    }
    return e;
}