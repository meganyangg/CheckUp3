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
        question: "What is the primary diet of wombats?",
        options: ["Grass and roots", "Insects and small animals", "Berries and fruits", "Leaves and branches"],
        answer: 0,
        additionalInfo: "The primary diet of wombats consists of grasses, herbs, sedges, and roots. They are herbivorous marsupials that graze on vegetation found in their habitats, including grassy plains, woodlands, and forests. Wombats have specialized teeth and jaws adapted for grinding plant material, allowing them to efficiently extract nutrients from their plant-based diet.<br>",
		imageContainer: '<img id="wombat1" src="wombat1.jpeg" alt="wombat"> <br>'
    },
    {
        question: "Which family do wombats belong to?",
        options: ["Marsupial", "Rodent", "Carnivore", "Lagomorph"],
        answer: 0,
        additionalInfo: "Wombats belong to the marsupial order Diprotodontia, which includes other well-known marsupials such as kangaroos and koalas. Marsupials are characterized by giving birth to relatively undeveloped young, which then continue to develop and nurse in a pouch on the mother's abdomen. <br>",
		imageContainer: '<img id="wombat2" src="wombat2.jpeg" alt="wombat"> <br>'
    },
    {
        question: "What is the unique behavior exhibited by wombats when threatened by predators?",
        options: ["Climbing trees", "Digging burrows", "Hiding in bushes", "Rolling into a ball"],
        answer: 1,
        additionalInfo: "When threatened by predators, wombats exhibit a unique behavior called 'barracking' or 'bulldozing.' Rather than fleeing, they dig burrows or use their strong front legs and solid bodies to forcefully push against the predator. This behavior allows them to protect themselves and their young inside burrows, using their sturdy frame as a defense mechanism. <br>",
		imageContainer: '<img id="wombat3" src="wombat3.jpeg" alt="wombat"> <br>'
    },
    {
        question: "How many species of wombats exist?",
        options: ["One", "Two", "Three", "Four"],
        answer: 2,
        additionalInfo: "Three distinct wombat species exist, namely the common wombat (also referred to as the bare-nosed wombat), the Southern hairy-nosed wombat, and the Northern hairy-nosed wombat. <br>",
		imageContainer: '<img id="wombat4" src="wombat4.jpeg" alt="wombat"> <br>'
    },
    {
        question: "What is the approximate lifespan of wombats?",
        options: ["5-10 years", "10-15 years", "15-20 years", "20-25 years"],
        answer: 2,
        additionalInfo: "A wombat can live up to 15 years in the wild and 20 years in captivity.They're very solitary marsupials that can only be found in Australia. <br>",
		imageContainer: '<img id="wombat5" src="wombat5.png" alt="wombat"> <br>'
    },
    {
        question: "What is the main threat to wombats in the wild?",
        options: ["Habitat Loss", "Predation by dingoes", "Extreme weather conditions", "Competing for food"],
        answer: 3,
        additionalInfo: "The primary threats to wombats is competition for food from introduced herbivores such as rabbits, cattle, sheep, and goats. Additionally, the spread of sarcoptic mange, which can be transmitted by foxes and dogs, poses a significant risk and can result in the loss of entire wombat colonies. <br>",
		imageContainer: '<img id="wombat6" src="wombat6.jpeg" alt="wombat"> <br>'
    },
    {
        question: "What physical feature is unique to wombats among many marsupials?",
        options: ["Prehensile tail", "Pouch opening at the back", "Opposable thumbs", "Quadrupedal hopping"],
        answer: 1,
        additionalInfo: "As a marsupial, the wombat has a backwards facing pouch where the young develop. The direction of the pouch means the joey is protected from dirt if the mother is digging. <br>",
		imageContainer: '<img id="wombat7" src="wombat7.jpeg" alt="wombat"> <br>'
    },
    {
        question: "What is a group of wombats called?",
        options: ["Herd", "Pod", "Pack", "Mob"],
        answer: 3,
        additionalInfo: "A collective of wombats can be referred to as a 'wisdom of wombats,' a 'mob of wombats,' or a 'colony of wombats.' The term 'wombat' originates from the Darug language, which is spoken by the Traditional Owners of Sydney. <br>",
		imageContainer: '<img id="wombat8" src="wombat8.jpeg" alt="wombat"> <br>'
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
				} else {
					document.getElementById("result" + idx).innerHTML =  '<h4 style="color:red;">Incorrect :( <br></h4>';
					document.getElementById("additionalInfo" + idx).innerHTML = null;
					document.getElementById("imageContainer" + idx).innerHTML =  null;
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