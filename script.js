/// ================================
// QUIZ MASTER FULL SCRIPT
// ================================


// ================================
// QUIZ DATA
// ================================

const quizData = {

  college: [
    {
      question: "What is the full form of BCA?",
      answers: [
        { text: "Bachelor of Computer Applications", correct: true },
        { text: "Basic Computer Academy", correct: false },
        { text: "Bachelor College Academy", correct: false },
        { text: "Business Computer Applications", correct: false }
      ]
    },

    

    {
      question: 'What does CPU stand for?',
      answers: [
        {text:'Central Processing Unit', correct:true},
        {text:'Computer Processing Unit', correct:false},
        {text:'Central Program Unit', correct:false},
        {text:'Control Processing Unit', correct:false}
     ]
    },

    {
      question: 'Which language is mainly used for web development?',
      answers: [
        {text:'JavaScript', correct:true},
        {text:'Python', correct:false},
        {text:'C++', correct:false},
        {text:'Java', correct:false}
      ]
    },

    {
      question: 'Who is known as the father of computer?',
      answers: [
        {text:'Charles Babbage', correct:true},
        {text:'Alan Turing', correct:false},
        {text:'Bill Gates', correct:false},
        {text:'Steve Jobs', correct:false}
      ]
    },

    {
      question: 'Which data structure follows FIFO?',
      answers: [
        {text:'Queue', correct:true},
        {text:'Stack', correct:false},
        {text:'Tree', correct:false},
        {text:'Array', correct:false}
      ]
    },

    {
      question: 'HTML stands for?',
      answers: [
        {text:'Hyper Text Markup Language', correct:true},
        {text:'High Text Machine Language', correct:false},
        {text:'Hyperlink Text Markup Language', correct:false},
        {text:'Home Tool Markup Language', correct:false}
      ]
    },

    {
      question: 'Which company developed Java?',
      answers: [
        {text:'Sun Microsystems', correct:true},
        {text:'Microsoft', correct:false},
        {text:'Google', correct:false},
        {text:'IBM', correct:false}
      ]
    },

    {
      question: 'Which SQL command removes a table?',
      answers: [
        { text: 'DROP', correct: true },
        { text: 'DELETE', correct: false },
        { text: 'REMOVE', correct: false },
        { text: 'CLEAR', correct: false }
      ]
    },

    {
      question: 'Which device is used to input text?',
      answers: [
        { text: 'Keyboard', correct: true },
        { text: 'Monitor', correct: false },
        { text: 'Printer', correct: false },
        { text: 'Speaker', correct: false }
      ]
    },

    {
      question: 'Which is an operating system?',
      answers: [
        { text: 'Windows', correct: true },
        { text: 'MS Word', correct: false },
        { text: 'Photoshop', correct: false },
        { text: 'Chrome', correct: false }
      ]
    },

    {
      question: 'What is the full form of RAM?',
      answers: [
        { text: 'Random Access Memory', correct: true },
        { text: 'Read Access Memory', correct: false },
        { text: 'Run Access Memory', correct: false },
        { text: 'Rapid Access Memory', correct: false }
      ]
    },

    {
      question: 'Which symbol is used for comments in JavaScript?',
      answers: [
        { text: '//', correct: true },
        { text: '##', correct: false },
        { text: '<!-- -->', correct: false },
        { text: '**', correct: false }
      ]
    },

    {
      question: 'Which subject studies living organisms?',
      answers: [
        { text: 'Biology', correct: true },
        { text: 'Physics', correct: false },
        { text: 'Chemistry', correct: false },
        { text: 'Math', correct: false }
      ]
    },

    {
      question: 'Which software is used for presentations?',
      answers: [
        { text: 'PowerPoint', correct: true },
        { text: 'Excel', correct: false },
        { text: 'Paint', correct: false },
        { text: 'Notepad', correct: false }
      ]
    },

    {
      question: 'Which network covers a small area?',
      answers: [
        { text: 'LAN', correct: true },
        { text: 'WAN', correct: false },
        { text: 'MAN', correct: false },
        { text: 'PAN', correct: false }
      ]
    },

    {
      question: 'Which protocol is used for websites?',
      answers: [
        { text: 'HTTP', correct: true },
        { text: 'FTP', correct: false },
        { text: 'SMTP', correct: false },
        { text: 'TCP', correct: false }
      ]
    },

    {
      question: 'Which programming language is object-oriented?',
      answers: [
        { text: 'Java', correct: true },
        { text: 'HTML', correct: false },
        { text: 'CSS', correct: false },
        { text: 'SQL', correct: false }
      ]
    },

    {
      question: 'Which key refreshes a webpage?',
      answers: [
        { text: 'F5', correct: true },
        { text: 'F1', correct: false },
        { text: 'F9', correct: false },
        { text: 'F12', correct: false }
      ]
    },

    {
      question: 'Which software is used for coding?',
      answers: [
        { text: 'VS Code', correct: true },
        { text: 'Chrome', correct: false },
        { text: 'Excel', correct: false },
        { text: 'PowerPoint', correct: false }
      ]
    },

    {
      question: 'What is the brain of the computer?',
      answers: [
        { text: 'CPU', correct: true },
        { text: 'RAM', correct: false },
        { text: 'Hard Disk', correct: false },
        { text: 'Monitor', correct: false }
      ]
    },

    {
      question: 'Which company created Android?',
      answers: [
        { text: 'Google', correct: true },
        { text: 'Apple', correct: false },
        { text: 'Samsung', correct: false },
        { text: 'Microsoft', correct: false }
      ]
    },

    {
      question: 'Which programming language is mainly used for Android app development?',
      answers: [
        { text: 'Java', correct: true },
        { text: 'HTML', correct: false },
        { text: 'CSS', correct: false },
        { text: 'SQL', correct: false }
      ]
    },

    {
      question: 'Which device is used to print documents?',
      answers: [
        { text: 'Printer', correct: true },
        { text: 'Scanner', correct: false },
        { text: 'Monitor', correct: false },
        { text: 'Keyboard', correct: false }
      ]
    },

    {
      question: 'Which software is used to create spreadsheets?',
      answers: [
        { text: 'MS Excel', correct: true },
        { text: 'MS Word', correct: false },
        { text: 'Photoshop', correct: false },
        { text: 'PowerPoint', correct: false }
      ]
    },

    {
      question: 'What does URL stand for?',
      answers: [
        { text: 'Uniform Resource Locator', correct: true },
        { text: 'Universal Record Link', correct: false },
        { text: 'Uniform Record Locator', correct: false },
        { text: 'Universal Resource Link', correct: false }
      ]
    },

    {
      question: 'Which branch of science deals with living organisms?',
      answers: [
        { text: 'Biology', correct: true },
        { text: 'Physics', correct: false },
        { text: 'Chemistry', correct: false },
        { text: 'Mathematics', correct: false }
      ]
    },

    {
      question: 'Which key combination is used to paste copied text?',
      answers: [
        { text: 'Ctrl + V', correct: true },
        { text: 'Ctrl + C', correct: false },
        { text: 'Ctrl + X', correct: false },
        { text: 'Ctrl + Z', correct: false }
      ]
    },

    {
      question: 'Which programming language is used for styling webpages?',
      answers: [
        { text: 'CSS', correct: true },
        { text: 'HTML', correct: false },
        { text: 'Java', correct: false },
        { text: 'Python', correct: false }
      ]
    },

    {
      question: 'Which component stores data permanently in computer?',
      answers: [
        { text: 'Hard Disk', correct: true },
        { text: 'RAM', correct: false },
        { text: 'CPU', correct: false },
        { text: 'Cache', correct: false }
      ]
    },

    {
      question: 'Which networking device distributes internet connection?',
      answers: [
        { text: 'Router', correct: true },
        { text: 'Monitor', correct: false },
        { text: 'Speaker', correct: false },
        { text: 'Projector', correct: false }
      ]
    },

  ],



  movies: [
    {
      question: "Who is known as King Khan?",
      answers: [
        { text: "Salman Khan", correct: false },
        { text: "Aamir Khan", correct: false },
        { text: "Shah Rukh Khan", correct: true },
        { text: "Saif Ali Khan", correct: false }
      ]
    },

      {
      question: 'Who is known as King Khan in Bollywood?',
      answers: [
        { text: 'Shah Rukh Khan', correct: true },
        { text: 'Salman Khan', correct: false },
        { text: 'Aamir Khan', correct: false },
        { text: 'Saif Ali Khan', correct: false }
      ]
    },

    {
      question: 'Who directed the movie Inception?',
      answers: [
        { text: 'Christopher Nolan', correct: true },
        { text: 'James Cameron', correct: false },
        { text: 'Steven Spielberg', correct: false },
        { text: 'Martin Scorsese', correct: false }
      ]
    },

    {
      question: 'Which movie won Oscar for Best Picture in 2023?',
      answers: [
        { text: 'Everything Everywhere All at Once', correct: true },
        { text: 'Avatar 2', correct: false },
        { text: 'Top Gun Maverick', correct: false },
        { text: 'Elvis', correct: false }
      ]
    },

    {
      question: 'Who played Iron Man in Marvel movies?',
      answers: [
        { text: 'Robert Downey Jr.', correct: true },
        { text: 'Chris Evans', correct: false },
        { text: 'Chris Hemsworth', correct: false },
        { text: 'Mark Ruffalo', correct: false }
      ]
    },

    {
      question: 'Which movie features the character Jack Sparrow?',
      answers: [
        { text: 'Pirates of the Caribbean', correct: true },
        { text: 'Titanic', correct: false },
        { text: 'Avatar', correct: false },
        { text: 'Harry Potter', correct: false }
      ]
    },

    {
      question: 'Who played Joker in The Dark Knight?',
      answers: [
        { text: 'Heath Ledger', correct: true },
        { text: 'Joaquin Phoenix', correct: false },
        { text: 'Jared Leto', correct: false },
        { text: 'Tom Hardy', correct: false }
      ]
    },

    {
      question: 'Which Bollywood movie is based on wrestling?',
      answers: [
        { text: 'Dangal', correct: true },
        { text: 'War', correct: false },
        { text: 'PK', correct: false },
        { text: 'Pathaan', correct: false }
      ]
    },

    {
      question: 'Who directed Bahubali?',
      answers: [
        { text: 'S. S. Rajamouli', correct: true },
        { text: 'Karan Johar', correct: false },
        { text: 'Rohit Shetty', correct: false },
        { text: 'Farah Khan', correct: false }
      ]
    },

    {
      question: 'Which movie has the song Naatu Naatu?',
      answers: [
        { text: 'RRR', correct: true },
        { text: 'KGF', correct: false },
        { text: 'Pushpa', correct: false },
        { text: 'Leo', correct: false }
      ]
    },

    {
      question: 'Who played Spider-Man in MCU?',
      answers: [
        { text: 'Tom Holland', correct: true },
        { text: 'Andrew Garfield', correct: false },
        { text: 'Tobey Maguire', correct: false },
        { text: 'Chris Evans', correct: false }
      ]
    },

    {
      question: 'Which movie is about dinosaurs?',
      answers: [
        { text: 'Jurassic Park', correct: true },
        { text: 'Titanic', correct: false },
        { text: 'Frozen', correct: false },
        { text: 'Avatar', correct: false }
      ]
    },

    {
      question: 'Who played the role of Harry Potter?',
      answers: [
        { text: 'Daniel Radcliffe', correct: true },
        { text: 'Rupert Grint', correct: false },
        { text: 'Tom Holland', correct: false },
        { text: 'Elijah Wood', correct: false }
      ]
    },

    {
      question: 'Which Bollywood actor is known as Bhaijaan?',
      answers: [
        { text: 'Salman Khan', correct: true },
        { text: 'Shah Rukh Khan', correct: false },
        { text: 'Aamir Khan', correct: false },
        { text: 'Akshay Kumar', correct: false }
      ]
    },

    {
      question: 'Which movie won Best Picture Oscar in 1998?',
      answers: [
        { text: 'Titanic', correct: true },
        { text: 'Avatar', correct: false },
        { text: 'Gladiator', correct: false },
        { text: 'Inception', correct: false }
      ]
    },

    {
      question: 'Which superhero uses a hammer?',
      answers: [
        { text: 'Thor', correct: true },
        { text: 'Batman', correct: false },
        { text: 'Superman', correct: false },
        { text: 'Flash', correct: false }
      ]
    },

    {
      question: 'Who played Batman in The Batman (2022)?',
      answers: [
        { text: 'Robert Pattinson', correct: true },
        { text: 'Ben Affleck', correct: false },
        { text: 'Christian Bale', correct: false },
        { text: 'Henry Cavill', correct: false }
      ]
    },

    {
      question: 'Which movie features the character Elsa?',
      answers: [
        { text: 'Frozen', correct: true },
        { text: 'Moana', correct: false },
        { text: 'Encanto', correct: false },
        { text: 'Brave', correct: false }
      ]
    },

    {
      question: 'Who directed Titanic?',
      answers: [
        { text: 'James Cameron', correct: true },
        { text: 'Christopher Nolan', correct: false },
        { text: 'Steven Spielberg', correct: false },
        { text: 'Ridley Scott', correct: false }
      ]
    },

    {
      question: 'Which actor played Doctor Strange?',
      answers: [
        { text: 'Benedict Cumberbatch', correct: true },
        { text: 'Chris Evans', correct: false },
        { text: 'Tom Holland', correct: false },
        { text: 'Chris Pratt', correct: false }
      ]
    },

    {
      question: 'Which movie series includes Hogwarts?',
      answers: [
        { text: 'Harry Potter', correct: true },
        { text: 'Lord of the Rings', correct: false },
        { text: 'Avengers', correct: false },
        { text: 'Star Wars', correct: false }
      ]
    },

    {
      question: 'Which actor played the role of Jack in Titanic?',
      answers: [
        { text: 'Leonardo DiCaprio', correct: true },
        { text: 'Brad Pitt', correct: false },
        { text: 'Tom Cruise', correct: false },
        { text: 'Johnny Depp', correct: false }
      ]
    },

    {
      question: 'Which Bollywood movie features the character Chulbul Pandey?',
      answers: [
        { text: 'Dabangg', correct: true },
        { text: 'Singham', correct: false },
        { text: 'War', correct: false },
        { text: 'Kick', correct: false }
      ]
    },

    {
      question: 'Who directed the movie Avatar?',
      answers: [
        { text: 'James Cameron', correct: true },
        { text: 'Christopher Nolan', correct: false },
        { text: 'Steven Spielberg', correct: false },
        { text: 'Ridley Scott', correct: false }
      ]
    },

    {
      question: 'Which actor played Captain America in Marvel movies?',
      answers: [
        { text: 'Chris Evans', correct: true },
        { text: 'Chris Hemsworth', correct: false },
        { text: 'Robert Downey Jr.', correct: false },
        { text: 'Tom Holland', correct: false }
      ]
    },

    {
      question: 'Which movie series features the character Dom Toretto?',
      answers: [
        { text: 'Fast and Furious', correct: true },
        { text: 'Mission Impossible', correct: false },
        { text: 'Transformers', correct: false },
        { text: 'John Wick', correct: false }
      ]
    },

    {
      question: 'Who played the role of Batman in The Dark Knight trilogy?',
      answers: [
        { text: 'Christian Bale', correct: true },
        { text: 'Ben Affleck', correct: false },
        { text: 'Robert Pattinson', correct: false },
        { text: 'George Clooney', correct: false }
      ]
    },

    {
      question: 'Which Bollywood actor is known as Mr. Perfectionist?',
      answers: [
        { text: 'Aamir Khan', correct: true },
        { text: 'Salman Khan', correct: false },
        { text: 'Shah Rukh Khan', correct: false },
        { text: 'Akshay Kumar', correct: false }
      ]
    },

    {
      question: 'Which movie won the Oscar for Best Picture in 2020?',
      answers: [
        { text: 'Parasite', correct: true },
        { text: '1917', correct: false },
        { text: 'Joker', correct: false },
        { text: 'Ford v Ferrari', correct: false }
      ]
    },

    {
      question: 'Which movie features the wizard school Hogwarts?',
      answers: [
        { text: 'Harry Potter', correct: true },
        { text: 'Lord of the Rings', correct: false },
        { text: 'Avengers', correct: false },
        { text: 'Chronicles of Narnia', correct: false }
      ]
    },
  ],

  gk: [
    {
      question: "What is the capital of India?",
      answers: [
        { text: "Delhi", correct: true },
        { text: "Mumbai", correct: false },
        { text: "Kolkata", correct: false },
        { text: "Chennai", correct: false }
      ]
    },

    {
      question: 'What is the capital of India?',
      answers: [
        { text: 'New Delhi', correct: true },
        { text: 'Mumbai', correct: false },
        { text: 'Kolkata', correct: false },
        { text: 'Chennai', correct: false }
      ]
    },

    {
      question: 'Which is the largest ocean in the world?',
      answers: [
        { text: 'Pacific Ocean', correct: true },
        { text: 'Indian Ocean', correct: false },
        { text: 'Atlantic Ocean', correct: false },
        { text: 'Arctic Ocean', correct: false }
      ]
    },

    {
      question: 'Who is known as the Father of the Nation in India?',
      answers: [
        { text: 'Mahatma Gandhi', correct: true },
        { text: 'Jawaharlal Nehru', correct: false },
        { text: 'Subhash Chandra Bose', correct: false },
        { text: 'Bhagat Singh', correct: false }
      ]
    },

    {
      question: 'Which planet is known as the Red Planet?',
      answers: [
        { text: 'Mars', correct: true },
        { text: 'Venus', correct: false },
        { text: 'Jupiter', correct: false },
        { text: 'Mercury', correct: false }
      ]
    },

    {
      question: 'What is the national animal of India?',
      answers: [
        { text: 'Tiger', correct: true },
        { text: 'Lion', correct: false },
        { text: 'Elephant', correct: false },
        { text: 'Leopard', correct: false }
      ]
    },

    {
      question: 'How many continents are there in the world?',
      answers: [
        { text: '7', correct: true },
        { text: '5', correct: false },
        { text: '6', correct: false },
        { text: '8', correct: false }
      ]
    },

    {
      question: 'Which country is known as the Land of Rising Sun?',
      answers: [
        { text: 'Japan', correct: true },
        { text: 'China', correct: false },
        { text: 'Thailand', correct: false },
        { text: 'South Korea', correct: false }
      ]
    },

    {
      question: 'Who invented the telephone?',
      answers: [
        { text: 'Alexander Graham Bell', correct: true },
        { text: 'Thomas Edison', correct: false },
        { text: 'Nikola Tesla', correct: false },
        { text: 'Newton', correct: false }
      ]
    },

    {
      question: 'Which is the smallest planet in the solar system?',
      answers: [
        { text: 'Mercury', correct: true },
        { text: 'Mars', correct: false },
        { text: 'Venus', correct: false },
        { text: 'Pluto', correct: false }
      ]
    },

    {
      question: 'What is the national bird of India?',
      answers: [
        { text: 'Peacock', correct: true },
        { text: 'Parrot', correct: false },
        { text: 'Sparrow', correct: false },
        { text: 'Crow', correct: false }
      ]
    },

    {
      question: 'Who wrote the Indian National Anthem?',
      answers: [
        { text: 'Rabindranath Tagore', correct: true },
        { text: 'Bankim Chandra Chatterjee', correct: false },
        { text: 'Sarojini Naidu', correct: false },
        { text: 'Premchand', correct: false }
      ]
    },

    {
      question: 'Which gas do humans need to breathe?',
      answers: [
        { text: 'Oxygen', correct: true },
        { text: 'Carbon Dioxide', correct: false },
        { text: 'Nitrogen', correct: false },
        { text: 'Hydrogen', correct: false }
      ]
    },

    {
      question: 'Which is the longest river in the world?',
      answers: [
        { text: 'Nile', correct: true },
        { text: 'Amazon', correct: false },
        { text: 'Ganga', correct: false },
        { text: 'Yamuna', correct: false }
      ]
    },

    {
      question: 'Which festival is called Festival of Lights?',
      answers: [
        { text: 'Diwali', correct: true },
        { text: 'Holi', correct: false },
        { text: 'Eid', correct: false },
        { text: 'Christmas', correct: false }
      ]
    },

    {
      question: 'How many states are there in India?',
      answers: [
        { text: '28', correct: true },
        { text: '29', correct: false },
        { text: '30', correct: false },
        { text: '27', correct: false }
      ]
    },

    {
      question: 'Which is the fastest land animal?',
      answers: [
        { text: 'Cheetah', correct: true },
        { text: 'Lion', correct: false },
        { text: 'Tiger', correct: false },
        { text: 'Horse', correct: false }
      ]
    },

    {
      question: 'What is the currency of India?',
      answers: [
        { text: 'Rupee', correct: true },
        { text: 'Dollar', correct: false },
        { text: 'Euro', correct: false },
        { text: 'Yen', correct: false }
      ]
    },

    {
      question: 'Which day is celebrated as Independence Day in India?',
      answers: [
        { text: '15 August', correct: true },
        { text: '26 January', correct: false },
        { text: '2 October', correct: false },
        { text: '14 November', correct: false }
      ]
    },

    {
      question: 'Which is the tallest mountain in the world?',
      answers: [
        { text: 'Mount Everest', correct: true },
        { text: 'K2', correct: false },
        { text: 'Kanchenjunga', correct: false },
        { text: 'Makalu', correct: false }
      ]
    },

    {
      question: 'Who was the first Prime Minister of India?',
      answers: [
        { text: 'Jawaharlal Nehru', correct: true },
        { text: 'Mahatma Gandhi', correct: false },
        { text: 'Sardar Patel', correct: false },
        { text: 'Rajendra Prasad', correct: false }
      ]
    },

    {
      question: 'Which is the largest desert in the world?',
      answers: [
        { text: 'Sahara Desert', correct: true },
        { text: 'Gobi Desert', correct: false },
        { text: 'Thar Desert', correct: false },
        { text: 'Kalahari Desert', correct: false }
      ]
    },

    {
      question: 'Who was the first President of India?',
      answers: [
        { text: 'Dr. Rajendra Prasad', correct: true },
        { text: 'Jawaharlal Nehru', correct: false },
        { text: 'Mahatma Gandhi', correct: false },
        { text: 'Sardar Patel', correct: false }
      ]
    },

    {
      question: 'Which is the national flower of India?',
      answers: [
        { text: 'Lotus', correct: true },
        { text: 'Rose', correct: false },
        { text: 'Sunflower', correct: false },
        { text: 'Lily', correct: false }
      ]
    },

    {
      question: 'Which planet is known as the Blue Planet?',
      answers: [
        { text: 'Earth', correct: true },
        { text: 'Mars', correct: false },
        { text: 'Venus', correct: false },
        { text: 'Jupiter', correct: false }
      ]
    },

    {
      question: 'Who discovered gravity?',
      answers: [
        { text: 'Isaac Newton', correct: true },
        { text: 'Albert Einstein', correct: false },
        { text: 'Galileo', correct: false },
        { text: 'Thomas Edison', correct: false }
      ]
    },

    {
      question: 'Which country has the largest population in the world?',
      answers: [
        { text: 'India', correct: true },
        { text: 'China', correct: false },
        { text: 'USA', correct: false },
        { text: 'Russia', correct: false }
      ]
    },

    {
      question: 'What is the capital of Australia?',
      answers: [
        { text: 'Canberra', correct: true },
        { text: 'Sydney', correct: false },
        { text: 'Melbourne', correct: false },
        { text: 'Perth', correct: false }
      ]
    },

    {
      question: 'Which is the longest river in India?',
      answers: [
        { text: 'Ganga', correct: true },
        { text: 'Yamuna', correct: false },
        { text: 'Godavari', correct: false },
        { text: 'Brahmaputra', correct: false }
      ]
    },

    {
      question: 'Which country gifted the Statue of Liberty to USA?',
      answers: [
        { text: 'France', correct: true },
        { text: 'England', correct: false },
        { text: 'Germany', correct: false },
        { text: 'Canada', correct: false }
      ]
    },
  ],

  sports: [
    {
      question: "How many players are there in cricket team?",
      answers: [
        { text: "11", correct: true },
        { text: "10", correct: false },
        { text: "12", correct: false },
        { text: "9", correct: false }
      ]
    },

    {
      question: 'How many players are there in a cricket team?',
      answers: [
        { text: '11', correct: true },
        { text: '10', correct: false },
        { text: '12', correct: false },
        { text: '9', correct: false }
      ]
    },

    {
      question: 'Which country won the FIFA World Cup 2022?',
      answers: [
        { text: 'Argentina', correct: true },
        { text: 'Brazil', correct: false },
        { text: 'France', correct: false },
        { text: 'Germany', correct: false }
      ]
    },

    {
      question: 'Who is known as the God of Cricket?',
      answers: [
        { text: 'Sachin Tendulkar', correct: true },
        { text: 'Virat Kohli', correct: false },
        { text: 'MS Dhoni', correct: false },
        { text: 'Rohit Sharma', correct: false }
      ]
    },

    {
      question: 'Which sport uses a shuttlecock?',
      answers: [
        { text: 'Badminton', correct: true },
        { text: 'Tennis', correct: false },
        { text: 'Hockey', correct: false },
        { text: 'Cricket', correct: false }
      ]
    },

    {
      question: 'Which country hosted FIFA World Cup 2022?',
      answers: [
        { text: 'Qatar', correct: true },
        { text: 'Russia', correct: false },
        { text: 'Brazil', correct: false },
        { text: 'USA', correct: false }
      ]
    },

    {
      question: 'Who won ICC Cricket World Cup 2011?',
      answers: [
        { text: 'India', correct: true },
        { text: 'Australia', correct: false },
        { text: 'England', correct: false },
        { text: 'Pakistan', correct: false }
      ]
    },

    {
      question: 'Which player is known as GOAT in football?',
      answers: [
        { text: 'Lionel Messi', correct: true },
        { text: 'Neymar', correct: false },
        { text: 'Mbappe', correct: false },
        { text: 'Salah', correct: false }
      ]
    },

    {
      question: 'Which sport is played at Wimbledon?',
      answers: [
        { text: 'Tennis', correct: true },
        { text: 'Football', correct: false },
        { text: 'Golf', correct: false },
        { text: 'Basketball', correct: false }
      ]
    },

    {
      question: 'Who is known as Flying Sikh?',
      answers: [
        { text: 'Milkha Singh', correct: true },
        { text: 'Sachin Tendulkar', correct: false },
        { text: 'Dhoni', correct: false },
        { text: 'Virat Kohli', correct: false }
      ]
    },

    {
      question: 'How often are the Olympic Games held?',
      answers: [
        { text: 'Every 4 years', correct: true },
        { text: 'Every 2 years', correct: false },
        { text: 'Every year', correct: false },
        { text: 'Every 5 years', correct: false }
      ]
    },

    {
      question: 'Which country invented cricket?',
      answers: [
        { text: 'England', correct: true },
        { text: 'India', correct: false },
        { text: 'Australia', correct: false },
        { text: 'South Africa', correct: false }
      ]
    },

    {
      question: 'Who won the FIFA World Cup 2018?',
      answers: [
        { text: 'France', correct: true },
        { text: 'Brazil', correct: false },
        { text: 'Argentina', correct: false },
        { text: 'Germany', correct: false }
      ]
    },

    {
      question: 'Which sport uses a bat and ball?',
      answers: [
        { text: 'Cricket', correct: true },
        { text: 'Football', correct: false },
        { text: 'Swimming', correct: false },
        { text: 'Hockey', correct: false }
      ]
    },

    {
      question: 'Who is called Captain Cool in cricket?',
      answers: [
        { text: 'MS Dhoni', correct: true },
        { text: 'Virat Kohli', correct: false },
        { text: 'Rohit Sharma', correct: false },
        { text: 'Sachin Tendulkar', correct: false }
      ]
    },

    {
      question: 'Which country has won most Cricket World Cups?',
      answers: [
        { text: 'Australia', correct: true },
        { text: 'India', correct: false },
        { text: 'England', correct: false },
        { text: 'Pakistan', correct: false }
      ]
    },

    {
      question: 'Which sport is associated with NBA?',
      answers: [
        { text: 'Basketball', correct: true },
        { text: 'Baseball', correct: false },
        { text: 'Football', correct: false },
        { text: 'Tennis', correct: false }
      ]
    },

    {
      question: 'Who won the Ballon d’Or 2023?',
      answers: [
        { text: 'Lionel Messi', correct: true },
        { text: 'Cristiano Ronaldo', correct: false },
        { text: 'Mbappe', correct: false },
        { text: 'Haaland', correct: false }
      ]
    },

    {
      question: 'Which country hosted the Olympics 2021?',
      answers: [
        { text: 'Japan', correct: true },
        { text: 'China', correct: false },
        { text: 'USA', correct: false },
        { text: 'France', correct: false }
      ]
    },

    {
      question: 'Which sport is known as the king of sports?',
      answers: [
        { text: 'Football', correct: true },
        { text: 'Cricket', correct: false },
        { text: 'Basketball', correct: false },
        { text: 'Tennis', correct: false }
      ]
    },

    {
      question: 'Who is the highest run scorer in international cricket?',
      answers: [
        { text: 'Sachin Tendulkar', correct: true },
        { text: 'Virat Kohli', correct: false },
        { text: 'Ricky Ponting', correct: false },
        { text: 'Kumar Sangakkara', correct: false }
      ]
    },

    {
      question: 'Which country won the ICC Cricket World Cup 2023?',
      answers: [
        { text: 'Australia', correct: true },
        { text: 'India', correct: false },
        { text: 'England', correct: false },
        { text: 'New Zealand', correct: false }
      ]
    },

    {
      question: 'Who is known as the King of Football?',
      answers: [
        { text: 'Pele', correct: true },
        { text: 'Lionel Messi', correct: false },
        { text: 'Cristiano Ronaldo', correct: false },
        { text: 'Neymar', correct: false }
      ]
    },

    {
      question: 'Which sport is played with a puck?',
      answers: [
        { text: 'Ice Hockey', correct: true },
        { text: 'Cricket', correct: false },
        { text: 'Basketball', correct: false },
        { text: 'Baseball', correct: false }
      ]
    },

    {
      question: 'Who has won the most Grand Slam titles in men tennis?',
      answers: [
        { text: 'Novak Djokovic', correct: true },
        { text: 'Roger Federer', correct: false },
        { text: 'Rafael Nadal', correct: false },
        { text: 'Andy Murray', correct: false }
      ]
    },

    {
      question: 'Which country is famous for the martial art Karate?',
      answers: [
        { text: 'Japan', correct: true },
        { text: 'China', correct: false },
        { text: 'Thailand', correct: false },
        { text: 'Korea', correct: false }
      ]
    },

    {
      question: 'Which Indian player is called Hitman in cricket?',
      answers: [
        { text: 'Rohit Sharma', correct: true },
        { text: 'Virat Kohli', correct: false },
        { text: 'KL Rahul', correct: false },
        { text: 'Hardik Pandya', correct: false }
      ]
    },

    {
      question: 'Which game uses the term checkmate?',
      answers: [
        { text: 'Chess', correct: true },
        { text: 'Tennis', correct: false },
        { text: 'Football', correct: false },
        { text: 'Hockey', correct: false }
      ]
    },

    {
      question: 'Which country hosted the Cricket World Cup 2023?',
      answers: [
        { text: 'India', correct: true },
        { text: 'Australia', correct: false },
        { text: 'England', correct: false },
        { text: 'South Africa', correct: false }
      ]
    },

    {
      question: 'How many rings are there in the Olympic symbol?',
      answers: [
        { text: '5', correct: true },
        { text: '4', correct: false },
        { text: '6', correct: false },
        { text: '7', correct: false }
      ]
    },
  ],

  technology: [
    {
      question: "Which language runs in browser?",
      answers: [
        { text: "JavaScript", correct: true },
        { text: "Python", correct: false },
        { text: "C++", correct: false },
        { text: "Java", correct: false }
      ]
    },

    {
      question: 'Which company developed the Android operating system?',
      answers: [
        { text: 'Google', correct: true },
        { text: 'Apple', correct: false },
        { text: 'Microsoft', correct: false },
        { text: 'Samsung', correct: false }
      ]
    },

    {
      question: 'What does CPU stand for?',
      answers: [
        { text: 'Central Processing Unit', correct: true },
        { text: 'Computer Processing Unit', correct: false },
        { text: 'Central Program Unit', correct: false },
        { text: 'Control Processing Unit', correct: false }
      ]
    },

    {
      question: 'Which programming language is mainly used for web development?',
      answers: [
        { text: 'JavaScript', correct: true },
        { text: 'C++', correct: false },
        { text: 'Java', correct: false },
        { text: 'Python', correct: false }
      ]
    },

    {
      question: 'Which device is known as the brain of the computer?',
      answers: [
        { text: 'CPU', correct: true },
        { text: 'RAM', correct: false },
        { text: 'Monitor', correct: false },
        { text: 'Keyboard', correct: false }
      ]
    },

    {
      question: 'HTML is used for?',
      answers: [
        { text: 'Creating webpage structure', correct: true },
        { text: 'Database management', correct: false },
        { text: 'Photo editing', correct: false },
        { text: 'Gaming', correct: false }
      ]
    },

    {
      question: 'Which company owns YouTube?',
      answers: [
        { text: 'Google', correct: true },
        { text: 'Meta', correct: false },
        { text: 'Amazon', correct: false },
        { text: 'Microsoft', correct: false }
      ]
    },

    {
      question: 'Which storage device stores data permanently?',
      answers: [
        { text: 'Hard Disk', correct: true },
        { text: 'RAM', correct: false },
        { text: 'Cache', correct: false },
        { text: 'Register', correct: false }
      ]
    },

    {
      question: 'CSS is mainly used for?',
      answers: [
        { text: 'Styling webpages', correct: true },
        { text: 'Programming', correct: false },
        { text: 'Database creation', correct: false },
        { text: 'Networking', correct: false }
      ]
    },

    {
      question: 'Which company created Windows operating system?',
      answers: [
        { text: 'Microsoft', correct: true },
        { text: 'Apple', correct: false },
        { text: 'Google', correct: false },
        { text: 'IBM', correct: false }
      ]
    },

    {
      question: 'What is the full form of RAM?',
      answers: [
        { text: 'Random Access Memory', correct: true },
        { text: 'Read Access Memory', correct: false },
        { text: 'Run Access Memory', correct: false },
        { text: 'Rapid Access Memory', correct: false }
      ]
    },

    {
      question: 'Which tag is used to insert images in HTML?',
      answers: [
        { text: 'img', correct: true },
        { text: 'image', correct: false },
        { text: 'src', correct: false },
        { text: 'pic', correct: false }
      ]
    },

    {
      question: 'Which company developed the iPhone?',
      answers: [
        { text: 'Apple', correct: true },
        { text: 'Samsung', correct: false },
        { text: 'Google', correct: false },
        { text: 'Nokia', correct: false }
      ]
    },

    {
      question: 'What does URL stand for?',
      answers: [
        { text: 'Uniform Resource Locator', correct: true },
        { text: 'Universal Resource Link', correct: false },
        { text: 'Uniform Reference Link', correct: false },
        { text: 'Universal Record Locator', correct: false }
      ]
    },

    {
      question: 'Which programming language is object-oriented?',
      answers: [
        { text: 'Java', correct: true },
        { text: 'HTML', correct: false },
        { text: 'CSS', correct: false },
        { text: 'SQL', correct: false }
      ]
    },

    {
      question: 'Which software is used to browse the internet?',
      answers: [
        { text: 'Chrome', correct: true },
        { text: 'Photoshop', correct: false },
        { text: 'Excel', correct: false },
        { text: 'PowerPoint', correct: false }
      ]
    },

    {
      question: 'Which protocol is used for websites?',
      answers: [
        { text: 'HTTP', correct: true },
        { text: 'FTP', correct: false },
        { text: 'SMTP', correct: false },
        { text: 'IP', correct: false }
      ]
    },

    {
      question: 'Which company created ChatGPT?',
      answers: [
        { text: 'OpenAI', correct: true },
        { text: 'Google', correct: false },
        { text: 'Meta', correct: false },
        { text: 'Microsoft', correct: false }
      ]
    },

    {
      question: 'Which part of computer shows output?',
      answers: [
        { text: 'Monitor', correct: true },
        { text: 'Keyboard', correct: false },
        { text: 'Mouse', correct: false },
        { text: 'CPU', correct: false }
      ]
    },

    {
      question: 'Which language is used for database queries?',
      answers: [
        { text: 'SQL', correct: true },
        { text: 'Python', correct: false },
        { text: 'C', correct: false },
        { text: 'Java', correct: false }
      ]
    },

    {
      question: 'Which key is used to refresh a webpage?',
      answers: [
        { text: 'F5', correct: true },
        { text: 'F1', correct: false },
        { text: 'F10', correct: false },
        { text: 'F12', correct: false }
      ]
    },

    {
      question: 'Which company developed the Windows operating system?',
      answers: [
        { text: 'Microsoft', correct: true },
        { text: 'Apple', correct: false },
        { text: 'Google', correct: false },
        { text: 'IBM', correct: false }
      ]
    },

    {
      question: 'Which programming language is known as the language of the web?',
      answers: [
        { text: 'JavaScript', correct: true },
        { text: 'Python', correct: false },
        { text: 'C++', correct: false },
        { text: 'Java', correct: false }
      ]
    },

    {
      question: 'What does USB stand for?',
      answers: [
        { text: 'Universal Serial Bus', correct: true },
        { text: 'Universal System Bus', correct: false },
        { text: 'United Serial Bus', correct: false },
        { text: 'Unified Service Bus', correct: false }
      ]
    },

    {
      question: 'Which device is used to connect a computer to the internet wirelessly?',
      answers: [
        { text: 'Router', correct: true },
        { text: 'Printer', correct: false },
        { text: 'Scanner', correct: false },
        { text: 'Speaker', correct: false }
      ]
    },

    {
      question: 'Which company created the iPhone?',
      answers: [
        { text: 'Apple', correct: true },
        { text: 'Samsung', correct: false },
        { text: 'Google', correct: false },
        { text: 'Nokia', correct: false }
      ]
    },

    {
      question: 'What is the full form of AI?',
      answers: [
        { text: 'Artificial Intelligence', correct: true },
        { text: 'Automatic Information', correct: false },
        { text: 'Artificial Internet', correct: false },
        { text: 'Advanced Intelligence', correct: false }
      ]
    },

    {
      question: 'Which shortcut key is used to copy text?',
      answers: [
       
        { text: 'Ctrl + V', correct: false },
        { text: 'Ctrl + X', correct: false },
        { text: 'Ctrl + Z', correct: false },
        { text: 'Ctrl + C', correct: true }
      ]
    },

    {
      question: 'Which social media platform is owned by Meta?',
      answers: [
        
        { text: 'YouTube', correct: false },
        { text: 'Twitter', correct: false },
        { text: 'Telegram', correct: false },
        { text: 'Facebook', correct: true }
      ]
    },

    {
      question: 'Which component is called temporary memory of computer?',
      answers: [
       
        { text: 'Hard Disk', correct: false },
        { text: 'RAM', correct: true },
        { text: 'SSD', correct: false },
        { text: 'ROM', correct: false }
      ]
    },
  ],

  science: [
    {
      question: "Chemical formula of water?",
      answers: [
        { text: "H2O", correct: true },
        { text: "CO2", correct: false },
        { text: "O2", correct: false },
        { text: "NaCl", correct: false }
      ]
    },

    {
      question: 'What is the chemical formula of water?',
      answers: [
        
        { text: 'CO2', correct: false },
        { text: 'NaCl', correct: false },
        { text: 'O2', correct: false },
        { text: 'H2O', correct: true }
      ]
    },

    {
      question: 'Which planet is known as the Red Planet?',
      answers: [
        
        { text: 'Venus', correct: false },
        { text: 'Mercury', correct: false },
        { text: 'Mars', correct: true },
        { text: 'Jupiter', correct: false }
      ]
    },

    {
      question: 'Which gas do humans breathe in for survival?',
      answers: [
        { text: 'Oxygen', correct: true },
        { text: 'Nitrogen', correct: false },
        { text: 'Carbon Dioxide', correct: false },
        { text: 'Hydrogen', correct: false }
      ]
    },

    {
      question: 'What is the speed of light?',
      answers: [
       
        { text: '3 × 10^6 m/s', correct: false },
        { text: '3 × 10^5 m/s', correct: false },
        { text: '3 × 10^7 m/s', correct: false },
        { text: '3 × 10^8 m/s', correct: true },
      ]
    },

    {
      question: 'Which organ pumps blood in the human body?',
      answers: [
       
        { text: 'Lungs', correct: false },
        { text: 'Heart', correct: true },
        { text: 'Kidney', correct: false },
        { text: 'Brain', correct: false }
      ]
    },

    {
      question: 'Which planet has rings around it?',
      answers: [
        
        { text: 'Mars', correct: false },
        { text: 'Earth', correct: false },
        { text: 'Saturn', correct: true },
        { text: 'Venus', correct: false }
      ]
    },

    {
      question: 'What is the chemical symbol of Gold?',
      answers: [
        
        { text: 'Ag', correct: false },
        { text: 'Au', correct: true },
        { text: 'Go', correct: false },
        { text: 'Gd', correct: false }
      ]
    },

    {
      question: 'Which vitamin is obtained from sunlight?',
      answers: [
        { text: 'Vitamin D', correct: true },
        { text: 'Vitamin A', correct: false },
        { text: 'Vitamin B', correct: false },
        { text: 'Vitamin C', correct: false }
      ]
    },

    {
      question: 'Which blood group is known as universal donor?',
      answers: [
        
        { text: 'AB Positive', correct: false },
        { text: 'A Positive', correct: false },
        { text: 'B Positive', correct: false },
        { text: 'O Negative', correct: true }
      ]
    },

    {
      question: 'Earth revolves around which star?',
      answers: [
       
        { text: 'Moon', correct: false },
        { text: 'Mars', correct: false },
         { text: 'Sun', correct: true },
        { text: 'Jupiter', correct: false }
      ]
    },

    {
      question: 'Which part of plant conducts photosynthesis?',
      answers: [
        
        { text: 'Root', correct: false },
        { text: 'Leaf', correct: true },
        { text: 'Stem', correct: false },
        { text: 'Flower', correct: false }
      ]
    },

    {
      question: 'What is the boiling point of water?',
      answers: [
        { text: '50°C', correct: false },
        { text: '100°C', correct: true },
        { text: '80°C', correct: false },
        { text: '120°C', correct: false }
      ]
    },

    {
      question: 'Which gas is responsible for global warming?',
      answers: [
        { text: 'Carbon Dioxide', correct: true },
        { text: 'Oxygen', correct: false },
        { text: 'Hydrogen', correct: false },
        { text: 'Helium', correct: false }
      ]
    },

    {
      question: 'Which scientist discovered gravity?',
      answers: [
        { text: 'Albert Einstein', correct: false },
        { text: 'Isaac Newton', correct: true },
        { text: 'Galileo', correct: false },
        { text: 'Nikola Tesla', correct: false }
      ]
    },

    {
      question: 'Which is the largest organ in the human body?',
      answers: [
        { text: 'Heart', correct: false },
        { text: 'Liver', correct: false },
        { text: 'Brain', correct: false },
        { text: 'Skin', correct: true }
      ]
    },

    {
      question: 'Which planet is closest to the Sun?',
      answers: [
        { text: 'Mercury', correct: true },
        { text: 'Venus', correct: false },
        { text: 'Earth', correct: false },
        { text: 'Mars', correct: false }
      ]
    },

    {
      question: 'What is the SI unit of force?',
      answers: [
        { text: 'Joule', correct: false },
        { text: 'Watt', correct: false },
        { text: 'Newton', correct: true },
        { text: 'Pascal', correct: false }
      ]
    },

    {
      question: 'Which gas do plants absorb from atmosphere?',
      answers: [
        { text: 'Oxygen', correct: false },
        { text: 'Carbon Dioxide', correct: true },
        { text: 'Nitrogen', correct: false },
        { text: 'Hydrogen', correct: false }
      ]
    },

    {
      question: 'What is the center of an atom called?',
      answers: [
        { text: 'Electron', correct: false },
        { text: 'Proton', correct: false },
        { text: 'Neutron', correct: false },
        { text: 'Nucleus', correct: true }
      ]
    },

    {
      question: 'Which instrument is used to measure temperature?',
      answers: [
        { text: 'Barometer', correct: false },
        { text: 'Speedometer', correct: false },
        { text: 'Thermometer', correct: true },
        { text: 'Altimeter', correct: false }
      ]
    },

    {
      question: 'Which metal is liquid at room temperature?',
      answers: [
        { text: 'Mercury', correct: true },
        { text: 'Iron', correct: false },
        { text: 'Gold', correct: false },
        { text: 'Silver', correct: false }
      ]
    },

    {
      question: 'Which gas is most abundant in Earth atmosphere?',
      answers: [
        { text: 'Oxygen', correct: false },
        { text: 'Carbon Dioxide', correct: false },
        { text: 'Hydrogen', correct: false },
        { text: 'Nitrogen', correct: true }
      ]
    },

    {
      question: 'What is the hardest natural substance?',
      answers: [
        { text: 'Iron', correct: false },
        { text: 'Gold', correct: false },
        { text: 'Diamond', correct: true },
        { text: 'Silver', correct: false }
      ]
    },

    {
      question: 'Which organ helps humans breathe?',
      answers: [
        { text: 'Heart', correct: false },
        { text: 'Kidney', correct: false },
        { text: 'Lungs', correct: true },
        { text: 'Liver', correct: false }
      ]
    },

    {
      question: 'Which planet is known as Earth twin?',
      answers: [
        { text: 'Mars', correct: false },
        { text: 'Venus', correct: true },
        { text: 'Mercury', correct: false },
        { text: 'Saturn', correct: false }
      ]
    },

    {
      question: 'Which scientist developed theory of relativity?',
      answers: [
        { text: 'Newton', correct: false },
        { text: 'Galileo', correct: false },
        { text: 'Albert Einstein', correct: true },
        { text: 'Tesla', correct: false }
      ]
    },

    {
      question: 'What is the SI unit of energy?',
      answers: [
        { text: 'Joule', correct: true },
        { text: 'Newton', correct: false },
        { text: 'Pascal', correct: false },
        { text: 'Watt', correct: false }
      ]
    },

    {
      question: 'Which layer protects Earth from UV rays?',
      answers: [
        { text: 'Troposphere', correct: false },
        { text: 'Ozone Layer', correct: true },
        { text: 'Mesosphere', correct: false },
        { text: 'Ionosphere', correct: false }
      ]
    },

    {
      question: 'Which force keeps planets around the Sun?',
      answers: [
        { text: 'Gravitational Force', correct: true },
        { text: 'Magnetic Force', correct: false },
        { text: 'Frictional Force', correct: false },
        { text: 'Electrostatic Force', correct: false }
      ]
    },
  ]

};


