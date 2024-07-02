import {
  dailyTask,
  defaultButton,
  questionWarper,
  shuffleArray,
  specialAnimals,
  specialMythology,
  specialVideoGames,
} from "./domUtils.js";

document.addEventListener("DOMContentLoaded", () => {
  //todo dailyTask Start
  dailyTask.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=20&difficulty=hard`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = "Daily Task";
        questionWarper.innerHTML = "";

        //^ Dynamically generates a list of questions with true or false radio buttons for each question.
        //^ @param {Object} data - The data object containing the questions and answers.

        for (let index = 0; index < data.results.length; index++) {
          let possibleAnswer = [];
          possibleAnswer.push(data.results[index].correct_answer);
          possibleAnswer.push(...data.results[index].incorrect_answers); // Add all incorrect answers
          possibleAnswer = shuffleArray(possibleAnswer);

          questionWarper.innerHTML += `<li>
                          ${data.results[index].question}
                          <ul class="ps-5 mt-2 space-y-1 list-inside">
                            <li class="answersBox">
                              <!-- Multiple CheckBox Start -->
                              <ul class="items-center w-full text-sm font-medium text-black bg-greenretro border-4 border-black sm:flex">
                                ${possibleAnswer
                                  .map(
                                    (answer, i) => `
                                  <li class="w-full border-b border-black sm:border-b-0">
                                    <div class="flex items-center ps-3">
                                      <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                      <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                    </div>
                                  </li>
                                `
                                  )
                                  .join("")}
                              </ul>
                              <!-- Multiple CheckBox End -->
                            </li>
                          </ul>
                        </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(
              `input[name="list-radio-${index}"]:checked`
            );

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add("true-checkbox");
                question.classList.remove("false-checkbox");
              } else {
                question.classList.add("false-checkbox");
                question.classList.remove("true-checkbox");
              }
            } else {
              // No answer selected
              question.classList.add("no-answer");
            }
          });
        });
      });
  });

  //todo dailyTask End

  //todo defaultButton Start
  defaultButton.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=10`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = "Random Questions";
        questionWarper.innerHTML = "";

        //^ Dynamically generates a list of questions with true or false radio buttons for each question.
        //^ @param {Object} data - The data object containing the questions and answers.

        for (let index = 0; index < data.results.length; index++) {
          let possibleAnswer = [];
          possibleAnswer.push(data.results[index].correct_answer);
          possibleAnswer.push(...data.results[index].incorrect_answers); // Add all incorrect answers
          possibleAnswer = shuffleArray(possibleAnswer);

          questionWarper.innerHTML += `<li>
                          ${data.results[index].question}
                          <ul class="ps-5 mt-2 space-y-1 list-inside">
                            <li class="answersBox">
                              <!-- Multiple CheckBox Start -->
                              <ul class="items-center w-full text-sm font-medium text-black bg-greenretro border-4 border-black sm:flex">
                                ${possibleAnswer
                                  .map(
                                    (answer, i) => `
                                  <li class="w-full border-b border-black sm:border-b-0">
                                    <div class="flex items-center ps-3">
                                      <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                      <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                    </div>
                                  </li>
                                `
                                  )
                                  .join("")}
                              </ul>
                              <!-- Multiple CheckBox End -->
                            </li>
                          </ul>
                        </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(
              `input[name="list-radio-${index}"]:checked`
            );

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add("true-checkbox");
                question.classList.remove("false-checkbox");
              } else {
                question.classList.add("false-checkbox");
                question.classList.remove("true-checkbox");
              }
            } else {
              // No answer selected
              question.classList.add("no-answer");
            }
          });
        });
      });
  });

  //todo defaultButton End

  //todo specialAnimals Start
  specialAnimals.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=13&category=27`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = "Random Questions About Animals";
        questionWarper.innerHTML = "";

        //^ Dynamically generates a list of questions with true or false radio buttons for each question.
        //^ @param {Object} data - The data object containing the questions and answers.

        for (let index = 0; index < data.results.length; index++) {
          let possibleAnswer = [];
          possibleAnswer.push(data.results[index].correct_answer);
          possibleAnswer.push(...data.results[index].incorrect_answers); // Add all incorrect answers
          possibleAnswer = shuffleArray(possibleAnswer);

          questionWarper.innerHTML += `<li>
                          ${data.results[index].question}
                          <ul class="ps-5 mt-2 space-y-1 list-inside">
                            <li class="answersBox">
                              <!-- Multiple CheckBox Start -->
                              <ul class="items-center w-full text-sm font-medium text-black bg-greenretro border-4 border-black sm:flex">
                                ${possibleAnswer
                                  .map(
                                    (answer, i) => `
                                  <li class="w-full border-b border-black sm:border-b-0">
                                    <div class="flex items-center ps-3">
                                      <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                      <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                    </div>
                                  </li>
                                `
                                  )
                                  .join("")}
                              </ul>
                              <!-- Multiple CheckBox End -->
                            </li>
                          </ul>
                        </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(
              `input[name="list-radio-${index}"]:checked`
            );

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add("true-checkbox");
                question.classList.remove("false-checkbox");
              } else {
                question.classList.add("false-checkbox");
                question.classList.remove("true-checkbox");
              }
            } else {
              // No answer selected
              question.classList.add("no-answer");
            }
          });
        });
      });
  });

  //todo specialAnimals End

  //todo specialMythology Start
  specialMythology.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=13&category=20`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = "Random Questions About Mythology";
        questionWarper.innerHTML = "";

        //^ Dynamically generates a list of questions with true or false radio buttons for each question.
        //^ @param {Object} data - The data object containing the questions and answers.

        for (let index = 0; index < data.results.length; index++) {
          let possibleAnswer = [];
          possibleAnswer.push(data.results[index].correct_answer);
          possibleAnswer.push(...data.results[index].incorrect_answers); // Add all incorrect answers
          possibleAnswer = shuffleArray(possibleAnswer);

          questionWarper.innerHTML += `<li>
                          ${data.results[index].question}
                          <ul class="ps-5 mt-2 space-y-1 list-inside">
                            <li class="answersBox">
                              <!-- Multiple CheckBox Start -->
                              <ul class="items-center w-full text-sm font-medium text-white bg-grayretro border-4 border-black sm:flex">
                                ${possibleAnswer
                                  .map(
                                    (answer, i) => `
                                  <li class="w-full border-b border-black sm:border-b-0">
                                    <div class="flex items-center ps-3">
                                      <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                      <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                    </div>
                                  </li>
                                `
                                  )
                                  .join("")}
                              </ul>
                              <!-- Multiple CheckBox End -->
                            </li>
                          </ul>
                        </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(
              `input[name="list-radio-${index}"]:checked`
            );

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add("true-checkbox");
                question.classList.remove("false-checkbox");
              } else {
                question.classList.add("false-checkbox");
                question.classList.remove("true-checkbox");
              }
            } else {
              // No answer selected
              question.classList.add("no-answer");
            }
          });
        });
      });
  });

  //todo specialMythology End

  //todo specialVideoGames Start
  specialVideoGames.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=13&category=15`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = "Random Questions About Video Games";
        questionWarper.innerHTML = "";

        //^ Dynamically generates a list of questions with true or false radio buttons for each question.
        //^ @param {Object} data - The data object containing the questions and answers.

        for (let index = 0; index < data.results.length; index++) {
          let possibleAnswer = [];
          possibleAnswer.push(data.results[index].correct_answer);
          possibleAnswer.push(...data.results[index].incorrect_answers); // Add all incorrect answers
          possibleAnswer = shuffleArray(possibleAnswer);

          questionWarper.innerHTML += `<li>
                            ${data.results[index].question}
                            <ul class="ps-5 mt-2 space-y-1 list-inside">
                              <li class="answersBox">
                                <!-- Multiple CheckBox Start -->
                                <ul class="items-center w-full text-sm font-medium text-black bg-greenretro border-4 border-black sm:flex">
                                  ${possibleAnswer
                                    .map(
                                      (answer, i) => `
                                    <li class="w-full border-b border-black sm:border-b-0">
                                      <div class="flex items-center ps-3">
                                        <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                        <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                      </div>
                                    </li>
                                  `
                                    )
                                    .join("")}
                                </ul>
                                <!-- Multiple CheckBox End -->
                              </li>
                            </ul>
                          </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(
              `input[name="list-radio-${index}"]:checked`
            );

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add("true-checkbox");
                question.classList.remove("false-checkbox");
              } else {
                question.classList.add("false-checkbox");
                question.classList.remove("true-checkbox");
              }
            } else {
              // No answer selected
              question.classList.add("no-answer");
            }
          });
        });
      });
  });

  //todo specialVideoGames End
});
