document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-form');
    const quizResults = document.getElementById('quiz-results');
    function clearPreviousAnswers() {
        const questionListItems = document.querySelectorAll('#quiz-form li');
        questionListItems.forEach((item) => {
            const radioButtons = item.querySelectorAll('input[type="radio"]');
            radioButtons.forEach((radioButton) => {
                radioButton.checked = false;
            });
            item.style.color = 'black';
        });
    }

    clearPreviousAnswers();
    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Define the correct answers
        const correctAnswers = ['1959', 'PING Anser', 'USA', 'Viktor Hovland', 'Karsten Solheim'];

        // Get user's answers and check correctness
        let score = 0;
        let allQuestionsAnswered = true; // Track if all questions have been answered

        for (let i = 1; i <= 5; i++) {
            const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            const questionListItem = document.querySelector(`#quiz-form li:nth-child(${i})`);

            if (selectedAnswer) {
                if (selectedAnswer.value === correctAnswers[i - 1]) {
                    score++;
                    questionListItem.style.color = 'green'; // Correct answer is green
                } else {
                    questionListItem.style.color = 'red'; // Wrong answer is red
                }
            } else {
                questionListItem.style.color = 'black'; // Unanswered questions remain black
                allQuestionsAnswered = false;
            }
        }

        // Display the results or show an alert
        if (allQuestionsAnswered) {
            const resultText = `You scored ${score} out of 5.`;
            quizResults.textContent = resultText;
        } else {
            alert('Please answer all questions before submitting.');
            clearPreviousAnswers();
        }
    });
});

