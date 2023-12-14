function goToNextPage(nextPage)
{
	window.location.href = nextPage;
	location.replace(nextPage);
}

/*//https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript*/
/*https://poe.com/s/rV7gYUlbjGhuF2sNeKkn*/
/*https://www.youtube.com/watch?v=QU6z69P5BrU&ab_channel=TheWebShala*/

const questions = [
    {
        question: "Where do macaws mainly live?",
        options: ["Rainforests", "Deserts", "Grasslands", "Tundra"],
        answer: 0,
        additionalInfo: "Hyacinth macaws inhabit regions of Brazil, eastern Bolivia, and northeastern Paraguay. Unlike many other parrots that favor dense tropical rainforests, hyacinth macaws are often found in lightly forested areas like palm swamps and flooded grasslands. The Pantanal region in Brazil is particularly significant as it supports a substantial portion of the hyacinth macaw population. <br>",
		imageContainer: '<img id="macaw1" src="macaw1.jpeg" alt="macaw1"> <br>'
    },
    {
        question: "Which of the listed is NOT a type of macaw?",
        options: ["Scarlet", "African Grey", "Green-winged", "Blue-and-Gold"],
        answer: 1,
        additionalInfo: "The jaguar god held a significant place in the religious beliefs of various major Mesoamerican civilizations, primarily as the god Olmec. Those who lived near the tropical jungle and rainforest had the jaguar as a main part of their religion and it was incorporated into their daily routines.  <br>",
		imageContainer: '<img id="macaw2" src="macaw2.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "What is a macaw's diet primarily composed of?",
        options: ["Seeds and nuts", "Fruits and berries", "Insects and small animals", " Fish and crustaceans"],
        answer: 1,
        additionalInfo: "Macaws primarily feed on fruits and berries found in the rainforest. These provide essential nutrients and contribute to their vibrant plumage. They require a higher level of fat than many other bird species and consume more nuts as part of their diet in the wild. What they eat varies with food availability during different seasons. <br>",
		imageContainer: '<img id="macaw3" src="macaw3.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "Which of the following statements is true about macaw feathers?",
        options: ["They are always blue.", "They are naturally black.", "They have vibrant and varied colors.", "They are colorless."],
        answer: 2,
        additionalInfo: "Macaw feathers exhibit a wide range of vibrant colors, including red, blue, green, and yellow, making them highly prized in the pet trade and among collectors. Specifically, hyacinth macaws are predominantly of deep cobalt blue and have small patches of yellow. <br>",
		imageContainer: '<img id="macaw4" src="macaw4.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "How do macaws communicate with each other?",
        options: ["Vocalizations and mimicry", "Visual displays and dances", "Pheromone release", "Telepathy"],
        answer: 0,
        additionalInfo: " Macaws communicate through various vocalizations, including squawks, screams, and mimicry of other bird calls, which are important for social interaction and territorial defense.Macaws vocalize to communicate within the flock, mark territory, and identify one another. Some species can even mimic human speech.  <br>",
		imageContainer: '<img id="macaw5" src="macaw5.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "Which of the following is a threat to macaw populations?",
        options: ["Habitat destruction", "Overhunting for the pet trade", "Climate change", "All of the above"],
        answer: 3,
        additionalInfo: "Macaws face multiple threats, including habitat destruction due to deforestation, overhunting for the pet trade, and the impacts of climate change on their ecosystems. The threatened rainforests of South America are being cut down at an alarming rate to make way for agriculture. This is a serious threat to the future survival of all macaws. <br>",
		imageContainer: '<img id="macaw6" src="macaw6.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "How long can macaws live in captivity?",
        options: ["Up to 10 years", "Up to 30 years", "Up to 50 years", "Up to 80 years"],
        answer: 2,
        additionalInfo: "Macaws can live up to 50 years in captivity with proper care and nutrition. Some individuals have been known to live even longer with exceptional conditions. Providing a stimulating environment, a balanced diet, regular veterinary care, and social interaction are essential for maximizing their lifespan in captivity.  <br>",
		imageContainer: '<img id="macaw7" src="macaw7.jpeg" alt="mesoamerican"> <br>'
    },
    {
        question: "What is the largest species of macaw?",
        options: ["Hyacinth Macaw", "Blue-throated Macaw", "Military Macaw", "Red-fronted Macaw"],
        answer: 0,
        additionalInfo: "The Hyacinth Macaw (Anodorhynchus hyacinthinus) is the largest species of macaw, with a wingspan of up to 4 feet and a length of around 3.3 feet. Hyacinth macaws reach a maximum of 1.7 kilograms (3 lb 12 oz). <br>",
		imageContainer: '<img id="macaw8" src="macaw8.png" alt="mesoamerican"> <br>'
    },
]


