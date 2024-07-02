const animalQuestion = document.getElementById("animalQuestion");
const mythologyQuestion = document.getElementById("mythologyQuestion");
const celebrityQuestion = document.getElementById("celebrityQuestion");
const artQuestion = document.getElementById("artQuestion");
const politicsQuestion = document.getElementById("politicsQuestion");
const vehiclesQuestion = document.getElementById("vehiclesQuestion");
const comicsQuestion = document.getElementById("comicsQuestion");
const gadgetsQuestion = document.getElementById("gadgetsQuestion");
const animeQuestion = document.getElementById("animeQuestion");
const cartoonQuestion = document.getElementById("cartoonQuestion");
const historyQuestion = document.getElementById("historyQuestion");
const geographyQuestion = document.getElementById("geographyQuestion");
const sportsQuestion = document.getElementById("sportsQuestion");
const mathematicsQuestion = document.getElementById("mathematicsQuestion");
const computersQuestion = document.getElementById("computersQuestion");
const scienceQuestion = document.getElementById("scienceQuestion");
const boardgameQuestion = document.getElementById("boardgameQuestion");
const videogamesQuestion = document.getElementById("videogamesQuestion");
const theatersQuestion = document.getElementById("theatersQuestion");
const musicQuestion = document.getElementById("musicQuestion");
const movieQuestion = document.getElementById("movieQuestion");
const televisionShowQuestion = document.getElementById("televisionShowQuestion");
const booksQuestion = document.getElementById("booksQuestion");
const generalKnowledgeQuestion = document.getElementById("generalKnowledgeQuestion");
const anyCategoryQuestion = document.getElementById("anyCategoryQuestion");
const dailyTask = document.getElementById("dailyTask");
const defaultButton = document.getElementById("defaultButton");
const specialAnimals = document.getElementById("specialAnimals")
const specialMythology = document.getElementById("specialMythology")
const specialVideoGames = document.getElementById("specialVideoGames")
const newsFeed = document.getElementsByClassName("newsFeed")
const modalHeader = document.getElementById("modalHeader");
const questionWarper = document.getElementById("questionWarper");
const questionAmount = document.getElementById("questionAmount");
const submitAnswers = document.getElementById("submitAnswers");
const difficulty = document.querySelectorAll(".difficulty");
let difficultyLevel = "easy"
difficulty.forEach(item => {
  item.addEventListener('click', () => {
    // Get the associated input element
    const input = item.querySelector('input');

    // Toggle the checkbox
    input.checked = !input.checked;

    // Get the value of the input element
    difficultyLevel = input.value;

  });
});



const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


export {
  animalQuestion,
  mythologyQuestion,
  celebrityQuestion,
  artQuestion,
  politicsQuestion,
  vehiclesQuestion,
  comicsQuestion,
  gadgetsQuestion,
  animeQuestion,
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
  modalHeader,
  questionWarper,
  questionAmount,
  shuffleArray,
  difficulty,
  difficultyLevel,
  submitAnswers,
  dailyTask,
  defaultButton,
  specialAnimals,
  specialMythology,
  specialVideoGames,
  newsFeed,
  
}