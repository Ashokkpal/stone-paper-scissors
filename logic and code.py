import random

# Initialize scores
player_score = 0
computer_score = 0

def play_game(player_choice):
    global player_score, computer_score
    
    # List of possible choices
    choices = ["rock", "paper", "scissors"]
    
    # Randomly select the computer's choice
    computer_choice = random.choice(choices)

    # Variable to store result message
    result = ""

    # If both the player and computer make the same choice, it's a tie
    if player_choice == computer_choice:
        result = "It's a tie!"
    # Check the possible winning conditions for the player
    elif (player_choice == "rock" and computer_choice == "scissors") or \
         (player_choice == "paper" and computer_choice == "rock") or \
         (player_choice == "scissors" and computer_choice == "paper"):
        result = "You win! 🎉"
        player_score += 1  # Increment player score if player wins
    else:
        result = "Computer wins! 😢"
        computer_score += 1  # Increment computer score if computer wins

    # Output result and current scores
    print(f"You chose {player_choice}, Computer chose {computer_choice}. {result}")
    print(f"Player: {player_score} | Computer: {computer_score}")

# Example usage:
# play_game('rock')  # Call this function with player choice, like 'rock', 'paper', or 'scissors'
