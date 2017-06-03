// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [
{
	prompt: 'I find it difficult to introduce myself to people',
	weight: -1
},
{
	prompt: 'I get so lost in my thoughts I ignore or forget my surroundings',
	weight: -1
},
{
	prompt: 'I do not usually initiate conversations',
	weight: -1
},
{
	prompt: 'I prefer not to engage with people who seem angry or upset',
	weight: -1
},
{
	prompt: 'I choose my friends carefully',
	weight: -1
},
{
	prompt: 'I find it difficult to tell stories about myself',
	weight: -1
},
{
	prompt: 'I am usually highly motivated and energetic',
	weight: 1
},
{
	prompt: 'I find it easy to walk up to a group of people and join in conversation',
	weight: 1
},
{
	prompt: 'Being adaptable is more important than being organized',
	weight: 1
},
{
	prompt: 'I care more about making sure no one gets upset than winning a debate',
	weight: 1
},
{
	prompt: 'I care more about making sure no one gets upset than winning a debate',
	weight: 1
},
{
	prompt: 'I would rather improvise than spend time coming up with a detailed plan',
	weight: 1
}

]

// This array stores all of the possible values and the weight associated with the value. 
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [
{
	value: 'Strongly Agree', 
	class: 'btn-default btn-strongly-agree',
	weight: 5
},
{
	value: 'Agree',
	class: 'btn-default btn-agree',
	weight: 3,
}, 
{
	value: 'Neutral', 
	class: 'btn-default',
	weight: 0
},
{
	value: 'Disagree',
	class: 'btn-default btn-disagree',
	weight: 3
},
{ 
	value: 'Strongly Disagree',
	class: 'btn-default btn-strongly-disagree',
	weight: 5
}
]

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('quiz').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the quiz
// function createValueButtons() {
	
// 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// 		for (var i = 0; i < prompt_values.length; i++) {
// 			var val_button = document.createElement('button');
// 			var val_text = document.createTextNode(prompt_values[i].value);

// 			val_button.setAttribute('class', 'value-btn btn ' + prompt_values[i].class);
// 			val_button.appendChild(val_text);

// 			document.getElementsByClassName('prompt')[li_index].appendChild(val_button);
// 		}
// 	}
// }
function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

createPromptItems();
createValueButtons();

$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	console.log(this_group);

	// If button is already selected, de-select it when clicked
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		// $('[class='thisgroup).prop('checked', false);
		$('.'+this_group).removeClass('active');
		console.log($('.'+this_group));
		// $(this).prop('checked', true);
		$(this).addClass('active');
	}

	// If there is already a selected button in this group, de-select it
	// Otherwise, select it
})

// Hide the quiz after they submit their results
$('#submit-btn').click(function () {
	$('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');
})