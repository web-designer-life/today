const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

function formatDate() {
    const date = new Date(),
        hours = date.getHours();
    if (hours >= 0 && hours < 6) {
        document.getElementById("p1").innerHTML = 'Доброй ночи.';
    } else if (hours >= 6 && hours < 12) {
        document.getElementById("p1").innerHTML = 'Доброе утро.';
    } else if (hours >= 12 && hours < 18) {
        document.getElementById("p1").innerHTML = 'Добрый день.';
    } else if (hours >= 18 && hours < 0) {
        document.getElementById("p1").innerHTML = 'Добрый вечер.';
    }
}

function dateString() {
    let today = new Date().getDay();

    if (today === 0) {
        today = 6;
    } else {
        today -= 1;
    }
    today = week[today];
    document.getElementById("p2").innerHTML = `Сегодня: ${today}.`;
}

function time() {
    const date = new Date(),
        time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric',
            second: 'numeric', hour12: true });
    document.getElementById("p3").innerHTML = `Текущее время: ${time}.`;
}

function newYear() {
    const currentDate = Date.parse(new Date()),
        date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    date.setMonth(0);
    date.setDate(1);
    console.log(date);
    const days = (Date.parse(date) - currentDate) / 86400000;
    document.getElementById("p4").innerHTML = `До нового года осталось: ${Math.round(days)} дней.`;
}

setInterval(() => {
    dateString();
    formatDate();
    time();
    newYear();
}, 1000);
