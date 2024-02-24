# Sorting Algorithms Visualizer

This project is a simple web-based application that visualizes different sorting algorithms. It is written in JavaScript and uses the DOM manipulation capabilities of the language to interact with the HTML elements of the page.

## Features

- **Sort Button**: A button that triggers the sorting process when clicked.
- **Sort Input Array**: A function that gets the values from the dropdowns, sorts them using the selected sorting algorithm, and updates the UI.
- **Sorting Algorithms**: The project includes four sorting algorithms: Bubble Sort, Selection Sort, Insertion Sort, and a default JavaScript sort.
- **UI Update**: After sorting, the UI is updated to reflect the sorted values.
- **Output Log**: The application logs the sorting process, showing each iteration and the state of the array.

## Usage

1. Select the values you want to sort from the dropdowns.
2. Choose the sorting algorithm you want to use.
3. Click the "Sort" button to start the sorting process.
4. Watch as the application sorts the values and logs the process.

## Code Structure

The code is structured into several functions, each responsible for a specific part of the application:

- `sortInputArray(event)`: This function is triggered when the sort button is clicked. It gets the input values, sorts them, and updates the UI.
- `selectSorter(sorter)`: This function returns the sorting function based on the selected sorting algorithm.
- `updateUI(array)`: This function updates the UI with the sorted values.
- `defaultSorter(array)`, `bubbleSort(array)`, `selectionSort(array)`, `insertionSort(array)`: These functions implement the different sorting algorithms.
- `updateLog(iteration, array, j)`: This utility function logs the sorting process.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.