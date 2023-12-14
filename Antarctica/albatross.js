function goToNextPage(nextPage)
{
	window.location.href = nextPage;
	location.replace(nextPage);
}

const questions = [
    {
        question: "What is the largest wingspan recorded for a wandering albatross?",
        options: ["2 meters", "3 meters", "3.5 meters", "4 meters"],
        answer: 2,
        additionalInfo: "TThe wandering albatross boasts the largest wingspan among living birds, spanning an impressive 3.5 meters (11.5 feet), aiding its remarkable gliding abilities across vast ocean expanses. This enormous wingspan enables efficient soaring, supporting its nomadic lifestyle across the open seas. <br>",
		imageContainer: '<img src="albatross1.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "How long can wandering albatrosses remain in flight without landing?",
        options: ["12 hours", "24 hours", "48 hours", "72 hours"],
        answer: 3,
        additionalInfo: "Wandering albatrosses showcase incredible endurance, capable of remaining airborne for an astonishing 72 hours continuously, relying on wind patterns to glide effortlessly over vast ocean distances. This extraordinary ability allows extensive foraging trips in search of food across remote marine territories. <br>",
		imageContainer: '<img src="albatross2.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "Which oceanic region do wandering albatrosses primarily inhabit?",
        options: ["Pacific Ocean", "Indian Ocean", "Atlantic", "Southern Ocean"],
        answer: 3,
        additionalInfo: "Wandering albatrosses predominantly inhabit the expansive Southern Ocean, utilizing its windy, remote waters for foraging and covering immense distances during their nomadic journeys. This region serves as their primary territory, supporting their extensive marine travels and foraging habits. <br>",
		imageContainer: '<img src="albatross3.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "What do wandering albatrosses primarily feed on?",
        options: ["Plankton", "Fish", "Squid", "All of the above"],
        answer: 3,
        additionalInfo: "Wandering albatrosses showcase a versatile palate, primarily consuming a varied diet that includes fish, squid, and even scavenged carrion, exhibiting adaptability in foraging habits based on available food sources. This diverse diet sustains these birds during their extensive journeys across the oceanic expanses. <br>",
		imageContainer: '<img src="albatross4.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "How many years do wandering albatrosses take to reach sexual maturity?",
        options: ["3 years", "5 years", "8 years", "10 years"],
        answer: 2,
        additionalInfo: "Wandering albatrosses undergo a prolonged maturation process, taking approximately 8 years before reaching sexual maturity, a significant milestone that allows them to engage in breeding activities and contribute to the continuation of their species across their oceanic habitats. <br>",
		imageContainer: '<img src="albatross5.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "What is a unique courtship behavior of wandering albatrosses?",
        options: ["Dancing", "Singing", "Bill tapping", "Sky-pointing"],
        answer: 3,
        additionalInfo: "In the elaborate courtship rituals of wandering albatrosses, the distinctive behavior of 'sky-pointing' takes center stage, characterized by the birds pointing their bills skyward while emitting resonant calls, showcasing this unique and captivating display to attract potential mates and establish bonds crucial for breeding. <br>",
		imageContainer: '<img src="albatross6.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "How many species of wandering albatrosses are recognized?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        additionalInfo: "Two distinct species fall under the classification of wandering albatrosses: the wandering albatross (Diomedea exulans) and the Antipodean albatross (Diomedea antipodensis), each identified by unique characteristics and geographical distributions, contributing to the diversity within this majestic seabird group. <br>",
		imageContainer: '<img src="albatross7.jpeg" alt="Albatross"> <br>'
    },
    {
        question: "What is the major threat to wandering albatross populations?",
        options: ["Climate change", "Overfishing", "Pollution", "All of the above"],
        answer: 3,
        additionalInfo: "Wandering albatross populations confront a trifecta of challenges comprising bycatch in fisheries, habitat degradation, and the far-reaching consequences of climate change and pollution, collectively posing significant threats to the sustainability of these majestic seabirds. <br>",
		imageContainer: '<img src="albatross8.jpeg" alt="Albatross"> <br>'
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