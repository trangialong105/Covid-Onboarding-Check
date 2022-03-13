var prom = prompt("What is your name");
alert("Hi" +" " + prom +" "+ ",this is the Covid on boarding pass for you!")

function check() {
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
	var correct = 0;



	if (question1 == "NO") {
		correct++;
    }
	if (question2 == "NO") {
		correct++;  
    }
    if (question3 == "NO") {
		correct++;   
    }

    var messages1 = ["You are OK to go to work, take a screen shot of this and show to your manager"];
    var messages2 = ["You should stay at home!"];
	var pictures = ["img/pass.png", "img/stayhome.jpeg"];

    if (correct == 3 ) {
        document.getElementById("after_submit").style.visibility = "visible";
        document.getElementById("message").innerHTML = messages1;
        document.getElementById("picture").src = "img/pass.png";
    } else  {
        document.getElementById("after_submit").style.visibility = "visible";
        document.getElementById("message").innerHTML = messages2;
        document.getElementById("picture").src = "img/stayhome.jpeg";
    }


}
