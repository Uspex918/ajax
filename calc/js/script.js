const inputRub = document.querySelector("#rub"),
      inputUsd = document.querySelector("#usd")

inputRub.addEventListener("input", () => {
    const request = new XMLHttpRequest()

    request.open("GET", "js/current.json")
    request.setRequestHeader("Content-type", "application/json; charset=utf-8")
    request.send()

    request.addEventListener("load", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response)
            // console.log(data)
        // if (!isNaN(inputRub.value) && inputRub.value.trim() !== "") {
        //     inputUsd.value = (+inputRub.value / data.current.usd).toFixed(3);
        // } else {
        //     inputUsd.value = "Вы ввели не число";
        // }
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(3)
        } else {
            inputUsd.value = "Вы ввели не чило"
        }
    })
})