let tempSelectionInput = document.getElementById("inputSelection");
let tempSelectionOutput = document.getElementById("outputSelection");
// Convert Obj Values to Array to Map
let arrOfValues = Object.values(countries);
// generate options in select
arrOfValues.map((i) => {
    tempSelectionInput.innerHTML += `<option value="${i}">${i}</option>`;
    tempSelectionOutput.innerHTML += `<option value="${i}">${i}</option>`;
});
btn.addEventListener("click", () => {
    // Save input value
    let tempInput = document.getElementById("inputText");
    let inputText = tempInput.value;
    // Checks if textarea input is empty
    if (inputText === "") {
        textResult.innerHTML = `Input Can Not Be Empty`;
        return;
        // Checks if input lang selected and out lang selected are not the same
    } else if (tempSelectionInput.value === tempSelectionOutput.value) {
        textResult.innerHTML = `Languages Can Not Be The Same`;
        return;
    } else {
        // Fetch Code
        fetch(
            `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${tempSelectionInput.value}|${tempSelectionOutput.value}`
        )
            // Convert to js
            .then((res) => res.json())
            .then((t) => {
                let data = t.responseData.translatedText;
                return data;
            })
            // Write Result in TextArea
            .then((txres) => {
                textResult.innerHTML = `${txres}`;
            });
    }
});
