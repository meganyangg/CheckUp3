function goToNextPage(nextPage)
{
	window.location.href = nextPage;
	location.replace(nextPage);
}

const questions = [
    {
        question: "Where are red pandas primarily found in the wild?",
        options: ["South America", "Africa", "Asia", "Australia"],
        answer: 2,
        additionalInfo: "Red pandas, with their distinctive red fur, are primarily inhabitants of the Asian continent, favoring the mountainous terrain across countries like Nepal, India, Bhutan, China, and Myanmar. Their natural habitat consists of forests in these regions, where they can thrive in the cool, temperate climates. <br>",
		imageContainer: '<img src="redpanda1.jpeg" alt="Red Panda"> <br>'
    },
    {
        question: "What is the primary diet of red pandas?",
        options: ["Bamboo", "Insects", "Fish", "Fruits and nuts"],
        answer: 0,
        additionalInfo: "The primary diet of red pandas consists mainly of bamboo, which makes up about 70% of their diet. They feed on various species of bamboo, including the stalks, leaves, and shoots. In addition to bamboo, red pandas also eat other plants, like grasses and wild fruit, as well as small insects and even small rodents on occasion. But bamboo is their absolute favorite and main staple.  <br>",
		imageContainer: '<img src="redpanda2.jpeg" alt="Red Panda"> <br>'
    },
    {
        question: "What is a distinctive physical characteristic of red pandas?",
        options: ["Long tail with rings", "Large ear tuffs", "Broad stripes on the back", "Long, curved claws"],
        answer: 0,
        additionalInfo: "One distinctive physical characteristic of red pandas is their bushy, white-tipped tails. These tails are long and fluffy, with white fur on the underside, which gives them a distinctive white stripe or 'flag' when they're curled up or climbing. This striking tail feature sets them apart from other animals and adds to their charm. <br>",
		imageContainer: '<img src="redpanda3.jpeg" alt="Red Panda"> <br>'
    },
    {
        question: "What is the approximate weight of an adult red panda?",
        options: ["5-7 pounds", "8-20 pounds", "24-30 pounds", "35-40 pounds"],
        answer: 1,
        additionalInfo: "Adult red pandas typically weigh between 8 and 17 pounds (3.6 and 7.7 kilograms) and are 22 to 24.6 inches (56 to 62.5 centimeters) long, plus a tail of 14.6 to 18.6 inches (37 to 47.2 centimeters). <br>",
		imageContainer: '<img src="redpanda4.jpeg" alt="Red Panda"> <br>'
    },
    {
        question: "How do red pandas spend much of their time?",
        options: ["Climbing trees", "Burrowing underground", "Swimming in rivers", "Basking in the sun"],
        answer: 0,
        additionalInfo: "Red pandas are renowned for their tree-dwelling prowess, spending a substantial amount of their time navigating and resting in the branches. Their agile climbing abilities enable them to seek food, shelter, and safety within the elevated canopy of forests where they primarily reside. <br>",
		imageContainer: '<img src="redpanda5.png" alt="Red Panda"> <br>'
    },
    {
        question: "What is the primary threat to red panda populations?",
        options: ["Climate change", "Habitat loss", "Overhunting", "Pollution"],
        answer: 1,
        additionalInfo: "The primary threat faced by red pandas is indeed habitat loss, primarily due to deforestation caused by human activities such as logging, agriculture expansion, and development. As their forest homes diminish, these charming creatures face a significant challenge in finding suitable areas to live and thrive, endangering their populations. <br>",
		imageContainer: '<img src="redpanda6.png" alt="Red Panda"> <br>'
    },
    {
        question: "What is the unique behavior of red pandas during the cold winter months?",
        options: ["Hibernate underground", "Migrate to warmer regions", "Grow thicker fur", "Group together for warmth"],
        answer: 2,
        additionalInfo: "During the cold winter months, red pandas exhibit the unique behavior of growing thicker fur, which serves as insulation against the harsh weather in their mountainous habitats. This adaptive response helps them conserve body heat and stay comfortable in the chilly conditions they encounter. <br>",
		imageContainer: '<img src="redpanda7.jpeg" alt="Red Panda"> <br>'
    },
    {
        question: "What do red pandas do to defend themselves when feeling threatened?",
        options: ["Climb higher in trees", "Release a strong odor", "Play dead", "Stand on their hind legs"],
        answer: 1,
        additionalInfo: "When red pandas feel threatened, they employ a defense mechanism by secreting a potent scent from glands located on their bodies. This pungent odor acts as a deterrent to predators, warding them off and allowing the red pandas to escape potential danger. <br>",
		imageContainer: '<img src="redpanda8.jpeg" alt="Red Panda"> <br>'
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