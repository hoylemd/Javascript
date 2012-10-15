var eol = "<br/>";

var fizzBuzz =
{

	rules : {
		{"divisor": 3, "message": "Fizz"},
		{"divisor": 5, "message": "Buzz"}
	},

	test : function(sample)
	{
		var output = "";
		for var ruleNum in rules
		{ 
			var rule = rules;
			if (!(sample % rule["divisor"]))
			{
				output += rule["message"];
			} 
		}

		if (output === "")
			output += sample;

		return output;
	}
};

var experiment = function()
{
	var params = {
		first : 1,
		last : 20,
		step : 1,
	};

	var output = "";

	for (var i = params["first"]; i <= params["last"]; i += params["step"])
	{
		output += fizzBuzz["test"](i) + eol;
	}

	return output;
}
