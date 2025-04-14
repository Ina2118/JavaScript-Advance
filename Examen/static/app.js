window.addEventListener('load', solve);

function solve() {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", preferenceList);
    const preferences = document.querySelector(".preference-list");
    const confirmPreferences = document.querySelector(".confirm-list");
    const thanksText = document.getElementById("thanks-text");

    const scentInput = document.getElementById("scent-type");
    const budgetInput = document.getElementById("budget");
    const occasionInput = document.getElementById("occasion");
    const brandInput = document.getElementById("brand");
    const skinInput = document.getElementById("skin-type");

    function preferenceList(event) {
        event.preventDefault();

        let scentType = scentInput.value;
        let budgetLabel = budgetInput.value;
        let occasionLabel = occasionInput.value;
        let brandLabel = brandInput.value;
        let skinType = skinInput.value;

        if (!scentType || !budgetLabel || !occasionLabel || !brandLabel || !skinType) {
            return;
        }

        nextBtn.disabled = true;
        scentInput.value = '';
        budgetInput.value = '';
        occasionInput.value = '';
        brandInput.value = '';
        skinInput.value = '';

        const element = document.createElement("li");
        element.className = "content";

        const article = document.createElement('article');
        article.appendChild(createParagraph(`Scent: ${scentType}`));
        article.appendChild(createParagraph(`Budget: ${budgetLabel}`));
        article.appendChild(createParagraph(`Occasion: ${occasionLabel}`));
        article.appendChild(createParagraph(`Brand: ${brandLabel}`));
        article.appendChild(createParagraph(`Skin Type: ${skinType}`));
        element.appendChild(article);

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => edit(element, scentType, budgetLabel, occasionLabel, brandLabel, skinType));

        const continueBtn = document.createElement("button");
        continueBtn.className = "continue-btn";
        continueBtn.textContent = "Continue";
        continueBtn.addEventListener("click", () => continueConfirmBtn(element));

        element.appendChild(editBtn);
        element.appendChild(continueBtn);
        preferences.appendChild(element);
    }

    function edit(element, scentType, budgetLabel, occasionLabel, brandLabel, skinType) {
        nextBtn.disabled = false;
        scentInput.value = scentType;
        budgetInput.value = budgetLabel;
        occasionInput.value = occasionLabel;
        brandInput.value = brandLabel;
        skinInput.value = skinType;

        element.remove();
    }

    function continueConfirmBtn(element) {
        element.querySelector(".edit-btn").remove();
        element.querySelector(".continue-btn").remove();
        preferences.innerHTML = '';

        const confirmBtn = document.createElement("button");
        confirmBtn.className = "confirm-btn";
        confirmBtn.textContent = "Confirm";
        confirmBtn.addEventListener("click", () => confirmEnd(element));

        const cancelBtn = document.createElement("button");
        cancelBtn.className = "cancel-btn";
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", () => cancelSelection(element));

        element.appendChild(confirmBtn);
        element.appendChild(cancelBtn);
        confirmPreferences.appendChild(element);
    }

    function confirmEnd(element) {
        element.remove();
        thanksText.textContent = "Thank you for sharing your preferences!";
        nextBtn.disabled = false;
    }

    function cancelSelection(element) {
        element.remove();
        nextBtn.disabled = false;
    }

    function createParagraph(content) {
        const paragraph = document.createElement("p");
        paragraph.textContent = content;
        return paragraph;
    }
}
