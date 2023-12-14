function goToNextPage(nextPage)
{
	window.location.href = nextPage;
	location.replace(nextPage);
}

const questions = [
    {
        question: "What is the primary habitat of the North African ostrich?",
        options: ["Rainforests", "Savannas", "Deserts", "Mountains"],
        answer: 1,
        additionalInfo: "The North African ostrich predominantly resides in the savannas, characterized by open grasslands and scattered shrubs across the landscape. These vast savannas provide the ideal habitat for these ostriches due to the availability of open spaces and limited tree cover. <br>",
		imageContainer: '<img src="ostrich1.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "Which of the following is a behavior associated with male North African ostriches during breeding season?",
        options: ["Building nests", "Incubating eggs", "Guarding and defending the nest", "Mating dances"],
        answer: 3,
        additionalInfo: "Male North African ostriches exhibit elaborate mating dances during the breeding season as a way to court and attract females. These intricate displays involve rhythmic movements and vibrant visual cues aimed at enticing potential mates. <br>",
		imageContainer: '<img src="ostrich2.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the diet of the North African ostrich mainly composed of?",
        options: ["Grasses and seeds", "Insects and small animals", "Fruits and berries", "Carrion and dead animals"],
        answer: 0,
        additionalInfo: "The North African ostrich sustains itself primarily on a diet of grasses and seeds, foraging across the savanna to fulfill its nutritional requirements. This herbivorous diet is integral to its survival in the grassland ecosystems where it resides. <br>",
		imageContainer: '<img src="ostrich3.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the main reason for the decline in the North African ostrich population?",
        options: ["Habitat destruction", "Climate change", "Hunting for feathers", "Predation by other species"],
        answer: 2,
        additionalInfo: "The primary reason behind the decline in the North African ostrich population stems from extensive hunting for their feathers, which historically led to a significant decrease in their numbers. This practice played a critical role in reducing their population size over time. <br>",
		imageContainer: '<img src="ostrich4.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "What is the current conservation status of the North African ostrich according to the IUCN Red List?",
        options: ["Leat Concern", "Near Threatened", "Vulnerable", "Endangered"],
        answer: 3,
        additionalInfo: "The North African ostrich holds an 'Endangered' status on the IUCN Red List, reflecting its concerning population decline and persistent threats. This classification indicates the urgent need for conservation efforts to protect and restore its dwindling numbers. <br>",
		imageContainer: '<img src="ostrich5.jpeg" alt="Cheetah"> <br>'
    },
    {
        question: "Which continent is home to the largest population of North African ostriches?",
        options: ["Asia", "Europe", "Africa", "Australia"],
        answer: 2,
        additionalInfo: "The largest population of North African ostriches is predominantly found across diverse regions of the African continent. However, due to historical declines, their numbers have significantly decreased, warranting conservation measures to protect their remaining populations. <br>",
		imageContainer: '<img src="ostrich6.png" alt="Cheetah"> <br>'
    },
    {
        question: "What is the typical size of a North African ostrich egg?",
        options: ["5-8 inches", "8-10 inches Africa", "10-12 inches", "12-14 inches"],
        answer: 3,
        additionalInfo: "TNorth African ostrich eggs rank among the largest eggs laid by any bird, averaging an impressive length of 12-14 inches (30-36 cm). This substantial size is crucial for protecting the eggs and optimizing the chances of successful hatching in their habitat. <br>",
		imageContainer: '<img src="ostrich7.png" alt="Cheetah"> <br>'
    },
    {
        question: "What is a notable characteristic of North African ostriches compared to other species?",
        options: ["Larger body size", "Longer legs", "Vibrant plumage", "Absence of flight feathers"],
        answer: 3,
        additionalInfo: "North African ostriches distinguish themselves from other species due to their lack of flight feathers, a notable characteristic setting them apart within the ostrich family. This trait contributes to their inability to fly, differentiating them from their counterparts. <br>",
		imageContainer: '<img src="ostrich8.png" alt="Cheetah"> <br>'
    },
];

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
                    document.getElementById("result" + idx).innerHTML =  '<p style="color:green;">Correct!</p>';
                    document.getElementById("additionalInfo" + idx).innerHTML = questions[index].additionalInfo;
                    document.getElementById("imageContainer" + idx).innerHTML = questions[index].imageContainer;
				} else {
					document.getElementById("result" + idx).innerHTML =  '<p style="color:red;">Incorrect :(</p>';
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