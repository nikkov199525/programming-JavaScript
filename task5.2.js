const step1 = await fetch('https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg');
let step2 = await step1.text();
const regex_time = /(\d{1,2}):(\d{2}):(\d{2})/;
step2 = step2.match(regex_time);
const finded_time = step2[0];
if (finded_time[1] === ':') {
    console.log('0'+finded_time);
}
else console.log(finded_time);
