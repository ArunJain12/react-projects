import { useState } from "react";
import "./quiz.css";

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1931"],
        correctAnswer: "1912",
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Won", "Ringgit", "Baht"],
        correctAnswer: "Yen",
    },
    {
        question: "Which programming language is also a gem?",
        options: ["Ruby", "Python", "Java", "C++"],
        correctAnswer: "Ruby",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: "Canberra",
    },
];

  
function Quiz() {
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ score, setScore ] = useState(0);
    const [ selectedOptions, setSelectedOptions ] = useState(new Array(questions.length).fill(null));
    const [ result, setResult ] = useState(false);

    function handlePrevButton() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function handleNextButton() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateScore();
            setResult(true);
        }
    }

    function handleRestartQuiz() {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOptions(new Array(questions.length).fill(null));
        setResult(false);
    }

    function handleSelectedOption(option) {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestion] = option;
        setSelectedOptions(updatedSelectedOptions);
    }

    function calculateScore() {
        let totalScore = 0;
        selectedOptions.forEach((option, index) => {
            if (questions[index].correctAnswer === option) {
                totalScore++;
            }
        });
        setScore(totalScore);
    }
    // console.log({ selectedOptions });

    return (
        <div className="quiz-container">
            <h1>Quiz</h1>
            {!result ? (
                <div className="question-wrapper-container">
                    <h2>Question: {currentQuestion + 1}</h2>
                    <p>{questions[currentQuestion].question}</p>
                    <div className="options">
                        {questions[currentQuestion].options.map(optionItem => (
                            <button
                                key={optionItem}
                                className={`option ${
                                    selectedOptions[currentQuestion] === optionItem
                                    ? 'selected'
                                    : ''
                                }`}
                                onClick={() => handleSelectedOption(optionItem)}
                            >
                                {optionItem}
                            </button>
                        ))}
                    </div>
                    <div className="button-container">
                        <button
                            disabled={currentQuestion === 0}
                            className="prev-btn"
                            onClick={handlePrevButton}
                        >
                            Previous
                        </button>
                        <button className="next-btn" onClick={handleNextButton}>
                            {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="show-result-wrapper">
                    <h3>Quiz Completed</h3>
                    <p>Your Score: {score}</p>
                    <button className="restart-btn" onClick={handleRestartQuiz}>Restart Quiz</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;