document.addEventListener("DOMContentLoaded", function() {

	var num_sections;
	var current_section = 1;
	var current_chapter = 1;
	var current_image_section = 1;
	var currentChapter;
	var chapters = [jpeg_chapter1, jpeg_chapter2, jpeg_chapter3, jpeg_chapter4, jpeg_chapter5];
	const sectionButtons = [buttonShowSection1, buttonShowSection2, buttonShowSection3, buttonShowSection4, buttonShowSection5, buttonShowSection6, buttonShowSection7];
	const chapterButtons = [jpeg_selectChapter1div, jpeg_selectChapter2div, jpeg_selectChapter3div, jpeg_selectChapter4div, jpeg_selectChapter5div];
	
	jpeg_chapter2.style.display = "none";
	jpeg_chapter3.style.display = "none";
	jpeg_chapter4.style.display = "none";
	jpeg_chapter5.style.display = "none";

	buttonSectionSelectionLeft.disabled = true;
	buttonSectionSelectionLeft.onclick = buttonPressLeft;
	buttonSectionSelectionRight.disabled = false;
	buttonSectionSelectionRight.onclick = buttonPressRight;

	jpeg_selectChapter1div.className = "selected";
	
	jpeg_buttonImageSectionSelection1.disabled = true;
	jpeg_buttonImageSectionSelection1.className = "selected";
	
	jpeg_image_section_selection.style.display = "none";
	
	jpeg_buttonShowImageSectionSelection.onclick = function() {
		jpeg_buttonShowImageSectionSelection.style.display = "none";
		jpeg_image_section_selection.style.display = "";
	}
	
	jpeg_buttonHideImageSectionSelection.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
	}
	
	jpeg_buttonImageSectionSelection1.onclick = selectImage1 = function() {
		this.disabled = true;
		jpeg_buttonImageSectionSelection2.disabled = false;
		jpeg_buttonImageSectionSelection1.className = "selected";
		jpeg_buttonImageSectionSelection2.className = "";
		current_image_section = 1;
	}
	
	jpeg_buttonImageSectionSelection2.onclick = selectImage2 = function() {
		this.disabled = true;
		jpeg_buttonImageSectionSelection1.disabled = false;
		jpeg_buttonImageSectionSelection2.className = "selected";
		jpeg_buttonImageSectionSelection1.className = "";
		current_image_section = 2;
	}
	
	jpeg_selectChapter1div.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		selected = jpeg_selectChapter1div;
		currentChapter = showChapter1;
		current_chapter = 1;
		updateChapterButtons();
		showChapter();
		updateSectionButtons();
	}
	
	jpeg_selectChapter2div.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		selected = jpeg_selectChapter2div;
		currentChapter = showChapter2;
		current_chapter = 2;
		updateChapterButtons();
		showChapter();
		updateSectionButtons();
	}
	
	jpeg_selectChapter3div.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		selected = jpeg_selectChapter3div;
		currentChapter = showChapter3;
		current_chapter = 3;
		updateChapterButtons();
		showChapter();
		updateSectionButtons();
	}
	
	jpeg_selectChapter4div.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		selected = jpeg_selectChapter4div;
		currentChapter = showChapter4;
		current_chapter = 4;
		updateChapterButtons();
		showChapter();
		updateSectionButtons();
	}
	
	jpeg_selectChapter5div.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		selected = jpeg_selectChapter5div;
		currentChapter = showChapter5;
		current_chapter = 5;
		updateChapterButtons();
		showChapter();
		updateSectionButtons();
	}

	function updateChapterButtons() {
		for(var i = 0; i < chapterButtons.length; i++) {
			if(i != (current_chapter - 1)) {
				chapterButtons[i].className = "";
			} else {
				chapterButtons[i].style.display = "selected";
			}
		}
	}

	function updateSectionButtons() {
		for(var i = 0; i < sectionButtons.length; i++) {
			if(i < num_sections) {
				sectionButtons[i].style.display = "";
			} else {
				sectionButtons[i].style.display = "none";
			}
		}
	}
	
	var selected = jpeg_selectChapter1div;
	
	jpeg_selectChapter1div.onmouseover = jpeg_selectChapter2div.onmouseover = jpeg_selectChapter3div.onmouseover = jpeg_selectChapter4div.onmouseover = jpeg_selectChapter5div.onmouseover = function() {
		if(this != selected) {
			this.className = "selected";
			selected.className = "";
		}
	}
	
	jpeg_selectChapter1div.onmouseout = jpeg_selectChapter2div.onmouseout = jpeg_selectChapter3div.onmouseout = jpeg_selectChapter4div.onmouseout = jpeg_selectChapter5div.onmouseout = function() {
		if(this != selected) {
			this.className = "";
			selected.className = "selected";
		}
	}

	function updateButtonStates() {
			
		if(current_section == 1) {
			buttonSectionSelectionLeft.disabled = true;
			buttonSectionSelectionRight.disabled = false;
		} else if(current_section == num_sections) {
			buttonSectionSelectionRight.disabled = true;
			buttonSectionSelectionLeft.disabled = false;
		} else {
			buttonSectionSelectionLeft.disabled = false;
			buttonSectionSelectionRight.disabled = false;
		}

		for(var i = 0; i < sectionButtons.length; i++) {
			if(i != (current_section - 1)) {
				sectionButtons[i].className = "";
			} else {
				sectionButtons[i].className = "selected";
			}
		}
	}

	buttonShowSection1.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		current_section = 1;
		currentChapter.showSection1();
		updateButtonStates();
	}
	
	buttonShowSection2.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		current_section = 2;
		currentChapter.showSection2();
		updateButtonStates();
	}
	
	buttonShowSection3.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		current_section = 3;
		currentChapter.showSection3();
		updateButtonStates();
	}
	
	buttonShowSection4.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		current_section = 4;
		currentChapter.showSection4();
		updateButtonStates();
	}

	buttonShowSection5.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		current_section = 5;
		currentChapter.showSection5();
		updateButtonStates();
	}

	buttonShowSection6.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		current_section = 6;
		currentChapter.showSection6();
		updateButtonStates();
	}

	buttonShowSection7.onclick = function() {
		jpeg_image_section_selection.style.display = "none";
		jpeg_buttonShowImageSectionSelection.style.display = "";
		current_section = 7;
		currentChapter.showSection7();
		updateButtonStates();
	}

	function showChapter() {
		
		for(var i = 0; i < chapters.length; i++) {
			if(i != (current_chapter - 1)) {
				chapters[i].style.display = "none";
			} else {
				chapters[i].style.display = "";
			}
		}
		num_sections = currentChapter.num_sections;
		currentChapter.showSection1();
		current_section = 1;
		updateButtonStates();
	}

	function showSection() {
		switch (current_section) {
			case 1: currentChapter.showSection1();
				break;
			case 2: currentChapter.showSection2();
				break;
			case 3: currentChapter.showSection3();
				break;
			case 4: currentChapter.showSection4();
				break;
			default: currentChapter.showSection1();
				break;
		}
	}
	
	function buttonPressLeft() {
		
		if(current_section > 1) {
			current_section -= 1;
		}
		updateButtonStates();
		showSection();
	}
	
	function buttonPressRight() {
		
		if(current_section < num_sections) {
			current_section += 1;
		}
		updateButtonStates();
		showSection();
	}


	// ========== chapter1 ========== //
	showChapter1 = function() {
		
		num_sections = 4;
		const current_section_headings = ["1.1 Bedienungsanleitung",
										"1.2 Ziel - Was soll mit JPEG erreicht werden?",
										"1.3 Psychologische Grundlagen - Wie soll das Ziel von JPEG erreicht werden?",
										"1.4  Ablauf - Womit soll das Ziel von JPEG erreicht werden?"];

		function showSection(number) {
			for(var i = 1; i < num_sections + 1; i++) {
				if(i != number) {
					document.getElementById("jpeg_chapter1_section" + i).style.display = "none";
				} else {
					document.getElementById("jpeg_chapter1_section" + i).style.display = "";
				}
			}
		};	
		
		function showSection1() {

			jpeg_buttonShowImageSectionSelection.disabled = false;
			current_section_heading.innerHTML = "1.1 Bedienungsanleitung";
			showSection(1);
			
		}
		
		function showSection2() {
			
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "1.2 Ziel - Was soll mit JPEG erreicht werden?";
			showSection(2);
			
		}
		
		function showSection3() {
			
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "1.3 Psychologische Grundlagen - Wie soll das Ziel von JPEG erreicht werden?";
			jpeg_radioButtonOriginalImage.checked = true;
			showSection(3);
			
			jpeg_radioButtonOriginalImage.onchange = function() {
				
				image_manipulation_example.className = "";
				image_manipulation_explanation.innerHTML = "";
			}
			
			jpeg_radioButtonColorChanged.onchange = function() {
				
				image_manipulation_example.className = "filter_color";
				image_manipulation_explanation.innerHTML = "Die Farbe ändert sich zwar leicht, aber der Gesamteindruck bleibt.";
			}
			
			jpeg_radioButtonBrightnessChanged.onchange = function() {
				
				image_manipulation_example.className = "filter_brightness";
				image_manipulation_explanation.innerHTML = "Die Helligkeit ändert sich leicht, plötzlich sieht es aus wie Abend.";
			}
			
		}
		
		function showSection4() {
			
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "1.4  Ablauf - Womit soll das Ziel von JPEG erreicht werden?";
			showSection(4);			
			
		}
		
		return {
			showSection1: showSection1,
			showSection2: showSection2,
			showSection3: showSection3,
			showSection4: showSection4,
			num_sections: num_sections,
			current_section_headings: current_section_headings
		}

	}();

	// ========== chapter2 ========== //
	showChapter2 = function () {

		num_sections = 5;
		const current_section_headings = ["2.1 Bildaufbereitung: Übersicht",
										"2.2 Farbraumveränderung",
										"2.3 Unterabtastung der Farbwerte (Chrominanz-Subsampling)",
										"2.4 Indexverschiebung (Normalisierung)",
										"2.5 Blockbildung"];

		function showSection(number) {
			for(var i = 1; i < num_sections + 1; i++) {
				if(i != number) {
					document.getElementById("jpeg_chapter2_section" + i).style.display = "none";
				} else {
					document.getElementById("jpeg_chapter2_section" + i).style.display = "";
				}
			}
		};

		function showSection1() {
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "2.1 Bildaufbereitung: Übersicht";
			showSection(1);
		};

		function changeTableContent(tbody, matrixArray, numberImageSection, numberMatrix) {
			var lines = tbody.children;
			var matrix_size = lines.length;
			for(var i = 0; i < matrix_size; i++) {
				var table_cells = Array.from(lines[i].children);
				for(var j = 0; j < matrix_size; j++) {
					table_cells[j].innerHTML = matrixArray[numberImageSection * 6 + numberMatrix][i * matrix_size + j];
				}
			}
		}

		// section 2 matrices

		var matrix_2_2_R_1 = [
			181,187,195,212,211,220,222,229,233,233,234,235,244,248,232,210,
			191,185,195,215,215,221,223,231,232,235,242,244,246,248,237,226,
			191,182,195,218,215,218,226,241,239,242,244,249,255,237,192,215,
			196,175,193,208,211,219,225,233,240,250,253,251,254,239,162,203,
			184,177,192,209,211,214,220,237,239,250,255,254,255,254,226,294,
			171,172,183,198,208,217,215,234,240,246,252,254,254,255,252,230,
			161,167,180,189,197,206,210,232,235,241,250,254,255,253,254,253,
			158,164,175,187,193,207,198,226,242,236,240,250,252,255,254,251,
			155,158,181,195,195,207,167,200,165,205,245,249,254,253,252,248,
			156,156,184,194,194,205,172,177,116,170,255,254,255,255,251,252,
			168,165,192,199,207,210,177,174,102,168,255,254,255,255,255,252,
			181,178,197,205,213,226,194,186,133,189,252,254,255,252,255,255,
			191,185,202,206,215,217,217,229,242,247,242,247,255,254,255,255,
			153,157,165,174,187,193,201,207,214,215,217,223,231,233,235,247,
			105,121,134,143,156,166,178,182,186,192,193,200,210,212,210,214,
			166,178,192,199,206,210,218,230,231,235,230,224,230,230,228,226]
		
		var matrix_2_2_G_1 = [
			71,73,76,86,86,92,97,100,98,99,103,106,111,107,159,215,
			73,69,74,86,87,93,96,102,102,104,105,105,111,113,112,178,
			82,66,79,91,86,93,96,101,106,108,108,108,115,106,70,136,
			111,60,78,86,86,94,97,108,111,112,116,116,121,104,74,144,
			86,61,75,84,86,94,96,109,111,120,123,125,127,119,120,132,
			65,68,76,84,88,95,97,112,114,119,127,131,129,128,124,147,
			59,61,73,77,81,91,96,108,111,117,130,131,130,134,129,129,
			58,57,69,75,78,86,83,132,175,144,125,129,130,132,131,121,
			54,55,69,77,81,68,69,152,133,147,134,125,130,128,122,117,
			57,55,71,79,83,89,71,128,92,121,138,126,129,128,121,113,
			62,60,75,83,87,90,76,131,91,125,140,129,133,135,129,120,
			71,65,78,85,85,92,84,131,103,124,132,127,133,132,129,126,
			74,70,84,81,87,90,89,106,117,117,108,114,118,119,119,121,
			78,78,87,90,98,102,106,110,114,117,122,119,116,113,119,126,
			58,67,76,82,88,97,103,105,108,118,121,126,129,134,141,144,
			133,139,146,156,162,169,167,177,180,171,168,166,165,168,161,0]
		
		var matrix_2_2_B_1 = [
			38,40,45,52,49,55,60,61,61,63,64,66,73,73,149,221,
			40,38,44,47,50,56,56,61,66,65,62,68,74,74,74,171,
			51,35,46,51,45,53,61,68,65,71,68,67,73,67,36,111,
			78,33,49,55,49,56,61,67,72,74,75,75,78,63,46,117,
			56,37,49,55,57,58,59,74,74,80,77,83,89,77,82,108,
			39,39,47,49,56,61,63,78,79,84,89,91,88,87,79,101,
			38,37,49,47,48,55,61,70,77,79,90,91,91,94,90,85,
			37,33,42,46,49,56,53,97,135,107,82,84,90,88,84,74,
			33,32,42,44,47,59,39,117,105,111,91,81,84,84,78,72,
			32,31,47,48,48,57,43,102,85,94,97,81,88,85,79,73,
			36,32,47,50,55,56,47,105,89,105,99,90,99,92,84,75,
			43,38,47,49,48,55,49,101,86,94,89,86,97,91,84,76,
			48,40,47,43,51,50,45,66,74,76,69,76,75,77,77,77,
			48,50,55,54,57,60,67,75,81,77,81,76,71,78,85,93,
			23,33,41,40,40,46,52,52,56,61,81,67,68,78,86,94,
			108,111,119,128,125,129,128,133,132,127,116,113,107,99,92,0]
		
		var matrix_2_2_Y_1 = [
			100,103,108,119,119,126,130,134,134,134,137,140,146,145,179,214,
			104,100,106,120,121,127,129,135,136,138,141,142,147,148,145,191,
			111,97,109,124,119,125,130,139,141,143,144,145,152,140,102,156,
			132,91,109,118,119,127,131,140,145,148,152,151,155,139,97,158,
			111,92,107,118,120,125,128,143,145,154,157,158,160,154,147,147,
			93,95,104,114,120,127,128,144,147,152,160,163,161,161,157,166,
			87,89,102,107,111,121,126,140,144,149,161,163,162,165,161,161,
			85,86,97,105,109,118,113,156,190,167,154,160,161,163,162,154,
			81,83,99,108,111,120,94,162,139,160,162,157,161,160,155,151,
			83,82,102,109,112,120,98,139,98,132,168,159,162,161,155,150,
			90,88,106,113,119,122,102,140,94,135,169,161,165,165,161,154,
			100,95,110,116,119,127,112,144,110,140,163,160,165,163,161,158,
			106,100,115,114,121,123,122,138,149,151,143,149,154,154,154,156,
			97,98,106,111,119,124,129,135,140,141,145,145,145,144,149,158,
			68,79,89,95,102,111,119,121,125,133,135,141,146,150,155,159,
			140,147,156,165,170,176,177,187,189,188,180,177,177,178,173,173]
		
		var matrix_2_2_Cb_1 = [
			93,93,93,90,89,88,89,87,87,88,87,87,87,88,111,131,
			92,93,93,87,88,88,87,86,89,87,84,87,87,86,88,117,
			95,93,92,87,86,87,89,88,86,87,86,84,84,87,91,103,
			98,96,95,92,89,88,89,87,87,86,85,85,85,85,100,105,
			97,97,96,93,93,90,89,89,88,87,83,86,88,85,92,106,
			98,96,96,92,92,91,92,91,90,90,88,88,87,87,84,91,
			101,99,98,95,92,91,92,89,91,89,88,88,88,88,88,86,
			101,98,97,95,95,93,94,99,97,94,88,86,88,86,84,83,
			101,100,96,92,92,94,92,103,109,101,88,86,85,85,85,84,
			99,99,97,94,92,93,97,107,121,107,88,84,87,86,86,85,
			98,97,95,92,92,91,97,108,126,111,89,88,91,87,85,84,
			96,96,93,90,88,87,92,104,115,103,86,87,90,88,85,82,
			96,94,90,88,89,87,85,88,86,86,86,87,84,85,85,84,
			101,101,99,96,93,92,93,95,95,92,92,89,87,91,92,92,
			103,102,101,97,93,91,90,89,89,88,86,87,84,87,89,92,
			110,108,107,106,103,102,100,98,96,94,92,92,89,84,83,84]
		
		var matrix_2_2_Cr_1 = [
			185,187,190,193,193,195,193,195,198,197,196,195,197,201,165,126,
			189,188,190,195,195,195,194,195,195,196,199,200,198,198,193,152,
			185,188,188,194,195,193,195,200,197,198,199,201,201,196,191,169,
			173,187,182,191,193,193,194,193,195,200,199,198,197,198,174,159,
			179,187,188,192,192,190,193,194,195,196,197,195,195,198,184,160,
			183,182,183,187,190,191,189,191,193,194,193,192,193,194,195,173,
			180,182,183,186,188,188,187,193,192,193,191,192,193,190,193,193,
			179,183,183,186,187,190,187,177,164,177,188,192,192,193,193,196,
			180,181,186,189,187,189,179,154,146,159,186,193,193,194,196,197,
			179,180,186,188,186,188,180,154,140,154,189,195,194,194,196,200,
			183,182,188,188,190,190,180,151,133,151,188,193,191,191,194,197,
			185,186,190,190,195,198,185,157,144,162,191,194,191,191,194,196,
			188,187,190,193,194,194,195,192,193,196,198,197,199,198,199,198,
			167,169,169,172,175,176,178,179,180,180,178,183,189,190,188,191,
			154,157,159,161,165,166,169,170,171,169,168,169,173,171,166,167,
			146,149,153,152,153,151,156,158,157,161,163,161,165,164,167,165]
		
		var matrix_2_2_R_2 = [
			247,245,245,245,247,248,247,248,247,248,245,244,120,106,246,247,
			93,86,78,76,73,72,69,149,245,150,62,60,2,89,247,245,
			87,48,90,115,114,114,111,185,240,188,117,105,0,84,248,245,
			205,185,228,246,248,245,245,245,245,245,245,246,103,98,245,246,
			168,221,246,245,245,245,218,245,248,248,248,245,239,194,243,247,
			225,245,244,248,245,223,161,220,247,247,245,244,182,152,248,245,
			245,246,248,246,245,206,187,202,246,244,245,232,33,74,247,247,
			245,247,247,248,245,175,122,202,244,248,247,233,14,68,245,247,
			245,245,245,245,246,245,240,244,246,247,248,245,144,122,245,245,
			245,245,248,246,244,246,245,246,245,246,244,245,244,197,241,248,
			248,245,245,245,245,246,244,245,249,245,245,247,149,106,248,244,
			125,127,130,125,118,114,106,153,228,166,109,97,10,77,245,246,
			11,10,10,10,9,8,10,141,245,186,31,9,0,89,245,245,
			209,197,198,198,200,198,197,228,232,235,205,177,13,76,245,248,
			245,245,245,244,246,246,245,245,245,248,245,245,69,73,247,245,
			244,245,245,247,247,247,247,245,247,248,246,245,222,174,243,248] 
		
		var matrix_2_2_G_2 = [
			243,243,243,243,243,243,242,242,242,243,242,244,120,106,244,242,
			91,86,78,74,71,72,69,69,245,149,62,58,2,87,242,243,
			87,49,90,113,112,113,113,113,242,186,117,105,0,83,243,243,
			205,183,228,244,243,244,243,243,244,243,243,246,103,100,243,244,
			168,221,244,243,243,243,217,217,243,243,243,243,243,194,240,243,
			224,243,243,243,243,223,161,161,242,242,243,244,180,151,243,243,
			243,244,244,241,245,204,189,189,244,242,245,230,33,74,242,243,
			243,243,242,243,243,175,122,122,242,244,242,228,16,70,243,242,
			243,243,243,243,244,243,238,238,244,242,243,243,144,124,243,243,
			243,243,243,244,242,244,243,243,243,244,244,243,244,197,240,244,
			243,243,243,243,243,244,242,242,243,243,243,243,147,106,243,242,
			125,127,130,125,118,114,106,106,230,164,110,98,10,75,243,244,
			11,10,10,10,9,8,10,10,243,186,31,5,0,91,243,243,
			209,197,198,198,200,198,197,197,234,236,207,177,13,76,243,242,
			243,243,243,242,244,244,243,243,243,244,243,243,69,73,242,243,
			242,243,243,242,242,242,242,242,242,243,244,243,220,176,242,0]
		
		var matrix_2_2_B_2 = [
			218,220,222,220,218,223,220,223,220,221,223,218,118,108,221,220,
			92,86,78,77,72,74,71,145,221,147,62,61,2,88,222,222,
			87,53,88,114,115,109,112,187,218,189,117,105,2,79,221,218,
			205,184,218,221,221,223,222,220,223,222,218,222,103,99,222,221,
			166,219,219,220,218,222,215,220,221,221,221,222,220,192,221,218,
			219,220,222,223,222,221,159,218,220,220,220,218,185,149,223,222,
			220,221,219,219,221,205,188,204,223,219,219,218,35,74,220,218,
			220,218,220,221,218,177,120,202,221,219,220,222,15,69,222,220,
			220,220,218,218,221,220,217,222,223,222,221,220,142,121,222,220,
			220,220,221,221,219,221,222,223,218,219,218,220,220,199,219,219,
			221,220,220,220,220,221,219,220,217,222,220,218,148,106,221,221,
			125,127,130,125,118,114,106,153,219,167,112,100,10,78,218,223,
			11,10,10,10,9,8,8,139,220,186,29,4,0,90,220,218,
			209,197,198,198,200,198,197,225,221,220,206,179,11,76,222,218,
			220,220,220,219,221,221,220,218,222,219,218,218,69,73,222,222,
			219,220,220,220,220,220,220,220,222,221,221,222,223,173,221,0]
		
		var matrix_2_2_Y_2 = [
			241,240,241,240,241,242,240,242,240,241,240,241,119,106,241,240,
			91,86,77,74,71,72,69,149,242,149,62,58,1,87,241,241,
			87,49,89,113,112,112,112,185,238,186,117,105,0,82,241,240,
			205,183,226,241,241,241,241,240,241,241,240,243,103,99,241,241,
			167,220,241,240,240,241,217,240,241,241,241,241,239,193,238,241,
			223,240,240,242,241,222,160,219,240,240,240,241,181,151,242,241,
			240,241,242,239,242,204,188,202,242,239,242,229,33,74,240,241,
			240,241,240,241,240,175,121,201,240,242,240,228,15,69,241,240,
			240,240,240,240,241,240,236,240,242,241,241,240,143,123,241,240,
			240,240,241,241,239,241,241,242,240,241,241,240,241,197,237,242,
			241,240,240,240,240,241,239,240,241,241,240,241,147,106,241,240,
			125,126,130,125,117,113,106,153,228,164,109,97,10,75,240,242,
			10,10,10,10,9,7,9,140,240,186,30,6,0,90,240,240,
			208,197,198,198,200,198,197,227,231,233,206,177,12,76,241,241,
			240,240,240,239,241,241,240,240,241,242,240,240,69,73,241,241,
			239,240,240,240,240,240,240,240,241,241,241,241,220,175,239,241]
		
		var matrix_2_2_Cb_2 = [
			115,117,118,117,115,118,117,118,117,117,118,115,127,129,117,117,
			128,128,128,129,128,129,129,126,116,127,128,129,128,128,118,118,
			128,130,127,128,129,126,128,129,117,129,128,128,129,126,117,116,
			128,128,123,117,117,118,118,117,118,118,116,116,128,128,118,117,
			127,127,116,117,116,118,127,117,117,117,117,118,118,127,118,115,
			126,117,118,118,118,127,127,127,117,117,117,115,130,127,118,118,
			117,117,115,117,116,128,128,129,118,117,115,122,129,128,117,115,
			117,115,117,117,116,129,127,128,118,115,117,125,128,128,118,117,
			117,117,116,116,117,117,118,118,118,118,117,117,127,127,118,117,
			117,117,117,117,117,117,118,118,116,116,115,117,116,129,118,115,
			117,117,117,117,117,117,117,117,114,118,117,115,128,128,117,118,
			128,128,128,128,128,128,128,128,123,129,129,129,128,129,116,118,
			128,128,128,128,128,128,127,127,117,128,128,127,128,128,117,116,
			128,128,128,128,128,128,128,127,122,121,128,129,127,128,118,115,
			117,117,117,117,117,117,117,116,118,115,116,116,128,128,118,118,
			117,117,117,117,117,117,117,117,118,117,117,118,129,127,118,117]
		
		var matrix_2_2_Cr_2 = [
			132,130,130,130,132,132,132,132,132,132,131,130,128,128,130,132,
			128,128,128,128,128,128,128,128,129,128,128,128,128,128,132,130,
			128,128,128,128,128,128,128,128,128,128,128,128,128,128,132,131,
			128,128,128,130,132,130,130,130,130,130,131,129,128,128,130,130,
			128,128,131,130,131,130,128,130,132,132,132,130,128,128,131,132,
			128,130,130,132,130,128,128,128,132,132,130,130,128,128,132,130,
			130,130,132,132,129,128,128,128,130,130,130,129,128,128,132,132,
			130,132,132,132,131,128,128,128,130,132,132,130,128,128,130,132,
			130,130,131,131,130,130,130,130,130,132,132,130,128,128,130,130,
			130,130,132,130,130,130,130,130,131,131,130,130,129,128,130,132,
			132,130,130,130,130,130,130,130,133,130,130,132,128,128,132,130,
			128,128,128,128,128,128,128,128,128,128,128,128,128,128,131,130,
			128,128,128,128,128,128,128,128,130,128,128,130,128,128,130,131,
			128,128,128,128,128,128,128,128,128,128,128,128,128,128,130,132,
			130,130,130,130,130,130,130,131,130,132,131,131,128,128,132,130,
			130,130,130,132,132,132,132,130,132,132,130,130,128,128,130,132]

		const section2_matrices = [matrix_2_2_R_1, matrix_2_2_G_1, matrix_2_2_B_1, matrix_2_2_Y_1, matrix_2_2_Cb_1, matrix_2_2_Cr_1,
									matrix_2_2_R_2, matrix_2_2_G_2, matrix_2_2_B_2, matrix_2_2_Y_2, matrix_2_2_Cb_2, matrix_2_2_Cr_2];

		function showSection2() {

			jpeg_buttonShowImageSectionSelection.disabled = false;

			const images_1 = [jpeg_chapter2_2_image_R_1, jpeg_chapter2_2_image_G_1, jpeg_chapter2_2_image_B_1, jpeg_chapter2_2_image_Y_1, jpeg_chapter2_2_image_Cb_1, jpeg_chapter2_2_image_Cr_1];
			const images_2 = [jpeg_chapter2_2_image_R_2, jpeg_chapter2_2_image_G_2, jpeg_chapter2_2_image_B_2, jpeg_chapter2_2_image_Y_2, jpeg_chapter2_2_image_Cb_2, jpeg_chapter2_2_image_Cr_2];
			const tooltips = [jpeg_chapter2_2_tooltip_R, jpeg_chapter2_2_tooltip_G, jpeg_chapter2_2_tooltip_B, jpeg_chapter2_2_tooltip_Y, jpeg_chapter2_2_tooltip_Cb, jpeg_chapter2_2_tooltip_Cr];

			if(current_image_section == 1) {
				for(image of images_2) {
					image.style.display = "none";
				}
				for(image of images_1) {
					image.style.display = "";
				}
			} else {
				for(image of images_1) {
					image.style.display = "none";
				}
				for(image of images_2) {
					image.style.display = "";
				}
			}

			jpeg_buttonImageSectionSelection1.onclick = function() {
				for(image of images_2) {
					image.style.display = "none";
				}
				for(image of images_1) {
					image.style.display = "";
				}
				selectImage1();
				showTables();
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				for(image of images_1) {
					image.style.display = "none";
				}
				for(image of images_2) {
					image.style.display = "";
				}
				selectImage2();
				showTables();
			}

			for(tooltip of tooltips) {
				tooltip.style.display = "none";
			}

			jpeg_chapter2_2_tooltip_arrow.style.display = "none";

			for(image of images_1) {
				image.onmouseover = function() {
					tooltips[images_1.indexOf(this)].style.display = "";
				}
				image.onmouseout = function() {
					tooltips[images_1.indexOf(this)].style.display = "none";
				}
			}

			jpeg_chapter2_2_arrow.onmouseover = function() {
				jpeg_chapter2_2_tooltip_arrow.style.display = "";
			}

			jpeg_chapter2_2_arrow.onmouseout = function() {
				jpeg_chapter2_2_tooltip_arrow.style.display = "none";
			}

			for(image of images_2) {
				image.onmouseover = function() {
					tooltips[images_2.indexOf(this)].style.display = "";
				}
				image.onmouseout = function() {
					tooltips[images_2.indexOf(this)].style.display = "none";
				}
			}

			const tables = [jpeg_chapter2_2_matrix_table_content_R, jpeg_chapter2_2_matrix_table_content_G, jpeg_chapter2_2_matrix_table_content_B,
				jpeg_chapter2_2_matrix_table_content_Y, jpeg_chapter2_2_matrix_table_content_Cb, jpeg_chapter2_2_matrix_table_content_Cr];

			function showTables() {
				for(table of tables) {
					changeTableContent(table, section2_matrices, current_image_section - 1, tables.indexOf(table));
				}
			}
			showTables();

			current_section_heading.innerHTML = "2.2 Farbraumveränderung";
			showSection(2);

		};

		const descriptions = [jpeg_chapter2_3_description1, jpeg_chapter2_3_description2, jpeg_chapter2_3_description3, jpeg_chapter2_3_description4];

		function showDescription2_3(number) {
			for(var i = 0; i < descriptions.length; i++) {
				if((i + 1) != number) {
					descriptions[i].style.display = "none";
				} else {
					descriptions[i].style.display = "";
				}
			}
		}

		function showSection3() {
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "2.3 Unterabtastung der Farbwerte (Chrominanz-Subsampling)";
			showSection(3);

			jpeg_chapter2_3_animation_wrapper.style.display = "none";

			var pixels_Y = d3.select("#jpeg_chapter2_3_animation_svg_Y").selectAll(".jpeg_animation_pixel");
			var circles_Cb = d3.select("#jpeg_chapter2_3_animation_svg_Cb").selectAll(".circle");
			var pixels_Cb = d3.select("#jpeg_chapter2_3_animation_svg_Cb").selectAll(".jpeg_animation_pixel");
			var circles_Cr = d3.select("#jpeg_chapter2_3_animation_svg_Cr").selectAll(".circle");
			var pixels_Cr = d3.select("#jpeg_chapter2_3_animation_svg_Cr").selectAll(".jpeg_animation_pixel");
			var rects_Y = d3.select("#jpeg_chapter2_3_animation_svg_Y").selectAll(".jpeg_chapter2_rectRed");
			var rects_Cb = d3.select("#jpeg_chapter2_3_animation_svg_Cb").selectAll(".jpeg_chapter2_rectRed");
			var rects_Cr = d3.select("#jpeg_chapter2_3_animation_svg_Cr").selectAll(".jpeg_chapter2_rectRed");

			jepg_chapter2_3_rect_right_Y.style.display = "none";
			jepg_chapter2_3_rect_right_Cb.style.display = "none";
			jepg_chapter2_3_rect_right_Cr.style.display = "none";

			jpeg_chapter2_3_animation_svg_Y_div.classList.remove("jpeg_chapter2_svg_middle");
			jpeg_chapter2_3_animation_svg_Y_div.classList.remove("jpeg_chapter2_svg_back");
			jpeg_chapter2_3_animation_svg_Cb_div.classList.remove("jpeg_svg_selected");
			jpeg_chapter2_3_animation_svg_Cb_div.classList.remove("jpeg_chapter2_svg_back");
			jpeg_chapter2_3_animation_svg_Cr_div.classList.remove("jpeg_svg_selected");
			jpeg_chapter2_3_animation_svg_Cr_div.classList.remove("jpeg_chapter2_svg_middle");

			jpeg_chapter2_3_animation_svg_Y_div.classList.add("jpeg_svg_selected");
			jpeg_chapter2_3_animation_svg_Cb_div.classList.add("jpeg_chapter2_svg_middle");
			jpeg_chapter2_3_animation_svg_Cr_div.classList.add("jpeg_chapter2_svg_back");

			stopAnimations();

			pixels_Y.attr("transform", d => "translate(0, 0)");
			pixels_Cb.attr("transform", d => "translate(0, 0)");
			pixels_Cr.attr("transform", d => "translate(0, 0)");

			pixels_Cb.style("display", "none");
			pixels_Cr.style("display", "none");

			circles_Cb.data(d3.range(16))
				.attr("cx", d => 20 + parseInt((d % 8) / 4) * 80 + parseInt(d % 2) * 40)
				.attr("cy", d => 20 + parseInt(d / 8) * 80 + parseInt((d % 4) / 2) * 40);

			circles_Cr.data(d3.range(16))
				.attr("cx", d => 20 + parseInt((d % 8) / 4) * 80 + parseInt(d % 2) * 40)
				.attr("cy", d => 20 + parseInt(d / 8) * 80 + parseInt((d % 4) / 2) * 40);

			circles_Cb.style("display", "");
			circles_Cr.style("display", "");

			rects_Y.style("opacity", "0");
			rects_Cb.style("opacity", "0");
			rects_Cr.style("opacity", "0");

			function stopAnimations() {
				pixels_Y.interrupt();
				circles_Cb.interrupt();
				pixels_Cb.interrupt();
				circles_Cr.interrupt();
				pixels_Cr.interrupt();
				rects_Y.interrupt();
				rects_Cb.interrupt();
				rects_Cr.interrupt();
			}

			const animationSvgs = [jpeg_chapter2_3_animation_svg_Y_div, jpeg_chapter2_3_animation_svg_Cb_div, jpeg_chapter2_3_animation_svg_Cr_div];
			
			function showAnimationSvg(number) {
				jpeg_chapter2_3_animation_wrapper.style.display = "";
				for(var i = 0; i < animationSvgs.length; i++) {
					if((i + 1) == number) {
						animationSvgs[i].classList.remove("jpeg_chapter2_svg_middle");
						animationSvgs[i].classList.remove("jpeg_chapter2_svg_back");
						animationSvgs[i].classList.add("jpeg_svg_selected");
					} else {
						animationSvgs[i].classList.remove("jpeg_svg_selected");
					}
				}
			}

			showDescription2_3(0);

			animationButton1.onclick = function() {

				jpeg_chapter2_3_animation_svg_Cb_div.classList.add("jpeg_chapter2_svg_middle");
				jpeg_chapter2_3_animation_svg_Cr_div.classList.add("jpeg_chapter2_svg_back");

				showDescription2_3(1);
				
				stopAnimations();
				showAnimationSvg(1);

				jepg_chapter2_3_rect_right_Y.style.display = "none";
				jepg_chapter2_3_rect_right_Cb.style.display = "none";
				jepg_chapter2_3_rect_right_Cr.style.display = "none";
				
				pixels_Y.attr("transform", d => "translate(0, 0)");
				pixels_Cb.attr("transform", d => "translate(0, 0)");
				pixels_Cr.attr("transform", d => "translate(0, 0)");

				pixels_Cb.style("display", "none");
				pixels_Cr.style("display", "none");

				rects_Y.style("opacity", "0");
				rects_Cb.style("opacity", "0");
				rects_Cr.style("opacity", "0");

				circles_Cb.data(d3.range(16))
					.attr("cx", d => 20 + parseInt((d % 8) / 4) * 80 + parseInt(d % 2) * 40)
					.attr("cy", d => 20 + parseInt(d / 8) * 80 + parseInt((d % 4) / 2) * 40);

				circles_Cr.data(d3.range(16))
					.attr("cx", d => 20 + parseInt((d % 8) / 4) * 80 + parseInt(d % 2) * 40)
					.attr("cy", d => 20 + parseInt(d / 8) * 80 + parseInt((d % 4) / 2) * 40);

				circles_Cb.style("display", "");
				circles_Cr.style("display", "");

			}

			animationButton2.onclick = function() {

				jpeg_chapter2_3_animation_svg_Cb_div.classList.add("jpeg_chapter2_svg_middle");
				jpeg_chapter2_3_animation_svg_Cr_div.classList.add("jpeg_chapter2_svg_back");

				showDescription2_3(2);

				stopAnimations();
				showAnimationSvg(1);

				jepg_chapter2_3_rect_right_Y.style.display = "";
				jepg_chapter2_3_rect_right_Cb.style.display = "none";
				jepg_chapter2_3_rect_right_Cr.style.display = "none";
				
				pixels_Y.attr("transform", d => "translate(0, 0)");
				pixels_Cb.attr("transform", d => "translate(0, 0)");
				pixels_Cr.attr("transform", d => "translate(0, 0)");

				pixels_Cb.style("display", "none");
				pixels_Cr.style("display", "none");

				rects_Y.style("opacity", "0");
				rects_Cb.style("opacity", "0");
				rects_Cr.style("opacity", "0");

				rects_Y.data([0, 2, 4, 6, 0, 2, 4, 6]/*[0, 2, 4, 6, 1, 3, 5, 7]*/)
					.transition()
					.duration(0)
					.delay(d => d * 1150)
					.style("opacity", "1")
					.on("end", function() {
						d3.select(this)
							.transition()
							.duration(0)
							.delay(d => 2300)
							.style("opacity", "0");
					});

				circles_Cb.data(d3.range(16))
					.attr("cx", d => 20 + parseInt((d % 8) / 4) * 80 + parseInt(d % 2) * 40)
					.attr("cy", d => 20 + parseInt(d / 8) * 80 + parseInt((d % 4) / 2) * 40);

				circles_Cr.data(d3.range(16))
					.attr("cx", d => 20 + parseInt((d % 8) / 4) * 80 + parseInt(d % 2) * 40)
					.attr("cy", d => 20 + parseInt(d / 8) * 80 + parseInt((d % 4) / 2) * 40);

				circles_Cb.style("display", "");
				circles_Cr.style("display", "");
				
				pixels_Y.data(d3.range(4))
					.transition()
					.duration(2000)
					.delay(d => d * 2300 + 200)
					.attr("transform", "translate(560, 0)");

			}

			animationButton3.onclick = function() {

				jpeg_chapter2_3_animation_svg_Y_div.classList.add("jpeg_chapter2_svg_middle");
				jpeg_chapter2_3_animation_svg_Cr_div.classList.add("jpeg_chapter2_svg_back");

				showDescription2_3(3);

				stopAnimations();
				showAnimationSvg(2);

				jepg_chapter2_3_rect_right_Y.style.display = "";
				jepg_chapter2_3_rect_right_Cb.style.display = "";
				jepg_chapter2_3_rect_right_Cr.style.display = "none";

				pixels_Y.attr("transform", d => "translate(560, 0)");
				pixels_Cb.attr("transform", d => "translate(0, 0)");
				pixels_Cr.attr("transform", d => "translate(0, 0)");

				pixels_Cb.style("display", "none");
				pixels_Cr.style("display", "none");

				rects_Y.style("opacity", "0");
				rects_Cb.style("opacity", "0");
				rects_Cr.style("opacity", "0");

				rects_Cb.data([0, 2, 4, 6, 0, 2, 4, 6])
					.transition()
					.duration(0)
					.delay(d => d * 1500)
					.style("opacity", "1")
					.on("end", function() {
						d3.select(this)
							.transition()
							.duration(0)
							.delay(d => 3000)
							.style("opacity", "0");
					});

				circles_Cb.data(d3.range(16))
					.attr("cx", d => 20 + parseInt((d % 8) / 4) * 80 + parseInt(d % 2) * 40)
					.attr("cy", d => 20 + parseInt(d / 8) * 80 + parseInt((d % 4) / 2) * 40);

				circles_Cr.data(d3.range(16))
					.attr("cx", d => 20 + parseInt((d % 8) / 4) * 80 + parseInt(d % 2) * 40)
					.attr("cy", d => 20 + parseInt(d / 8) * 80 + parseInt((d % 4) / 2) * 40);

				circles_Cb.style("display", "");
				circles_Cr.style("display", "");

				var endingPositions = [{cx: 40, cy: 40}, {cx: 120, cy: 40}, {cx: 40, cy: 120}, {cx: 120, cy: 120}];

				circles_Cb.data(d3.range(16))
					.transition()
					.duration(700)
					.delay(d => parseInt(d / 4) * 3000 + 200)
					.attr("cx", d => endingPositions[parseInt(d / 4)].cx)
					.attr("cy", d => endingPositions[parseInt(d / 4)].cy)
					.on("end", function() {
						d3.select(this)
							.transition()
							.duration(0)
							.style("display", "none");
					});
				
				pixels_Cb.data(d3.range(4))
					.transition()
					.duration(0)
					.delay(d => d * 3000 + 900)
					.style("display", "")
					.on("end", function() {
						d3.select(this)
							.transition()
							.duration(2000)
							.delay(200)
							.attr("transform", "translate(560, 0)");
					});

			}

			animationButton4.onclick = function() {

				jpeg_chapter2_3_animation_svg_Y_div.classList.add("jpeg_chapter2_svg_back");
				jpeg_chapter2_3_animation_svg_Cb_div.classList.add("jpeg_chapter2_svg_middle");

				showDescription2_3(4);

				stopAnimations();
				showAnimationSvg(3);

				jepg_chapter2_3_rect_right_Y.style.display = "";
				jepg_chapter2_3_rect_right_Cb.style.display = "";
				jepg_chapter2_3_rect_right_Cr.style.display = "";

				pixels_Y.attr("transform", d => "translate(560, 0)");
				pixels_Cb.attr("transform", d => "translate(560, 0)");
				pixels_Cr.attr("transform", d => "translate(0, 0)");

				pixels_Cb.style("display", "");
				pixels_Cr.style("display", "none");

				circles_Cb.style("display", "none");
				circles_Cr.style("display", "");

				rects_Y.style("opacity", "0");
				rects_Cb.style("opacity", "0");
				rects_Cr.style("opacity", "0");

				rects_Cr.data([0, 2, 4, 6, 0, 2, 4, 6])
					.transition()
					.duration(0)
					.delay(d => d * 1500)
					.style("opacity", "1")
					.on("end", function() {
						d3.select(this)
							.transition()
							.duration(0)
							.delay(d => 3000)
							.style("opacity", "0");
					});

				circles_Cr.data(d3.range(16))
					.attr("cx", d => 20 + parseInt((d % 8) / 4) * 80 + parseInt(d % 2) * 40)
					.attr("cy", d => 20 + parseInt(d / 8) * 80 + parseInt((d % 4) / 2) * 40);

				var endingPositions = [{cx: 40, cy: 40}, {cx: 120, cy: 40}, {cx: 40, cy: 120}, {cx: 120, cy: 120}];

				circles_Cr.data(d3.range(16))
					.transition()
					.duration(700)
					.delay(d => parseInt(d / 4) * 3000 + 200)
					.attr("cx", d => endingPositions[parseInt(d / 4)].cx)
					.attr("cy", d => endingPositions[parseInt(d / 4)].cy)
					.on("end", function() {
						d3.select(this)
							.transition()
							.duration(0)
							.style("display", "none");
					});

				pixels_Cr.data(d3.range(4))
					.transition()
					.duration(0)
					.delay(d => d * 3000 + 900)
					.style("display", "")
					.on("end", function() {
						d3.select(this)
							.transition()
							.duration(2000)
							.delay(200)
							.attr("transform", "translate(560, 0)");
					});
			}

		};

		// section 4 matrices

		var matrix_2_4_Y_1_1 = [
			100,103,108,119,119,126,130,134,134,134,137,140,146,145,179,214,
			104,100,106,120,121,127,129,135,136,138,141,142,147,148,145,191,
			111,97,109,124,119,125,130,139,141,143,144,145,152,140,102,156,
			132,91,109,118,119,127,131,140,145,148,152,151,155,139,97,158,
			111,92,107,118,120,125,128,143,145,154,157,158,160,154,147,147,
			93,95,104,114,120,127,128,144,147,152,160,163,161,161,157,166,
			87,89,102,107,111,121,126,140,144,149,161,163,162,165,161,161,
			85,86,97,105,109,118,113,156,190,167,154,160,161,163,162,154,
			81,83,99,108,111,120,94,162,139,160,162,157,161,160,155,151,
			83,82,102,109,112,120,98,139,98,132,168,159,162,161,155,150,
			90,88,106,113,119,122,102,140,94,135,169,161,165,165,161,154,
			100,95,110,116,119,127,112,144,110,140,163,160,165,163,161,158,
			106,100,115,114,121,123,122,138,149,151,143,149,154,154,154,156,
			97,98,106,111,119,124,129,135,140,141,145,145,145,144,149,158,
			68,79,89,95,102,111,119,121,125,133,135,141,146,150,155,159,
			140,147,156,165,170,176,177,187,189,188,180,177,177,178,173,173]
		
		var matrix_2_4_Cb_1_1 = [
			93,91,88,87,88,86,87,112,
			96,92,88,88,87,85,85,100,
			97,94,92,90,89,86,87,93,
			100,96,93,93,93,88,88,85,
			100,95,93,101,110,87,86,85,
			97,93,90,100,114,88,89,84,
			98,93,90,90,90,89,87,88,
			106,103,97,94,92,89,86,87]
		
		var matrix_2_4_Cr_1_1 = [
			187,192,195,194,197,198,199,159,
			183,190,194,196,198,199,198,173,
			183,188,191,192,195,194,195,178,
			181,185,188,186,182,191,192,194,
			180,187,188,167,150,191,194,197,
			184,189,193,168,148,192,191,195,
			178,181,185,186,187,189,194,194,
			152,156,159,163,165,165,168,166]
		
		var matrix_2_4_Y_2_1 = [
			-28,-25,-20,-9,-9,-2,2,6,6,6,9,12,18,17,51,86,
			-24,-28,-22,-8,-7,-1,1,7,8,10,13,14,19,20,17,63,
			-17,-31,-19,-4,-9,-3,2,11,13,15,16,17,24,12,-26,28,
			4,-37,-19,-10,-9,-1,3,12,17,20,24,23,27,11,-31,30,
			-17,-36,-21,-10,-8,-3,0,15,17,26,29,30,32,26,19,19,
			-35,-33,-24,-14,-8,-1,0,16,19,24,32,35,33,33,29,38,
			-41,-39,-26,-21,-17,-7,-2,12,16,21,33,35,34,37,33,33,
			-43,-42,-31,-23,-19,-10,-15,28,62,39,26,32,33,35,34,26,
			-47,-45,-29,-20,-17,-8,-34,34,11,32,34,29,33,32,27,23,
			-45,-46,-26,-19,-16,-8,-30,11,-30,4,40,31,34,33,27,22,
			-38,-40,-22,-15,-9,-6,-26,12,-34,7,41,33,37,37,33,26,
			-28,-33,-18,-12,-9,-1,-16,16,-18,12,35,32,37,35,33,30,
			-22,-28,-13,-14,-7,-5,-6,10,21,23,15,21,26,26,26,28,
			-31,-30,-22,-17,-9,-4,1,7,12,13,17,17,17,16,21,30,
			-60,-49,-39,-33,-26,-17,-9,-7,-3,5,7,13,18,22,27,31,
			12,19,28,37,42,48,49,59,61,60,52,49,49,50,45,45]
		
		var matrix_2_4_Cb_2_1 = [
			-35,-37,-40,-41,-40,-42,-41,-16,
			-33,-37,-41,-40,-42,-43,-43,-28,
			-31,-34,-37,-38,-39,-42,-41,-35,
			-28,-32,-35,-36,-35,-41,-41,-43,
			-28,-33,-35,-27,-19,-42,-42,-43,
			-31,-36,-39,-28,-14,-41,-39,-44,
			-30,-35,-38,-38,-38,-40,-41,-40,
			-22,-25,-31,-34,-36,-39,-42,-41]
		
		var matrix_2_4_Cr_2_1 = [
			59,64,67,66,69,70,71,31,
			55,62,66,68,70,71,70,45,
			55,60,63,64,67,66,67,50,
			53,57,60,58,54,63,64,66,
			52,59,60,39,22,63,66,69,
			56,61,65,40,20,64,63,67,
			50,53,57,58,59,61,66,66,
			24,28,31,35,37,37,40,38]
		
		var matrix_2_4_Y_1_2 = [
			241,240,241,240,241,242,240,242,240,241,240,241,119,106,241,240,
			91,86,77,74,71,72,69,149,242,149,62,58,1,87,241,241,
			87,49,89,113,112,112,112,185,238,186,117,105,0,82,241,240,
			205,183,226,241,241,241,241,240,241,241,240,243,103,99,241,241,
			167,220,241,240,240,241,217,240,241,241,241,241,239,193,238,241,
			223,240,240,242,241,222,160,219,240,240,240,241,181,151,242,241,
			240,241,242,239,242,204,188,202,242,239,242,229,33,74,240,241,
			240,241,240,241,240,175,121,201,240,242,240,228,15,69,241,240,
			240,240,240,240,241,240,236,240,242,241,241,240,143,123,241,240,
			240,240,241,241,239,241,241,242,240,241,241,240,241,197,237,242,
			241,240,240,240,240,241,239,240,241,241,240,241,147,106,241,240,
			125,126,130,125,117,113,106,153,228,164,109,97,10,75,240,242,
			10,10,10,10,9,7,9,140,240,186,30,6,0,90,240,240,
			208,197,198,198,200,198,197,227,231,233,206,177,12,76,241,241,
			240,240,240,239,241,241,240,240,241,242,240,240,69,73,241,241,
			239,240,240,240,240,240,240,240,241,241,241,241,220,175,239,241]
		
		var matrix_2_4_Cb_1_2 = [122,123,123,123,119,123,128,118,
			129,124,123,123,121,122,128,117,
			124,117,120,125,117,117,126,117,
			117,117,122,128,117,120,128,117,
			117,117,117,118,117,117,125,117,
			123,123,123,123,121,123,128,117,
			128,128,128,127,122,128,128,117,
			117,117,117,117,117,117,128,118]
		
		var matrix_2_4_Cr_1_2 = [130,129,130,130,130,129,128,131,
			128,129,130,129,129,129,129,128,131,
			129,131,130,129,132,131,128,131,
			131,132,129,128,131,130,128,132,
			130,131,130,130,131,131,128,131,
			130,129,129,129,130,130,128,131,
			128,128,128,128,129,129,128,131,
			130,131,131,131,132,131,128,131]
		
		var matrix_2_4_Y_2_2 = [
			113,112,113,112,113,114,112,114,112,113,112,113,-9,-22,113,112,
    		-37,-42,-51,-54,-57,-56,-59,21,114,21,-66,-70,-127,-41,113,113,
    		-41,-79,-39,-15,-16,-16,-16,57,110,58,-11,-23,-128,-46,113,112,
    		77,55,98,113,113,113,113,112,113,113,112,115,-25,-29,113,113,
    		39,92,113,112,112,113,89,112,113,113,113,113,111,65,110,113,
    		95,112,112,114,113,94,32,91,112,112,112,113,53,23,114,113,
			112,113,114,111,114,76,60,74,114,111,114,101,-95,-54,112,113,
			112,113,112,113,112,47,-7,73,112,114,112,100,-113,-59,113,112,
    		112,112,112,112,113,112,108,112,114,113,113,112,15,-5,113,112,
			112,112,113,113,111,113,113,114,112,113,113,112,113,69,109,114,
			113,112,112,112,11,113,111,112,113,113,112,113,19,-22,113,112,
    		-3,-2,2,-3,-11,-15,-22,25,100,36,-19,-31,-118,-53,112,114,
    		-118,-118,-118,-118,-119,-121,-119,12,112,58,-98,-122,-128,-38,112,112,
    		80,69,70,70,72,70,69,99,103,105,78,49,-116,-52,113,113,
    		112,112,112,111,113,113,112,112,113,114,112,112,-59,-55,113,113,
    		111,112,112,112,112,112,112,112,113,113,113,113,92,47,111,113]
		
		var matrix_2_4_Cb_2_2 = [
			-6,-5,-6,-6,-9,-6,0,-11,
			1,-4,-6,-5,-8,-6,0,-11,
			-4,-11,-8,-4,-11,-11,-3,-11,
			-12,-12,-6,0,-11,-8,0,-11,
			-11,-12,-11,-10,-11,-12,-3,-11,
			-6,-6,-6,-6,-7,-6,0,-11,
			0,0,0,-1,-6,0,0,-12,
			-11,-11,-11,-11,-11,-11,0,-10]
		
		var matrix_2_4_Cr_2_2 = [
			2,1,2,2,2,1,0,3,
			0,1,2,1,1,1,1,0,3,
			1,3,2,1,4,3,0,3,
			3,4,1,0,3,2,0,4,
			2,3,2,2,3,3,0,3,
			2,1,1,1,2,2,0,3,
			0,0,0,0,1,1,0,3,
			2,3,3,3,4,3,0,3]

		const section4_matrices = [matrix_2_4_Y_1_1, matrix_2_4_Cb_1_1, matrix_2_4_Cr_1_1, matrix_2_4_Y_2_1, matrix_2_4_Cb_2_1, matrix_2_4_Cr_2_1,
									matrix_2_4_Y_1_2, matrix_2_4_Cb_1_2, matrix_2_4_Cr_1_2, matrix_2_4_Y_2_2, matrix_2_4_Cb_2_2, matrix_2_4_Cr_2_2];

		function showSection4() {

			jpeg_buttonShowImageSectionSelection.disabled = false;

			const images_1 = [jpeg_chapter2_4_image_Y1_1, jpeg_chapter2_4_image_Cb1_1, jpeg_chapter2_4_image_Cr1_1, jpeg_chapter2_4_image_Y2_1, jpeg_chapter2_4_image_Cb2_1, jpeg_chapter2_4_image_Cr2_1];
			const images_2 = [jpeg_chapter2_4_image_Y1_2, jpeg_chapter2_4_image_Cb1_2, jpeg_chapter2_4_image_Cr1_2, jpeg_chapter2_4_image_Y2_2, jpeg_chapter2_4_image_Cb2_2, jpeg_chapter2_4_image_Cr2_2];
			const tooltips = [jpeg_chapter2_4_tooltip_Y1, jpeg_chapter2_4_tooltip_Cb1, jpeg_chapter2_4_tooltip_Cr1, jpeg_chapter2_4_tooltip_Y2, jpeg_chapter2_4_tooltip_Cb2, jpeg_chapter2_4_tooltip_Cr2];

			if(current_image_section == 1) {
				for(image of images_2) {
					image.style.display = "none";
				}
				for(image of images_1) {
					image.style.display = "";
				}
			} else {
				for(image of images_1) {
					image.style.display = "none";
				}
				for(image of images_2) {
					image.style.display = "";
				}
			}

			jpeg_buttonImageSectionSelection1.onclick = function() {
				for(image of images_2) {
					image.style.display = "none";
				}
				for(image of images_1) {
					image.style.display = "";
				}
				selectImage1();
				showTables();
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				for(image of images_1) {
					image.style.display = "none";
				}
				for(image of images_2) {
					image.style.display = "";
				}
				selectImage2();
				showTables();
			}

			for(tooltip of tooltips) {
				tooltip.style.display = "none";
			}

			for(image of images_1) {
				image.onmouseover = function() {
					tooltips[images_1.indexOf(this)].style.display = "";
				}
				image.onmouseout = function() {
					tooltips[images_1.indexOf(this)].style.display = "none";
				}
			}

			for(image of images_2) {
				image.onmouseover = function() {
					tooltips[images_2.indexOf(this)].style.display = "";
				}
				image.onmouseout = function() {
					tooltips[images_2.indexOf(this)].style.display = "none";
				}
			}

			const tables = [jpeg_chapter2_4_matrix_table_content_Y1, jpeg_chapter2_4_matrix_table_content_Cb1, jpeg_chapter2_4_matrix_table_content_Cr1,
							jpeg_chapter2_4_matrix_table_content_Y2, jpeg_chapter2_4_matrix_table_content_Cb2, jpeg_chapter2_4_matrix_table_content_Cr2];

			function showTables() {
				for(table of tables) {
					changeTableContent(table, section4_matrices, current_image_section - 1, tables.indexOf(table));
				}
			}
			showTables();

			current_section_heading.innerHTML = "2.4 Indexverschiebung (Normalisierung)";
			showSection(4);
		};

		// section 5 matrices

		var matrix_2_5_Y_1_1 = [
			-28,-25,-20,-9,-9,-2,2,6,6,6,9,12,18,17,51,86,
			-24,-28,-22,-8,-7,-1,1,7,8,10,13,14,19,20,17,63,
			-17,-31,-19,-4,-9,-3,2,11,13,15,16,17,24,12,-26,28,
			4,-37,-19,-10,-9,-1,3,12,17,20,24,23,27,11,-31,30,
			-17,-36,-21,-10,-8,-3,0,15,17,26,29,30,32,26,19,19,
			-35,-33,-24,-14,-8,-1,0,16,19,24,32,35,33,33,29,38,
			-41,-39,-26,-21,-17,-7,-2,12,16,21,33,35,34,37,33,33,
			-43,-42,-31,-23,-19,-10,-15,28,62,39,26,32,33,35,34,26,
			-47,-45,-29,-20,-17,-8,-34,34,11,32,34,29,33,32,27,23,
			-45,-46,-26,-19,-16,-8,-30,11,-30,4,40,31,34,33,27,22,
			-38,-40,-22,-15,-9,-6,-26,12,-34,7,41,33,37,37,33,26,
			-28,-33,-18,-12,-9,-1,-16,16,-18,12,35,32,37,35,33,30,
			-22,-28,-13,-14,-7,-5,-6,10,21,23,15,21,26,26,26,28,
			-31,-30,-22,-17,-9,-4,1,7,12,13,17,17,17,16,21,30,
			-60,-49,-39,-33,-26,-17,-9,-7,-3,5,7,13,18,22,27,31,
			12,19,28,37,42,48,49,59,61,60,52,49,49,50,45,45]
		
		var matrix_2_5_Cb_1_1 = [
			-35,-37,-40,-41,-40,-42,-41,-16,
			-33,-37,-41,-40,-42,-43,-43,-28,
			-31,-34,-37,-38,-39,-42,-41,-35,
			-28,-32,-35,-36,-35,-41,-41,-43,
			-28,-33,-35,-27,-19,-42,-42,-43,
			-31,-36,-39,-28,-14,-41,-39,-44,
			-30,-35,-38,-38,-38,-40,-41,-40,
			-22,-25,-31,-34,-36,-39,-42,-41]
		
		var matrix_2_5_Cr_1_1 = [
			59,64,67,66,69,70,71,31,
			55,62,66,68,70,71,70,45,
			55,60,63,64,67,66,67,50,
			53,57,60,58,54,63,64,66,
			52,59,60,39,22,63,66,69,
			56,61,65,40,20,64,63,67,
			50,53,57,58,59,61,66,66,
			24,28,31,35,37,37,40,38]
		
		var matrix_2_5_Y_1_2 = [
			113,112,113,112,113,114,112,114,112,113,112,113,-9,-22,113,112,
    		-37,-42,-51,-54,-57,-56,-59,21,114,21,-66,-70,-127,-41,113,113,
    		-41,-79,-39,-15,-16,-16,-16,57,110,58,-11,-23,-128,-46,113,112,
    		77,55,98,113,113,113,113,112,113,113,112,115,-25,-29,113,113,
    		39,92,113,112,112,113,89,112,113,113,113,113,111,65,110,113,
    		95,112,112,114,113,94,32,91,112,112,112,113,53,23,114,113,
			112,113,114,111,114,76,60,74,114,111,114,101,-95,-54,112,113,
			112,113,112,113,112,47,-7,73,112,114,112,100,-113,-59,113,112,
    		112,112,112,112,113,112,108,112,114,113,113,112,15,-5,113,112,
			112,112,113,113,111,113,113,114,112,113,113,112,113,69,109,114,
			113,112,112,112,11,113,111,112,113,113,112,113,19,-22,113,112,
    		-3,-2,2,-3,-11,-15,-22,25,100,36,-19,-31,-118,-53,112,114,
    		-118,-118,-118,-118,-119,-121,-119,12,112,58,-98,-122,-128,-38,112,112,
    		80,69,70,70,72,70,69,99,103,105,78,49,-116,-52,113,113,
    		112,112,112,111,113,113,112,112,113,114,112,112,-59,-55,113,113,
    		111,112,112,112,112,112,112,112,113,113,113,113,92,47,111,113]
		
		var matrix_2_5_Cb_1_2 = [
			-6,-5,-6,-6,-9,-6,0,-11,
    		1,-4,-6,-5,-8,-6,0,-11,
    		-4,-11,-8,-4,-11,-11,-3,-11,
    		-12,-12,-6,0,-11,-8,0,-11,
    		-11,-12,-11,-10,-11,-12,-3,-11,
    		-6,-6,-6,-6,-7,-6,0,-11,
    		0,0,0,-1,-6,0,0,-12,
    		-11,-11,-11,-11,-11,-11,0,-10]
		
		var matrix_2_5_Cr_1_2 = [
			2,1,2,2,2,1,0,3,
    		0,1,2,1,1,1,1,0,3,
    		1,3,2,1,4,3,0,3,
    		3,4,1,0,3,2,0,4,
    		2,3,2,2,3,3,0,3,
    		2,1,1,1,2,2,0,3,
    		0,0,0,0,1,1,0,3,
    		2,3,3,3,4,3,0,3]

		const section5_matrices = [matrix_2_5_Y_1_1, matrix_2_5_Cb_1_1, matrix_2_5_Cr_1_1, matrix_2_5_Y_1_1, matrix_2_5_Cb_1_1, matrix_2_5_Cr_1_1,
									matrix_2_5_Y_1_2, matrix_2_5_Cb_1_2, matrix_2_5_Cr_1_2, matrix_2_5_Y_1_2, matrix_2_5_Cb_1_2, matrix_2_5_Cr_1_2];

		function showSection5() {

			jpeg_buttonShowImageSectionSelection.disabled = false;

			const images_1 = [jpeg_chapter2_5_image_Y1_1, jpeg_chapter2_5_image_Cb1_1, jpeg_chapter2_5_image_Cr1_1, jpeg_chapter2_5_image_Y2_1, jpeg_chapter2_5_image_Cb2_1, jpeg_chapter2_5_image_Cr2_1];
			const images_2 = [jpeg_chapter2_5_image_Y1_2, jpeg_chapter2_5_image_Cb1_2, jpeg_chapter2_5_image_Cr1_2, jpeg_chapter2_5_image_Y2_2, jpeg_chapter2_5_image_Cb2_2, jpeg_chapter2_5_image_Cr2_2];
			const tooltips = [jpeg_chapter2_5_tooltip_Y1, jpeg_chapter2_5_tooltip_Cb1, jpeg_chapter2_5_tooltip_Cr1, jpeg_chapter2_5_tooltip_Y2, jpeg_chapter2_5_tooltip_Cb2, jpeg_chapter2_5_tooltip_Cr2];

			if(current_image_section == 1) {
				for(image of images_2) {
					image.style.display = "none";
				}
				for(image of images_1) {
					image.style.display = "";
				}
			} else {
				for(image of images_1) {
					image.style.display = "none";
				}
				for(image of images_2) {
					image.style.display = "";
				}
			}

			jpeg_buttonImageSectionSelection1.onclick = function() {
				for(image of images_2) {
					image.style.display = "none";
				}
				for(image of images_1) {
					image.style.display = "";
				}
				selectImage1();
				showTables();
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				for(image of images_1) {
					image.style.display = "none";
				}
				for(image of images_2) {
					image.style.display = "";
				}
				selectImage2();
				showTables();
			}

			for(tooltip of tooltips) {
				tooltip.style.display = "none";
			}

			for(image of images_1) {
				image.onmouseover = function() {
					tooltips[images_1.indexOf(this)].style.display = "";
				}
				image.onmouseout = function() {
					tooltips[images_1.indexOf(this)].style.display = "none";
				}
			}

			for(image of images_2) {
				image.onmouseover = function() {
					tooltips[images_2.indexOf(this)].style.display = "";
				}
				image.onmouseout = function() {
					tooltips[images_2.indexOf(this)].style.display = "none";
				}
			}

			const tables = [jpeg_chapter2_5_matrix_table_content_Y1, jpeg_chapter2_5_matrix_table_content_Cb1, jpeg_chapter2_5_matrix_table_content_Cr1,
							jpeg_chapter2_5_matrix_table_content_Y2, jpeg_chapter2_5_matrix_table_content_Cb2, jpeg_chapter2_5_matrix_table_content_Cr2];

			function showTables() {
				for(table of tables) {
					changeTableContent(table, section5_matrices, current_image_section - 1, tables.indexOf(table));
				}
			}
			showTables();

			current_section_heading.innerHTML = "2.5 Blockbildung";
			showSection(5);
		};

		return {
			showSection1: showSection1,
			showSection2: showSection2,
			showSection3: showSection3,
			showSection4: showSection4,
			showSection5: showSection5,
			num_sections: num_sections,
			current_section_headings: current_section_headings
		};

	}();


	// ========== chapter3 ========== //

	var b_matrix1 = [[-28, -25, -20, - 9, - 9, - 2,   2,   6],
					[-24, -28, -22, - 8, - 7, - 1,   1,   7],
					[-17, -31, -19, - 4, - 9, - 3,   2,  11],
					[  4, -37, -19, -10, - 9, - 1,   3,  12],
					[-17, -36, -21, -10, - 8, - 3,   0,  15],
					[-35, -33, -24, -14, - 8, - 1,   0,  16],
					[-41, -39, -26, -21, -17, - 7, - 2,  12],
					[-43, -42, -31, -23, -19, -10, -15,  28]];

	var b_matrix2 = [[ 113,  112,  113,  112,  113,  114,  112,  114],
				[- 37, - 42, - 51, - 54, - 57, - 56, - 59,   21],
				[- 41, - 79, - 39, - 15, - 16, - 16, - 16,   57],
				[  77,   55,   98,  113,  113,  113,  113,  112],
				[  39,   92,  113,  112,  112,  113,   89,  112],
				[  95,  112,  112,  114,  113,   94,   32,   91],
				[ 112,  113,  114,  111,  114,   76,   60,   74],
				[ 112,  113,  112,  113,  112,   47, -  7,   73]];

	showChapter3 = function () {

		num_sections = 7;
		const current_section_headings = ["3.1 DCT: Übersicht",
										"3.2 Blockmatrix als 2D-Rechteckfunktion",
										"3.3 Eindimensionale diskrete Cosinus-Transformation",
										"3.4 Zweidimensionale diskrete Cosinus-Transformation",
										"3.5 Zweidimensionale diskrete Cosinus-Transformation: Basisfunktionen",
										"3.6 DCT-Koeffizientenmatrix",
										"3.7 DCT: Zusammenfassung",];

		function showSection(number) {
			for(var i = 1; i < num_sections + 1; i++) {
				if(i != number) {
					document.getElementById("jpeg_chapter3_section" + i).style.display = "none";
				} else {
					document.getElementById("jpeg_chapter3_section" + i).style.display = "";
				}
			}
		};

		function showSection1() {
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "3.1 DCT: Übersicht";
			showSection(1);
		};


		function renderFunctionValues(b_matrix) {

			width = jpeg_chapter3_rectangle_function.width.baseVal.value;
			height = jpeg_chapter3_rectangle_function.height.baseVal.value;
			
			var rectangle_function = d3.select("#jpeg_chapter3_rectangle_function")
				.attr("viewbox", [0, 0, width, height]);
			
			var min = b_matrix[0][0];
			var max = b_matrix[0][0];
			var matrix_as_stream = [];
			for(var j = 0; j < 8; j++) {
				for(var i = 0; i < 8; i++) {
					if(min > b_matrix[i][j]) {
						min = b_matrix[i][j];
					} else if(max < b_matrix[i][j]) {
						max = b_matrix[i][j];
					}
					matrix_as_stream.push(b_matrix[i][j]);
				}
			}
			
			const x0 = width / 3;
			const y0 = 2 * height / 3;
			
			var mapper = d3.scaleLinear()
				.domain([min, max])
				.range([height - y0, 5 * height / 6]);
				
			const z0 = height - mapper(0);
			
			rectangle_function.append("line")
				.attr("stroke", "#AFAFFF")
				.attr("stroke-width", 2)
				.attr("x1", x0)
				.attr("x2", width)
				.attr("y1", y0)
				.attr("y2", y0);
			
			rectangle_function.append("line")
				.attr("stroke", "#AFAFFF")
				.attr("stroke-width", 2)
				.attr("x1", x0)
				.attr("x2", x0)
				.attr("y1", y0)
				.attr("y2", 0);
			
			rectangle_function.append("line")
				.attr("stroke", "#AFAFFF")
				.attr("stroke-width", 2)
				.attr("x1", x0)
				.attr("x2", 0)
				.attr("y1", y0)
				.attr("y2", height);
				
			rectangle_function.append("line")
				.attr("stroke", "#CFCFFF")
				.attr("stroke-width", 1)
				.attr("x1", x0)
				.attr("x2", width)
				.attr("y1", z0)
				.attr("y2", z0);
			
			rectangle_function.append("line")
				.attr("stroke", "#CFCFFF")
				.attr("stroke-width", 1)
				.attr("x1", x0)
				.attr("x2", 0)
				.attr("y1", z0)
				.attr("y2", (height / 3) + z0);
			
			var rectangles = rectangle_function.selectAll("g").data(matrix_as_stream).enter().append("g");
			
			rectangles
				.attr("fill", "#AFAFFF")
				.attr("stroke", "#8F8FFF")
				.attr("stroke-width", 1)
				.append("path")
					.attr("class", "path_1")
					.attr("d", function(d, i) {
						var x = Math.floor(i / 8);
						var y = i % 8;
						var z = d;
						
						var transformed_x = (width / 3) + (x * width / 12) - (y * width / 24);
						var transformed_y = (height - mapper(z)) + (y * height / 24);
						
						return "M " + transformed_x + "," + transformed_y + " l " + (width / 12) + ",0 l " + (-width / 24) + "," + (height / 24) + " l " + (-width / 12) + ",0 Z";
					});
			
			rectangles.append("rect")
					.attr("class", "rect")
				.attr("x", function(d, i) {
					var x = Math.floor(i / 8);
					var y = i % 8;
					
					return (width / 3) + (x * width / 12) - (y * width / 24) - (width / 24);
				})
				.attr("y", function(d, i) {
					var y = i % 8;
					var z = d;
					
					return (height - mapper(z)) + (y * height / 24) + (height / 24);
				})
				.attr("width", width / 12)
				.attr("height", d => y0 - (height - mapper(d)));
			
			rectangles.append("path")
				.attr("class", "path_2")
				.attr("d", function(d, i) {
					var x = Math.floor(i / 8);
					var y = i % 8;
					var z = d;
					
					var transformed_x = (width / 3) + (x * width / 12) - (y * width / 24);
					var transformed_y = (height - mapper(z)) + (y * height / 24);
					
					return "M " + (transformed_x + (width / 12)) + "," + transformed_y + " l 0," + (y0 - (height - mapper(z))) + " l " + (-width / 24) + "," + (height / 24) + " l 0," + (-(y0 - (height - mapper(z)))) + " Z";
				});
		}

		function updateFunctionValues(b_matrix) {

			var width = jpeg_chapter3_rectangle_function.width.baseVal.value;
			var height = jpeg_chapter3_rectangle_function.height.baseVal.value;

			var min = b_matrix[0][0];
			var max = b_matrix[0][0];
			var matrix_as_stream = [];
			for(var j = 0; j < 8; j++) {
				for(var i = 0; i < 8; i++) {
					if(min > b_matrix[i][j]) {
						min = b_matrix[i][j];
					} else if(max < b_matrix[i][j]) {
						max = b_matrix[i][j];
					}
					matrix_as_stream.push(b_matrix[i][j]);
				}
			}
			
			const y0 = 2 * height / 3;
			
			var mapper = d3.scaleLinear()
				.domain([min, max])
				.range([height - y0, 5 * height / 6]);

			var rectangles = d3.select("#jpeg_chapter3_rectangle_function").selectAll("g").data(matrix_as_stream);
			
			rectangles
				.select(".path_1")
					.attr("d", function(d, i) {
							var x = Math.floor(i / 8);
							var y = i % 8;
							var z = d;

							var transformed_x = (width / 3) + (x * width / 12) - (y * width / 24);
							var transformed_y = (height - mapper(z)) + (y * height / 24);
							
							return "M " + transformed_x + "," + transformed_y + " l " + (width / 12) + ",0 l " + (-width / 24) + "," + (height / 24) + " l " + (-width / 12) + ",0 Z";
					});

			rectangles
				.select(".rect")
					.attr("x", function(d, i) {
						var x = Math.floor(i / 8);
						var y = i % 8;
						return (width / 3) + (x * width / 12) - (y * width / 24) - (width / 24);
					})
					.attr("y", function(d, i) {
						var y = i % 8;
						var z = d;

						return (height - mapper(z)) + (y * height / 24) + (height / 24);
					})
					.attr("width", width / 12)
					.attr("height", d => y0 - (height - mapper(d)));
			
			rectangles
				.select(".path_2")
					.attr("d", function(d, i) {
						var x = Math.floor(i / 8);
						var y = i % 8;
						var z = d;
						
						var transformed_x = (width / 3) + (x * width / 12) - (y * width / 24);
						var transformed_y = (height - mapper(z)) + (y * height / 24);
						
						return "M " + (transformed_x + (width / 12)) + "," + transformed_y + " l 0," + (y0 - (height - mapper(z))) + " l " + (-width / 24) + "," + (height / 24) + " l 0," + (-(y0 - (height - mapper(z)))) + " Z";
					});

		}

		function renderBlockMatrix(b_matrix) {
			
			var width = jpeg_chapter3_block_matrix.width.baseVal.value;
			var height = jpeg_chapter3_block_matrix.height.baseVal.value;

			var block_matrix = d3.select("#jpeg_chapter3_block_matrix")
				.attr("viewbox", [0, 0, width, height]);
			
			var x = d3.scaleOrdinal()
				.domain([0, 1, 2, 3, 4, 5, 6, 7])
				.range([0, width/8, width/4, 3*width/8, width/2, 5*width/8, 3*width/4, 7*width/8, width]);
			
			var y = d3.scaleOrdinal()
				.domain([0, 1, 2, 3, 4, 5, 6, 7])
				.range([height, 7*height/8, 3*height/4, 5*height/8, height/2, 3*height/8, height/4, height/8, 0]);
			
			var matrix_as_stream = [];
			for(var j = 0; j < 8; j++) {
				for(var i = 0; i < 8; i++) {
					matrix_as_stream.push(b_matrix[i][j]);
				}
			}
			
			block_matrix.append("g")
				.attr("fill", "#FFEFEF")
				.attr("stroke", "#AFAFFF")
				.attr("stroke-width", 1)
				.selectAll("rect")
				.data(matrix_as_stream)
				.enter()
				.append("rect")
					.attr("x", (d, i) => x(Math.floor(i / 8)))
					.attr("y", (d, i) => y(i % 8) - height / 8)
					.attr("width", width / 8)
					.attr("height", height / 8);
			
			block_matrix.append("g")
				.attr("fill", "#AFAFFF")
				.attr("font-size", "12")
				.attr("text-anchor", "middle")
				.style("cursor", "default")
				.selectAll("rect")
				.data(matrix_as_stream)
				.enter()
				.append("text")
					.attr("x", (d, i) => x(Math.floor(i / 8)) + (x(1) / 2))
					.attr("y", (d, i) => height - (y(i % 8) - height / 8 + (y(7) / 4)))
					.text(d => d);
		}

		function updateBlockMatrix(b_matrix) {

			var matrix_as_stream = [];
			for(var j = 0; j < 8; j++) {
				for(var i = 0; i < 8; i++) {
					matrix_as_stream.push(b_matrix[i][j]);
				}
			}

			d3.select("#jpeg_chapter3_block_matrix")
				.selectAll("text")
				.data(matrix_as_stream)
					.text(d => d);

		}

		var rendered = false;

		function showSection2() {

			jpeg_buttonShowImageSectionSelection.disabled = false;

			if(rendered) {
				if(current_image_section == 1) {
					updateBlockMatrix(b_matrix1);
					updateFunctionValues(b_matrix1);
				} else {
					updateBlockMatrix(b_matrix2);
					updateFunctionValues(b_matrix2);
				}
			} else {
				if(current_image_section == 1) {
					renderBlockMatrix(b_matrix1);
					renderFunctionValues(b_matrix1);
				} else {
					renderBlockMatrix(b_matrix2);
					renderFunctionValues(b_matrix2);
				}
				rendered = true;
			}

			jpeg_buttonImageSectionSelection1.onclick = function() {
				if(!rendered) {
					renderBlockMatrix(b_matrix1);
					renderFunctionValues(b_matrix1);
				} else {
					updateBlockMatrix(b_matrix1);
					updateFunctionValues(b_matrix1);
				}
				selectImage1();
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				if(!rendered) {
					renderBlockMatrix(b_matrix2);
					renderFunctionValues(b_matrix2);
				} else {
					updateBlockMatrix(b_matrix2);
					updateFunctionValues(b_matrix2);
				}
				selectImage2();
			}
			
			current_section_heading.innerHTML = "3.2 Blockmatrix als 2D-Rechteckfunktion";
			showSection(2);

		};

		{ // mouseover/mouseout need to show/hide "Ort" and "Wert"
				const width = jpeg_chapter3_function_values.width.baseVal.value;
				const height = jpeg_chapter3_function_values.height.baseVal.value;
				
				var function_values = d3.select("#jpeg_chapter3_function_values")
					.attr("viewbox", [0, 0, width, height]);
				
				const values_as_stream = [2, 4, 1];
				
				function_values.append("g")
					.attr("fill", "#EFEFFF")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.selectAll("rect")
					.data(values_as_stream)
					.enter()
					.append("rect")
						.attr("id", (d, i) => "300" + i)
						.attr("x", (d, i) => i * width / 3)
						.attr("y", 0)
						.attr("width", width / 3)
						.attr("height", height)
						.on("mouseover", function() {
							d3.selectAll("rect[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
								.style("opacity", 1);
							
							d3.selectAll("circle[id='" + this.id.substring(0, 2) + "3" + this.id.substring(3) + "']")
								.style("opacity", 1);
						})
						.on("mouseout", function() {
							d3.selectAll("rect[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
								.style("opacity", 0);
							
							d3.selectAll("circle[id='" + this.id.substring(0, 2) + "3" + this.id.substring(3) + "']")
								.style("opacity", 0);
						});
				
				function_values.append("g")
					.selectAll("rect")
					.data(values_as_stream)
					.enter()
					.append("text")
						.attr("id", (d, i) => "301" + i)
						.attr("x", (d, i) => (i * width / 3) + (width / 6))
						.attr("y", 2 * height / 3)
						.attr("fill", "#AFAFFF")
						.attr("font-size", height / 2)
						.attr("text-anchor", "middle")
						.style("cursor", "default")
						.text(d => d)
						.on("mouseover", function() {
							d3.selectAll("rect[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
								.style("opacity", 1);
							
							d3.selectAll("circle[id='" + this.id.substring(0, 2) + "3" + this.id.substring(3) + "']")
								.style("opacity", 1);
						})
						.on("mouseout", function() {
							d3.selectAll("rect[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
								.style("opacity", 0);
							
							d3.selectAll("circle[id='" + this.id.substring(0, 2) + "3" + this.id.substring(3) + "']")
								.style("opacity", 0);
						});
			}
			
			{ // mouseover/mouseout need to show/hide "Frequenz" and "Amplitude"
				const width = jpeg_chapter3_function_amplitudes.width.baseVal.value;
				const height = jpeg_chapter3_function_amplitudes.height.baseVal.value;
				
				var function_amplitudes = d3.select("#jpeg_chapter3_function_amplitudes")
					.attr("viewbox", [0, 0, width, height]);
				
				const amplitudes_as_stream = [4.4, 0.9, -2.3];
				
				function_amplitudes.append("g")
					.attr("fill", "#EFEFFF")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.selectAll("rect")
					.data(amplitudes_as_stream)
					.enter()
					.append("rect")
						.attr("id", (d, i) => "310" + i)
						.attr("x", (d, i) => i * width / 3)
						.attr("y", 0)
						.attr("width", width / 3)
						.attr("height", height)
						.on("mouseover", function() {
							d3.selectAll("g[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
								.style("opacity", 1);
						})
						.on("mouseout", function() {
							d3.selectAll("g[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
								.style("opacity", 0);
						});
				
				function_amplitudes.append("g")
					.selectAll("rect")
					.data(amplitudes_as_stream)
					.enter()
					.append("text")
						.attr("id", (d, i) => "311" + i)
						.attr("x", (d, i) => (i * width / 3) + (width / 6))
						.attr("y", 2 * height / 3)
						.attr("fill", "#AFAFFF")
						.attr("font-size", height / 2)
						.attr("text-anchor", "middle")
						.style("cursor", "default")
						.text(d => d)
						.on("mouseover", function() {
							d3.selectAll("g[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
								.style("opacity", 1);
						})
						.on("mouseout", function() {
							d3.selectAll("g[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
								.style("opacity", 0);
						});
			}
			
			{
				const width = jpeg_chapter3_rectangle_function_example.width.baseVal.value;
				const height = jpeg_chapter3_rectangle_function_example.height.baseVal.value;
				
				var rectangle_function_example = d3.select("#jpeg_chapter3_rectangle_function_example")
					.attr("viewbox", [0, 0, width, height]);
				
				const values_as_stream = [2, 4, 1];
				
				var x = d3.scaleLinear()
					.domain([-2.5, 3.5])
					.range([0, width]);
				
				var y = d3.scaleLinear()
					.domain([-1, 5])
					.range([height, 0]);
				
				rectangle_function_example.append("line")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.attr("x1", 0)
					.attr("x2", width)
					.attr("y1", y(0))
					.attr("y2", y(0));
				
				rectangle_function_example.append("line")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.attr("x1", x(0))
					.attr("x2", x(0))
					.attr("y1", height)
					.attr("y2", 0);
				
				var rectangles = rectangle_function_example.selectAll("g").data(values_as_stream).enter().append("g");
				
				rectangles
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 2)
					.append("line")
						.attr("x1", (d, i) => x(i - 0.5))
						.attr("x2", (d, i) => x(i + 0.5))
						.attr("y1", d => y(d))
						.attr("y2", d => y(d));
						
				rectangles.append("line")
					.attr("x1", (d, i) => x(i - 0.5))
					.attr("x2", (d, i) => x(i - 0.5))
					.attr("y1", d => y(d))
					.attr("y2", function(d, i) {
						if(i == 0)
							return y(0);
						return y(values_as_stream[i - 1]);
					});
				
				rectangle_function_example.append("line")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 2)
					.attr("x1", x(2.5))
					.attr("x2", x(2.5))
					.attr("y1", y(0))
					.attr("y2", y(values_as_stream[2]));
				
				rectangle_function_example.append("g")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.selectAll("line")
					.data([-2, -1, 0, 1, 2, 3])
					.enter()
					.append("line")
						.attr("x1", d => x(d))
						.attr("x2", d => x(d))
						.attr("y1", y(0.15))
						.attr("y2", y(-0.15));
				
				rectangle_function_example.append("g")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.selectAll("line")
					.data([0, 1, 2, 3, 4])
					.enter()
					.append("line")
						.attr("x1", x(-0.15))
						.attr("x2", x(0.15))
						.attr("y1", d => y(d))
						.attr("y2", d => y(d));
				
				rectangle_function_example.selectAll("rect[class='hover']")
					.data(values_as_stream)
					.enter()
					.append("rect")
						.attr("id", (d, i) => "302" + i)
						.attr("class", "hover")
						.attr("stroke", "none")
						.attr("fill", "#FF0000")
						.attr("x", (d, i) => x(i - 0.05))
						.attr("width", (d, i) => x(i + 0.05) - x(i - 0.05))
						.attr("y", y(0.15))
						.attr("height", y(-0.15) - y(0.15))
						.style("opacity", 0);
				
				rectangle_function_example.selectAll("circle[class='hover']")
					.data(values_as_stream)
					.enter()
					.append("circle")
						.attr("id", (d, i) => "303" + i)
						.attr("class", "hover")
						.attr("stroke", "none")
						.attr("fill", "#0000FF")
						.attr("cx", (d, i) => x(i))
						.attr("cy", d => y(d))
						.attr("r", 3)
						.style("opacity", 0);
			}
			
			{
				const width = jpeg_chapter3_basis_function.width.baseVal.value;
				const height = jpeg_chapter3_basis_function.height.baseVal.value;
				
				var basis_function = d3.select("#jpeg_chapter3_basis_function")
					.attr("viewbox", [0, 0, width, height]);
				
				const amplitudes_as_stream = [4.4, 0.9, -2.3];
				
				var x = d3.scaleLinear()
					.domain([-2.5, 3.5])
					.range([width/20, 19*width/20]);
				
				var y = d3.scaleLinear()
					.domain([-4, 6])
					.range([19*height/20, height/20]);
				
				basis_function.append("line")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.attr("x1", x(-2.5))
					.attr("x2", x(3.5))
					.attr("y1", y(0))
					.attr("y2", y(0));
				
				basis_function.append("line")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.attr("x1", x(0))
					.attr("x2", x(0))
					.attr("y1", y(-4))
					.attr("y2", y(6));
				
				basis_function.append("g")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.selectAll("line")
					.data([-2, -1, 0, 1, 2, 3])
					.enter()
					.append("line")
						.attr("x1", d => x(d))
						.attr("x2", d => x(d))
						.attr("y1", y(0.3))
						.attr("y2", y(-0.3));
				
				basis_function.append("g")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.selectAll("line")
					.data([-2, 0, 2, 4])
					.enter()
					.append("line")
						.attr("x1", x(-0.15))
						.attr("x2", x(0.15))
						.attr("y1", d => y(d))
						.attr("y2", d => y(d));
				
				basis_function.append("g")
					.attr("id", "3120")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 2)
					.style("opacity", 0)
					.append("line")
						.attr("x1", x(-2.5))
						.attr("x2", x(3.5))
						.attr("y1", y(amplitudes_as_stream[0]))
						.attr("y2", y(amplitudes_as_stream[0]));
						
				var amplitudes = [];
				for(var i = -2.5; i <= 3.5; i += 0.01){
					amplitudes.push(amplitudes_as_stream[1] * Math.cos((2 * i + 1) * (Math.PI / 6)));
				}
				
				basis_function.append("g")
					.attr("id", "3121")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 2)
					.style("opacity", 0)
					.selectAll("line[class='basis1']")
					.data(amplitudes)
					.enter()
					.append("line")
						.attr("class", "basis1")
						.attr("x1", (d, i) => x((i * 6 / amplitudes.length) - 2.5))
						.attr("x2", (d, i) => x(((i + 1) * 6 / amplitudes.length) - 2.5))
						.attr("y1", d => y(d))
						.attr("y2", function(d, i) {
							if(i == amplitudes.length)
								return y(amplitudes[i - 1]);
							return y(d);
						});
				
				amplitudes = [];
				for(var i = -2.5; i <= 3.5; i += 0.01){
					amplitudes.push(amplitudes_as_stream[2] * Math.cos((2 * i + 1) * (2 * Math.PI / 6)));
				}
				
				basis_function.append("g")
					.attr("id", "3122")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 2)
					.style("opacity", 0)
					.selectAll("line[class='basis2']")
					.data(amplitudes)
					.enter()
					.append("line")
						.attr("class", "basis2")
						.attr("x1", (d, i) => x((i * 6 / amplitudes.length) - 2.5))
						.attr("x2", (d, i) => x(((i + 1) * 6 / amplitudes.length) - 2.5))
						.attr("y1", d => y(d))
						.attr("y2", function(d, i) {
							if(i == amplitudes.length)
								return y(amplitudes[i - 1]);
							return y(d);
						});
			}
			
			{ // function is a little bit offset
				const width = jpeg_chapter3_total_function.width.baseVal.value;
				const height = jpeg_chapter3_total_function.height.baseVal.value;
				
				var total_function = d3.select("#jpeg_chapter3_total_function")
					.attr("viewbox", [0, 0, width, height]);
				
				var x = d3.scaleLinear()
					.domain([-2.5, 3.5])
					.range([width/20, 19*width/20]);
				
				var y = d3.scaleLinear()
					.domain([-4, 6])
					.range([19*height/20, height/20]);
				
				total_function.append("line")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.attr("x1", x(-2.5))
					.attr("x2", x(3.5))
					.attr("y1", y(0))
					.attr("y2", y(0));
				
				total_function.append("line")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.attr("x1", x(0))
					.attr("x2", x(0))
					.attr("y1", y(-4))
					.attr("y2", y(6));
				
				total_function.append("g")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.selectAll("line")
					.data([-2, -1, 0, 1, 2, 3])
					.enter()
					.append("line")
						.attr("x1", d => x(d))
						.attr("x2", d => x(d))
						.attr("y1", y(0.3))
						.attr("y2", y(-0.3));
				
				total_function.append("g")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 1)
					.selectAll("line")
					.data([-2, 0, 2, 4])
					.enter()
					.append("line")
						.attr("x1", x(-0.15))
						.attr("x2", x(0.15))
						.attr("y1", d => y(d))
						.attr("y2", d => y(d));
				
				var amplitudes = [];
				for(var i = -1.5; i <= 2.5; i += 0.01){
					amplitudes.push(2 + (0.9 * Math.cos((2 * i + 1) * (Math.PI / 6))) - (2.3 * Math.cos((2 * i + 1) * (2 * Math.PI / 6))));
				}
				
				total_function.append("g")
					.attr("stroke", "#AFAFFF")
					.attr("stroke-width", 2)
					.selectAll("line[class='total']")
					.data(amplitudes)
					.enter()
					.append("line")
						.attr("class", "total")
						.attr("x1", (d, i) => x((i * 4 / amplitudes.length) - 1.5))
						.attr("x2", (d, i) => x(((i + 1) * 4 / amplitudes.length) - 1.5))
						.attr("y1", d => y(d))
						.attr("y2", function(d, i) {
							if(i == amplitudes.length)
								return y(amplitudes[i - 1]);
							return y(d);
						});
				
				total_function.selectAll("circle[class='points']")
					.data([2, 4, 1])
					.enter()
					.append("circle")
						.attr("class", "points")
						.attr("stroke", "none")
						.attr("fill", "#0000FF")
						.attr("cx", (d, i) => x(i))
						.attr("cy", d => y(d))
						.attr("r", 3);
			}

		function showSection3() {
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "3.3 Eindimensionale diskrete Cosinus-Transformation";
			showSection(3);			
		};

		function showSection4() {
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "3.4 Zweidimensionale diskrete Cosinus-Transformation";
			showSection(4);
		};

		function showSection5() {
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "3.5 Zweidimensionale diskrete Cosinus-Transformation: Basisfunktionen";
			showSection(5);

			{ // formular text-size different after hover
				const width = jpeg_chapter3_tile_mask.width.baseVal.value;
				const height = jpeg_chapter3_tile_mask.height.baseVal.value;
				
				var tile_mask = d3.select("#jpeg_chapter3_tile_mask")
					.attr("viewbox", [0, 0, width, height]);
				
				const scale = 0.9;
				const offset = 2;
				
				var x = d3.scaleOrdinal()
					.domain([0, 1, 2, 3, 4, 5, 6, 7])
					.range([0, scale*width/8, scale*width/4, scale*3*width/8, scale*width/2, scale*5*width/8, scale*3*width/4, scale*7*width/8, scale*width]);
				
				var y = d3.scaleOrdinal()
					.domain([0, 1, 2, 3, 4, 5, 6, 7])
					.range([scale*height, scale*7*height/8, scale*3*height/4, scale*5*height/8, scale*height/2, scale*3*height/8, scale*height/4, scale*height/8, 0]);
				
				const tiles = [	{	"id" : 0,
									"x"  : 0,
									"y"  : 0	},
								{	"id" : 1,
									"x"  : 1,
									"y"  : 0	},
								{	"id" : 2,
									"x"  : 7,
									"y"  : 0	},
								{	"id" : 3,
									"x"  : 0,
									"y"  : 1	},
								{	"id" : 4,
									"x"  : 0,
									"y"  : 7	},
								{	"id" : 5,
									"x"  : 7,
									"y"  : 7	}	];
				
				tile_mask.append("g")
					.attr("fill", "#FFAFAF")
					.attr("stroke-width", 2)
					.style("opacity", 0.5)
					.selectAll("g")
					.data(tiles)
					.enter()
					.append("rect")
						.attr("id", d => "340" + d.id)
						.attr("x", d => x(d.x) + offset)
						.attr("y", d => y(7 - d.y) - (scale * height / 8) + offset)
						.attr("width", scale * width / 8)
						.attr("height", scale * height / 8)
						.on("mouseover", function() {
							d3.selectAll("rect[id='" + this.id + "']")
								.style("stroke", "#FF0000")
								.style("opacity", 1);
							
							const index = parseInt(this.id.substring(3, 4));
							
							if(tiles[index].x == 0) {
								jpeg_chapter3_formular_basis_x.style.backgroundColor = "#EFEFFF";
								jpeg_chapter3_formular_basis_x.innerText = "\\[\\textcolor{#CFCFFF}{\\cos((2x+1)}\\textcolor{#FFCFCF}{{0 \\over 16}\\pi}\\textcolor{#CFCFFF}{)}\\]";
							} else {
								jpeg_chapter3_formular_basis_x.innerText = "\\[\\cos((2x+1)\\textcolor{red}{{" + tiles[index].x + " \\over 16}\\pi})\\]";
							}
							
							if(tiles[index].y == 0) {
								jpeg_chapter3_formular_basis_y.style.backgroundColor = "#EFEFFF";
								jpeg_chapter3_formular_basis_y.innerText = "\\[\\textcolor{#CFCFFF}{\\cos((2y+1)}\\textcolor{#FFCFCF}{{0 \\over 16}\\pi}\\textcolor{#CFCFFF}{)}\\]";
							} else {
								jpeg_chapter3_formular_basis_y.innerText = "\\[\\cos((2y+1)\\textcolor{red}{{" + tiles[index].y + " \\over 16}\\pi})\\]";
							}
							
							document.getElementById("jpeg_chapter3_basis_function_image" + index).hidden = false;
							jpeg_chapter3_no_function_image.hidden = true;
							
							switch(index) {
								case 0:
									jpeg_chapter3_basis_equals_1.style.visibility = "visible";
									
									jpeg_chapter3_basis_description_text.innerHTML = "Stelle: (0,0)<br /><br />Die Frequenz ist Null, d.h. diese Funktion beschreibt den gleichbleibenden Anteil aller Pixelwerte des Blocks.<br /><br />Der Wert an dieser Stelle entspricht dem 8-fachen Mittelwert aller 64 Pixelwerte in einem Block.";
									break;
								case 1:
									jpeg_chapter3_basis_description_text.innerHTML = "Stelle: (1,0)<br /><br />Diese Funktion beschreibt eine allm&auml;hliche &Auml;nderung der Pixelwerte in horizontaler Richtung.<br /><br />Beispiel:<br />Farb&auml;nderung in einem Farbverlauf zwischen linkem und rechtem Rand";
									break;
								case 2:
									jpeg_chapter3_basis_description_text.innerHTML = "Stelle: (7,0)<br /><br />Diese Funktion beschreibt eine st&auml;ndige &Auml;nderung der Pixelwerte in horizontaler Richtung.<br /><br />Beispiel:<br />senkrechte Linien in schwarzer Schrift aus wei&szlig;em Grund";
									break;
								case 3:
									jpeg_chapter3_basis_description_text.innerHTML = "Stelle: (0,1)<br /><br />Diese Funktion beschreibt eine allm&auml;hliche &Auml;nderung der Pixelwerte in vertikaler Richtung.<br /><br />Beispiel:<br />Farb&auml;nderung in einem Farbverlauf zwischen oberem und unterem Rand";
									break;
								case 4:
									jpeg_chapter3_basis_description_text.innerHTML = "Stelle: (0,7)<br /><br />Diese Funktion beschreibt eine st&auml;ndige &Auml;nderung der Pixelwerte in vertikaler Richtung.<br /><br />Beispiel:<br />Strichzeichnung";
									break;
								case 5:
									jpeg_chapter3_basis_description_text.innerHTML = "Stelle: (7,7)<br /><br />Diese Funktion beschreibt eine st&auml;ndige &Auml;nderung der Werte von Pixel zu Pixel.<br /><br />Beispiel:<br />die meist sehr geringe Wert$auml;nderung von Pixel zu Pixel in einem Farbverlauf";
									break;
							}
							MathJax.typeset([jpeg_chapter3_formular_basis_x, jpeg_chapter3_formular_basis_y]);
						})
						.on("mouseout", function() {
							d3.selectAll("rect[id='" + this.id + "']")
								.style("stroke", "none");
							
							const index = parseInt(this.id.substring(3, 4));
							
							if(index == 0)
								jpeg_chapter3_basis_equals_1.style.visibility = "hidden";
							
							jpeg_chapter3_formular_basis_x.style.backgroundColor = "transparent";
							jpeg_chapter3_formular_basis_y.style.backgroundColor = "transparent";
							jpeg_chapter3_formular_basis_x.innerText = "\\[\\cos((2x+1)\\textcolor{red}{{u \\over 16}\\pi})\\]";
							jpeg_chapter3_formular_basis_y.innerText = "\\[\\cos((2y+1)\\textcolor{red}{{v \\over 16}\\pi})\\]";
							
							document.getElementById("jpeg_chapter3_basis_function_image" + index).hidden = true;
							jpeg_chapter3_no_function_image.hidden = false;
							
							jpeg_chapter3_basis_description_text.innerText = "";
							
							MathJax.typeset([jpeg_chapter3_formular_basis_x, jpeg_chapter3_formular_basis_y]);
						});
			}
		};

		var c_matrix = [[- 96.1, -107.5,   10.1, -  8.3,   26.4,    8.0,   17.6, -  5.3,
			24.5,   20.2, -  6.0,   11.7, -  2.8,   11.5, -  7.4,    0.7,
		  - 20.5, - 11.5, -  5.3, - 12.8, -  9.0, - 14.3, -  4.8, -  5.9,
			 1.0, -  3.1, -  7.7,    0.2, -  9.4, -  3.5, -  6.4,    0.7,
			 1.9,    3.8,    8.2,    2.0,    7.9,    1.4,    6.5,    1.2,
			 1.0,    4.2,    2.6,    3.9, -  3.3,    6.7,    0.3,    3.2,
			 1.9, -  3.1, -  1.8, -  5.0,    0.9, -  4.2, -  0.9, -  3.0,
		  -  3.1, -  1.0, -  3.2, -  4.8, -  2.0,    0.7, -  2.3, -  0.6],
		[-287.2,   20.7,    4.6,    1.5,   19.0, -  7.1, -  3.3,    4.1,
		  -  8.1, - 15.8,   15.1, - 11.0,    2.5, -  3.5,    5.6, -  4.2,
		  -  2.9, -  7.0,   17.6, -  8.0, -  3.0, -  2.4,    7.1, -  6.6,
			 3.5, - 10.0, -  9.4,    1.4,   10.5, -  4.0, -  4.1,    4.8,
			 6.7,    5.2,    0.9, -  1.8, -  0.5, -  1.3,    1.0, -  0.2,
		  -  5.0, -  3.6,    6.3, -  1.2, -  4.9,    1.3,    2.8, -  1.5,
			 6.1, -  0.5, -  4.6,    0.9,    2.6, -  1.9, -  2.9,    2.9,
			 0.1, -  0.9,    1.6, -  2.5,    0.4, -  0.2,    1.4, -  0.9],
		[447.1, - 15.6,    0.8, -  0.4, - 31.6,   11.7,    2.8, -  3.8,
			51.8,   18.2, - 29.4,   17.2, -  5.0,    5.0, - 10.5,    6.8,
		  - 19.2,    5.8, - 32.8,   14.6,    8.6,    1.1, - 13.4,    9.9,
			18.0,    6.9,   21.8, -  3.6, - 19.6,    6.1,    9.4, -  6.3,
		  - 29.1, -  1.5,    2.9,    0.0, -  0.4,    0.3, -  0.5, -  0.8,
			24.4, -  0.1, - 10.1,    2.6,    9.8, -  1.6, -  4.7,    4.7,
		  - 17.3,    7.2,    5.1,    0.6, -  7.0,    2.1,    3.1, -  1.4,
			 4.6, -  1.1, -  1.0,    2.3, -  0.7,    0.5, -  3.0,    2.0],
		[ 486.8, - 45.0, - 51.7, - 37.2,   97.1,   10.9,   85.2,   20.6,
			 -258.3, -159.0,   32.0,   17.3,   33.4,   91.3,   58.9,   34.4,
			 - 30.7,   66.6,   15.0,    8.4,   38.8,   10.5,   19.8,   17.8,
			  241.8,   44.8, - 15.5,    6.9, - 51.8, - 25.9, - 26.2, - 15.6,
			  302.1,   49.5, - 16.1, -  4.8, - 59.6, - 43.8, - 58.1, - 23.8,
			  236.4,   55.0,   15.1,   15.4, - 59.4, - 36.2, - 76.4, - 24.9,
			   75.1,   56.4,   15.3, - 13.8, - 28.1, - 74.4, - 49.2, - 45.0,
			    7.8,    0.8,   10.7, - 17.1, - 38.9, - 37.6, - 44.3, - 20.2],
		[	-54.4,   0.3, - 0.1,   3.5, - 9.1,  18.1, - 9.0,   2.3,
			   1.0,   2.4,   1.0,   0.0,   2.3,   2.2,   0.1, - 1.0,
			   6.2,   3.1,   3.3,   3.6, - 3.1, - 2.7, - 0.3,   0.5,
			   5.2,   1.9, - 0.5,   2.3, - 3.5, - 3.8,   0.0,   0.2,
			 -12.1, - 8.5, - 0.7, - 4.1, - 0.4, - 0.1, - 2.0,   0.9,
			   8.7,   2.5, - 5.6, - 1.8, - 2.5,   2.1,   1.8, - 3.4,
			 - 7.6, - 3.7,   1.2, - 1.5,   2.0, - 0.1, - 1.1,   1.8,
			 - 3.0,   2.0,   2.1,   0.6,   1.4, - 1.2,   0.9,   0.6],
		[	14.0, -0.5,  0.3, -1.0,  2.7, -5.6,  2.6, -0.7,
			 -0.3,  0.3,  0.4, -0.8, -0.2,  0.1, -0.1,  0.4,
			 -1.2, -0.4, -1.2, -1.5,  0.4,  1.8,  0.4,  0.3,
			 -2.1, -0.4,  0.7, -0.2,  0.8,  2.0,  0.5, -0.2,
			  3.2,  1.8, -0.1,  0.4,  0.5, -0.5, -0.2, -0.3,
			 -1.5, -0.5,  1.6,  0.7,  0.6, -0.4, -0.4,  0.4,
			  2.4,  0.8, -1.1,  0.9,  0.4, -0.4,  0.2,  0.2,
			  0.2, -0.4, -1.4,  0.1, -0.3, -0.1,  0.0, -0.2	]];

		function showSection6() {

			jpeg_buttonShowImageSectionSelection.disabled = false;
			current_section_heading.innerHTML = "3.6 DCT-Koeffizientenmatrix";
			showSection(6);

			const buttons = [jpeg_chapter3_select_y, jpeg_chapter3_select_cb, jpeg_chapter3_select_cr];
			
			function showMatrix(number) {
				var tbody = jpeg_chapter3_coefficient_matrix_table_content;
				var lines = tbody.children;
				for(var i = 0; i < 8; i++) {
					var table_cells = Array.from(lines[i].children);
					for(var j = 0; j < 8; j++) {
						table_cells[j].innerHTML = c_matrix[(current_image_section - 1) * 3 + number][i * 8 + j];
					}
				}
				for(button of buttons) {
					if(buttons.indexOf(button) == number) {
						button.classList.add("jpeg_chapter3_selected");
					} else {
						button.classList.remove("jpeg_chapter3_selected");
					}
				}
			}
			showMatrix(0);

			const boxes = [jpeg_chapter3_td_1_1, jpeg_chapter3_td_2_1, jpeg_chapter3_td_8_1, jpeg_chapter3_td_1_2, jpeg_chapter3_td_1_8, jpeg_chapter3_td_8_8];

			const tiles = [	{"x": 0, "y": 0},
							{"x": 1, "y": 0},
							{"x": 7, "y": 0},
							{"x": 0, "y": 1},
							{"x": 0, "y": 7},
							{"x": 7, "y": 7}];

			for(box of boxes) {
				box.onmouseover = function() {
					showFormularMouseOver(boxes.indexOf(this));
				}
				
				box.onclick = function() {
					showFormularMouseOver(boxes.indexOf(this));
					for(box of boxes) {
						if(boxes.indexOf(box) == boxes.indexOf(this)) {
							box.onmouseout = null;
						}
					}
				}
			}

			showFormularMouseOut();

			for(box of boxes) {
				box.onmouseout = showFormularMouseOut;
			}

			jpeg_chapter3_select_y.onclick = function() {
				showMatrix(0);
			}

			jpeg_chapter3_select_cb.onclick = function() {
				showMatrix(1);
			}

			jpeg_chapter3_select_cr.onclick = function() {
				showMatrix(2);
			}

			jpeg_buttonImageSectionSelection1.onclick = function() {
				selectImage1();
				showMatrix(0);
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				selectImage2();
				showMatrix(0);
			}
			
			function showFormularMouseOver(index) {
				
				for(box of boxes) {
					if(boxes.indexOf(box) == index) {
						box.classList.add("jpeg_chapter3_selected");
					} else {
						box.classList.remove("jpeg_chapter3_selected");
					}
					box.onmouseout = showFormularMouseOut;
				}
				
				var x = tiles[index].x;
				var y = tiles[index].y;

				var formular = "\\[\\mathbf{\\textcolor{red}{S_{" + x + "" + y + "} = F(" + x + "," + y + ")}} = {1 \\over 4}c_{" + x + "}c_{" + y + "}\\sum_{x=0}^7 \\sum_{y=0}^7 z_{xy}";
							
				if(x == 0) {
					formular += "\\textcolor{lightgrey}{\\cos((2x+1){0 \\over 16}\\pi)}";
				} else {
					formular += "\\cos((2x+1){" + x + "\\over 16}\\pi)";
				}
				
				if(y == 0) {
					formular += "\\textcolor{lightgrey}{\\cos((2y+1){0 \\over 16}\\pi)}\\]";
				} else {
					formular += "\\cos((2y+1){" + y + "\\over 16}\\pi)\\]";
				}
				
				jpeg_chapter3_formular.textContent = formular;
				
				switch(index) {
					case 0:
						jpeg_chapter3_coefficient_description_text.innerHTML = "Stelle: (0,0) -> <b>\\(S_{00}\\)</b><br />Dieser Koeffizient ist der 8fache <b>Grundton des Blocks</b>, also der gleich bleibende Anteil aller Werte. Man bezeichnet ihn daher als Gleichanteil oder <b>DC-Koeffizient</b> (von engl. direct current = Gleichstrom)";
						break;
					case 1:
						jpeg_chapter3_coefficient_description_text.innerHTML = "Stelle: (1,0) -> <b>\\(S_{10}\\)</b><br />Dieser Koeffizient ist ein Frequenzanteil oder <b>AC-Koeffizient</b> (engl. alternating current = Wechselstrom)<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich von links nach rechts in hohem Ma&szlig;, aber allm&auml;hlich.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich von links nach rechts kaum.";
						break;
					case 2:
						jpeg_chapter3_coefficient_description_text.innerHTML = "Stelle: (7,0) -> <b>\\(S_{70}\\)</b><br />Dieser Koeffizient ist ein <b>AC-Koeffizient</b>.<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich von links nach rechts st&auml;ndig mit gro&szlig;em Unterschied.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich von links nach rechts st&auml;ndig, aber nur mit kleinem Unterschieden.";
						break;
					case 3:
						jpeg_chapter3_coefficient_description_text.innerHTML = "Stelle: (0,1) -> <b>\\(S_{01}\\)</b><br />Dieser Koeffizient ist ein Frequenzanteil oder <b>AC-Koeffizient</b> (engl. alternating current = Wechselstrom)<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich von oben nach unten in hohem Ma&szlig;, aber allm&auml;hlich.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich von oben nach unten kaum.";
						break;
					case 4:
						jpeg_chapter3_coefficient_description_text.innerHTML = "Stelle: (0,7) -> <b>\\(S_{07}\\)</b><br />Dieser Koeffizient ist ein <b>AC-Koeffizient</b>.<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich von oben nach unten st&auml;ndig mit gro&szlig;em Unterschied.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich von oben nach unten st&auml;ndig, aber nur mit kleinem Unterschieden.";
						break;
					case 5:
						jpeg_chapter3_coefficient_description_text.innerHTML = "Stelle: (7,7) -> <b>\\(S_{77}\\)</b><br />Dieser Koeffizient ist ein <b>AC-Koeffizient</b>.<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich in beide Richtungen st&auml;ndig mit gro&szlig;em Unterschied.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich in beide Richtungen st&auml;ndig, aber nur mit kleinem Unterschieden.";
						break;
				}
				
				MathJax.typeset([jpeg_chapter3_coefficient_description_text, jpeg_chapter3_formular]);
			}
			
			function showFormularMouseOut() {

				for(box of boxes) {
					box.classList.remove("jpeg_chapter3_selected");
				}

				jpeg_chapter3_formular.innerText = "\\[\\mathbf{\\textcolor{red}{S_{uv} = F(u,v)}} = {1 \\over 4}c_{u}c_{v}\\sum_{x=0}^7 \\sum_{y=0}^7 z_{xy}\\cos((2x+1){u \\over 16}\\pi)\\cos((2y+1){v \\over 16}\\pi)\\]";			
				jpeg_chapter3_coefficient_description_text.innerHTML = "";		
				MathJax.typeset([jpeg_chapter3_coefficient_description_text, jpeg_chapter3_formular]);
			}

		}

		function showSection7() {
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "3.7 DCT: Zusammenfassung";
			showSection(7);
		}

		return {
			showSection1: showSection1,
			showSection2: showSection2,
			showSection3: showSection3,
			showSection4: showSection4,
			showSection5: showSection5,
			showSection6: showSection6,
			showSection7: showSection7,
			num_sections: num_sections,
			current_section_headings: current_section_headings
		};

	}();


	// ========== chapter4 ========== //
	showChapter4 = function () {

		num_sections = 6;
		const current_section_headings = ["4.1 Quantisierung: Übersicht",
										"4.2 Prinzip der Quantisierung",
										"4.3 Quantisierung bei JPEG",
										"4.3 Quantisierung bei JPEG",
										"4.4 Kompressionsfaktor",
										"4.5 Quantisierung: Zusammenfassung"];

		function showSection(number) {
			for(var i = 1; i < num_sections + 1; i++) {
				if(i != number) {
					document.getElementById("jpeg_chapter4_section" + i).style.display = "none";
				} else {
					document.getElementById("jpeg_chapter4_section" + i).style.display = "";
				}
			}
		};

		// variables
		var koeffizientenmatrixTables = new Array(18);
		var quantisierungsmatrixTables = new Array(18);
		var quantisierteKoeffizientenmatrixTables = new Array(18);
		koeffizientenmatrixTables[0] = new Array(-96.1,-107.5,10.1,-8.3,26.4,8.0,17.6,-5.3,
													24.5,20.2,-6.0,11.7,-2.8,11.5,-7.4,0.7,
													-20.5,-11.5,-5.3,-12.8,-9.0,-14.3,-4.8,-5.9,
													1.0,-3.1,-7.7,0.2,-9.4,-3.5,-6.4,0.7,
													1.9,3.8,8.2,2.0,7.9,1.4,6.5,1.2,
													1.0,4.2,2.6,3.9,-3.3,6.7,0.3,3.2,
													1.9,-3.1,-1.8,-5.0,0.9,-4.2,-0.9,-3.0,
													-3.1,-1.0,-3.2,-4.8,-2.0,0.7,-2.3,-0.6);
		quantisierungsmatrixTables[0] = new Array(32,22,20,32,48,80,102,122,
													24,24,28,38,52,116,120,110,
													28,26,32,48,80,114,138,112,
													28,34,44,58,102,174,160,124,
													36,44,74,112,136,218,206,154,
													48,70,110,128,162,208,226,184,
													98,128,156,174,206,242,240,202,
													144,184,190,196,224,200,206,198);
		quantisierteKoeffizientenmatrixTables[0] =new Array(-3,-5,1,0,1,0,0,0,
															1,1,0,0,0,0,0,0,
															-1,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0);
		koeffizientenmatrixTables[1] = koeffizientenmatrixTables[0];
		quantisierungsmatrixTables[1] = new Array(16,11,10,16,24,40,51,61,
												12,12,14,19,26,58,60,55,
												14,13,16,24,40,57,69,56,
												14,17,22,29,51,87,80,62,
												18,22,37,56,68,109,103,77,
												24,35,55,64,81,104,113,92,
												49,64,78,87,103,121,120,101,
												72,92,95,98,112,100,103,99);
		quantisierteKoeffizientenmatrixTables[1] =new Array(-6,-10,1,-1,1,0,0,0,
															2,2,0,1,0,0,0,0,
															-1,-1,0,-1,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0);
		koeffizientenmatrixTables[2] = koeffizientenmatrixTables[0];
		quantisierungsmatrixTables[2] = new Array(8,6,5,8,12,20,26,31,
												6,6,7,10,13,29,30,28,
												7,7,8,12,20,29,35,28,
												7,9,11,15,26,44,40,31,
												9,11,19,28,34,55,52,39,
												12,18,28,32,41,52,57,46,
												25,32,39,44,52,61,60,51,
												36,46,48,49,56,50,52,50);
		quantisierteKoeffizientenmatrixTables[2] =new Array(-12,-18,2,-1,2,0,1,0,
															4,3,-1,1,0,0,0,0,
															-3,-2,-1,1,0,0,0,0,
															0,0,-1,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0);
		koeffizientenmatrixTables[3] = new Array(-287.2,20.7,4.6,1.5,19,-17.1,-3.3,4.1,
												-8.1,-15.8,15.1,-11,2.5,-3.5,5.6,-4.2,
												-2.9,-7,17.6,-8,-3,-2.4,7.1,-6.6,
												3.5,-10,-9.4,1.4,10.5,-4,-4.1,4.8,
												6.7,5.2,0.9,-1.8,-0.5,-1.3,1,-0.2,
												-5,-3.6,6.3,-1.2,-4.9,1.3,2.8,-1.5,
												6.1,-0.5,-4.6,0.9,2.6,-1.9,-2.9,2.9,
												0.1,-0.9,1.6,-2.5,0.4,-0.2,1.4,-0.9);
		quantisierungsmatrixTables[3] = new Array(34,36,48,94,198,198,198,198,
												36,42,52,132,198,198,198,198,
												48,52,112,198,198,198,198,198,
												94,132,198,198,198,198,198,198,
												198,198,198,198,198,198,198,198,
												198,198,198,198,198,198,198,198,
												198,198,198,198,198,198,198,198,
												198,198,198,198,198,198,198,198);
		quantisierteKoeffizientenmatrixTables[3] =new Array(-8,1,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0);
		koeffizientenmatrixTables[4] = koeffizientenmatrixTables[3]
		quantisierungsmatrixTables[4] = new Array(17,18,24,47,99,99,99,99,
												18,21,26,66,99,99,99,99,
												24,26,56,99,99,99,99,99,
												47,66,99,99,99,99,99,99,
												99,99,99,99,99,99,99,99,
												99,99,99,99,99,99,99,99,
												99,99,99,99,99,99,99,99,
												99,99,99,99,99,99,99,99);
		quantisierteKoeffizientenmatrixTables[4] =new Array(-17,1,0,0,0,0,0,0,
															0,-1,1,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0);
		koeffizientenmatrixTables[5] = koeffizientenmatrixTables[3]
		quantisierungsmatrixTables[5] = new Array(9,9,12,24,50,50,50,50,
												9,11,13,33,50,50,50,50,
												12,13,28,50,50,50,50,50,
												24,33,50,50,50,50,50,50,
												50,50,50,50,50,50,50,50,
												50,50,50,50,50,50,50,50,
												50,50,50,50,50,50,50,50,
												50,50,50,50,50,50,50,50);
		quantisierteKoeffizientenmatrixTables[5] =new Array(-32,2,0,0,0,0,0,0,
															-1,-1,1,0,0,0,0,0,
															0,-1,1,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0);
		koeffizientenmatrixTables[6] = new Array(447.1,-15.6,0.8,-0.4,-31.6,11.7,2.8,-3.8,
												51.8,18.2,-29.4,17.2,-5,5,-10.5,6.8,
												-19.2,5.8,-32.8,14.6,8.6,1.1,-13.4,9.9,
												18,6.9,21.8,-3.6,-19.6,6.1,9.4,-6.3,
												-29.1,-1.5,2.9,0,-0.4,0.3,-0.5,-0.8,
												24.4,-0.1,-10.1,2.6,9.8,-1.6,-4.7,4.7,
												-17.3,7.2,5.1,0.6,-7,2.1,3.1,-1.4,
												4.6,-1.1,-1,2.3,-0.7,0.5,-3,2);
		quantisierungsmatrixTables[6] = quantisierungsmatrixTables[3]
		quantisierteKoeffizientenmatrixTables[6] =new Array(13,0,0,0,0,0,0,0,
															1,0,-1,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0);
		koeffizientenmatrixTables[7] = koeffizientenmatrixTables[6]
		quantisierungsmatrixTables[7] =quantisierungsmatrixTables[4]
		quantisierteKoeffizientenmatrixTables[7] =new Array(26,-1,0,0,0,0,0,0,
															3,1,-1,0,0,0,0,0,
															-1,0,-1,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0);
		koeffizientenmatrixTables[8] = koeffizientenmatrixTables[6]
		quantisierungsmatrixTables[8] = quantisierungsmatrixTables[5]
		quantisierteKoeffizientenmatrixTables[8] =new Array(50,-2,0,0,-1,0,0,0,
															6,2,-2,1,0,0,0,0,
															-2,0,-1,0,0,0,0,0,
															1,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0,
															0,0,0,0,0,0,0,0);
		
		koeffizientenmatrixTables[9] = koeffizientenmatrixTables[10] = koeffizientenmatrixTables[11] = [
			486.8, - 45.0, - 51.7, - 37.2,   97.1,   10.9,   85.2,   20.6,
			-258.3, -159.0,   32.0,   17.3,   33.4,   91.3,   58.9,   34.4,
			- 30.7,   66.6,   15.0,    8.4,   38.8,   10.5,   19.8,   17.8,
			 241.8,   44.8, - 15.5,    6.9, - 51.8, - 25.9, - 26.2, - 15.6,
			 302.1,   49.5, - 16.1, -  4.8, - 59.6, - 43.8, - 58.1, - 23.8,
			 236.4,   55.0,   15.1,   15.4, - 59.4, - 36.2, - 76.4, - 24.9,
			  75.1,   56.4,   15.3, - 13.8, - 28.1, - 74.4, - 49.2, - 45.0,
			   7.8,    0.8,   10.7, - 17.1, - 38.9, - 37.6, - 44.3, - 20.2]
		koeffizientenmatrixTables[12] = koeffizientenmatrixTables[13] = koeffizientenmatrixTables[14] = [
			-54.4,   0.3, - 0.1,   3.5, - 9.1,  18.1, - 9.0,   2.3,
			  1.0,   2.4,   1.0,   0.0,   2.3,   2.2,   0.1, - 1.0,
			  6.2,   3.1,   3.3,   3.6, - 3.1, - 2.7, - 0.3,   0.5,
			  5.2,   1.9, - 0.5,   2.3, - 3.5, - 3.8,   0.0,   0.2,
			-12.1, - 8.5, - 0.7, - 4.1, - 0.4, - 0.1, - 2.0,   0.9,
			  8.7,   2.5, - 5.6, - 1.8, - 2.5,   2.1,   1.8, - 3.4,
			- 7.6, - 3.7,   1.2, - 1.5,   2.0, - 0.1, - 1.1,   1.8,
			- 3.0,   2.0,   2.1,   0.6,   1.4, - 1.2,   0.9,   0.6]
		koeffizientenmatrixTables[15] = koeffizientenmatrixTables[16] = koeffizientenmatrixTables[17] = [
			14.0, -0.5,  0.3, -1.0,  2.7, -5.6,  2.6, -0.7,
			-0.3,  0.3,  0.4, -0.8, -0.2,  0.1, -0.1,  0.4,
			-1.2, -0.4, -1.2, -1.5,  0.4,  1.8,  0.4,  0.3,
			-2.1, -0.4,  0.7, -0.2,  0.8,  2.0,  0.5, -0.2,
			 3.2,  1.8, -0.1,  0.4,  0.5, -0.5, -0.2, -0.3,
			-1.5, -0.5,  1.6,  0.7,  0.6, -0.4, -0.4,  0.4,
			 2.4,  0.8, -1.1,  0.9,  0.4, -0.4,  0.2,  0.2,
			 0.2, -0.4, -1.4,  0.1, -0.3, -0.1,  0.0, -0.2]
		
		quantisierungsmatrixTables[9] = quantisierungsmatrixTables[0];
		quantisierungsmatrixTables[10] = quantisierungsmatrixTables[1];
		quantisierungsmatrixTables[11] = quantisierungsmatrixTables[2];
		
		quantisierungsmatrixTables[15] = quantisierungsmatrixTables[12] = quantisierungsmatrixTables[3];
		quantisierungsmatrixTables[16] = quantisierungsmatrixTables[13] = quantisierungsmatrixTables[4];
		quantisierungsmatrixTables[17] = quantisierungsmatrixTables[14] = quantisierungsmatrixTables[5];
		
		quantisierteKoeffizientenmatrixTables[9] = [
			15,-2,-3,-1,2,0,1,0,
			-11,-7,1,0,1,1,0,0,
			-1,3,0,0,0,0,0,0,
			9,1,0,0,-1,0,0,0,
			8,1,0,0,0,0,0,0,
			5,1,0,0,0,0,0,0,
			1,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0]
		
		quantisierteKoeffizientenmatrixTables[10] = [
			30,-4,-5,-2,4,0,2,0,
			-22,-13,2,1,1,2,1,1,
			-2,5,1,0,1,0,0,0,
			17,3,-1,0,-1,0,0,0,
			17,2,0,0,-1,0,-1,0,
			10,2,0,0,-1,0,-1,0,
			2,1,0,0,0,-1,0,0,
			0,0,0,0,0,0,0,0]
		
		quantisierteKoeffizientenmatrixTables[11]= [
			61,-8,-10,-5,8,1,3,1,
			-43,-27,5,2,3,3,2,1,
			-4,10,2,1,2,0,1,1,
			35,5,-1,0,-2,-1,-1,-1,
			34,5,-1,0,-2,-1,-1,-1,
			20,3,1,0,-1,-1,-1,-1,
			3,2,0,0,-1,-1,-1,-1,
			0,0,0,0,-1,-1,-1,0]
		
		quantisierteKoeffizientenmatrixTables[12] = [
			-2,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			1,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0]
		
		quantisierteKoeffizientenmatrixTables[13] = [
			-3,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0]
		
		quantisierteKoeffizientenmatrixTables[14] = [
			-6,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			1,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0]
		
		quantisierteKoeffizientenmatrixTables[15]= new Array(64).fill(0);
		
		quantisierteKoeffizientenmatrixTables[16] = [
			1,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0]
		
		quantisierteKoeffizientenmatrixTables[17] = [
			2,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0]

		function createTable(data, table) {
			var tableData = "";
			for (var i = 0; i < 8; i++) {
				tableData += "<tr>";
			  	for (var j = 0; j < 8; j++) {
					tableData += "<td>" + data[i * 8 + j] + "</td>";
			  	}
			  	tableData += "</tr>";
			}
			table.innerHTML = tableData;
		}

		var currentChannel;
		var currentQualityFactor;

		const buttonsQuality = [jpeg_chapter4_5_button_quality_25, jpeg_chapter4_5_button_quality_50, jpeg_chapter4_5_button_quality_75];
		const buttonsChannel = [jpeg_chapter4_5_button_channel_Y, jpeg_chapter4_5_button_channel_Cb, jpeg_chapter4_5_button_channel_Cr];

		function updateTables(qualityFactor, channel) {

			createTable(koeffizientenmatrixTables[(current_image_section - 1) * 9 + (channel - 1) * 3 + qualityFactor - 1], tableCoefficientMatrix);
			createTable(quantisierungsmatrixTables[(current_image_section - 1) * 9 + (channel - 1) * 3 + qualityFactor - 1], tableQuantizationMatrix);
			createTable(quantisierteKoeffizientenmatrixTables[(current_image_section - 1) * 9 + (channel - 1) * 3 + qualityFactor - 1], tableQuantizedCoefficientMatrix);
			currentChannel = channel;
			currentQualityFactor = qualityFactor;
		}
		
		updateTables(2, 1);
		highlightButtons2_5(2, 1);

		function showSection1() {
			jpeg_buttonShowImageSectionSelection.disabled = true;
			current_section_heading.innerHTML = "4.1 Quantisierung: Übersicht";
			showSection(1);
		};

		function highlightButtons2_5(qualityNumber, channelNumber) {
			for(var i = 0; i < buttonsQuality.length; i++) {
				if((i + 1) == qualityNumber){
					buttonsQuality[i].classList.add("jpeg_chapter4_button_selected");
				} else {
					buttonsQuality[i].classList.remove("jpeg_chapter4_button_selected");
				}
			}
			for(var i = 0; i < buttonsChannel.length; i++) {
				if((i + 1) == channelNumber){
					buttonsChannel[i].classList.add("jpeg_chapter4_button_selected");
				} else {
					buttonsChannel[i].classList.remove("jpeg_chapter4_button_selected");
				}
			}
		}

		const table_images = [jpeg_chapter4_image_example_table0, jpeg_chapter4_image_example_table1, jpeg_chapter4_image_example_table2, jpeg_chapter4_image_example_table4];
		const tables_middle = [jpeg_principleExampleNumber20, jpeg_principleExampleNumber21, jpeg_principleExampleNumber22, jpeg_principleExampleNumber24];
		const tables_right = [jpeg_principleExampleNumber30, jpeg_principleExampleNumber31, jpeg_principleExampleNumber32, jpeg_principleExampleNumber34];
		const exampleResults = [jpeg_chapter4_exampleResult1, jpeg_chapter4_exampleResult2, jpeg_chapter4_exampleResult4];

		function showTables(number) {
			for(var i = 0; i < table_images.length; i++) {
				if(i == number){
					table_images[i].style.display = "";
					tables_middle[i].style.display = "";
					tables_right[i].style.display = "";
				} else {
					table_images[i].style.display = "none";
					tables_middle[i].style.display = "none";
					tables_right[i].style.display = "none";
				}
			}
			for(var i = 0; i < exampleResults.length; i++) {
				if((i + 1) == number){
					exampleResults[i].style.display = "";
				} else {
					exampleResults[i].style.display = "none";					
				}
			}
		}

		showTables(0);

		function showSection2() {

			jpeg_buttonShowImageSectionSelection.disabled = true;

			jpeg_buttonImageSectionSelection1.onclick = selectImage1;
			jpeg_buttonImageSectionSelection2.onclick = selectImage2;

			jpeg_buttonShowPrincipleExample0.onclick = function() {
				showTables(0);
			}

			jpeg_buttonShowPrincipleExample1.onclick = function() {
				showTables(1);
			}
			  
			jpeg_buttonShowPrincipleExample2.onclick = function() {
				showTables(2);
			}
			jpeg_buttonShowPrincipleExample4.onclick = function() {
				showTables(3);
			}

			current_section_heading.innerHTML = "4.2 Prinzip der Quantisierung";
			showSection(2);

		};

		function showSection3() {

			jpeg_buttonShowImageSectionSelection.disabled = true;

			jpeg_buttonImageSectionSelection1.onclick = selectImage1;
			jpeg_buttonImageSectionSelection2.onclick = selectImage2;

			current_section_heading.innerHTML = "4.3 Quantisierung bei JPEG";
			showSection(3);
		};

		function showSection4() {

			jpeg_buttonShowImageSectionSelection.disabled = true;

			jpeg_buttonImageSectionSelection1.onclick = selectImage1;
			jpeg_buttonImageSectionSelection2.onclick = selectImage2;

			current_section_heading.innerHTML = "4.3 Quantisierung bei JPEG";
			showSection(4);
		};

		const qualityButtons1 = [jpeg_chapter4_5_button_channel_Y_image1, jpeg_chapter4_5_button_channel_Cb_image1, jpeg_chapter4_5_button_channel_Cr_image1];
		const qualityButtons2 = [jpeg_chapter4_5_button_channel_Y_image2, jpeg_chapter4_5_button_channel_Cb_image2, jpeg_chapter4_5_button_channel_Cr_image2];

		function showSection5() {

			jpeg_buttonShowImageSectionSelection.disabled = false;

			if(current_image_section == 1) {
				for(button of qualityButtons2) {
					button.style.display = "none";
				}
				for(button of qualityButtons1) {
					button.style.display = "";
				}
			} else {
				for(button of qualityButtons1) {
					button.style.display = "none";
				}
				for(button of qualityButtons2) {
					button.style.display = "";
				}
			}

			updateTables(2, 1);
			highlightButtons2_5(2, 1);

			jpeg_buttonImageSectionSelection1.onclick = function() {
				for(button of qualityButtons2) {
					button.style.display = "none";
				}
				for(button of qualityButtons1) {
					button.style.display = "";
				}
				selectImage1();
				updateTables(2, 1);
				highlightButtons2_5(2, 1);
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				for(button of qualityButtons1) {
					button.style.display = "none";
				}
				for(button of qualityButtons2) {
					button.style.display = "";
				}
				selectImage2();
				updateTables(2, 1);
				highlightButtons2_5(2, 1);
			}

			current_section_heading.innerHTML = "4.4 Kompressionsfaktor";
			showSection(5);

			for(button of buttonsQuality) {
				button.onclick = function() {
					updateTables(buttonsQuality.indexOf(this) + 1, currentChannel);
					highlightButtons2_5(buttonsQuality.indexOf(this) + 1, currentChannel);
				}
			}

			for(button of buttonsChannel) {
				button.onclick = function() {
					updateTables(currentQualityFactor, buttonsChannel.indexOf(this) + 1);
					highlightButtons2_5(currentQualityFactor, buttonsChannel.indexOf(this) + 1);
				}
			}
		};

		function showSection6() {

			jpeg_buttonShowImageSectionSelection.disabled = true;

			jpeg_buttonImageSectionSelection1.onclick = selectImage1;
			jpeg_buttonImageSectionSelection2.onclick = selectImage2;

			current_section_heading.innerHTML = "4.5 Quantisierung: Zusammenfassung";
			showSection(6);
		}

		return {
			showSection1: showSection1,
			showSection2: showSection2,
			showSection3: showSection3,
			showSection4: showSection4,
			showSection5: showSection5,
			showSection6: showSection6,
			num_sections: num_sections,
			current_section_headings: current_section_headings
		};

	}();


	// ========== chapter5 ========== //
	showChapter5 = function () {

		num_sections = 6;
		const current_section_headings = ["5.1 Entropiekodierung: Übersicht",
										"5.2 Zick-Zack-Sortierung",
										"5.3 Lauflängenkodierung",
										"5.4 Huffman-Kodierung",
										"5.5 Übertragene Informationen",
										"5.6 Rekonstruierte Daten",];

		function showSection(number) {
			for(var i = 1; i < num_sections + 1; i++) {
				if(i != number) {
					document.getElementById("jpeg_chapter5_section" + i).style.display = "none";
				} else {
					document.getElementById("jpeg_chapter5_section" + i).style.display = "";
				}
			}
		};

		function showSection1() {

			jpeg_buttonShowImageSectionSelection.disabled = true;

			jpeg_buttonImageSectionSelection1.onclick = selectImage1;
			jpeg_buttonImageSectionSelection2.onclick = selectImage2;

			current_section_heading.innerHTML = "5.1 Entropiekodierung: Übersicht";
			showSection(1);
		};

		var interval;
		var lines = jpeg_chapter5_2_matrix_content.children;
		var elements = [];
		var tableCells = [];
		for(line of lines) {
			for(table_data_cell of line.children) {
				elements.push(table_data_cell.firstChild);
				tableCells.push({
					id: table_data_cell.firstChild.dataset.id,
					x: table_data_cell.offsetLeft,
					y: table_data_cell.offsetTop
				});
			}
		}
		
		var numbers1 = [
			-6, -10, 1, -1, 1, 0, 0, 0,
			2, 2, 0, 1, 0, 0, 0, 0,
			-1, -1, 0, -1, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0,
		];

		var numbers2 = [
			30, -4, -5, -2, 4, 0, 2, 0,
			-22, -13, 2, 1, 1, 2, 1, 1,
			-2, 5, 1, 0, 1, 0, 0, 0, 0,
			17, 3, -1, 0, -1, 0, 0, 0,
			17, 2, 0, 0, -1, 0, -1, 0,
			10, 2, 0, 0, -1, 0, -1, 0,
			2, 1, 0, 0, 0, -1, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0
		];

		function showSection2() {

			jpeg_buttonShowImageSectionSelection.disabled = false;

			jpeg_chapter5_2_description_1.style.display = "none";
			jpeg_chapter5_2_description_2.style.display = "none";

			current_section_heading.innerHTML = "5.2 Zick-Zack-Sortierung";
			showSection(2);

			function stopAnimation() {
				if((typeof interval) != "undefined") {
					clearInterval(interval);
				}
				for(element of elements) {
					element.classList.remove("jpeg_chapter5_animated");
				}
				jpeg_chapter_5_2_triangle_animation.endElement();

			}

			function showAnimationStart() {
				stopAnimation();
				for(element of elements) {
					element.classList.remove("jpeg_chapter5_animated");
					element.classList.remove("jpeg_chapter5_animation_end");
					element.style.left = "0px";
					element.style.top = "0px";
				}
				jpeg_chapter5_2_svg.style.opacity = "0%";
				jpeg_chapter5_2_description_1.style.display = "none";
				jpeg_chapter5_2_description_2.style.display = "none";
			}
			showAnimationStart();

			var containerWidth = jpeg_chapter5_boxesNode.getBoundingClientRect().width;
			var containerPosX = jpeg_chapter5_boxesNode.offsetLeft - jpeg_chapter5_2_matrix.offsetLeft;
			var containerPosY = jpeg_chapter5_boxesNode.offsetTop - jpeg_chapter5_2_matrix.offsetTop;
			var fieldWidth = fieldHeight = document.getElementsByClassName("jpeg_chapter5_field")[0].getBoundingClientRect().width;
			var amountPerLine = parseInt(containerWidth / fieldWidth);

			function showAnimationEnd() {
				showAnimationStart();
				var lines = jpeg_chapter5_2_matrix_content.children;
				var elements = [];
				var tableCells = [];
				for(line of lines) {
					for(table_data_cell of line.children) {
						elements.push(table_data_cell.firstChild);
						tableCells.push({
							id: table_data_cell.firstChild.dataset.id,
							x: table_data_cell.offsetLeft,
							y: table_data_cell.offsetTop
						});
					}
				}
				elements.sort((a, b) => parseInt(a.dataset.id) - parseInt(b.dataset.id));
				tableCells.sort((a, b) => parseInt(a.id) - parseInt(b.id));
				var paddingTop = 0;
				for(var i = 0; i < elements.length; i++) {
					if(i == amountPerLine) {
						paddingTop = 10;
					}
					elements[i].classList.add("jpeg_chapter5_animation_end");
					elements[i].style.left = (containerPosX + (i % amountPerLine) * fieldWidth - tableCells[i].x) + "px";
					elements[i].style.top = (containerPosY + parseInt(i / amountPerLine) * (fieldHeight + paddingTop) - tableCells[i].y) + "px";
				}
				jpeg_chapter5_2_svg.style.opacity = "50%";
				if(current_image_section == 1) {
					jpeg_chapter5_2_description_2.style.display = "none";
					jpeg_chapter5_2_description_1.style.display = "";
				} else {
					jpeg_chapter5_2_description_1.style.display = "none";
					jpeg_chapter5_2_description_2.style.display = "";
				}
				
			}
			
			function animateMatrix() {
				
				showAnimationStart();

				jpeg_chapter_5_2_triangle_animation.beginElement();

				jpeg_chapter5_2_svg.style.opacity = "50%";

				var lines = jpeg_chapter5_2_matrix_content.children;
				var elements = [];
				var tableCells = [];
				for(line of lines) {
					for(table_data_cell of line.children) {
						elements.push(table_data_cell.firstChild);
						tableCells.push({
							id: table_data_cell.firstChild.dataset.id,
							x: table_data_cell.offsetLeft,
							y: table_data_cell.offsetTop
						});
					}
				}

				elements.sort((a, b) => parseInt(a.dataset.id) - parseInt(b.dataset.id));
				tableCells.sort((a, b) => parseInt(a.id) - parseInt(b.id));

				var containerWidth = jpeg_chapter5_boxesNode.getBoundingClientRect().width;
				var containerPosX = jpeg_chapter5_boxesNode.offsetLeft - jpeg_chapter5_2_matrix.offsetLeft;
				var containerPosY = jpeg_chapter5_boxesNode.offsetTop - jpeg_chapter5_2_matrix.offsetTop;

				var fieldWidth = fieldHeight = document.getElementsByClassName("jpeg_chapter5_field")[0].getBoundingClientRect().width;
				var amountPerLine = parseInt(containerWidth / fieldWidth);
				var paddingTop = 0;
				var currentIndex = 0;
				var currentField;
				interval = setInterval(function() {
					if(currentIndex < elements.length) {
						if(currentIndex == amountPerLine) {
							paddingTop = 10;
						}
						currentField = elements[currentIndex];
						currentField.classList.add("jpeg_chapter5_animated");
						currentField.style.left = (containerPosX + (currentIndex % amountPerLine) * fieldWidth - tableCells[currentIndex].x) + "px";
						currentField.style.top = (containerPosY + parseInt(currentIndex / amountPerLine) * (fieldHeight + paddingTop) - tableCells[currentIndex].y) + "px";
						currentIndex++;
					} else {
						clearInterval(interval);
						if(current_image_section == 1) {
							jpeg_chapter5_2_description_2.style.display = "none";
							jpeg_chapter5_2_description_1.style.display = "";
						} else {
							jpeg_chapter5_2_description_1.style.display = "none";
							jpeg_chapter5_2_description_2.style.display = "";
						}
					}
				}, 234.375);

			}
			
			if(current_image_section == 1) {
				renderMatrix1();
			} else {
				renderMatrix2();
			}

			jpeg_buttonImageSectionSelection1.onclick = function() {
				renderMatrix1();
				showAnimationStart();
				selectImage1();
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				renderMatrix2();
				showAnimationStart();
				selectImage2();
			}
			
			function renderMatrix1() {
				var lines = jpeg_chapter5_2_matrix_content.children;
				var elements = [];
				for(line of lines) {
					for(table_data_cell of line.children) {
						elements.push(table_data_cell.firstChild);
					}
				}
				for(var i = 0; i < elements.length; i++) {
					elements[i].innerHTML = numbers1[i];
				}
			}

			function renderMatrix2() {
				var lines = jpeg_chapter5_2_matrix_content.children;
				var elements = [];
				for(line of lines) {
					for(table_data_cell of line.children) {
						elements.push(table_data_cell.firstChild);
					}
				}
				for(var i = 0; i < elements.length; i++) {
					elements[i].innerHTML = numbers2[i];
				}
			}
			
			jpeg_chapter5_buttonShowMatrixStart.onclick = showAnimationStart;
			jpeg_chapter5_buttonShowMatrixAnimation.onclick = animateMatrix;
			jpeg_chapter5_buttonShowMatrixEnd.onclick = showAnimationEnd;

		};

		function showSection3() {

			jpeg_buttonShowImageSectionSelection.disabled = false;

			if(current_image_section == 1) {
				jpeg_chapter5_3_image_section1.style.display = "";
				jpeg_chapter5_3_image_section2.style.display = "none";
			} else {
				jpeg_chapter5_3_image_section1.style.display = "none";
				jpeg_chapter5_3_image_section2.style.display = "";
			}

			jpeg_buttonImageSectionSelection1.onclick = function() {
				jpeg_chapter5_3_image_section1.style.display = "";
				jpeg_chapter5_3_image_section2.style.display = "none";
				selectImage1();
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				jpeg_chapter5_3_image_section1.style.display = "none";
				jpeg_chapter5_3_image_section2.style.display = "";
				selectImage2();
			}

			current_section_heading.innerHTML = "5.3 Lauflängenkodierung";
			showSection(3);
		};

		function showSection4() {

			jpeg_buttonShowImageSectionSelection.disabled = false;

			if(current_image_section == 1) {
				jpeg_chapter5_4_image_section1.style.display = "";
				jpeg_chapter5_4_image_section2.style.display = "none";
			} else {
				jpeg_chapter5_4_image_section1.style.display = "none";
				jpeg_chapter5_4_image_section2.style.display = "";
			}

			jpeg_buttonImageSectionSelection1.onclick = function() {
				jpeg_chapter5_4_image_section1.style.display = "";
				jpeg_chapter5_4_image_section2.style.display = "none";
				selectImage1();
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				jpeg_chapter5_4_image_section1.style.display = "none";
				jpeg_chapter5_4_image_section2.style.display = "";
				selectImage2();
			}

			current_section_heading.innerHTML = "5.4 Huffman-Kodierung";
			showSection(4);
		};

		function showSection5() {

			jpeg_buttonShowImageSectionSelection.disabled = true;

			jpeg_buttonImageSectionSelection1.onclick = selectImage1;
			jpeg_buttonImageSectionSelection2.onclick = selectImage2;

			current_section_heading.innerHTML = "5.5 Übertragene Informationen";
			showSection(5);
		};


		var matricesBefore = new Array(6);
		var matricesAfter = new Array(18);

		matricesBefore[0] =  [100, 103, 108, 119, 119, 126, 130, 134,
							104, 100, 106, 120, 121, 127, 129, 135,
							111, 97, 109, 124, 119, 125, 130, 139,
							132, 91, 109, 118, 119, 127, 131, 140,
							111, 92, 107, 118, 120, 125, 128, 143,
							93, 95, 104, 114, 120, 127, 128, 144,
							87, 89, 102, 107, 111, 121, 126, 140,
							85, 86, 97, 105, 109, 118, 113, 156]

		matricesAfter[0] =   [112, 100, 101, 116, 121, 116, 122, 138,
								113, 101, 102, 118, 123, 118, 125, 141,
								114, 102, 104, 120, 126, 122, 129, 145,
								113, 102, 104, 121, 128, 124, 132, 149,
								109, 98, 101, 118, 127, 124, 132, 149,
								102, 92, 96, 114, 123, 121, 130, 147,
								96, 86, 90, 109, 118, 117, 126, 144,
								92, 82, 86, 105, 115, 114, 124, 141]
		
		matricesAfter[1] =  [103, 103, 109, 118, 120, 120, 129, 142,
								107, 103, 107, 118, 122, 122, 129, 140,
								111, 104, 105, 117, 125, 126, 130, 137,
								112, 103, 103, 115, 125, 127, 130, 136,
								106, 100, 102, 114, 123, 125, 130, 138,
								95, 95, 102, 114, 118, 120, 130, 143,
								83, 90, 102, 113, 113, 113, 129, 149,
								76, 86, 103, 113, 109, 109, 128, 153]
		
		matricesAfter[2] = [99, 93, 111, 119, 124, 128, 122, 137,
							106, 97, 111, 116, 122, 128, 125, 140,
							114, 101, 110, 113, 121, 129, 127, 142,
							116, 102, 110, 113, 121, 130, 128, 143,
							110, 98, 109, 114, 121, 129, 126, 141,
							99, 92, 106, 113, 119, 126, 125, 142,
							90, 85, 103, 108, 113, 120, 124, 145,
							85, 82, 100, 104, 108, 116, 124, 149]
		
		matricesBefore[1] = [93, 91, 88, 87, 88, 86, 87, 112,
							96, 92, 88, 88, 87, 85, 85, 100,
							97, 94, 92, 90, 89, 86, 87, 93,
							100, 96, 93, 93, 93, 88, 88, 85,
							100, 95, 93, 101, 110, 87, 86, 85,
							97, 93, 90, 100, 114, 88, 89, 84,
							98, 93, 90, 90, 90, 89, 87, 88,
							106, 103, 97, 94, 92, 89, 86, 87]
		
		matricesAfter[3] = [100, 99, 98, 95, 93, 90, 89, 88,
							100, 99, 98, 95, 93, 90, 89, 88,
							100, 99, 98, 95, 93, 90, 89, 88,
							100, 99, 98, 95, 93, 90, 89, 88,
							100, 99, 98, 95, 93, 90, 89, 88,
							100, 99, 98, 95, 93, 90, 89, 88,
							100, 99, 98, 95, 93, 90, 89, 88,
							100, 99, 98, 95, 93, 90, 89, 88]
		
		matricesAfter[4] = [96, 93, 88, 86, 86, 91, 96, 100,
							96, 93, 89, 87, 87, 90, 95, 98,
							95, 93, 91, 89, 88, 90, 93, 95,
							95, 94, 93, 91, 90, 90, 91, 91,
							95, 95, 95, 94, 92, 90, 88, 87,
							95, 96, 97, 96, 94, 90, 85, 83, 
							94, 96, 98, 98, 95, 90, 84, 79,
							94, 96, 99, 99, 96, 90, 83, 78]
		
		matricesAfter[5] = [97, 92, 85, 81, 82, 88, 96, 102,
							95, 92, 88, 86, 86, 89, 93, 96,
							93, 93, 93, 92, 91, 90, 88, 87,
							92, 94, 97, 98, 96, 91, 85, 81,
							92, 95, 99, 100, 98, 91, 84, 79,
							95, 96, 98, 98, 96, 91, 86, 83,
							97, 97, 96, 94, 93, 91, 90, 89,
							99, 97, 94, 91, 90, 91, 92, 94]
		
		matricesBefore[2] = [187, 192, 195, 194, 197, 198, 199, 159,
							183, 190, 194, 196, 198, 199, 198, 173,
							183, 188, 191, 192, 195, 194, 195, 178,
							181, 185, 188, 186, 182, 191, 192, 194,
							180, 187, 188, 167, 150, 191, 194, 197,
							184, 189, 193, 168, 148, 192, 191, 195,
							178, 181, 185, 186, 187, 189, 194, 194,
							152, 156, 159, 163, 165, 165, 168, 166]
		
		matricesAfter[6] = [178, 185, 194, 201, 201, 194, 185, 178,
							179, 184, 193, 199, 199, 193, 184, 179,
							180, 184, 190, 193, 193, 190, 184, 180,
							182, 184, 185, 187, 187, 185, 184, 182,
							184, 183, 181, 180, 180, 181, 183, 184,
							186, 182, 177, 173, 173, 177, 182, 186,
							188, 182, 174, 168, 168, 174, 182, 188,
							189, 182, 172, 165, 165, 172, 182, 189]
		
		matricesAfter[7] = [173, 183, 197, 207, 206, 195, 180, 169,
							181, 186, 194, 200, 199, 193, 184, 178,
							192, 191, 189, 189, 189, 190, 191, 192,
							198, 192, 183, 178, 179, 186, 195, 202,
							194, 187, 178, 171, 173, 182, 194, 203,
							182, 178, 173, 170, 172, 180, 188, 194,
							166, 167, 169, 172, 175, 178, 180, 181,
							156, 161, 168, 174, 178, 177, 174, 172]
		
		matricesAfter[8] = [178, 189, 191, 189, 197, 205, 188, 160,
							189, 199, 199, 194, 201, 211, 199, 175,
							190, 198, 195, 185, 190, 204, 200, 182,
							179, 188, 183, 169, 172, 188, 192, 181,
							178, 188, 185, 169, 169, 186, 195, 189, 
							181, 195, 196, 180, 178, 194, 204, 200,
							165, 184, 189, 175, 171, 185, 194, 191,
							140, 162, 171, 158, 152, 164, 173, 170]
		
		matricesBefore[3] = [241, 240, 241, 240, 241, 242, 240, 242,
							91, 86, 77, 74, 71, 72, 69, 149,
							87, 49, 89, 113, 112, 112, 112, 185,
							205, 183, 226, 241, 241, 241, 241, 240,
							167, 220, 241, 240, 240, 241, 217, 240,
							223, 240, 240, 242, 241, 222, 160, 219,
							240, 241, 242, 239, 242, 204, 188, 202,
							240, 241, 240, 241, 240, 175, 121, 201]
		
		matricesAfter[9] = [255, 185, 261, 269, 218, 245, 249, 246,
							19, 19, 16, 77, 55, 64, 77, 123,
							98, 115, 73, 149, 136, 113, 112, 190,
							228, 161, 217, 253, 244, 222, 197, 263,
							189, 189, 235, 219, 230, 248, 209, 244,
							205, 241, 270, 218, 236, 259, 199, 222,
							242, 262, 272, 224, 240, 219, 137, 189,
							241, 234, 240, 226, 251, 193, 106, 199]
		
		matricesAfter[10] = [251, 221, 259, 245, 241, 225, 263, 223,
							70, 97, 50, 75, 39, 92, 50, 160,
							104, 22, 105, 98, 144, 133, 69, 194,
							188, 217, 218, 244, 223, 222, 287, 217,
							193, 173, 237, 239, 225, 250, 214, 240,
							221, 248, 262, 221, 261, 249, 110, 240,
							229, 243, 235, 264, 213, 202, 187, 190,
							235, 272, 211, 236, 250, 185, 110, 225]
		
		matricesAfter[11] = [240, 254, 238, 237, 242, 252, 228, 250,
							98, 93, 79, 72, 77, 57, 79, 156,
							85, 38, 92, 108, 117, 111, 130, 162,
							212, 179, 224, 258, 225, 240, 231, 264,
							156, 230, 236, 232, 249, 238, 233, 222,
							219, 247, 236, 257, 232, 215, 175, 213,
							242, 236, 246, 230, 247, 192, 178, 225,
							244, 233, 254, 235, 243, 180, 131, 182]
		
		matricesBefore[4] = [122, 123, 123, 123, 119, 123, 128, 118,
							129, 124, 123, 123, 121, 122, 128, 117,
							124, 117, 120, 125, 117, 117, 126, 117,
							117, 117, 122, 128, 117, 120, 128, 117,
							117, 117, 117, 118, 117, 117, 125, 117,
							123, 123, 123, 123, 121, 123, 128, 117,
							128, 128, 128, 127, 122, 128, 128, 117,
							117, 117, 117, 117, 117, 117, 128, 118]
		
		matricesAfter[12] = new Array(64).fill(120);
		matricesAfter[13] = new Array(64).fill(122);
		
		matricesAfter[14] = [123, 123, 123, 123, 123, 123, 123, 123,
							122, 122, 122, 122, 122, 122, 122, 122,
							120, 120, 120, 120, 120, 120, 120, 120,
							119, 119, 119, 119, 119, 119, 119, 119,
							119, 119, 119, 119, 119, 119, 119, 119,
							120, 120, 120, 120, 120, 120, 120, 120,
							122, 122, 122, 122, 122, 122, 122, 122,
							123, 123, 123, 123, 123, 123, 123, 123]
		
		matricesBefore[5] = [130, 129, 130, 130, 130, 129, 128, 131,
							128, 129, 130, 129, 129, 129, 128, 131,
							129, 131, 130, 129, 132, 131, 128, 131,
							131, 132, 129, 128, 131, 130, 128, 132,
							130, 131, 130, 130, 131, 131, 128, 131,
							130, 129, 129, 129, 130, 130, 128, 131,
							128, 128, 128, 128, 129, 129, 128, 131,
							130, 131, 131, 131, 132, 131, 128, 131]
		
		matricesAfter[15] = new Array(64).fill(128);
		matricesAfter[16] = new Array(64).fill(130);
		matricesAfter[17] = matricesAfter[16];

		showMatrixBefore(0, 1);
		showMatrixAfter(0, 1);
		
		function showMatrixBefore(numberMatrix, numberImageSection) {
			var tbody = jpeg_chapter5_6_matrix_content_before;
			var lines = tbody.children;
			for(var i = 0; i < 8; i++) {
				var table_cells = Array.from(lines[i].children);
				for(var j = 0; j < 8; j++) {
					table_cells[j].innerHTML = matricesBefore[numberImageSection * 3 + numberMatrix][i * 8 + j];
				}
			}
		}

		function showMatrixAfter(numberMatrix, numberImageSection) {
			var tbody = jpeg_chapter5_6_matrix_content_after;
			var lines = tbody.children;
			for(var i = 0; i < 8; i++) {
				var table_cells = Array.from(lines[i].children);
				for(var j = 0; j < 8; j++) {
					table_cells[j].innerHTML = matricesAfter[numberImageSection * 9 + numberMatrix][i * 8 + j];
				}
			}
		}

		const original_sizes = ["7.8", "8.6"];
		const compressed_sizes = ["1.0", "1.5", "2.4", "1.6", "2.2", "3.5"];
		const original_images = [jpeg_chapter5_6_original_image_1, jpeg_chapter5_6_original_image_2];
		const compressed_images = [jpeg_chapter5_6_compressed_image_1_25, jpeg_chapter5_6_compressed_image_1_50, jpeg_chapter5_6_compressed_image_1_75,
									jpeg_chapter5_6_compressed_image_2_25, jpeg_chapter5_6_compressed_image_2_50, jpeg_chapter5_6_compressed_image_2_75];

		function showMatrices(numberMatrix, numberImageSection) {
			showMatrixBefore(numberMatrix, numberImageSection);
			showMatrixAfter(numberMatrix * 3 + currentQuality, numberImageSection);
			jpeg_chapter5_original_size.innerHTML = original_sizes[numberImageSection];
			jpeg_chapter5_compressed_size.innerHTML = compressed_sizes[numberImageSection * 3 + currentQuality];
			if(numberImageSection == 0) {
				original_images[1].style.display = "none";
				original_images[0].style.display = "";
				jpeg_chapter5_6_button_channel_Y_image1.style.display = "";
				jpeg_chapter5_6_button_channel_Cb_image1.style.display = "";
				jpeg_chapter5_6_button_channel_Cr_image1.style.display = "";
				jpeg_chapter5_6_button_channel_Y_image2.style.display = "none";
				jpeg_chapter5_6_button_channel_Cb_image2.style.display = "none";
				jpeg_chapter5_6_button_channel_Cr_image2.style.display = "none";

			} else {
				original_images[0].style.display = "none";
				original_images[1].style.display = "";
				jpeg_chapter5_6_button_channel_Y_image1.style.display = "none";
				jpeg_chapter5_6_button_channel_Cb_image1.style.display = "none";
				jpeg_chapter5_6_button_channel_Cr_image1.style.display = "none";
				jpeg_chapter5_6_button_channel_Y_image2.style.display = "";
				jpeg_chapter5_6_button_channel_Cb_image2.style.display = "";
				jpeg_chapter5_6_button_channel_Cr_image2.style.display = "";
			}
			for(var i = 0; i < 6; i++) {
				if(i == numberImageSection * 3 + currentQuality) {
					compressed_images[i].style.display = "";
				} else {
					compressed_images[i].style.display = "none";
				}
			}
			for(button of buttonsChannel) {
				if(buttonsChannel.indexOf(button) == currentChannel) {
					button.classList.add("jpeg_chapter5_selected");
				} else {
					button.classList.remove("jpeg_chapter5_selected");
				}
			}
			for(button of buttonsQuality) {
				if(buttonsQuality.indexOf(button) == currentQuality) {
					button.classList.add("jpeg_chapter5_selected");
				} else {
					button.classList.remove("jpeg_chapter5_selected");
				}
			}
		}
		
		const buttonsQuality = [jpeg_chapter5_6_button_quality_25, jpeg_chapter5_6_button_quality_50, jpeg_chapter5_6_button_quality_75];
		const buttonsChannel = [jpeg_chapter5_6_button_channel_Y, jpeg_chapter5_6_button_channel_Cb, jpeg_chapter5_6_button_channel_Cr];
		var currentQuality = 1;
		var currentChannel = 0;

		for(button of buttonsQuality) {
			button.onclick = function() {
				currentQuality = buttonsQuality.indexOf(this);
				showMatrices(currentChannel, current_image_section - 1);
			}
		}

		for(button of buttonsChannel) {
			button.onclick = function() {
				currentChannel = buttonsChannel.indexOf(this);
				showMatrices(currentChannel, current_image_section - 1);
			}
		}

		function showSection6() {

			jpeg_buttonShowImageSectionSelection.disabled = false;

			showMatrices(0, current_image_section - 1);

			jpeg_buttonImageSectionSelection1.onclick = function() {
				currentChannel = 0;
				currentQuality = 1;
				showMatrices(0, 0);
				selectImage1();
			}

			jpeg_buttonImageSectionSelection2.onclick = function() {
				currentChannel = 0;
				currentQuality = 1;
				showMatrices(0, 1);
				selectImage2();
			}

			current_section_heading.innerHTML = "5.6 Rekonstruierte Daten";
			showSection(6);
		};

		return {
			showSection1: showSection1,
			showSection2: showSection2,
			showSection3: showSection3,
			showSection4: showSection4,
			showSection5: showSection5,
			showSection6: showSection6,
			num_sections: num_sections,
			current_section_headings: current_section_headings
		};

	}();

	num_sections = 4;
	currentChapter = showChapter1;
	showSection();
	updateButtonStates();

	/* Testing
	console.log(showChapter1.current_section_headings);
	console.log(showChapter2.current_section_headings);
	console.log(showChapter3.current_section_headings);
	console.log(showChapter4.current_section_headings);
	console.log(showChapter5.current_section_headings);
	var currentChapter = showChapter4;
	currentChapter.showSection5();
	chapter1.style.display = "none";
	chapter4.style.display = "";
	//*/
});