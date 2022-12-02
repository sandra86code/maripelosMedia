
function TDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;   
    } 
    todayPlusYear = (yyyy+1) + '-' + mm + '-' + dd;   
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("date").setAttribute("max", todayPlusYear)        
    document.getElementById("date").setAttribute("min", today);
}


function showSelects(query) {
    var checkbox = document.getElementById(`cbox${query}`)
    if(checkbox.checked) {
        document.getElementById(`selectbox${query}`).style.display = 'inline-block';
    }else {
        document.getElementById(`selectbox${query}`).style.display = 'none';
    }
}