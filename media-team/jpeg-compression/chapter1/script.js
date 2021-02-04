document.addEventListener("DOMContentLoaded", function() {

	var helpShown = false;
	help.style.display = "none";
	buttonShowHelp.onclick = function() {
		if(!helpShown) {
			help.style.display = "";
			help_icon.innerHTML = "X";
			helpShown = true;
		} else {
			help.style.display = "none";
			help_icon.innerHTML = "?";
			helpShown = false;
		}
	}
	
	var current_image_section = 1;
	buttonImageSectionSelection1.disabled = true;
	buttonImageSectionSelection1.className = "selected";
	
	image_section_selection.style.display = "none";
	
	buttonShowImageSectionSelection.onclick = function() {
		buttonShowImageSectionSelection.style.display = "none";
		image_section_selection.style.display = "";
	}
	
	buttonHideImageSectionSelection.onclick = function() {
		image_section_selection.style.display = "none";
		buttonShowImageSectionSelection.style.display = "";
	}
	
	buttonImageSectionSelection1.onclick = function() {
		this.disabled = true;
		buttonImageSectionSelection2.disabled = false;
		buttonImageSectionSelection1.className = "selected";
		buttonImageSectionSelection2.className = "";
		current_image_section = 1;
	}
	
	buttonImageSectionSelection2.onclick = function() {
		this.disabled = true;
		buttonImageSectionSelection1.disabled = false;
		buttonImageSectionSelection2.className = "selected";
		buttonImageSectionSelection1.className = "";
		current_image_section = 2;
	}
	
	var current_chapter = 1;
	
	showChapter1();
	
	selectChapter1div.className = "selected";
	
	selectChapter1div.onclick = function() {
		
		selected = selectChapter1div;
		
		selectChapter1div.className = "selected";
		selectChapter2div.className = "";
		selectChapter3div.className = "";
		selectChapter4div.className = "";
		selectChapter5div.className = "";
	}
	
	selectChapter2div.onclick = function() {
		
		selected = selectChapter2div;
		
		selectChapter1div.className = "";
		selectChapter2div.className = "selected";
		selectChapter3div.className = "";
		selectChapter4div.className = "";
		selectChapter5div.className = "";
	}
	
	selectChapter3div.onclick = function() {
		
		selected = selectChapter3div;
		
		selectChapter1div.className = "";
		selectChapter2div.className = "";
		selectChapter3div.className = "selected";
		selectChapter4div.className = "";
		selectChapter5div.className = "";
	}
	
	selectChapter4div.onclick = function() {
		
		selected = selectChapter4div;
		
		selectChapter1div.className = "";
		selectChapter2div.className = "";
		selectChapter3div.className = "";
		selectChapter4div.className = "selected";
		selectChapter5div.className = "";
	}
	
	selectChapter5div.onclick = function() {
		
		selected = selectChapter5div;
		
		selectChapter1div.className = "";
		selectChapter2div.className = "";
		selectChapter3div.className = "";
		selectChapter4div.className = "";
		selectChapter5div.className = "selected";
	}
	
	var selected = selectChapter1div;
	
	selectChapter1div.onmouseover = selectChapter2div.onmouseover = selectChapter3div.onmouseover = selectChapter4div.onmouseover = selectChapter5div.onmouseover = function() {
		if(this != selected) {
			this.className = "selected";
			selected.className = "";
		}
	}
	
	selectChapter1div.onmouseout = selectChapter2div.onmouseout = selectChapter3div.onmouseout = selectChapter4div.onmouseout = selectChapter5div.onmouseout = function() {
		if(this != selected) {
			this.className = "";
			selected.className = "selected";
		}
	}
	
	/*
	section2.style.display = "none";
	section3.style.display = "none";
	section4.style.display = "none";
	*/
	
	function showChapter1() {
		
		var current_section = 1;
		
		showSection1();
		updateButtonStates();
		
		buttonSectionSelectionLeft.disabled = true;
		buttonSectionSelectionLeft.onclick = buttonPressLeft;
		buttonSectionSelectionRight.disabled = false;
		buttonSectionSelectionRight.onclick = buttonPressRight;
		
		function updateButtonStates() {
			
			if(current_section == 1) {
				buttonSectionSelectionLeft.disabled = true;
				buttonSectionSelectionRight.disabled = false;
			} else if(current_section == 4) {
				buttonSectionSelectionRight.disabled = true;
				buttonSectionSelectionLeft.disabled = false;
			} else {
				buttonSectionSelectionLeft.disabled = false;
				buttonSectionSelectionRight.disabled = false;
			}
			
			switch(current_section) {
				case 1: buttonShowSection1.className = "selected";
						buttonShowSection2.className = "";
						buttonShowSection3.className = "";
						buttonShowSection4.className = "";
					break;
				case 2: buttonShowSection1.className = "";
						buttonShowSection2.className = "selected";
						buttonShowSection3.className = "";
						buttonShowSection4.className = "";
					break;
				case 3: buttonShowSection1.className = "";
						buttonShowSection2.className = "";
						buttonShowSection3.className = "selected";
						buttonShowSection4.className = "";
					break;
				case 4: buttonShowSection1.className = "";
						buttonShowSection2.className = "";
						buttonShowSection3.className = "";
						buttonShowSection4.className = "selected";
					break;
			}
		}
		
		buttonShowSection1.onclick = function() {
			
			current_section = 1;
			showSection1();
			updateButtonStates();
		}
		
		buttonShowSection2.onclick = function() {
			
			current_section = 2;
			showSection2();
			updateButtonStates();
		}
		
		buttonShowSection3.onclick = function() {
			
			current_section = 3;
			showSection3();
			updateButtonStates();
		}
		
		buttonShowSection4.onclick = function() {
			
			current_section = 4;
			showSection4();
			updateButtonStates();
		}
		
		function buttonPressLeft() {
			
			if(current_section > 1) {
				current_section -= 1;
			}
			
			updateButtonStates();
			
			switch (current_section) {
				case 1: showSection1();
					break;
				case 2: showSection2();
					break;
				case 3: showSection3();
					break;
				case 4: showSection4();
					break;
				default: showSection1();
					break;
			}
			
		}
		
		function buttonPressRight() {
			
			if(current_section < 4) {
				current_section += 1;
			}
			
			updateButtonStates();
			
			switch (current_section) {
				case 1: showSection1();
					break;
				case 2: showSection2();
					break;
				case 3: showSection3();
					break;
				case 4: showSection4();
					break;
				default: showSection1();
					break;
			}
			
		}
		
		
		function showSection1() {
			
			current_section_heading.innerHTML = "1.1 Bedienungsanleitung";
			
			section1.style.display = "";
			section2.style.display = "none";
			section3.style.display = "none";
			section4.style.display = "none";			
			
		}
		
		function showSection2() {
			
			current_section_heading.innerHTML = "1.2 Ziel - Was soll mit JPEG erreicht werden?";
			
			section1.style.display = "none";
			section2.style.display = "";
			section3.style.display = "none";
			section4.style.display = "none";			
			
		}
		
		function showSection3() {
			
			current_section_heading.innerHTML = "1.3 Psychologische Grundlagen - Wie soll das Ziel von JPEG erreicht werden?";
			
			radioButtonOriginalImage.checked = true;
			
			section1.style.display = "none";
			section2.style.display = "none";
			section3.style.display = "";
			section4.style.display = "none";
			
			radioButtonOriginalImage.onchange = function() {
				
				image_manipulation_example.className = "";
				image_manipulation_explanation.innerHTML = "";
			}
			
			radioButtonColorChanged.onchange = function() {
				
				image_manipulation_example.className = "filter_color";
				image_manipulation_explanation.innerHTML = "Die Farbe ändert sich zwar leicht, aber der Gesamteindruck bleibt.";
			}
			
			radioButtonBrightnessChanged.onchange = function() {
				
				image_manipulation_example.className = "filter_brightness";
				image_manipulation_explanation.innerHTML = "Die Helligkeit ändert sich leicht, plötzlich sieht es aus wie Abend.";
			}
			
		}
		
		function showSection4() {
			
			current_section_heading.innerHTML = "1.4  Ablauf - Womit soll das Ziel von JPEG erreicht werden?";
			
			section1.style.display = "none";
			section2.style.display = "none";
			section3.style.display = "none";
			section4.style.display = "";			
			
		}
		
		
		
	}
	
});