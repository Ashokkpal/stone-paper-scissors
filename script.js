body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
    margin: 0;
    padding: 20px;
}

.game-container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 400px;
    margin: auto;
}

h1 {
    color: #333;
}

.choices {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.1s;
}

button:active {
    transform: scale(0.95);
}

button img {
    width: 80px;
    height: 80px;
    transition: transform 0.2s;
}

button:hover img {
    transform: scale(1.1);
}

.scoreboard {
    margin: 20px 0;
}

#result {
    font-size: 1.5em;
    margin: 20px 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

#resetButton {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#resetButton:hover {
    background-color: #0056b3;
}