// ================================
// GLOBAL VARIABLES
// ================================

let selectedQuizType = "gk";

let questions = [];

let currentQuestion = 0;

let score = 0;

let timer;

let timeLeft = 15;


// ================================
// HIDE EVERYTHING
// ================================

function hideEverything() {

  // HIDE ALL INFO SECTIONS

  const sections =
    document.querySelectorAll(".info-section");

  sections.forEach(section => {

    section.classList.add("hidden");
  });

  // HIDE QUIZ

  document.getElementById("quizBox")
    .classList.add("hidden");

  // HIDE RESULT BOX

  document.getElementById("resultBox")
    .classList.add("hidden");

  // HIDE DASHBOARD

  document.getElementById("dashboard")
    .classList.add("hidden");

  // HIDE LOGIN PAGE

  document.getElementById("loginPage")
    .classList.add("hidden");

  // HIDE SIGNUP PAGE

  document.getElementById("signupPage")
    .classList.add("hidden");
}


// ================================
// OPEN LOGIN PAGE
// ================================

function openLoginPage() {

  hideEverything();

  document.getElementById("loginPage")
    .classList.remove("hidden");
}


// ================================
// OPEN SIGNUP PAGE
// ================================

function openSignupPage() {

  hideEverything();

  document.getElementById("signupPage")
    .classList.remove("hidden");
}


