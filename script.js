const sortButton = document.getElementById("sort");
const outputLog = document.getElementById("output-log");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown")
    ].map((dropdown) => Number(dropdown.value));

    outputLog.innerText = "";
    const sortedValues = selectSorter(document.getElementById("sorter").value)(inputValues);

    updateUI(sortedValues);
}

const selectSorter = (sorter) => {
    switch (sorter) {
        case "bubble":
            return bubbleSort;
        case "selection":
            return selectionSort;
        case "insertion":
            return insertionSort;
        case "builtin":
                return defaultSorter;    
        default:
            return defaultSorter;
    }
}

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    })
}

const defaultSorter = (array) => {
    return array.sort((a, b) => {
        return a - b;
    });
}

const bubbleSort = (array) => {
    let iteration = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            iteration++;
            updateLog(iteration, array, j);
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
}

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1;
        console.log(array, "I value:" + array[i], "/ J value:" + array[j], " / Current Val:" + currValue);
        while (j >= 0 && array[j] > currValue) {
            console.log("--------- ", "I:" + i, "J:" + j, array[j] > currValue)
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currValue;
    }
    return array;
}

//Utils
function updateLog(iteration, array, j) {
    console.log("Iteration: " + iteration, array, array[j], array[j + 1], `, Is ${array[j]} bigger than ${array[j + 1]}: ${array[j] > array[j + 1]}`);
    const newParagraph = document.createElement("p");
    newParagraph.innerText = `Iteration: ${iteration < 10 ? String(iteration).padStart(2, "0") : iteration} | ${String(array)}, ${array[j]}, ${array[j + 1]} | Is ${array[j]} bigger than ${array[j + 1]}: ${array[j] > array[j + 1]}`;
    outputLog.appendChild(newParagraph);
}

sortButton.addEventListener("click", sortInputArray);
