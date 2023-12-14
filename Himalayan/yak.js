function goToNextPage(nextPage)
{
	window.location.href = nextPage;
	location.replace(nextPage);
}

const questions = [
    {
        question: "Where are wild yaks primarily found?",
        options: ["Europe", "Africa", "South America", "Asia"],
        answer: 3,
        additionalInfo: "Wild yaks are predominantly found in the remote mountainous regions of Central Asia, including Tibet and parts of China.Today, wild yaks are found primarily in northern Tibet and western Qinghai, with some populations extending into the southernmost parts of Xinjiang, and into Ladakh in India. <br>",
		imageContainer: '<img src="yak1.png" alt="Wild Yak"> <br>'
    },
    {
        question: "What is the main diet of wild yaks?",
        options: ["Grass and shrubs", "Insects and small animals", "Fish and aquatic plants", "Fruits and seeds"],
        answer: 0,
        additionalInfo: "Wild yaks primarily feed on grasses and shrubs that are available in their high-altitude habitats. They also eat a smaller amount of herbs, winterfat shrubs, and mosses, and have even been reported to eat lichen. <br>",
		imageContainer: '<img src="yak2.jpeg" alt="Wild Yak"> <br>'
    },
    {
        question: "What is the approximate population of wild yaks in the world?",
        options: ["5,000-10,000", "10,000-15,000", "15,000-20,000", "20,000-25,000"],
        answer: 1,
        additionalInfo: "Estimated wild yak (Bos mutus) population is thought to number much less, 10,000 to 15,000. Unfortunately, wild yaks are becoming rarer in their Himalayan home range because of hunting and hybridisation with domestic yak. <br>",
		imageContainer: '<img src="yak3.jpeg" alt="Wild Yak"> <br>'
    },
    {
        question: "What is a notable physical characteristic of wild yaks?",
        options: ["Long, curved horns", "Striped fur pattern", "Hump on the back", "Pouch-like cheek flaps"],
        answer: 0,
        additionalInfo: "Wild yaks have long, curved horns that can grow to impressive lengths, especially in males. In northern Tibet, they reportedly weigh a ton and reach a length of almost four meters (12 feet) and have a horn span of one meter (three feet). <br>",
		imageContainer: '<img src="yak4.png" alt="Wild Yak"> <br>'
    },
    {
        question: "At what altitude do wild yaks typically live?",
        options: ["Sea level", "1,000-2,000 meters", "3,000-5,000 meters", "Above 6,000 meters"],
        answer: 2,
        additionalInfo: "The primary habitat of wild yaks consists of treeless uplands between 3,000 and 5,500 m (9,800 and 18,000 ft), dominated by mountains and plateaus. They are most commonly found in alpine tundra with a relatively thick carpet of grasses and sedges rather than the more barren steppe country. <br>",
		imageContainer: '<img src="yak5.png" alt="Wild Yak"> <br>'
    },
    {
        question: "What is the scientific name for the wild yak?",
        options: ["Bos primigenius", "Bos taurus", "Bos grunniens", "Bos indicus"],
        answer: 2,
        additionalInfo: " The species was originally designated as Bos grunniens ('grunting ox') by Linnaeus in 1766, but this name is now generally considered to refer only to the domesticated form of the animal, with Bos mutus ('mute ox') being the preferred name for the wild species. <br>",
		imageContainer: '<img src="yak6.jpeg" alt="Wild Yak"> <br>'
    },
    {
        question: "What is the social structure of wild yak herds primarily like?",
        options: ["Solitary", "Matrilineal groups", "Patriarchal groups", "Large mixed herds"],
        answer: 1,
        additionalInfo: "Wild yaks tend to form matrilineal groups, consisting of females and their offspring. Older females, often the largest and wisest, lead the herd. They guide the group to suitable grazing areas and protect them from predators. <br>",
		imageContainer: '<img src="yak7.jpg" alt="Wild Yak"> <br>'
    },
    {
        question: "What is the main threat to wild yak populations?",
        options: ["Hunting for sport", "Climate change", "Habitat loss", "Invasive species predation"],
        answer: 2,
        additionalInfo: "Habitat loss and fragmentation due to human activities like agriculture, urbanization, and infrastructure development.Conservation efforts are necessary to protect wild yak populations and their habitats, ensuring the long-term survival of this iconic species. <br>",
		imageContainer: '<img src="yak8.jpeg" alt="Wild Yak"> <br>'
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
                    document.getElementById("result" + idx).innerHTML =  '<h4 style="color:green;">Correct!</h4>';
                    document.getElementById("additionalInfo" + idx).innerHTML = questions[index].additionalInfo;
                    document.getElementById("imageContainer" + idx).innerHTML = questions[index].imageContainer;
				} else {
					document.getElementById("result" + idx).innerHTML =  '<h4 style="color:red;">Incorrect :(</h4>';
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