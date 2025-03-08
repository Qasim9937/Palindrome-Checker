# Palindrome Checker

## Overview

The **Palindrome Checker** is a simple web application that checks whether a given word or phrase is a palindrome. It features a sleek, modern user interface with real-time validation and smooth animations.

## Features

- Checks if a word or phrase is a palindrome (ignoring spaces, punctuation, and case sensitivity).
- Provides visual feedback with color-coded results.
- Responsive design with interactive animations.
- Error handling for empty inputs.
- Smooth fade-in effect for result display.
- Animated transitions for input and result display.

## Files Structure

```
├── index.html      # Main HTML file
├── styles.css      # CSS file for styling and animations
├── script.js       # JavaScript logic for palindrome checking
```

## Installation and Usage

### 1. Clone or Download the Repository

```
git clone <repository-url>
cd palindrome-checker
```

### 2. Open the Project in a Browser

Simply open the `index.html` file in any modern web browser:

```
open index.html
```

### 3. How to Use

1. Enter a word or phrase in the input field.
2. Click the **Submit** button.
3. The result will animate into view, indicating whether the input is a palindrome.

## Technologies Used

- **HTML** for structuring the webpage.
- **CSS** for styling and smooth animations.
- **JavaScript** for palindrome checking logic.

## JavaScript Logic

The script processes user input as follows:

1. **Removes non-alphanumeric characters** (ignoring punctuation and spaces).
2. **Compares the cleaned string** with its reversed version, ignoring case sensitivity.
3. **Displays results dynamically** with animations and color-coded feedback.

## Animations & Effects

- **Input Field:** Smooth focus glow effect.
- **Button Hover:** Background color transition.
- **Result Display:** Fade-in and color transition effect.
- **Result Box:** Scaling animation when displaying results.

## Error Handling

- Alerts the user if the input field is empty.
- Ensures case-insensitive and space/punctuation-agnostic comparison.
- Provides a smooth transition for displaying results.

## Future Enhancements

- Add sound effects for interactions.
- Implement a dark/light mode toggle for accessibility.

## License

This project is open-source and available under the **MIT License**.

---

### Author

Developed by Qasim Adebisi