// ================================
// SHOW WEBSITE SECTION
// ================================

function showSection(id) {

  hideEverything();

  document.getElementById(id)
    .classList.remove("hidden");
}


// ================================
// HOME BUTTON
// ================================

function goHome() {

  hideEverything();

  window.scrollTo({

    top: 0,

    behavior: "smooth"
  });
}


// ================================
// SIGNUP
// ================================

function signup() {

  let username =
    document.getElementById("signupUser").value;

  let password =
    document.getElementById("signupPass").value;

  if (username === "" || password === "") {

    alert("Please fill all fields");

    return;
  }

  // CHECK USER EXISTS

  if (localStorage.getItem(username)) {

    alert("Username already exists");

    return;
  }

  // CREATE USER

  const user = {

    username: username,

    password: password
  };

  // SAVE USER

  localStorage.setItem(

    username,

    JSON.stringify(user)
  );

  alert("Account Created Successfully");

  // CLEAR FIELDS

  document.getElementById("signupUser").value = "";

  document.getElementById("signupPass").value = "";

  // OPEN LOGIN PAGE

  openLoginPage();
}


// ================================
// LOGIN
// ================================

function login() {

  let username =
    document.getElementById("loginUser").value;

  let password =
    document.getElementById("loginPass").value;

  let storedUser =
    localStorage.getItem(username);

  // USER NOT FOUND

  if (storedUser === null) {

    alert("User not found");

    return;
  }

  let user =
    JSON.parse(storedUser);

  // PASSWORD CHECK

  if (user.password === password) {

    alert("Login Successful");

    // SAVE LOGIN SESSION

    localStorage.setItem(

      "loggedInUser",

      username
    );

    // SHOW DASHBOARD

    hideEverything();

    document.getElementById("dashboard")
      .classList.remove("hidden");

    // WELCOME TEXT

    document.getElementById("welcome")
      .innerText =
      `Welcome ${username}`;

  } else {

    alert("Wrong Password");
  }
}


