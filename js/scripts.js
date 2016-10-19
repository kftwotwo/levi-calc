var add = function(number1, number2) {
	return (number1 + number2);
};

var subtract = function(number1, number2) {
	return (number1 - number2);
};

var multiply = function(number1, number2) {
	return (number1 * number2);
};

var divide = function(number1, number2) {
	return (number1 / number2);
};

$(document).ready(function() {
	$("#addition").submit(function(event) {
		var number1 = parseInt($("#number1").val());
		var number2 = parseInt($("#number2").val());

		$("#output").text(add(number1, number2));

		event.preventDefault();
	});
});
