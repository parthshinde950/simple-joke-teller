function randomNumberGenerato(number) {
    return Math.floor(Math.random() * number);
}

const jokes =
    [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
        "What do you call fake spaghetti? An impasta!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "What's orange and sounds like a parrot? A carrot!",
        "Why did the stadium get hot after the game? All of the fans left!",
        "Why don't some couples go to the gym? Because some relationships don't work out!",
        "Why was the math book sad? Because it had too many problems!",
        "What do you call a bear with no teeth? A gummy bear!",
        "Why did the man put his money in the blender? Because he wanted to make liquid assets!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "What do you get when you cross a snowman and a vampire? Frostbite!",
        "Why don't some couples go to the gym? Because some relationships don't work out!",
        "Why did the math book look sad? Because it had too many problems!",
        "Why don't some couples go to the gym? Because some relationships don't work out!",
        "What do you get when you cross a snowman and a vampire? Frostbite!",
        "Why don't some couples go to the gym? Because some relationships don't work out!",
        "What do you get when you cross a snowman and a vampire? Frostbite!"
    ]

let x = randomNumberGenerato((jokes.length));
document.getElementById("joke-here").innerHTML = jokes[x];
