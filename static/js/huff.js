document.addEventListener("DOMContentLoaded", function() {
	
	const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
	
	// color array (hex codes)
	const colors = ["e16d28", "8fcb54", "569cb4", "8e7397"]; // red, green, blue, violet
	
	const svg_image = document.getElementById("svg_image");
	const svg_image_cube_size = svg_image.getAttribute("width") / 6;
	
	var color_amounts = [0, 0, 0, 0];
	var color_probabilities = [0, 0, 0, 0];
		
	var current_encoding = [{name: "r", p: 0, code: "", color: "#e16d28"}, {name: "g", p: 0, code: "", color: "#8fcb54"},
							{name: "b", p: 0, code: "", color: "#569cb4"}, {name: "v", p: 0, code: "", color: "#8e7397"}];	

	// button onclick functions
	document.getElementById("buttonRandom").onclick = createRandomPattern;
	document.getElementById("buttonLines").onclick = createLinePattern;
	document.getElementById("buttonFill").onclick = createFillPattern;
	document.getElementById("buttonHourglass").onclick = createHourglassPattern;

	const buttonNext = document.getElementById("buttonNext");
	const encButtonNext = document.getElementById("nextBtnEncoding");

	// pattern creation functions
	function createRandomPattern() {
		
		color_amounts = [0, 0, 0, 0];
		svg_image.innerHTML = "";
		
		for(var x = 0; x < 6; x++) {
			
			for(var y = 0; y < 6; y++) {
			
				var rect = document.createElementNS(SVG_NAMESPACE, "rect");
				var color_number = Math.floor(Math.random() * 4);
				
				rect.setAttribute("x", x * svg_image_cube_size);
				rect.setAttribute("y", y * svg_image_cube_size);
				rect.setAttribute("height", svg_image_cube_size);
				rect.setAttribute("width", svg_image_cube_size);
				rect.setAttribute("fill", "#" + colors[color_number].toString());
				
				color_amounts[color_number] += 1;
				
				svg_image.appendChild(rect);
				
			}
		}
	}
	
	function createLinePattern() {
		
		color_amounts = [0, 0, 0, 0];
		svg_image.innerHTML = "";
		
		for(var y = 0; y < 6; y++) {
			
			var color_number = Math.floor(Math.random() * 4);
			
			for(var x = 0; x < 6; x++) {
			
				var rect = document.createElementNS(SVG_NAMESPACE, "rect");
				
				rect.setAttribute("x", x * svg_image_cube_size);
				rect.setAttribute("y", y * svg_image_cube_size);
				rect.setAttribute("height", svg_image_cube_size);
				rect.setAttribute("width", svg_image_cube_size);
				rect.setAttribute("fill", "#" + colors[color_number].toString());
				
				color_amounts[color_number] += 1;
				
				svg_image.appendChild(rect);
				
			}
		}
	}
	
	function createFillPattern() {
		
		color_amounts = [0, 0, 0, 0];
		svg_image.innerHTML = "";
		
		for(var x = 0; x < 6; x++) {
			
			for(var y = 0; y < 6; y++) {
			
				var rect = document.createElementNS(SVG_NAMESPACE, "rect");
				var color_number = 0;
				
				rect.setAttribute("x", x * svg_image_cube_size);
				rect.setAttribute("y", y * svg_image_cube_size);
				rect.setAttribute("height", svg_image_cube_size);
				rect.setAttribute("width", svg_image_cube_size);
				rect.setAttribute("fill", "#" + colors[color_number].toString());
				
				color_amounts[color_number] += 1;
				
				svg_image.appendChild(rect);
				
			}
		}
	}
	
	function createHourglassPattern() {
		
		color_amounts = [0, 0, 0, 0];
		svg_image.innerHTML = "";

		var color_array =  [3, 3, 3, 3, 3, 3,
							0, 3, 3, 3, 3, 0,
							0, 0, 3, 3, 0, 0,
							0, 0, 1, 1, 0, 0,
							0, 1, 1, 1, 1, 0,
							1, 1, 1, 1, 1, 1];

		for(var y = 0; y < 6; y++) {
			
			for(var x = 0; x < 6; x++) {
			
				var rect = document.createElementNS(SVG_NAMESPACE, "rect");

				var color_number = color_array[(y * 6) + x];
				
				rect.setAttribute("x", x * svg_image_cube_size);
				rect.setAttribute("y", y * svg_image_cube_size);
				rect.setAttribute("height", svg_image_cube_size);
				rect.setAttribute("width", svg_image_cube_size);
				rect.setAttribute("fill", "#" + colors[color_number].toString());
				
				color_amounts[color_number] += 1;
				
				svg_image.appendChild(rect);
				
			}
		}
		
	}
	
	function calculate_probabilities() {
		for(var i = 0; i < color_amounts.length; i++) {
			color_probabilities[i] = parseFloat((color_amounts[i] / 36).toFixed(3)) || 0;
		}
	}

	showPageUserInstructions();

	function showPageUserInstructions() {

		createRandomPattern();

		//color_amounts = [6, 5.99, 12, 12]; // for testing

		document.getElementById("user_inputs").style.display = "none";
		document.getElementById("user_instructions_and_user_inputs").style.display = "";

		buttonNext.onclick = showPageUserInputs;
	}
	
	function showPageUserInputs() {

		document.getElementById("user_inputs_amount_tries_message").style.display = "none";

		user_inputs_correct_result_message.style.display = "none";
		user_inputs_wrong_result_message.style.display = "none";

		document.getElementById("description1").style.display = "none";
		document.getElementById("description2").style.display = "";

		document.getElementById("user_instructions").style.display = "none";
		document.getElementById("user_inputs").style.display = "";

		buttonNext.onclick = evaluateInputs;
		
		// user inputs
		const input_r = document.getElementById("input_r");
		const input_g = document.getElementById("input_g");
		const input_b = document.getElementById("input_b");
		const input_v = document.getElementById("input_v");

		input_r.disabled = false;
		input_g.disabled = false;
		input_b.disabled = false;
		input_v.disabled = false;
		
		const total = document.getElementById("total");
		
		const probability_r = document.getElementById("probability_r");
		const probability_g = document.getElementById("probability_g");
		const probability_b = document.getElementById("probability_b");
		const probability_v = document.getElementById("probability_v");

		const user_inputs_result_message = document.getElementById("user_inputs_result_message");
		
		input_r.value = input_g.value = input_b.value = input_v.value = 0;
		probability_r.innerHTML = probability_g.innerHTML = probability_b.innerHTML = probability_v.innerHTML = 0;
		total.innerHTML = 0;
		
		var current_total = 0;
		var color_counts = [0, 0, 0, 0];
		var current_probabilities = [0, 0, 0, 0];
		var tries_user_inputs = 2;
		
		input_r.oninput = input_g.oninput = input_b.oninput = input_v.oninput = amountsChanged;
		
		function amountsChanged() {
			if(!(isNaN(input_r.value) || isNaN(input_g.value) || isNaN(input_b.value) || isNaN(input_v.value))) {
				
				current_total = (parseInt(input_r.value, 10) || 0) + (parseInt(input_g.value, 10) || 0) + (parseInt(input_b.value, 10) || 0) + (parseInt(input_v.value, 10) || 0);
				
				color_counts = [(parseInt(input_r.value, 10) || 0), (parseInt(input_g.value, 10) || 0), (parseInt(input_b.value, 10) || 0), (parseInt(input_v.value, 10) || 0)];
				
				current_probabilities[0] = probability_r.innerHTML = parseFloat((color_counts[0] / current_total).toFixed(3)) || 0;
				current_probabilities[1] = probability_g.innerHTML = parseFloat((color_counts[1] / current_total).toFixed(3)) || 0;
				current_probabilities[2] = probability_b.innerHTML = parseFloat((color_counts[2] / current_total).toFixed(3)) || 0;
				current_probabilities[3] = probability_v.innerHTML = parseFloat((color_counts[3] / current_total).toFixed(3)) || 0;
				
				if(current_total <= 36) {

					total.innerHTML = current_total;
					total.style.color = "black";
					
					/*
					if(current_total == 36) {
						total.style.color = "green";
					} else {
						total.style.color = "red";
					}
					*/

				} else {
					
					total.innerHTML = ">36";
					total.style.color = "red";
				}
			}
		}
		
		function evaluateInputs() {

			user_inputs_amount_tries_message.style.display = "";

			tries_user_inputs--;

			calculate_probabilities();

			function evaluate() {

				if(current_total == 36) {

					for(var i = 0; i < color_amounts.length; i++) {
						if(color_amounts[i] != color_counts[i]) {
							return false;
						}
					}
					return true;

				} else {
					return false;
				}

			}

			if(evaluate()) {

				user_inputs_wrong_result_message.style.display = "none";
				user_inputs_correct_result_message.style.display = "";
				user_inputs_amount_tries_message.style.display = "none";

				probability_r.style.color = "green";
				probability_g.style.color = "green";
				probability_b.style.color = "green";
				probability_v.style.color = "green";

				input_r.disabled = true;
				input_g.disabled = true;
				input_b.disabled = true;
				input_v.disabled = true;

				showPageCorrectInputs();

			} else {
				
				user_inputs_wrong_result_message.style.display = "";
				
				if(current_probabilities[0] == color_probabilities[0]) {
					probability_r.style.color = "green";
				} else {
					probability_r.style.color = "red";
				}
				
				if(current_probabilities[1] == color_probabilities[1]) {
					probability_g.style.color = "green";
				} else {
					probability_g.style.color = "red";
				}
				
				if(current_probabilities[2] == color_probabilities[2]) {
					probability_b.style.color = "green";
				} else {
					probability_b.style.color = "red";
				}
				
				if(current_probabilities[3] == color_probabilities[3]) {
					probability_v.style.color = "green";
				} else {
					probability_v.style.color = "red";
				}
				
				user_inputs_amount_tries.innerHTML = tries_user_inputs;

				if(tries_user_inputs > 0) {
					buttonNext.onclick = evaluateInputs;
				} else {

					input_r.disabled = true;
					input_g.disabled = true;
					input_b.disabled = true;
					input_v.disabled = true;

					user_inputs_amount_tries_message.style.display = "none";
					buttonNext.onclick = showPageCorrectInputs;
				}

			}

		}

		function showPageCorrectInputs() {
			user_inputs_wrong_result_message.style.display = "none";

            input_r.style.color = "green";
			input_g.style.color = "green";
			input_b.style.color = "green";
			input_v.style.color = "green";

			input_r.value = color_amounts[0];
			input_g.value = color_amounts[1];
			input_b.value = color_amounts[2];
			input_v.value = color_amounts[3];

			probability_r.style.color = "green";
			probability_g.style.color = "green";
			probability_b.style.color = "green";
			probability_v.style.color = "green";

			probability_r.innerHTML = color_probabilities[0];
			probability_g.innerHTML = color_probabilities[1];
			probability_b.innerHTML = color_probabilities[2];
			probability_v.innerHTML = color_probabilities[3];

			total.style.color = "green";
			total.innerHTML = "36";

			buttonNext.onclick = showPageEncoding;
		}
	}
	
	function showPageEncoding() {

		encoding_probability10.style.display = "none";
		encoding_amount_tries_message.style.display = "none";

		user_inputs_correct_result_message.style.display = "none";

		document.getElementById("encoding_correct_result_message").style.display = "none";
		document.getElementById("encoding_wrong_result_message").style.display = "none";

		svg_encoding = document.getElementById("svg_encoding");

		document.getElementById("description2").style.display = "none";
		document.getElementById("description3").style.display = "";
		
		document.getElementById("encoding_number3_1").style.display = "none";
		document.getElementById("encoding_number3_2").style.display = "none";
		
		document.getElementById("user_instructions_and_user_inputs").style.display = "none";

		document.getElementById("encoding").style.display = "flex";
		
		const encoding_probability_r = document.getElementById("encoding_probability_r");
		const encoding_probability_g = document.getElementById("encoding_probability_g");
		const encoding_probability_b = document.getElementById("encoding_probability_b");
		const encoding_probability_v = document.getElementById("encoding_probability_v");
		
		encoding_probability_r.innerHTML = parseFloat((color_amounts[0] / 36).toFixed(3));
		encoding_probability_g.innerHTML = parseFloat((color_amounts[1] / 36).toFixed(3));
		encoding_probability_b.innerHTML = parseFloat((color_amounts[2] / 36).toFixed(3));
		encoding_probability_v.innerHTML = parseFloat((color_amounts[3] / 36).toFixed(3));
		
		const encoding_codeword_r = document.getElementById("encoding_codeword_r");
		const encoding_codeword_g = document.getElementById("encoding_codeword_g");
		const encoding_codeword_b = document.getElementById("encoding_codeword_b");
		const encoding_codeword_v = document.getElementById("encoding_codeword_v");

		encoding_codeword_r.innerHTML = "";
		encoding_codeword_g.innerHTML = "";
		encoding_codeword_b.innerHTML = "";
		encoding_codeword_v.innerHTML = "";
		
		svg_image_encoding = svg_image.cloneNode(true);
		svg_image_encoding.id = "svg_image_encoding";
		svg_image_encoding.style.display = "block";
		document.getElementById("encoding_image_container").appendChild(svg_image_encoding);
		
		color_probabilities.sort((a, b) => a - b);
		
		current_encoding[0].p = parseFloat((color_amounts[0] / 36).toFixed(3));
		current_encoding[1].p = parseFloat((color_amounts[1] / 36).toFixed(3));
		current_encoding[2].p = parseFloat((color_amounts[2] / 36).toFixed(3));
		current_encoding[3].p = parseFloat((color_amounts[3] / 36).toFixed(3));
		
		current_encoding.sort((a, b) => a.p - b.p);
		
		const input1 = document.getElementById("encoding_probability_input1");
		const input2 = document.getElementById("encoding_probability_input2");
		const input3 = document.getElementById("encoding_probability_input3");
		const input4 = document.getElementById("encoding_probability_input4");

		input1.disabled = false;
		input2.disabled = false;
		input3.disabled = false;
		input4.disabled = false;

		input1.style.color = "black";
		input2.style.color = "black";
		input3.style.color = "black";
		input4.style.color = "black";
		
		input1.value = input2.value = input3.value = input4.value = "";
		
		const encoding_number1_1 = document.getElementById("encoding_number1_1");
		const encoding_number1_2 = document.getElementById("encoding_number1_2");
		const encoding_number1_3 = document.getElementById("encoding_number1_3");
		const encoding_number1_4 = document.getElementById("encoding_number1_4");
		
		const encoding_probability5 = document.getElementById("encoding_probability5");
		const encoding_probability6 = document.getElementById("encoding_probability6");
		const encoding_probability7 = document.getElementById("encoding_probability7");
		
		const encoding_number2_1 = document.getElementById("encoding_number2_1");
		const encoding_number2_2 = document.getElementById("encoding_number2_2");
		const encoding_number2_3 = document.getElementById("encoding_number2_3");
		
		const encoding_checkbox_input1 = document.getElementById("encoding_checkbox_input1");
		const encoding_checkbox_input2 = document.getElementById("encoding_checkbox_input2");
		const encoding_checkbox_input3 = document.getElementById("encoding_checkbox_input3");
		
		const encoding_probability8 = document.getElementById("encoding_probability8");
		const encoding_probability9 = document.getElementById("encoding_probability9");
		
		const encoding_number_input1 = document.getElementById("encoding_number_input1");
		const encoding_number_input2 = document.getElementById("encoding_number_input2");
		
		encButtonNext.onclick = evaluateProbabilities;

		function drawLine(x1, y1, x2, y2) {

			var line = document.createElementNS("http://www.w3.org/2000/svg","line");

			line.setAttribute("x1", x1);
			line.setAttribute("y1", y1);
			line.setAttribute("x2", x2);
			line.setAttribute("y2", y2);
			line.setAttribute("stroke", "black");

			document.getElementById("encoding_container").append(line);
		}

		function drawLine2(element1, element2) {

			var rect_svg = document.getElementById("encoding_container").getBoundingClientRect();
			
			var rect1 = element1.getBoundingClientRect();
			var x1 = rect1.left + (rect1.width / 2) - rect_svg.left;
			var y1 = rect1.top + (rect1.height / 2) - rect_svg.top;

			var rect2 = element2.getBoundingClientRect();
			var x2 = rect2.left + (rect2.width / 2) - rect_svg.left;
			var y2 = rect2.top + (rect2.height / 2) - rect_svg.top;

			drawLine(x1, y1, x2, y2);

		}

		function drawLine3(element1, x2, y2) {

			var rect_svg = svg_encoding.getBoundingClientRect();
			
			var rect1 = element1.getBoundingClientRect();
			var x1 = rect1.left + (rect1.width / 2) - rect_svg.left;
			var y1 = rect1.top + (rect1.height / 2) - rect_svg.top;

			drawLine(x1, y1, x2, y2);

		}

		var tries_encoding_probabilities = 2;
		
		function evaluateProbabilities() {

			tries_encoding_probabilities--;

			if(input1.value == color_probabilities[0] && input2.value == color_probabilities[1] && input3.value == color_probabilities[2] && input4.value == color_probabilities[3]) {

				console.log("Richtig");
				document.getElementById("encoding_correct_result_message").style.display = "";
				encoding_amount_tries_message.style.display = "none";
				showCorrectProbabilities();
		
			} else {

				console.log("Leider Falsch");
				document.getElementById("encoding_wrong_result_message").style.display = "";

				if(tries_encoding_probabilities > 0) {
					encoding_amount_tries_message.style.display = "";
					encoding_amount_tries.innerHTML = tries_encoding_probabilities;
					encButtonNext.onclick = evaluateProbabilities;

				} else {
					encoding_amount_tries_message.style.display = "none";

					input1.disabled = true;
					input2.disabled = true;
					input3.disabled = true;
					input4.disabled = true;

					if(input1.value == color_probabilities[0]) {
						input1.style.color = "green";
					} else {
						input1.style.color = "red";
					}
					if(input2.value == color_probabilities[1]) {
						input2.style.color = "green";
					} else {
						input2.style.color = "red";
					}
					if(input3.value == color_probabilities[2]) {
						input3.style.color = "green";
					} else {
						input3.style.color = "red";
					}
					if(input4.value == color_probabilities[3]) {
						input4.style.color = "green";
					} else {
						input4.style.color = "red";
					}

					encButtonNext.onclick = showCorrectProbabilities;
				}
			}
						
		}

		function showCorrectProbabilities() {

			encoding_wrong_result_message.style.display = "none";

			input1.style.color = "green";
			input2.style.color = "green";
			input3.style.color = "green";
			input4.style.color = "green";

			input1.value = color_probabilities[0];
			input2.value = color_probabilities[1];
			input3.value = color_probabilities[2];
			input4.value = color_probabilities[3];

			encButtonNext.onclick = showCheckboxes;

		}
		
		function showCheckboxes() {

			encoding_checkbox_input1.disabled = false;
			encoding_checkbox_input2.disabled = false;
			encoding_checkbox_input3.disabled = false;

			encoding_checkbox_input1.checked = false;
			encoding_checkbox_input2.checked = false;
			encoding_checkbox_input3.checked = false;

			document.getElementById("encoding_correct_result_message").style.display = "none";
			document.getElementById("encoding_wrong_result_message").style.display = "none";

			document.getElementById("encoding_probability_input1").style.color = current_encoding[0].color;
			document.getElementById("encoding_probability_input2").style.color = current_encoding[1].color;
			document.getElementById("encoding_probability_input3").style.color = current_encoding[2].color;
			document.getElementById("encoding_probability_input4").style.color = current_encoding[3].color;

			document.getElementById("description3").style.display = "none";
			document.getElementById("description4").style.display = "";

			drawLine2(encoding_probability_input1, encoding_probability5);
			drawLine2(encoding_probability_input2, encoding_probability5);
			drawLine2(encoding_probability_input3, encoding_probability6);
			drawLine2(encoding_probability_input4, encoding_probability7);
			
			if(color_probabilities[0] <= color_probabilities[1]) {
				encoding_number1_1.innerHTML = "1";
				encoding_number1_2.innerHTML = "0";
				current_encoding[0].code = "1";
				current_encoding[1].code = "0";
			} else {
				encoding_number1_1.innerHTML = "0";
				encoding_number1_2.innerHTML = "1";
				current_encoding[0].code = "0";
				current_encoding[1].code = "1";
			}
			encoding_number1_3.innerHTML = "";
			encoding_number1_4.innerHTML = "";
			
			color_probabilities[1] = parseFloat((color_probabilities[0] + color_probabilities[1]).toFixed(3));
			color_probabilities.splice(0, 1);
			
			encoding_probability5.style.color = "black";
			encoding_probability6.style.color = current_encoding[2].color;
			encoding_probability7.style.color = current_encoding[3].color;

			encoding_probability5.innerHTML = color_probabilities[0];
			encoding_probability6.innerHTML = color_probabilities[1];
			encoding_probability7.innerHTML = color_probabilities[2];
			
			document.getElementById("encoding_row2_3").style.display = "flex";
			
			updateCodeWords();
			
			encButtonNext.onclick = evaluateCheckboxes;
		}

		var left = true;
		var tries_encoding_checkboxes = 2;
		
		function evaluateCheckboxes() {

			tries_encoding_checkboxes--;

			function evaluate() {

				if(color_probabilities[0] < color_probabilities[2]) {

					left = true;

					if(encoding_checkbox_input1.checked == true && encoding_checkbox_input2.checked == true && encoding_checkbox_input3.checked == false) {
						return true;
					}
					return false;
					
				} else if(color_probabilities[0] > color_probabilities[2]) {

					left = false;

					if(encoding_checkbox_input2.checked == true && encoding_checkbox_input3.checked == true && encoding_checkbox_input1.checked == false) {
						return true;
					}
					return false;

				} else {

					if(encoding_checkbox_input2.checked == true && encoding_checkbox_input3.checked == true && encoding_checkbox_input1.checked == false) {

						left = false;
						return true;
					}

					if(encoding_checkbox_input1.checked == true && encoding_checkbox_input2.checked == true && encoding_checkbox_input3.checked == false) {

						left = true;
						return true;
					}
				}
			}
			
			if(evaluate()) {

				console.log("Richtig");
				document.getElementById("encoding_correct_result_message").style.display = "";
				showCorrectCheckboxes();

			} else {

				console.log("Falsch");

				if(tries_encoding_checkboxes > 0) {
					encoding_amount_tries_message.style.display = "";
					encoding_amount_tries.innerHTML = tries_encoding_checkboxes;
					document.getElementById("encoding_wrong_result_message").style.display = "";
				} else {
					encoding_amount_tries_message.style.display = "none";
					encButtonNext.onclick = showCorrectCheckboxes;
				}
				
			}
			
			updateCodeWords();

		}

		function showCorrectCheckboxes() {

			encoding_amount_tries_message.style.display = "none";
			encoding_wrong_result_message.style.display = "none";

			encoding_checkbox_input1.disabled = true;
			encoding_checkbox_input2.disabled = true;
			encoding_checkbox_input3.disabled = true;

			if(left) {

				encoding_checkbox_input1.checked = true;
				encoding_checkbox_input2.checked = true;
				encoding_checkbox_input3.checked = false
				
				
			} else {

				encoding_checkbox_input2.checked = true;
				encoding_checkbox_input3.checked = true;
				encoding_checkbox_input1.checked = false;
				
			}

			encButtonNext.onclick = showNumbers;
		}
		
		function showNumbers() {

			encoding_number_input1.disabled = false;
			encoding_number_input2.disabled = false;

			document.getElementById("encoding_correct_result_message").style.display = "none";
			document.getElementById("encoding_wrong_result_message").style.display = "none";

			document.getElementById("description4").style.display = "none";
			document.getElementById("description5").style.display = "";

			drawLine2(encoding_probability5, encoding_probability8);
			drawLine2(encoding_probability7, encoding_probability9);

			if(left) {
				drawLine2(encoding_probability6, encoding_probability8);
				encoding_probability8.style.color = "black";
				encoding_probability9.style.color = current_encoding[3].color;
			} else {
				drawLine2(encoding_probability6, encoding_probability9);
				encoding_probability8.style.color = "black";
				encoding_probability9.style.color = "black";
			}

			document.getElementById("encoding_row2_3").style.display = "none";
			
			if(left) {

				encoding_probability8.innerHTML = parseFloat((color_probabilities[0] + color_probabilities[1]).toFixed(3));
				encoding_probability9.innerHTML = parseFloat((color_probabilities[2]).toFixed(3));

				if(color_probabilities[0] <= color_probabilities[1]) {
					encoding_number2_1.innerHTML = "1";
					encoding_number2_2.innerHTML = "0";
					current_encoding[0].code = "1" + current_encoding[0].code;
					current_encoding[1].code = "1" + current_encoding[1].code;
					current_encoding[2].code = "0" + current_encoding[2].code;
				} else {
					encoding_number2_1.innerHTML = "0";
					encoding_number2_2.innerHTML = "1";
					current_encoding[0].code = "0" + current_encoding[0].code;
					current_encoding[1].code = "0" + current_encoding[1].code;
					current_encoding[2].code = "1" + current_encoding[2].code;
				}

				color_probabilities[1] = parseFloat((color_probabilities[0] + color_probabilities[1]).toFixed(3));
				color_probabilities.splice(0, 1);

			} else {

				encoding_probability8.innerHTML = parseFloat((color_probabilities[0]).toFixed(3));
				encoding_probability9.innerHTML = parseFloat((color_probabilities[1] + color_probabilities[2]).toFixed(3));

				if(color_probabilities[1] <= color_probabilities[2]) {
					encoding_number2_2.innerHTML = "1";
					encoding_number2_3.innerHTML = "0";
					current_encoding[2].code = "1" + current_encoding[2].code;
					current_encoding[3].code = "0" + current_encoding[3].code;
				} else {
					encoding_number2_2.innerHTML = "0";
					encoding_number2_3.innerHTML = "1";
					current_encoding[2].code = "0" + current_encoding[2].code;
					current_encoding[3].code = "1" + current_encoding[3].code;
				}
				
				color_probabilities[1] = parseFloat((color_probabilities[1] + color_probabilities[2]).toFixed(3));
				color_probabilities.splice(2, 1);
			}
			
			encoding_number_input1.value = "";
			encoding_number_input1.style.display = "block";
			encoding_number_input2.value = "";
			encoding_number_input2.style.display = "block";
			
			updateCodeWords();
			
			encButtonNext.onclick = evaluateNumbers;
		}

		var tries_encoding_numbers = 2;
		
		function evaluateNumbers() {

			tries_encoding_numbers--;
			
			function evaluate() {
				
				if(color_probabilities[0] < color_probabilities[1]) {

					if(encoding_number_input1.value == "1" && encoding_number_input2.value == "0") {
						console.log("Richtig");
						document.getElementById("encoding_correct_result_message").style.display = "";
						return true;
					} else {
						console.log("Leider Falsch");
						document.getElementById("encoding_wrong_result_message").style.display = "";
						return false;
					}
	
				} else if (color_probabilities[0] > color_probabilities[1]) {
	
					if(encoding_number_input1.value == "0" && encoding_number_input2.value == "1") {
						console.log("Richtig");
						document.getElementById("encoding_correct_result_message").style.display = "";
						return true;
					} else {
						console.log("Leider Falsch");
						document.getElementById("encoding_wrong_result_message").style.display = "";
						return false;
					}
				} else {

					if((encoding_number_input1.value == "0" && encoding_number_input2.value == "1") || (encoding_number_input1.value == "1" && encoding_number_input2.value == "0")) {
						console.log("Richtig");
						document.getElementById("encoding_correct_result_message").style.display = "";
						return true;
					} else {
						console.log("Leider Falsch");
						document.getElementById("encoding_wrong_result_message").style.display = "";
						return false;
					}

				}
			}

			if(evaluate()) {
				encoding_correct_result_message.style.display = "";
				showCorrectNumbers();

			} else {

				if(tries_encoding_numbers > 0) {
					encoding_amount_tries_message.style.display = "";
					encoding_amount_tries.innerHTML = tries_encoding_numbers;
					document.getElementById("encoding_wrong_result_message").style.display = "";
				} else {
					encoding_amount_tries_message.style.display = "none";
					encButtonNext.onclick = showCorrectNumbers;
				}
				
			}
		}

		function showCorrectNumbers() {

			if(color_probabilities[0] <= color_probabilities[1]) {

				encoding_number_input1.value = "1";
				encoding_number_input1.disabled = true;
				encoding_number_input2.value = "0";
				encoding_number_input2.disabled = true;

				if(left) {
					current_encoding[0].code = "1" + current_encoding[0].code;
					current_encoding[1].code = "1" + current_encoding[1].code;
					current_encoding[2].code = "1" + current_encoding[2].code;
					current_encoding[3].code = "0" + current_encoding[3].code;
				} else {
					current_encoding[0].code = "1" + current_encoding[0].code;
					current_encoding[1].code = "1" + current_encoding[1].code;
					current_encoding[2].code = "0" + current_encoding[2].code;
					current_encoding[3].code = "0" + current_encoding[3].code;
				}

			} else {

				encoding_number_input1.value = "0";
				encoding_number_input1.disabled = true;
				encoding_number_input2.value = "1";
				encoding_number_input2.disabled = true;

				if(left) {
					current_encoding[0].code = "0" + current_encoding[0].code;
					current_encoding[1].code = "0" + current_encoding[1].code;
					current_encoding[2].code = "0" + current_encoding[2].code;
					current_encoding[3].code = "1" + current_encoding[3].code;
				} else {
					current_encoding[0].code = "0" + current_encoding[0].code;
					current_encoding[1].code = "0" + current_encoding[1].code;
					current_encoding[2].code = "1" + current_encoding[2].code;
					current_encoding[3].code = "1" + current_encoding[3].code;
				}
			}

			updateCodeWords();

			encoding_amount_tries_message.style.display = "none";
			encoding_wrong_result_message.style.display = "none";

			encoding_number_input1.style.display = "none";
			encoding_number_input2.style.display = "none";

			encoding_number3_1.innerHTML = encoding_number_input1.value;
			encoding_number3_2.innerHTML = encoding_number_input2.value;

			encoding_number3_1.style.display = "";
			encoding_number3_2.style.display = "";

			encoding_probability10.style.display = "";

			document.getElementById("description5").style.display = "none";
			document.getElementById("description6").style.display = "";

			//drawLine3(encoding_probability8, 315, 460);
			//drawLine3(encoding_probability9, 315, 460);

			drawLine2(encoding_probability8, encoding_probability10);
			drawLine2(encoding_probability9, encoding_probability10);

			encButtonNext.onclick = showPageConclusion;
		}
		
		function updateCodeWords() {
			
			encoding_codeword_r.innerHTML = current_encoding.filter(color => color.name == "r")[0].code;
			encoding_codeword_g.innerHTML = current_encoding.filter(color => color.name == "g")[0].code;
			encoding_codeword_b.innerHTML = current_encoding.filter(color => color.name == "b")[0].code;
			encoding_codeword_v.innerHTML = current_encoding.filter(color => color.name == "v")[0].code;

		}
		
		function showPageConclusion() {

			document.getElementById("encoding_correct_result_message").style.display = "none";

			document.getElementById("color_symbols").style.display = "none";
			
			document.getElementById("description").style.display = "none";
			document.getElementById("encoding_image_container").className = "encoding_image_container_left";
			document.getElementById("encoding_probability_container").className = "encoding_probability_container_left";
			document.getElementById("encoding_codewords_container").className = "encoding_codewords_container_left";
			
			var amount_r = document.getElementById("amount_r").innerHTML = color_amounts[0];
			var amount_g = document.getElementById("amount_g").innerHTML = color_amounts[1];
			var amount_b = document.getElementById("amount_b").innerHTML = color_amounts[2];
			var amount_v = document.getElementById("amount_v").innerHTML = color_amounts[3];
			
			var codelength_r = document.getElementById("codelength_r").innerHTML = encoding_codeword_r.innerHTML.length;
			var codelength_g = document.getElementById("codelength_g").innerHTML = encoding_codeword_g.innerHTML.length;
			var codelength_b = document.getElementById("codelength_b").innerHTML = encoding_codeword_b.innerHTML.length;
			var codelength_v = document.getElementById("codelength_v").innerHTML = encoding_codeword_v.innerHTML.length;
			
			var compressed_size = document.getElementById("compressed").innerHTML = amount_r * codelength_r + amount_g * codelength_g + amount_b * codelength_b + amount_v * codelength_v;
			
			document.getElementById("compression_factor").innerHTML = parseFloat((72 / compressed_size).toFixed(2));
			
			document.getElementById("encoding_summary_container").style.display = "flex";
			
			encButtonNext.style.display = "none";

			buttonAgain.onclick = function() {

				document.getElementById("encoding_container").style.display = "none";
				document.getElementById("encoding_summary_container").style.display = "none";
				document.getElementById("user_instructions").style.display = "";
				encButtonNext.style.display = "";

				total.style.color = "black";
				probability_r.style.color = "black";
				probability_g.style.color = "black";
				probability_b.style.color = "black";
				probability_v.style.color = "black";

				svg_encoding.innerHTML = "";

				description6.style.display = "none";
				description1.style.display = "";
				description.style.display = "";
				color_symbols.style.display = "";

				document.getElementById("encoding_codewords_container").className = "encoding_codewords_container";
				document.getElementById("encoding_probability_container").className = "encoding_probability_container";
				document.getElementById("encoding_image_container").className = "encoding_image_container";
				document.getElementById("encoding_image_container").innerHTML = "";

				current_encoding = [{name: "r", p: 0, code: "", color: "#e16d28"}, {name: "g", p: 0, code: "", color: "#8fcb54"},
									{name: "b", p: 0, code: "", color: "#569cb4"}, {name: "v", p: 0, code: "", color: "#8e7397"}];

				encoding_probability5.innerHTML = "";
				encoding_probability6.innerHTML = "";
				encoding_probability7.innerHTML = "";
				encoding_probability8.innerHTML = "";
				encoding_probability9.innerHTML = "";

				encoding_number1_1.innerHTML = "";
				encoding_number1_2.innerHTML = "";
				encoding_number2_1.innerHTML = "";
				encoding_number2_2.innerHTML = "";
				encoding_number2_3.innerHTML = "";
				encoding_number3_1.innerHTML = "";
				encoding_number3_2.innerHTML = "";

				// reset all other values

				showPageUserInstructions();

			}

		}
	}
	
});