// ================================
// LOGOUT
// ================================

function logout() {

  localStorage.removeItem("loggedInUser");

  location.reload();
}


// =====================================
// SELECT QUIZ
// LOGIN REQUIRED
// =====================================

function selectQuiz(type) {

  // CHECK USER LOGIN

  const loggedUser =
    localStorage.getItem('loggedInUser');

  // IF NOT LOGGED IN

  if (!loggedUser) {

    alert(
      'Please login first to play quiz'
    );

    // OPEN LOGIN PAGE

    openLoginPage();

    return;
  }

  // QUIZ CATEGORY

  selectedQuizType = type;

  // START QUIZ

  startQuiz();
}

// ================================
// START QUIZ
// ================================

function startQuiz() {

  hideEverything();

  questions =
    quizData[selectedQuizType];

  currentQuestion = 0;

  score = 0;

  timeLeft = 1800;

  document.getElementById("quizBox")
    .classList.remove("hidden");

  showQuestion();

  clearInterval(timer);

  timer = setInterval(updateTimer, 1000);
}


// ================================
// SHOW QUESTION
// ================================

function showQuestion() {

  const questionData =
    questions[currentQuestion];

  document.getElementById("question")
    .innerText =
    questionData.question;

  const answersBox =
    document.getElementById("answers");

  answersBox.innerHTML = "";

  questionData.answers.forEach(answer => {

    const button =
      document.createElement("button");

    button.innerText =
      answer.text;

    button.onclick = () =>
      selectAnswer(answer.correct);

    answersBox.appendChild(button);
  });
}