function checkAnswer(index, idx)
{
	console.log("result" + idx);
	document.getElementById("result" + idx).innerHTML = "";
	let array = document.getElementsByName("radio" + idx);
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				console.log("array_val=" + array[i].value);
				console.log("questions.answer=" + questions[index].options[questions[index].answer]);
				if (array[i].value==questions[index].options[questions[index].answer])
				{
                    document.getElementById("result" + idx).innerHTML =  '<h4 style="color:green;">Correct! <br></h4>';
                    document.getElementById("additionalInfo" + idx).innerHTML = questions[index].additionalInfo;
                    document.getElementById("imageContainer" + idx).innerHTML = questions[index].imageContainer;
                    //document.getElementById("image" + idx).innerHTML = questions[index].image;
				} else {
					document.getElementById("result" + idx).innerHTML =  '<h4 style="color:red;">Incorrect :( <br></h4>';
					document.getElementById("additionalInfo" + idx).innerHTML = null;
					document.getElementById("imageContainer" + idx).innerHTML =  null;
                    //document.getElementById("image" + idx).innerHTML = null;
				}
				i=array.length;
			}
		}
	}
}

function checkAllAnswers()
{
	checkAnswer(randomIndex1, 1);
	checkAnswer(randomIndex2, 2);
}

function addQuestions()
{
   var newArr = [1,2,3,4,5,6,7,8];
   randomIndex1 = Math.floor(Math.random() * questions.length);
   randomIndex2 = Math.floor(Math.random() * questions.length);
   
   //console.log(document.getElementById("question1").getElementsByTagName("b")[0].innerHTML);
   while (randomIndex1 == randomIndex2)
    {
        randomIndex2 = Math.floor(Math.random() * questions.length);
    }
    
    if (randomIndex1 > randomIndex2) {
		let temp = randomIndex1;
		randomIndex1 = randomIndex2;
		randomIndex2 = temp; 
	}
	
    console.log("r1 = " + randomIndex1 );
    console.log("r2 = " + randomIndex2);
  
	document.getElementById("question1").getElementsByTagName("b")[0].innerHTML = questions[randomIndex1].question;
	document.getElementById("question2").getElementsByTagName("b")[0].innerHTML = questions[randomIndex2].question;
	
	let radioButtons1 = document.getElementsByName("radio1");
	let radioButtons1Text = document.getElementById("question1").getElementsByTagName("label");
	for (let i=0; i<radioButtons1.length; i++)
	{
		radioButtons1[i].value = questions[randomIndex1].options[i];
		radioButtons1Text[i].innerHTML = questions[randomIndex1].options[i];
	}
	
	let radioButtons2 = document.getElementsByName("radio2");
	let radioButtons2Text = document.getElementById("question2").getElementsByTagName("label");
	for (let i=0; i<radioButtons2.length; i++)
	{
		radioButtons2[i].value = questions[randomIndex2].options[i];
		radioButtons2Text[i].innerHTML = questions[randomIndex2].options[i];
	}
	
}

window.onload = function()
{
    addQuestions();
}