import {
  animalQuestion,
  difficultyLevel,
  modalHeader,
  questionAmount,
  questionWarper,
  shuffleArray,
  submitAnswers,
  mythologyQuestion,
  animeQuestion,
  gadgetsQuestion,
  comicsQuestion,
  vehiclesQuestion,
  politicsQuestion,
  artQuestion,
  celebrityQuestion,
  cartoonQuestion,
  historyQuestion,
  geographyQuestion,
  sportsQuestion,
  mathematicsQuestion,
  computersQuestion,
  scienceQuestion,
  boardgameQuestion,
  videogamesQuestion,
  theatersQuestion,
  musicQuestion,
  movieQuestion,
  televisionShowQuestion,
  booksQuestion,
  generalKnowledgeQuestion,
  anyCategoryQuestion,
  dailyTask,
} from "./domUtils.js"

// * DOMContentLoaded Start
document.addEventListener("DOMContentLoaded", () => {
  // Animal Question Start //!1
  animalQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=27&difficulty=${difficultyLevel}`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                <ul class="items-center w-full text-sm font-medium text-white bg-greenretro border-4 border-black sm:flex">
                  ${possibleAnswer.map((answer, i) => `
                    <li class="w-full border-b border-black sm:border-b-0">
                      <div class="flex items-center ps-3">
                        <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                        <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                      </div>
                    </li>
                  `).join('')}
                </ul>
                <!-- Multiple CheckBox End -->
              </li>
            </ul>
          </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });
      })
  })
  // * Animal Question End

  // mythologyQuestion Start //!2
  mythologyQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=20`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                <ul class="items-center w-full text-sm font-medium text-black bg-grayretro border-4 border-black sm:flex">
                  ${possibleAnswer.map((answer, i) => `
                    <li class="w-full border-b border-black sm:border-b-0 ">
                      <div class="flex items-center ps-3">
                        <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                        <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                      </div>
                    </li>
                  `).join('')}
                </ul>
                <!-- Multiple CheckBox End -->
              </li>
            </ul>
          </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });
      })
  })

  // mythologyQuestion End

  // celebrityQuestion Start //!3
  celebrityQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=26`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                <ul class="items-center w-full text-sm font-medium text-black bg-yellowretro border-4 border-black sm:flex">
                  ${possibleAnswer.map((answer, i) => `
                    <li class="w-full border-b border-black sm:border-b-0">
                      <div class="flex items-center ps-3">
                        <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                        <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                      </div>
                    </li>
                  `).join('')}
                </ul>
                <!-- Multiple CheckBox End -->
              </li>
            </ul>
          </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // celebrityQuestion End

  // artQuestion Start //!4
  artQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=25`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                  ${possibleAnswer.map((answer, i) => `
                    <li class="w-full border-b border-black sm:border-b-0">
                      <div class="flex items-center ps-3">
                        <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                        <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                      </div>
                    </li>
                  `).join('')}
                </ul>
                <!-- Multiple CheckBox End -->
              </li>
            </ul>
          </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // artQuestion End

  // politicsQuestion Start //!5
  politicsQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=24`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                  ${possibleAnswer.map((answer, i) => `
                    <li class="w-full border-b border-black sm:border-b-0">
                      <div class="flex items-center ps-3">
                        <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                        <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                      </div>
                    </li>
                  `).join('')}
                </ul>
                <!-- Multiple CheckBox End -->
              </li>
            </ul>
          </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // politicsQuestion End

  // vehiclesQuestion Start //!6
  vehiclesQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=28`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                  <ul class="items-center w-full text-sm font-medium text-black bg-yellowretro border-4 border-black sm:flex">
                    ${possibleAnswer.map((answer, i) => `
                      <li class="w-full border-b border-black sm:border-b-0">
                        <div class="flex items-center ps-3">
                          <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                          <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                        </div>
                      </li>
                    `).join('')}
                  </ul>
                  <!-- Multiple CheckBox End -->
                </li>
              </ul>
            </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // vehiclesQuestion End

  // comicsQuestion Start //!7
  comicsQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=29`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                      ${possibleAnswer.map((answer, i) => `
                        <li class="w-full border-b border-black sm:border-b-0">
                          <div class="flex items-center ps-3">
                            <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                            <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                          </div>
                        </li>
                      `).join('')}
                    </ul>
                    <!-- Multiple CheckBox End -->
                  </li>
                </ul>
              </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // comicsQuestion End


  // gadgetsQuestion Start //!8
  gadgetsQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=30`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                      ${possibleAnswer.map((answer, i) => `
                        <li class="w-full border-b border-black sm:border-b-0">
                          <div class="flex items-center ps-3">
                            <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                            <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                          </div>
                        </li>
                      `).join('')}
                    </ul>
                    <!-- Multiple CheckBox End -->
                  </li>
                </ul>
              </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // gadgetsQuestion End

  // animeQuestion Start //!9
  animeQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=31`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                      <ul class="items-center w-full text-sm font-medium text-black bg-yellowretro border-4 border-black sm:flex">
                        ${possibleAnswer.map((answer, i) => `
                          <li class="w-full border-b border-black sm:border-b-0">
                            <div class="flex items-center ps-3">
                              <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                              <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                            </div>
                          </li>
                        `).join('')}
                      </ul>
                      <!-- Multiple CheckBox End -->
                    </li>
                  </ul>
                </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // animeQuestion End

  // cartoonQuestion Start //!10
  cartoonQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=32`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                          ${possibleAnswer.map((answer, i) => `
                            <li class="w-full border-b border-black sm:border-b-0">
                              <div class="flex items-center ps-3">
                                <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                              </div>
                            </li>
                          `).join('')}
                        </ul>
                        <!-- Multiple CheckBox End -->
                      </li>
                    </ul>
                  </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // cartoonQuestion End

  // historyQuestion Start //!11
  historyQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=23`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                      ${possibleAnswer.map((answer, i) => `
                        <li class="w-full border-b border-black sm:border-b-0">
                          <div class="flex items-center ps-3">
                            <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                            <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                          </div>
                        </li>
                      `).join('')}
                    </ul>
                    <!-- Multiple CheckBox End -->
                  </li>
                </ul>
              </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // historyQuestion End

  // geographyQuestion Start //!12
  geographyQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=22`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                        <ul class="items-center w-full text-sm font-medium text-black bg-yellowretro border-4 border-black sm:flex">
                          ${possibleAnswer.map((answer, i) => `
                            <li class="w-full border-b border-black sm:border-b-0">
                              <div class="flex items-center ps-3">
                                <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                              </div>
                            </li>
                          `).join('')}
                        </ul>
                        <!-- Multiple CheckBox End -->
                      </li>
                    </ul>
                  </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // geographyQuestion End

  // sportsQuestion Start //!13
  sportsQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=21`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                            ${possibleAnswer.map((answer, i) => `
                              <li class="w-full border-b border-black sm:border-b-0">
                                <div class="flex items-center ps-3">
                                  <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                  <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                </div>
                              </li>
                            `).join('')}
                          </ul>
                          <!-- Multiple CheckBox End -->
                        </li>
                      </ul>
                    </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // sportsQuestion End

  // mathematicsQuestion Start //!14
  mathematicsQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=19`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                        ${possibleAnswer.map((answer, i) => `
                          <li class="w-full border-b border-black sm:border-b-0">
                            <div class="flex items-center ps-3">
                              <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                              <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                            </div>
                          </li>
                        `).join('')}
                      </ul>
                      <!-- Multiple CheckBox End -->
                    </li>
                  </ul>
                </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // mathematicsQuestion End


  // computersQuestion Start //!15
  computersQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=18`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                        <ul class="items-center w-full text-sm font-medium text-black bg-yellowretro border-4 border-black sm:flex">
                          ${possibleAnswer.map((answer, i) => `
                            <li class="w-full border-b border-black sm:border-b-0">
                              <div class="flex items-center ps-3">
                                <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                              </div>
                            </li>
                          `).join('')}
                        </ul>
                        <!-- Multiple CheckBox End -->
                      </li>
                    </ul>
                  </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // computersQuestion End

  // scienceQuestion Start //!16
  scienceQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=17`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                              ${possibleAnswer.map((answer, i) => `
                                <li class="w-full border-b border-black sm:border-b-0">
                                  <div class="flex items-center ps-3">
                                    <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                    <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                  </div>
                                </li>
                              `).join('')}
                            </ul>
                            <!-- Multiple CheckBox End -->
                          </li>
                        </ul>
                      </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // scienceQuestion End

  // boardgameQuestion Start //!17
  boardgameQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=16`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                          ${possibleAnswer.map((answer, i) => `
                            <li class="w-full border-b border-black sm:border-b-0">
                              <div class="flex items-center ps-3">
                                <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                              </div>
                            </li>
                          `).join('')}
                        </ul>
                        <!-- Multiple CheckBox End -->
                      </li>
                    </ul>
                  </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // boardgameQuestion End

  // videogamesQuestion Start //!18
  videogamesQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=15`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                          <ul class="items-center w-full text-sm font-medium text-black bg-yellowretro border-4 border-black sm:flex">
                            ${possibleAnswer.map((answer, i) => `
                              <li class="w-full border-b border-black sm:border-b-0">
                                <div class="flex items-center ps-3">
                                  <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                  <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                </div>
                              </li>
                            `).join('')}
                          </ul>
                          <!-- Multiple CheckBox End -->
                        </li>
                      </ul>
                    </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // videogamesQuestion End


  // theatersQuestion Start //!19
  theatersQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=13`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                              ${possibleAnswer.map((answer, i) => `
                                <li class="w-full border-b border-black sm:border-b-0">
                                  <div class="flex items-center ps-3">
                                    <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                    <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                  </div>
                                </li>
                              `).join('')}
                            </ul>
                            <!-- Multiple CheckBox End -->
                          </li>
                        </ul>
                      </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // theatersQuestion End

  // musicQuestion Start //!20
  musicQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=12`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                            ${possibleAnswer.map((answer, i) => `
                              <li class="w-full border-b border-black sm:border-b-0">
                                <div class="flex items-center ps-3">
                                  <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                  <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                </div>
                              </li>
                            `).join('')}
                          </ul>
                          <!-- Multiple CheckBox End -->
                        </li>
                      </ul>
                    </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // musicQuestion End

  // movieQuestion Start //!21
  movieQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=11`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                            <ul class="items-center w-full text-sm font-medium text-black bg-yellowretro border-4 border-black sm:flex">
                              ${possibleAnswer.map((answer, i) => `
                                <li class="w-full border-b border-black sm:border-b-0">
                                  <div class="flex items-center ps-3">
                                    <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                    <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                  </div>
                                </li>
                              `).join('')}
                            </ul>
                            <!-- Multiple CheckBox End -->
                          </li>
                        </ul>
                      </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // movieQuestion End


  // televisionShowQuestion Start //!22
  televisionShowQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=14`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                              ${possibleAnswer.map((answer, i) => `
                                <li class="w-full border-b border-black sm:border-b-0">
                                  <div class="flex items-center ps-3">
                                    <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                    <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                  </div>
                                </li>
                              `).join('')}
                            </ul>
                            <!-- Multiple CheckBox End -->
                          </li>
                        </ul>
                      </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // televisionShowQuestion End


  // booksQuestion Start //!23
  booksQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=10`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                            ${possibleAnswer.map((answer, i) => `
                              <li class="w-full border-b border-black sm:border-b-0">
                                <div class="flex items-center ps-3">
                                  <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                  <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                </div>
                              </li>
                            `).join('')}
                          </ul>
                          <!-- Multiple CheckBox End -->
                        </li>
                      </ul>
                    </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // booksQuestion End

  // generalKnowledgeQuestion Start //!24
  generalKnowledgeQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}&category=9`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                              <ul class="items-center w-full text-sm font-medium text-black bg-yellowretro border-4 border-black sm:flex">
                                ${possibleAnswer.map((answer, i) => `
                                  <li class="w-full border-b border-black sm:border-b-0">
                                    <div class="flex items-center ps-3">
                                      <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                      <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                    </div>
                                  </li>
                                `).join('')}
                              </ul>
                              <!-- Multiple CheckBox End -->
                            </li>
                          </ul>
                        </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // generalKnowledgeQuestion End

  // anyCategoryQuestion Start //!25
  anyCategoryQuestion.addEventListener("click", () => {
    // const questionAmountValue = questionAmount.value
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionAmount.value}`;
    const option = { method: "GET", headers: { accept: "application/json" } };

    fetch(apiEndpoint, option)
      .then((response) => response.json())
      .then((data) => {
        modalHeader.innerHTML = data.results[0].category
        questionWarper.innerHTML = ""

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
                                ${possibleAnswer.map((answer, i) => `
                                  <li class="w-full border-b border-black sm:border-b-0">
                                    <div class="flex items-center ps-3">
                                      <input id="horizontal-list-radio-${index}-${i}" type="radio" value="${answer}" name="list-radio-${index}" class="w-4 h-4 bg-gray-100 border-black">
                                      <label for="horizontal-list-radio-${index}-${i}" class="w-full py-3 ms-2 text-sm font-medium">${answer}</label>
                                    </div>
                                  </li>
                                `).join('')}
                              </ul>
                              <!-- Multiple CheckBox End -->
                            </li>
                          </ul>
                        </li>`;
        }

        submitAnswers.addEventListener("click", () => {
          const answersBox = document.querySelectorAll(".answersBox");

          answersBox.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="list-radio-${index}"]:checked`);

            if (selectedAnswer) {
              if (selectedAnswer.value === data.results[index].correct_answer) {
                question.classList.add('true-checkbox');
                question.classList.remove('false-checkbox');
              } else {
                question.classList.add('false-checkbox');
                question.classList.remove('true-checkbox');
              }
            } else {
              // No answer selected
              question.classList.add('no-answer');
            }
          });
        });

      })
  })

  // anyCategoryQuestion End

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

  



}) // * DOMContentLoaded End

