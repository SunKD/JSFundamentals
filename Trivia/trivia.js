$(document).ready(function () {
    var score = 0;
    $.get("https://opentdb.com/api.php?amount=3&category=15&difficulty=medium&type=multiple", videoQuestion)
    // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
    function videoQuestion(data) {

        $("#vid100").click(function () {
            $("#vid100").empty();
            $("#vid100").append(data.results[0].question)
            $("#vid100").append(`<form name="choice"><br><br><input type="radio" name="answer" value="${data.results[0].incorrect_answers[0]}"> ${data.results[0].incorrect_answers[0]}<br>
            <input type="radio" name="answer" value="${data.results[0].incorrect_answers[2]}"> ${data.results[0].incorrect_answers[2]}<br>
            <input type="radio" name="answer" value="${data.results[0].incorrect_answers[1]}"> ${data.results[0].incorrect_answers[1]}<br>
            <input type="radio" name="answer" value="${data.results[0].correct_answer}"> ${data.results[0].correct_answer}</form>`);
            $('input[type=radio]').click(function(){                
                if(this.value == data.results[0].correct_answer){
                    score+= 100;
                    $(".point").html(score + "Points");
                    $("#vid100").replaceWith('<div id="right" class="col-md-11 grey">Right</div>');
                }else{
                    $("#vid100").replaceWith('<div id="wrong" class="col-md-11 grey">Wrong</div>');
                }
            });

        });
        $("#vid200").click(function () {
            $("#vid200").empty();
            $("#vid200").append(data.results[1].question)
            $("#vid200").append(`<form name="choice"><br><br><input type="radio" name="answer" value="${data.results[1].correct_answer}"> ${data.results[1].correct_answer}<br>
            <input type="radio" name="answer" value=" ${data.results[1].incorrect_answers[0]}">  ${data.results[1].incorrect_answers[0]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[1]}"> ${data.results[1].incorrect_answers[1]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[2]}"> ${data.results[1].incorrect_answers[2]}</form>`);
            $('input[type=radio]').click(function(){                
                if(this.value == data.results[1].correct_answer){
                    score+= 200;
                    $(".point").html(score + "Points");
                    $("#vid200").replaceWith('<div id="right" class="col-md-11 grey">Right</div>');
                }else{
                    $("#vid200").replaceWith('<div id="wrong" class="col-md-11 grey">Wrong</div>');
                }
            });
        });
        $("#vid300").click(function () {
            $("#vid300").empty();
            $("#vid300").append(data.results[2].question)
            $("#vid300").append(`<form name="choice"><br><br><input type="radio" name="answer" value="${data.results[0].incorrect_answers[0]}"> ${data.results[0].incorrect_answers[0]}<br>
            <input type="radio" name="answer" value="${data.results[0].incorrect_answers[2]}"> ${data.results[0].incorrect_answers[2]}<br>
            <input type="radio" name="answer" value="${data.results[0].incorrect_answers[1]}"> ${data.results[0].incorrect_answers[1]}<br>
            <input type="radio" name="answer" value="${data.results[0].correct_answer}"> ${data.results[0].correct_answer}</form>`);
            $('input[type=radio]').click(function(){                
                if(this.value == data.results[2].correct_answer){
                    score+= 300;
                    $(".point").html(score + "Points");
                    $("#vid300").replaceWith('<div id="right" class="col-md-11 grey">Right</div>');
                }else{
                    $("#vid300").replaceWith('<div id="wrong" class="col-md-11 grey">Wrong</div>');
                }
            });
        });
    }

    $.get("https://opentdb.com/api.php?amount=3&category=18&difficulty=medium&type=multiple", generalQuestion)
    // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
    function generalQuestion(data) {

        $("#gen100").click(function () {
            $("#gen100").empty();
            $("#gen100").append(data.results[0].question)
            $("#gen100").append(`<form name="choice"><br><br><input type="radio" name="answer" value="${data.results[1].correct_answer}"> ${data.results[1].correct_answer}<br>
            <input type="radio" name="answer" value=" ${data.results[1].incorrect_answers[0]}">  ${data.results[1].incorrect_answers[0]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[1]}"> ${data.results[1].incorrect_answers[1]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[2]}"> ${data.results[1].incorrect_answers[2]}</form>`);
            $('input[type=radio]').click(function(){                
                if(this.value == data.results[0].correct_answer){
                    score+= 100;
                    $(".point").html(score + "Points");
                    $("#gen100").replaceWith('<div id="right" class="col-md-11 grey">Right</div>');
                }else{
                    $("#gen100").replaceWith('<div id="wrong" class="col-md-11 grey">Wrong</div>');
                }
            });
        });
        $("#gen200").click(function () {
            $("#gen200").empty();
            $("#gen200").append(data.results[1].question)
            $("#gen200").append(`<form name="choice"><br><br><input type="radio" name="answer" value="${data.results[1].correct_answer}"> ${data.results[1].correct_answer}<br>
            <input type="radio" name="answer" value=" ${data.results[1].incorrect_answers[0]}">  ${data.results[1].incorrect_answers[0]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[1]}"> ${data.results[1].incorrect_answers[1]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[2]}"> ${data.results[1].incorrect_answers[2]}</form>`);
            $('input[type=radio]').click(function(){                
                if(this.value == data.results[1].correct_answer){
                    score+= 200;
                    $(".point").html(score + "Points");
                    $("#gen200").replaceWith('<div id="right" class="col-md-11 grey">Right</div>');
                }else{
                    $("#gen200").replaceWith('<div id="wrong" class="col-md-11 grey">Wrong</div>');
                }
            });
        });
        $("#gen300").click(function () {
            $("#gen300").empty();
            $("#gen300").append(data.results[2].question)
            $("#gen300").append(`<form name="choice"><br><br><input type="radio" name="answer" value="${data.results[0].incorrect_answers[0]}"> ${data.results[0].incorrect_answers[0]}<br>
            <input type="radio" name="answer" value="${data.results[0].incorrect_answers[2]}"> ${data.results[0].incorrect_answers[2]}<br>
            <input type="radio" name="answer" value="${data.results[0].incorrect_answers[1]}"> ${data.results[0].incorrect_answers[1]}<br>
            <input type="radio" name="answer" value="${data.results[0].correct_answer}"> ${data.results[0].correct_answer}</form>`);
            $('input[type=radio]').click(function(){                
                if(this.value == data.results[2].correct_answer){
                    score+= 300;
                    $(".point").html(score + "Points");
                    $("#gen300").replaceWith('<div id="right" class="col-md-11 grey">Right</div>');
                }else{
                    $("#gen300").replaceWith('<div id="wrong" class="col-md-11 grey">Wrong</div>');
                }
            });
        });
    }

    $.get("https://opentdb.com/api.php?amount=3&category=9&difficulty=medium&type=multiple", computerQuestion)
    // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
    function computerQuestion(data) {

        $("#sci100").click(function () {
            $("#sci100").empty();
            $("#sci100").append(data.results[0].question)
            $("#sci100").append(`<form name="choice"><br><br><input type="radio" name="answer" value="${data.results[1].correct_answer}"> ${data.results[1].correct_answer}<br>
            <input type="radio" name="answer" value=" ${data.results[1].incorrect_answers[0]}">  ${data.results[1].incorrect_answers[0]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[1]}"> ${data.results[1].incorrect_answers[1]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[2]}"> ${data.results[1].incorrect_answers[2]}</form>`);
            $('input[type=radio]').click(function(){                
                if(this.value == data.results[0].correct_answer){
                    score+= 100;
                    $(".point").html(score + "Points");
                    $("#sci100").replaceWith('<div id="right" class="col-md-11 grey">Right</div>');
                }else{
                    $("#sci100").replaceWith('<div id="wrong" class="col-md-11 grey">Wrong</div>');
                }
            });
        });
        $("#sci200").click(function () {
            $("#sci200").empty();
            $("#sci200").append(data.results[1].question)
            $("#sci200").append(`<form name="choice"><br><br><input type="radio" name="answer" value="${data.results[1].correct_answer}"> ${data.results[1].correct_answer}<br>
            <input type="radio" name="answer" value=" ${data.results[1].incorrect_answers[0]}">  ${data.results[1].incorrect_answers[0]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[1]}"> ${data.results[1].incorrect_answers[1]}<br>
            <input type="radio" name="answer" value="${data.results[1].incorrect_answers[2]}"> ${data.results[1].incorrect_answers[2]}</form>`);
            $('input[type=radio]').click(function(){                
                if(this.value == data.results[1].correct_answer){
                    score+= 200;
                    $(".point").html(score + "Points");
                    $("#sci200").replaceWith('<div id="right" class="col-md-11 grey">Right</div>');
                }else{
                    $("#sci200").replaceWith('<div id="wrong" class="col-md-11 grey">Wrong</div>');
                }
            });
        });
        $("#sci300").click(function () {
            $("#sci300").empty();
            $("#sci300").append(data.results[2].question)
            $("#sci300").append(`<br><br><input type="radio" name="answer"> ${data.results[2].incorrect_answers[0]}<br>
            <input type="radio" name="answer"> ${data.results[2].incorrect_answers[2]}<br>
            <input type="radio" name="answer"> ${data.results[2].incorrect_answers[1]}<br>
            <input type="radio" name="answer"> ${data.results[2].correct_answer}`);
            $('input[type=radio]').click(function(){                
                if(this.value == data.results[2].correct_answer){
                    score+= 300;
                    $(".point").html(score + "Points");
                    $("#sci300").replaceWith('<div id="right" class="col-md-11 grey">Right</div>');
                }else{
                    $("#sci300").replaceWith('<div id="wrong" class="col-md-11 grey">Wrong</div>');
                }
            });
        });
    }
});
