# Pi Digits Typing Game

This is a fun web-based typing game where users try to type as many digits of π (pi) as they can from memory. The game tests both your memory and speed while keeping track of your time and score.

## 🔍 Overview

- Type the digits of pi in order, starting after `3.`.
![Screenshot of Pi Game](static/images/game_screenshot.png)
- Your time starts with your first input.
- If you make a mistake, the game ends and your final score is shown.
- The game disables paste, copy, and deletion to prevent cheating.
- The game ends successfully if you type all digits correctly.

## 🛠 Features

- Real-time validation of user input.
- Countdown timer.
- Responsive score and time display.
- Clean and minimal UI using custom CSS and Google Fonts.
- Endgame popup with time and score summary.

## 🧠 Technologies Used

- HTML
- CSS
- JavaScript

## 🚀 Getting Started

To run the project locally:

1. Clone the repository or download the files.
2. Ensure the following folder structure:

PI/
├── app/
│   ├── __init__.py
│   ├── routes.py
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   └── templates/
│       └── index.html
├── run.py
└── README.md

3. Open `index.html` in your browser.

## 📂 File Structure

- `index.html` – The main HTML file.
- `style.css` – Styles for layout and design (in `static/css/`).
- `main.js` – Game logic (in `static/js/`).
- `pi_symbol.png` – Pi symbol image (in `static/images/`).

## 📜 License

This project is free to use and modify for educational or personal use.

---

Enjoy the challenge, and see how many digits of π you can remember!