function attachEventsListeners() {
    const buttonRef = Array.from(document.querySelectorAll("input[type=button]"));
    const inputs = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };

    buttonRef.forEach(button => button.addEventListener("click", onClickHandler));

    function onClickHandler(event) {
        let inputField = event.target.parentElement.querySelector("input[type=text]");
        let value = Number(inputField.value);
        let unit = inputField.id;

        let days;

        switch (unit) {
            case "days": days = value; break;
            case "hours": days = value / 24; break;
            case "minutes": days = value / 1440; break;
            case "seconds": days = value / 86400; break;
        }

        propagateValue(days);
    }

    function propagateValue(days) {
        inputs.days.value = days;
        inputs.hours.value = days * 24;
        inputs.minutes.value = days * 1440;
        inputs.seconds.value = days * 86400;
    }
}