// ================================
// SELECT ANSWER
// ================================

function selectAnswer(correct) {

  if (correct) {

    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {

    showQuestion();

  } else {

    finishQuiz();
  }
}


// ================================
// TIMER
// ================================

// =====================================
// UPDATE TIMER
// =====================================

function updateTimer() {

  // CALCULATE MINUTES

  let minutes =
    Math.floor(timeLeft / 60);

  // CALCULATE SECONDS

  let seconds =
    timeLeft % 60;

  // FORMAT TIME

  seconds =
    seconds < 10
      ? '0' + seconds
      : seconds;

  // SHOW TIMER

  document.getElementById('timer')
    .innerText =
    `Time Left: ${minutes}:${seconds}`;

  // TIME END

  if (timeLeft <= 0) {

    finishQuiz();

    return;
  }

  // REDUCE TIME

  timeLeft--;
}


// ================================
// FINISH QUIZ
// ================================

function finishQuiz() {

  clearInterval(timer);

  hideEverything();

  document.getElementById("resultBox")
    .classList.remove("hidden");

  document.getElementById("score")
    .innerText =
    `Your Score: ${score}/${questions.length}`;

  // SAVE RESULT

  const loggedUser =
    localStorage.getItem("loggedInUser");

  let results =
    JSON.parse(localStorage.getItem("quizResults"))
    || [];

  const newResult = {

    user: loggedUser,

    score: score,

    total: questions.length,

    category: selectedQuizType,

    date: new Date().toLocaleString()
  };

  results.push(newResult);

  localStorage.setItem(

    "quizResults",

    JSON.stringify(results)
  );

  showRecentResults();
}


// ================================
// SHOW RECENT RESULTS
// ================================

function showRecentResults() {

  let results =
    JSON.parse(localStorage.getItem("quizResults"))
    || [];

  const resultSection =
    document.getElementById("resultSection");

  resultSection.innerHTML = `

    <h1>Recent Quiz Results</h1>

  `;

  if (results.length === 0) {

    resultSection.innerHTML += `

      <p>No Quiz Played Yet</p>

    `;

    return;
  }

  results.reverse().forEach(result => {

    resultSection.innerHTML += `

      <div class="result-card">

        <h3>User: ${result.user}</h3>

        <p>Quiz: ${result.category}</p>

        <p>Score: ${result.score}/${result.total}</p>

        <p>Date: ${result.date}</p>

      </div>

    `;
  });
}


// ================================
// RESTART QUIZ
// ================================

function restart() {

  hideEverything();

  document.getElementById("dashboard")
    .classList.remove("hidden");
}


// ================================
// FEEDBACK
// ================================

function submitFeedback() {

  alert("Thank You For Your Feedback");
}


// ================================
// LOAD RESULTS
// ================================

showRecentResults();

// =====================================
// OPEN RESULTS
// LOGIN REQUIRED
// =====================================

function openResults() {

  // CHECK LOGIN

  const loggedUser =
    localStorage.getItem('loggedInUser');

  // USER NOT LOGGED IN

  if (!loggedUser) {

    alert(
      'Please login first to view results'
    );

    // OPEN LOGIN PAGE

    openLoginPage();

    return;
  }

  // SHOW RESULT SECTION

  showSection('resultSection');
}

