function goToNextPage(nextPage)
{
	window.location.href = nextPage;
	location.replace(nextPage);
}

const questions = [
    {
        question: "What is the oldest that orcas can live up to?",
        options: [" 60 years", "70 years", "80 years", "90 years"],
        answer: 3
    },
    {
        question: "Which of the following do orcas NOT eat?",
        options: ["Sea turtles", "Sharks", "Algae", "Squid"],
        answer: 2
    },
    {
        question: "Besides the Antarctic ocean, where can orcas be found",
        options: ["Pacific Ocean", "Atlantic Ocean", "Arctic Ocean", "All oceans"],
        answer: 3
    },
    {
        question: "What are a group of orcas called?",
        options: ["Pod", "Herd", "Colony", "School"],
        answer: 0
    },
    {
        question: "Which of the following are NOT threats to orcas?",
        options: ["Entanglement in fishing gear", "High salinity", "Ocean contaminants", "Oil spills"],
        answer: 1
    },
    {
        question: "How much do jaguar cubs weigh when they are born?",
        options: ["35,000", "50,000", "60,000", "75,000"],
        answer: 1
    },
    {
        question: "What do orcas rely on underwater sounds to do?",
        options: ["Feed", "Communicate", "Navigate", "All of the above"],
        answer: 3
    },
    {
        question: "What are orcas also known as?",
        options: ["Sea pandas", "Ocean wolves", "Killer whale", "Beluga whale"],
        answer: 2
    },
];

function answerYears()
{
	document.getElementById("result").innerHTML = "";
	let array = document.getElementsByName("years");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="Ninety")
				{
				document.getElementById("result").innerHTML =  "Correct!" + "<br>";
				document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
				document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result").innerHTML =  "Incorrect :(" + "<br>";
					document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerEat()
{
	document.getElementById("result1").innerHTML = "";
	let array = document.getElementsByName("eat");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="Algae")
				{
				document.getElementById("result1").innerHTML =  "Correct!" + "<br>";
				document.getElementById("additionalInfo1").innerHTML = "Orcas are carnivores, meaning their diet consists of just other creatures. They can eat sea turtles, sharks, squid, but they don’t eat algae, since algae is a plant." + "<br>";
				document.getElementById("algaeImageContainer").innerHTML = '<img id="algaeImage" src="algae.webp" alt="Algae">' + "<br>";
				} else {
					document.getElementById("result1").innerHTML =  "Incorrect :(" + "<br>";
					document.getElementById("additionalInfo1").innerHTML = "Orcas are carnivores, meaning their diet consists of just other creatures. They can eat sea turtles, sharks, squid, but they don’t eat algae, since algae is a plant." + "<br>";
					document.getElementById("algaeImageContainer").innerHTML = '<img id="algaeImage" src="algae.webp" alt="Algae">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}

function answerYears()
{
	document.getElementById("result").innerHTML = "";
	let array = document.getElementsByName("years");
	
	for (let i = 0; i<array.length; i++)
	{
		if(array[i].type == "radio")
		{
			if(array[i].checked == true)
			{
				if (array[i].value=="Ninety")
				{
				document.getElementById("result").innerHTML =  "Correct!" + "<br>";
				document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
				document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				} else {
					document.getElementById("result").innerHTML =  "Incorrect :(" + "<br>";
					document.getElementById("additionalInfo").innerHTML = "The average lifespan for a male orca is approximately 30 years, and the average lifespan for a female orca is approximately 50 years. Male orcas can live up to 60 years, while female orcas can live up to 90 years." + "<br>";
					document.getElementById("yearImageContainer").innerHTML = '<img id="yearImage" src="years.jpg" alt="Orca">' + "<br>";
				}
				i=array.length;
			}
		}
	}
}
