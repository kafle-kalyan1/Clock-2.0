function dateee() {
    let AP = ""
    let date1 = new Date

    let hour = date1.getHours()
    let minute = date1.getMinutes()
    let second = date1.getSeconds()

    if (hour > 12) {
        hour = hour - 12
        AP = "PM"
    } else {
        AP = "AM"
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    if (second < 10) {
        second = '0' + second
    }

    // document.write(date1);
    finalTime = (hour + ':' + minute + ':' + second + " " + AP)
    document.getElementById("ClockByKalyan").innerText = finalTime;
    document.getElementById("ClockByKalyan").textContent = finalTime;
    // return date1

    // settimeout is a function that call given function in given miliseconds
    // I given 1000 milliseconds that means datee function gonna call after 1 seconds
    setTimeout(dateee, 1000);

    let year = date1.getUTCFullYear()
    let month = date1.getUTCMonth()
    let day = date1.getDay()

    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;
    finalDate = year + '-' + month + '-' + day
    document.getElementById("dateKalyan").innerText = finalDate;
    document.getElementById("dateKalyan").textContent = finalDate;
}
dateee()
