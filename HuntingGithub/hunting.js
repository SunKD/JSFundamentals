$(document).ready(function(){
    $("#github").click(function(){
        $.get("https://api.github.com/users/SunKD", displayName)
        // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
        function displayName(data) {
            $("p").append(data.login);
        }
    });
});
