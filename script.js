const submitButton = document.getElementById("submit-button");
const container = document.getElementById("container");
let previousValue = "";
let currentColumn = null;

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const dropdown = document.getElementById("dropdown");
    const selectedValue = dropdown.value;
    if (selectedValue === "") {
        Swal.fire('Please select an option')
    } else if (selectedValue !== previousValue) {
        const newColumn = document.createElement("div");
        newColumn.classList.add("column");
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.textContent = selectedValue;
        newColumn.appendChild(newRow);
        if (currentColumn) {
            currentColumn.insertAdjacentElement('afterend', newColumn);
        } else {
            container.appendChild(newColumn);
        }
        previousValue = selectedValue;
        currentColumn = newColumn;
    } else {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.textContent = selectedValue;
        currentColumn.appendChild(newRow);
    }
});