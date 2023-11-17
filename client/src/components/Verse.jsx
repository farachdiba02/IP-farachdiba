import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Verse = () => {
  const BASE_URL = "http://localhost:3000";
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const access_token = localStorage.getItem("access_token");
        const { data } = await axios.get(`${BASE_URL}/verse`, {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        });
        setQuizData(data.data.data);
        setUserAnswers(new Array(quizData.length).fill(-1));
      } catch (error) {
        console.log(error);
      }
    };
    fetchVerse();
  }, []);

  const handleAnswerSelection = (questionIndex, optionIndex) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[questionIndex] = optionIndex;
    setUserAnswers(updatedUserAnswers);
    setShowNextQuestion(true);
    setCurrentAnswer(quizData[questionIndex].options[optionIndex].value);
  };

  const handleNextQuestion = () => {
    if (currentAnswer <= 0) {
      Swal.fire({
        title: "Wrong Answer!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
    if (userAnswers[currentQuestionIndex] !== -1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowNextQuestion(false);
    }
  };

  const checkAnswerAndCalculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      const correctAnswerIndex = question.options.findIndex(
        (option) => option.value === 1
      );
      if (
        correctAnswerIndex !== -1 &&
        userAnswers[index] === correctAnswerIndex
      ) {
        score += 20;
      }
    });
    return score;
  };

  const handleSubmit = async () => {
    const totalScore = checkAnswerAndCalculateScore();
    //
    const access_token = localStorage.getItem("access_token");
    const { result } = await axios.patch(
      `${BASE_URL}/user-points`,
      {
        totalPoints: totalScore,
      },
      { headers: { authorization: `Bearer ${access_token}` } }
    );

    setShowScore(true);
    // console.log("Total Score:", totalScore);
    // navigate("/home");
  };

  return (
    <div className="bg-gray-300 flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
        {showScore ? (
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-lg font-semibold mb-4">
              Total Score: {checkAnswerAndCalculateScore()}
            </h2>
          </div>
        ) : (
          <div>
            {quizData.length > 0 && currentQuestionIndex < quizData.length && (
              <div
                className="bg-white shadow-md rounded-md p-6"
                key={currentQuestionIndex}
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {quizData[currentQuestionIndex].question}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {quizData[currentQuestionIndex].options.map(
                    (option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-gray-300 text-xl ${
                          userAnswers[currentQuestionIndex] === optionIndex
                            ? "bg-gray-300"
                            : ""
                        }`}
                        onClick={() =>
                          handleAnswerSelection(
                            currentQuestionIndex,
                            optionIndex
                          )
                        }
                      >
                        {option.text}
                      </button>
                    )
                  )}
                </div>
                {showNextQuestion && (
                  <div className="mt-4">
                    <button
                      onClick={handleNextQuestion}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-gray-300"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            )}
            {currentQuestionIndex === quizData.length && (
              <div className="mt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-gray-300"
                >
                  Finish
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Verse;
