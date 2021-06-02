let a;
let date;
let time;
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

function seconds_with_leading_zeros(date) {
    return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date();
console.log(seconds_with_leading_zeros(date));

dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(date));

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br><b>Date:</b> " + date +
        "<br><b>Time Zone:</b> " + seconds_with_leading_zeros(date)
}, 1000);