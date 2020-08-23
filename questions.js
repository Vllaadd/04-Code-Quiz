var score = 0;
var questionStep = 0;
var quizDuration = 60;

var questions = [
	{
	    name:"HTML stands for :",
	    answers:[
		    	{ 
		    		id: 123, 
		    		name: "Hyper Transient Maker Language"
		    	},
		    	{ 
		    		id: 234, 
		    		name: "Hyper Text Markup Language"
		    	},
		    	{ 
		    		id: 567, 
		    		name: "Halode Typographic Maximized Lexicon"
		    	},
		    	{ 
		    		id: 78, 
		    		name: "Hadron Transforming Markdown Launcher"
		    	}
	    ],
	    rightAnswer:234
	},
	{
	    name:"The following is not an array method: ",
	    answers:[
		    	{ 
		    		id: 897, 
		    		name: "array.splice()"
		    	},
		    	{ 
		    		id: 9098, 
		    		name: "array.slice()"
		    	},
		    	{ 
		    		id: 98754, 
		    		name: "array.spin()"
		    	},
		    	{ 
		    		id: 1231, 
		    		name: "array.split()"
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
	    rightAnswer: 5555
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
	},
	{
	    name:"If (i != 0) runs when",
	    answers:[
		    	{ 
		    		id: 594, 
		    		name: "i is not equal to 0"
		    	},
		    	{ 
		    		id: 2255, 
		    		name: "i is equal to 0"
		    	},
		    	{ 
		    		id: 1195, 
		    		name: "i = zero"
		    	},
		    	{ 
		    		id: 5592, 
		    		name: "i is undefined"
		    	}
	    ],
	    rightAnswer:594
	}

];