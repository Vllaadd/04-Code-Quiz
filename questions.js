var score = 0;
var questionStep = 0;
var quizDuration = 60;

var questions = [
	{
	    name:"Commonly used types DO NOT include?",
	    answers:[
		    	{ 
		    		id: 123, 
		    		name: "Strings"
		    	},
		    	{ 
		    		id: 234, 
		    		name: "Alerts"
		    	},
		    	{ 
		    		id: 567, 
		    		name: "Numbers"
		    	},
		    	{ 
		    		id: 78, 
		    		name: "Booleans"
		    	}
	    ],
	    rightAnswer:234
	},
	{
	    name:"The condition in an if / else statement is enclosed within___.",
	    answers:[
		    	{ 
		    		id: 897, 
		    		name: "Curly brackets"
		    	},
		    	{ 
		    		id: 9098, 
		    		name: "Quotes"
		    	},
		    	{ 
		    		id: 98754, 
		    		name: "Parentheses"
		    	},
		    	{ 
		    		id: 1231, 
		    		name: "Square brackets"
		    	}
	    ],
	    rightAnswer:98754
	},
	{
	    name:"Arrays in JavaScript can be used to store___.",
	    answers:[
		    	{ 
		    		id: 222, 
		    		name: "Numbers and strings"
		    	},
		    	{ 
		    		id: 3333, 
		    		name: "Other arrays"
		    	},
		    	{ 
		    		id: 4444, 
		    		name: "Booleans"
		    	},
		    	{ 
		    		id: 5555, 
		    		name: "All of the above"
		    	}
	    ],
	    rightAnswer: 555
	},
	{
	    name:"String values must be enclosed within___when being assigned to variables.",
	    answers:[
		    	{ 
		    		id: 666, 
		    		name: "Commas"
		    	},
		    	{ 
		    		id: 7777, 
		    		name: "Curly brackets"
		    	},
		    	{ 
		    		id: 8888, 
		    		name: "Quotes"
		    	},
		    	{ 
		    		id: 99999, 
		    		name: "Parentheses"
		    	}
	    ],
	    rightAnswer:8888
	}
];