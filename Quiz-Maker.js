var container = document.getElementsByClassName('container');
        var submitBTN = document.querySelector(".container #button");
        let Question = document.querySelector(".question h2");
        let Options = document.querySelector(".options input");
        let Que_No = document.getElementById('Que_No');
        var confirmBtn = document.getElementById('confirm');
        var elementToToggle = document.getElementById("elementToToggle");
        var editor = document.getElementsByClassName('editor');
        let startQuiz = document.getElementById('startQuiz');

        var counter = 1;
        var Quizarray = [];

        function addQuestion(queInput, opts) {
            counter++;
            var newItem = document.createElement("a");
            var Qno = `Question ${counter}`;
            newItem.textContent = Qno;
            Que_No.appendChild(newItem);
            newItem.style.fontSize = "29px";
            newItem.style.fontWeight = "300";
            newItem.style.textDecoration = "none";
            newItem.style.listStyle = "none";

            var Questions = {
                Ques: queInput,
                Opts: opts
            };
            Quizarray.push(Questions);
            // Clear the input fields
            document.getElementById('Question').value = "";
            document.getElementById('opt1').value = "";
            document.getElementById('opt2').value = "";
            document.getElementById('opt3').value = "";
            document.getElementById('opt4').value = "";
        }

        submitBTN.addEventListener("click", function () {
            var queInput = document.getElementById('Question').value;
            var opt1 = document.getElementById('opt1').value;
            var opt2 = document.getElementById('opt2').value;
            var opt3 = document.getElementById('opt3').value;
            var opt4 = document.getElementById('opt4').value;

            if (queInput.trim() !== "") {
                var opts = [opt1, opt2, opt3, opt4];
                addQuestion(queInput, opts);
            } else {    
                alert('Please enter a question');
            }
        });

        // startQuiz Button Logic Starts here
        startQuiz.addEventListener('click', function () {
            var link = 'Satarter.html';
            window.location.href = (link);
        localStorage.setItem('Quizarray', JSON.stringify(Quizarray));

        });