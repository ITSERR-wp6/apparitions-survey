function getContent(groupId, imageId) {
    // Check if the groupId exists in the data object
    if (data.hasOwnProperty(groupId)) {
        const groupImages = data[groupId];
        
        // Check if the imageId is within the range of the group's images
        if (imageId >= 0 && imageId < groupImages.length) {
            return groupImages[imageId];
        } else {
            alert('Si verificato un errore. Contatta gli organizzatori del questionario');
            return 0;
        }
    } else {
        alert('Si verificato un errore. Contatta gli organizzatori del questionario');
        return 0;
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function createRepeatedSurvey(initialSurvey, group_id, repeatCount) {
  const surveys = [];
  for (let i = 0; i < repeatCount; i++) {
    const surveyCopy = JSON.parse(JSON.stringify(initialSurvey));
    // Update names with unique values
    updateNames(surveyCopy, i);
    updateImgUrl(surveyCopy, group_id, i);
    updateVisibleIf(surveyCopy, i);    
    surveys.push(surveyCopy);
  }
  return surveys;
}

// Function to update the names with unique values
function updateNames(survey, index) {
  const elements = survey.elements;
  if (survey.name) {
      survey.name += "_" + index; // Append index to make it unique
  }
  elements.forEach(element => {
    if (element.name) {
      element.name += "_" + index; // Append index to make it unique
    }
    if (element.elements) {
      updateNames(element, index);
    }
  });
}

// Function to update img url
function updateImgUrl(survey, group_id, i) {
  const element = survey.elements[0].elements[0];
  if (element.html){
      element.html.it = `<img src="data/${getContent(group_id, i)}">`;
  }
}

// Function to update visibleIf fields
function updateVisibleIf(survey, index) {
  const elements = survey.elements;
  elements.forEach(element => {
    if (element.visibleIf) {
      element.visibleIf = updateVisibleIfExpression(element.visibleIf, index);
    }
    if (element.elements) {
      updateVisibleIf(element, index);
    }
  });
}

// Function to update the visibleIf expression
function updateVisibleIfExpression(expression, index) {
  // Replace all occurrences of "{question3.Row 4}" with "{question3_0.Row 4}"
  return expression.replace(/\{([^}]+)\}/g, (match, p1) => {
    return `{${p1.replace(/\./g, `_${index}.`)}}`;
  });
}

function sendDataToServer(survey, options) {
    options.showDataSaving();
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbyH_vyeaP5MNUWV8fPYAZ8XmMP8mFMXcZywHUChTrzLW-iiObZvZrJiNfztkXNAT_6Lug/exec',
        type: 'post',
        data: JSON.stringify(survey.data),
        headers: {
            "Content-Type": "text/plain"
        },
        processData: false,
        complete: function(res, status) {
            if (status == 'success') {
                 $("#surveyElement > div > div > form > div.sd-container-modern > div").html("<h3>Risposte salvate correttamente!</h3><h5>Puoi chiudere la pagina.</h5>");
            } else {
                $("#surveyElement > div > div > form > div.sd-container-modern > div").html("<h3>Si è verificato un errore nel salvataggio dei dati.</h3><h5>Contatta gli organizzatori del questionario.</h5>");
            }
        },
    });
}