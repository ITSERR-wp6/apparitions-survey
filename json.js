// Get the value of the 'parameter' parameter from the URL
const gid_param = getParameterByName('gid');

const pages = createRepeatedSurvey(page_template, gid_param, 15);

const json = {
 "locale": "it",
 "completedHtml": "<h3>Grazie per aver completato il questionario!</h3><img style=\"width: 50px\" src=\"loader.gif\"/><h5>Attendi finché le risposte sono salvate...</h5>", 
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "html",
     "name": "question1",
     "maxWidth": "100%",
     "html": "<b>Benvenuto/a e grazie per il tuo interesse nei confronti della nostra ricerca.</b><br><br>Il questionario che ti proporremo fa parte di un’attività di ricerca legata al progetto PNRR ITSERR, condotta da un gruppo di storici del cristianesimo (prof. Federico Ruozzi, Università di Modena e Reggio Emilia; dott. Marco Papasidero, Università di Palermo), e riguarda lo studio dei fenomeni devozionali e della percezione delle immagini religiose in età contemporanea.<br><br>Prima di iniziare, desideriamo informarti che il sondaggio verrà condotto in lingua italiana e pertanto è necessaria la conoscenza della stessa per partecipare."
    },
    {
     "type": "text",
     "name": "group_id",
     "defaultValue": gid_param,
     "visible": false
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "eta",
     "title": "Età",
     "isRequired": true,
     "colCount": 2,
     "choices": [
      "18-30",
      "31-40",
      "41-50",
      "51-60",
      "61-70",
      "71 e oltre"
     ]
    },
    {
     "type": "dropdown",
     "name": "regione",
     "title": "Regione di residenza",
     "isRequired": true,     
     "choices": [
      "Risiedo all'estero",
      "Abruzzo",
      "Basilicata",
      "Calabria",
      "Campania",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Lazio",
      "Liguria",
      "Lombardia",
      "Marche",
      "Molise",
      "Piemonte",
      "Puglia",
      "Sardegna",
      "Sicilia",
      "Toscana",
      "Trentino-Alto Adige (Trentino-Südtirol)",
      "Umbria",
      "Valle d'Aosta (Vallée d'Aoste)",
      "Veneto"
     ]
    },
    {
     "type": "dropdown",
     "name": "professione",
     "title": "Ambito professionale",
     "isRequired": true,
     "choices": [
      "Università e Ricerca",
      "Salute e Benessere",
      "Tecnologia e Informatica",
      "Finanza e Contabilità",
      "Commercio e Vendite",
      "Educazione e Formazione",
      "Arte e Design",
      "Ingegneria e Architettura",
      "Legale e Giuridico",
      "Marketing e Pubblicità",
      "Media e Comunicazione",
      "Ambiente e Sostenibilità",
      "Trasporti e Logistica",
      "Risorse Umane e Gestione del Personale",
      "Agricoltura e Agroalimentare",
      "Governo e Pubblica Amministrazione",
      "Produzione e Manifatturiero",
      "Turismo e Ospitalità",
      "Servizi Sociali e Assistenza"
     ]
    },
    {
     "type": "text",
     "name": "ambito",
     "visibleIf": "{professione} = 'Università e Ricerca'",
     "title": "Ambito di ricerca",
     "isRequired": true
    },
    {
     "type": "radiogroup",
     "name": "genere",
     "title": "Genere",
     "isRequired": true,
     "choices": [
      "Maschile",
      "Femminile",
      "Non binario",
      "Preferisco non rispondere"
     ]
    },
    {
     "type": "radiogroup",
     "name": "istruzione",
     "title": "Livello di istruzione",
     "colCount": 2,
     "isRequired": true,
     "choices": [
      "Diploma di scuola elementare",
      "Diploma di scuola media",
      "Diploma di scuola superiore",
      "Laurea triennale",
      "Laurea magistrale",
      "Dottorato di ricerca"
     ]
    },
    {
     "type": "radiogroup",
     "name": "religione",
     "title": "Posizione religiosa",
     "colCount": 2,     
     "isRequired": true,
     "choices": [
      "Cattolico consacrato",
      "Cattolico laico praticante",
      "Cattolico laico non praticante",
      "Altra confessione cristiana",
      "Agnostico",
      "Ateo"
     ],
     "showOtherItem": true,
     "otherText": "Altra religione"
    }    
   ]
  }].concat(pages,
  [{
   "name": "final_page",
   "elements": [
    {
     "type": "comment",
     "name": "question11",
     "title": {
      "it": "Quando per te un’immagine è blasfema?"
     },
     "isRequired": true
    }
   ]
  }]),
 //"cookieName": "itserr_user",
 "showPrevButton": false,
 "showTitle": false,
 "showProgressBar": "auto",
 "firstPageIsStarted": true,
 "widthMode": "responsive"
}