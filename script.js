apipro("Hyderabad");
const searchcity=document.getElementById('searchbar');
const submitc=document.getElementById('submitbut');
submitc.addEventListener("click",(e)=>{
    apipro(searchcity.value);
    searchcity.value = "";
    e.preventDefault();
})
function apipro(cityname){
    const url='http://api.weatherapi.com/v1/current.json?key=f9020eef5f0c4c64a81172257232707&q='+cityname+'&aqi=yes';
    fetch(url).then((response)=>response.json()).then((data)=>{
        let date="";
        console.log(data);
        wpic.src=data.current.condition.icon;
        cond.innerHTML=data.current.condition.text;
        cloca.innerHTML=data.location.name;
        headname.innerHTML=data.location.name;
        date=data.location.localtime;
        let str=date[8]+date[9]+" "+monthc(date[5]+date[6])+" "+date[0]+date[1]+date[2]+date[3];
        cdate.innerHTML=str;
        ktemp.innerHTML=data.current.temp_c;
        khum.innerHTML=data.current.humidity;
        kpres.innerHTML=data.current.pressure_mb;
        kwins.innerHTML=data.current.wind_mph;
        kvisb.innerHTML=data.current.vis_km;
        kair.innerHTML=data.current.air_quality.pm2_5;
    });
}
function monthc(str) {
    if (str === "01") {
        return "January";
    }
    if (str === "02") {
        return "February";
    }
    if (str === "03") {
        return "March";
    }
    if (str === "04") {
        return "April";
    }
    if (str === "05") {
        return "May";
    }
    if (str === "06") {
        return "June";
    }
    if (str === "07") {
        return "July";
    }
    if (str = "08") {
        return "August";
    }
    if (str === "09") {
        return "September";
    }
    if (str === "10") {
        return "October";
    }
    if (str === "11") {
        return "November";
    }
    if (str === "12") {
        return "December";
    }
}
