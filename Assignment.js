document.addEventListener("DOMContentLoaded", function() {
    const words = [];
    const wordInput = document.getElementById("wordInput");
    const addWordButton = document.getElementById("addWordButton");
    const wordCountSpan = document.getElementById("wordCount");

    addWordButton.addEventListener("click", function() {
        const word = wordInput.value.trim();
        if (word && words.length < 10) {
            words.push(word);
            wordCountSpan.textContent = words.length.toString();
            updateWordLists(words);
            wordInput.value = '';
            wordInput.focus();
        }

        if (words.length >= 10) {
            wordInput.disabled = true;
            addWordButton.disabled = true;
        }
    });

    function updateWordLists(words) {
        const originalList = document.getElementById("originalOrderList");
        const sortedList = document.getElementById("sortedOrderList");

        originalList.innerHTML = words.map(word => `<li>${word}</li>`).join('');
        sortedList.innerHTML = [...words].sort().map(word => `<li>${word}</li>`).join('');
    }
});
