// clock 
    
    // for adding zero in number less than 10 
    function twoDigits(n) {
    if (n < 10)
    return '0' + n;
    return n;
    }
    
    // main function for clock
    function clock() {
    var d = new Date;
    
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    var session = "AM";
    
    
    if(hours > 12){
        session = "PM";
    };
    

     hours = hours % 12;
	
    document.getElementById("fulldate").innerHTML = `${twoDigits (hours)}  : ${twoDigits (minutes)} : ${twoDigits (seconds)} ${session}`;
    
    setTimeout(clock, 1000);
    }
    
    clock();
