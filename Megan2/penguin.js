function goToNextPage(nextPage)
{
	window.location.href = nextPage;
	location.replace(nextPage);
}

const questions = [
    {
        question: "What is the average height of an adult emperor penguin?",
        options: ["3 feet", "4 feet", "5 feet", "6 feet"],
        answer: 1,
        additionalInfo: "The average height of an adult Emperor penguin is approximately 1.2 meters (3.9 feet). They are the tallest and heaviest of all penguin species, with males usually being slightly taller than females. <br>",
		imageContainer: '<img src="penguin1.jpg" alt="Orca"> <br>'
    },
    {
        question: "What is the average weight of an adult emperor penguin?",
        options: ["33 pounds", "55 pounds", "77 pounds", "99 pounds"],
        answer: 2,
        additionalInfo: "The average weight of an adult Emperor penguin is around 22 to 45 kilograms (49 to 99 pounds). Males tend to be slightly heavier than females. Their weight fluctuates throughout the breeding season due to fasting during incubation and chick-rearing periods. <br>",
		imageContainer: '<img src="penguin2.jpeg" alt="orca"> <br>'
    },
    {
        question: "How deep can emperor penguins dive for food?",
        options: ["500 feet", "900 feet", "1200 feet", "1800 feet"],
        answer: 0,
        additionalInfo: "Emperor penguins are impressive divers and can reach depths of up to 500 meters (1,640 feet) when foraging for food. They can hold their breath for an average of 20 minutes and swim long distances underwater in search of fish, krill, and squid. <br>",
		imageContainer: '<img src="penguin3.png" alt="orca"> <br>'
    },
    {
        question: "What is the estimated population of emperor penguins?",
        options: ["100,000", "200,000", "500,000", "1,000,000"],
        answer: 0,
        additionalInfo: "Emperor penguins, with an estimated population of 100,000, navigate extreme Antarctic conditions to breed on sea ice. Conservation efforts are vital as climate change poses a significant threat to their icy habitats and food sources.<br>",
		imageContainer: '<img src="penguin4.jpeg" alt="orca"> <br>'
    },
    {
        question: "At what age do emperor penguins typically reach sexual maturity?",
        options: ["1 year", "3 years", "5 years", "7 years"],
        answer: 2,
        additionalInfo: "Emperor penguins generally attain sexual maturity around the age of 5 years, marked by their ability to breed and reproduce. This period allows them to navigate the harsh Antarctic environment and develop the physical and social skills necessary for successful breeding, marking a crucial milestone in their lifecycle. <br>",
		imageContainer: '<img src="penguin5.jpeg" alt="orca"> <br>'
    },
    {
        question: "What adaptation helps emperor penguins survive extreme cold?",
        options: ["Dense feathers", "Thick blubber", "Huddling behavior", "All of the above"],
        answer: 3,
        additionalInfo: "Emperor penguins employ multiple adaptations to endure extreme cold. Their dense feathers provide insulation, thick blubber stores energy and offers additional insulation, while their unique huddling behavior generates collective warmth, collectively aiding their survival in the harsh Antarctic environment. <br>",
		imageContainer: '<img src="penguin6.jpg" alt="orca"> <br>'
    },
    {
        question: "Which season do emperor penguins breed and lay eggs?",
        options: ["Spring", "Summer", "Fall", "Winter"],
        answer: 3,
        additionalInfo: "Emperor penguins brave the unforgiving Antarctic winter to breed and lay their eggs, enduring temperatures as low as -40°C (-40°F). Their remarkable adaptation to this harsh season ensures the continuation of their species amidst the icy and demanding conditions. <br>",
		imageContainer: '<img src="penguin7.jpg" alt="orca"> <br>'
    },
    {
        question: "What percentage of their life do penguins spend in the ocean?",
        options: ["10%", "25%", "50%", "75%"],
        answer: 2,
        additionalInfo: "Emperor penguins indeed spend roughly half of their lives in the ocean, primarily hunting for food to sustain themselves. This extensive time in the water enables them to access their main food sources, such as fish, squid, and krill, crucial for their survival in the Antarctic ecosystem.<br>",
		imageContainer: '<img src="penguin8.jpeg" alt="orca"> <br>'
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