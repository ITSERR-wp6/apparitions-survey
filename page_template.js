
const page_template = 
  {
   "name": "page3",
   "elements": [
    {
     "type": "panel",
     "name": "panel1",
     "elements": [
      {
       "type": "html",
       "maxWidth": "30%",
       "name": "question2",
       "html": {
        "it": ""
       }
      },
      {
       "type": "matrix",
       "name": "question3",
       "startWithNewLine": false,
       "title": {
        "default": "Questa immagine è alterata o modificata?",
        "it": "Valuta le seguenti affermazioni"
       },
       "isRequired": true,
       "alternateRows": true,
       "maxWidth": "100%",
       "width": 0,
       "columnMinWidth": 0,
       "columns": [
        {
         "value": "0",
         "text": {
          "it": "Per niente"
         }
        },
        {
         "value": "1",
         "text": {
          "it": "Poco"
         }
        },
        {
         "value": "2",
         "text": {
          "it": "Abbastanza"
         }
        },
        {
         "value": "3",
         "text": {
          "default": "Abbastanza1",
          "it": "Molto"
         }
        },
        {
         "value": "-1",
         "text": {
          "default": "Molto1",
          "it": "Non saprei"
         }
        }
       ],
       "rows": [
        {
         "value": "Row 1",
         "text": {
          "it": "L'immagine è alterata o modificata"
         }
        },
        {
         "value": "Row 2",
         "text": {
          "it": "L'immagine è blasfema"
         }
        },
        {
         "value": "Row 3",
         "text": {
          "it": "L'immagine è cattolica (cioè coerente con il Cattolicesimo)"
         }
        },
        {
         "value": "Row 4",
         "text": {
          "it": "L'immagine presenta tratti di religioni o spiritualità diverse dal Cattolicesimo"
         }
        },
        {
         "value": "Row 5",
         "text": {
          "it": "Il volto di Maria ti ricorda i tratti di un personaggio celebre"
         }
        }
       ],
       "isAllRowRequired": true
      }
     ]
    },
    {
     "type": "text",
     "name": "question4",
     "visibleIf": "{question3.Row 1} > 0",
     "title": {
      "it": "Cosa ti sembra alterato o modificato?"
     },
     "isRequired": true
    },
    {
     "type": "text",
     "name": "question5",
     "visibleIf": "{question3.Row 2} > 0",
     "title": {
      "it": "Quali sono i dettagli blasfemi di questa immagine?"
     },
     "isRequired": true
    },
    {
     "type": "text",
     "name": "question6",
     "visibleIf": "{question3.Row 3} > -1 and {question3.Row 3} < 3",
     "title": {
      "it": "In cosa questa immagine non è coerente con il Cattolicesimo?"
     },
     "isRequired": true
    },
    {
     "type": "text",
     "name": "question7",
     "visibleIf": "{question3.Row 4} > 0",
     "title": {
      "it": "Quali sono i tratti di religioni o spiritualità diverse dal Cattolicesimo in questa immagine?"
     },
     "isRequired": true
    },
    {
     "type": "radiogroup",
     "name": "question8",
     "visibleIf": "{question3.Row 4} > 0",
     "startWithNewLine": false,
     "title": {
      "it": "Riconosci una religione o spiritualità a cui ricondurre i tratti che hai indicato?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "Buddhismo",
       "text": {
        "it": "Buddhismo"
       }
      },
      {
       "value": "Ebraismo",
       "text": {
        "it": "Ebraismo"
       }
      },
      {
       "value": "Islam",
       "text": {
        "it": "Islam"
       }
      },
      {
       "value": "Religioni dell'India",
       "text": {
        "it": "Religioni dell'India"
       }
      },
      {
       "value": "Non so",
       "text": {
        "it": "Non so"
       }
      },
      {
       "value": "Nessuna delle precedenti",
       "text": {
        "it": "Nessuna delle precedenti"
       }
      }
     ],
     "colCount": 3
    },
    {
     "type": "text",
     "name": "question9",
     "visibleIf": "{question3.Row 5} > 0",     
     "title": {
      "it": "Quale personaggio celebre ti ricordano i tratti di Maria in questa immagine?"
     },
     "description": {
      "it": "Se non ricordi/non sai puoi indicarlo nel testo."
     },
     "isRequired": true
    },
    {
     "type": "radiogroup",
     "name": "question10",
     "title": {
      "it": "Di quale iconografia mariana si tratta?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "Madonna di Lourdes",
       "text": {
        "it": "Madonna di Lourdes"
       }
      },
      {
       "value": "Madonna di Fatima",
       "text": {
        "it": "Madonna di Fatima"
       }
      },
      {
       "value": "Madonna de La Salette",
       "text": {
        "it": "Madonna de La Salette"
       }
      },
      {
       "value": "Madonna delle Lacrime di Siracusa",
       "text": {
        "it": "Madonna delle Lacrime di Siracusa"
       }
      },
      {
       "value": "Madonna del Rosario di Pompei",
       "text": {
        "it": "Madonna del Rosario di Pompei"
       }
      },
      {
       "value": "Madonna di Caravaggio",
       "text": {
        "it": "Madonna di Caravaggio"
       }
      },
      {
       "value": "Madonna di Pontmain",
       "text": {
        "it": "Madonna di Pontmain"
       }
      },
      {
       "value": "Madonna di Banneux",
       "text": {
        "it": "Madonna di Banneux"
       }
      },
      {
       "value": "Madonna di Beauring",
       "text": {
        "it": "Madonna di Beauring"
       }
      },
      {
       "value": "Apparizione di Knock",
       "text": {
        "it": "Apparizione di Knock"
       }
      },
      {
       "value": "Madonna di Guadalupe",
       "text": {
        "it": "Madonna di Guadalupe"
       }
      },
      {
       "value": "Nessuna delle precedenti",
       "text": {
        "it": "Nessuna delle precedenti"
       }
      },
      {
       "value": "Non so",
       "text": {
        "it": "Non so"
       }
      }
     ],
     "colCount": 3
    }
   ]
  }
