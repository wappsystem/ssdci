(function(){
    var modules={
        "panel-main-ssdci":    			{url:"$A/components/panel/panel-main.html",router:1},
        "panel-child-ssdci":    			{url:"$A/components/panel/panel-child.html"},
        
        "participant-data":   		{url:"$A/components/participant/participant-data.html",Table:"ssdci-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-ssdci",
                                            questionnaire_setup:"online-questionnaire-setup-ssdci",
                                            online_questionnaire:"online-questionnaire-app-ssdci",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$A/components/participant/participant-form.html",Table:"ssdci-participant"},

        "online-questionnaire-setup-ssdci": 	{url:"$A/online-questionnaire/components/online-questionnaire-setup.html",Table:"ssdci-participant"},
        "online-questionnaire-app-ssdci":    {url:"$A/online-questionnaire/index.html"},

        "notes":  		  	  			{url:"$A/modules/notes.html"},

        "ssdci-date-data":		            {url:"$A/modules/date-data.html",Table:"ssdci-date",form_module:"ssdci-date-form"},
        "ssdci-date-form":		            {url:"$A/modules/date-form.html",Table:"ssdci-date"},
        "ssdci-anthropometry-data":		    {url:"$A/modules/anthropometry-data.html",Table:"ssdci-anthropometry",form_module:"ssdci-anthropometry-form"},
        "ssdci-anthropometry-form":		    {url:"$A/modules/anthropometry-form.html",Table:"ssdci-anthropometry"},
        "ssdci-ethnicity-data":		        {url:"$A/modules/ethnicity-data.html",Table:"ssdci-ethnicity",form_module:"ssdci-ethnicity-form"},
        "ssdci-ethnicity-form":		        {url:"$A/modules/ethnicity-form.html",Table:"ssdci-ethnicity",task_name:"Ethnicity"},
        "ssdci-lifestyle-data":		        {url:"$A/modules/lifestyle-data.html",Table:"ssdci-lifestyle",form_module:"ssdci-lifestyle-form"},
        "ssdci-lifestyle-form":		        {url:"$A/modules/lifestyle-form.html",Table:"ssdci-lifestyle",task_name:"Lifestyle"},
        "ssdci-education-data":		        {url:"$A/modules/education-data.html",Table:"ssdci-education",form_module:"ssdci-education-form"},
        "ssdci-education-form":		        {url:"$A/modules/education-form.html",Table:"ssdci-education",task_name:"Education"},
        "ssdci-medical-history-data":		{url:"$A/modules/medical-history-data.html",Table:"ssdci-medical-history",form_module:"ssdci-medical-history-form"},
        "ssdci-medical-history-form":		{url:"$A/modules/medical-history-form.html",Table:"ssdci-medical-history",task_name:"Medical History"},
        "ssdci-ess-data":		            {url:"$A/modules/ess-data.html",Table:"ssdci-ess",form_module:"ssdci-ess-form"},
        "ssdci-ess-form":		            {url:"$A/modules/ess-form.html",Table:"ssdci-ess",task_name:"Epworth Sleepiness Scale"},
        "ssdci-isi-data":		            {url:"$A/modules/isi-data.html",Table:"ssdci-isi",form_module:"ssdci-isi-form"},
        "ssdci-isi-form":		            {url:"$A/modules/isi-form.html",Table:"ssdci-isi",task_name:"Insomnia Severity Index (ISI)"},
        "ssdci-stop-bang-data":		        {url:"$A/modules/stop-bang-data.html",Table:"ssdci-stop-bang",form_module:"ssdci-stop-bang-form"},
        "ssdci-stop-bang-form":		        {url:"$A/modules/stop-bang-form.html",Table:"ssdci-stop-bang",task_name:"Stop-BANG"},
        "ssdci-gds-data":		            {url:"$A/modules/gds-data.html",Table:"ssdci-gds",form_module:"ssdci-gds-form"},
        "ssdci-gds-form":		            {url:"$A/modules/gds-form.html",Table:"ssdci-gds",task_name:"Geriatric Depression Scale"},
        "ssdci-hads-data":		            {url:"$A/modules/hads-data.html",Table:"ssdci-hads",form_module:"ssdci-hads-form"},
        "ssdci-hads-form":		            {url:"$A/modules/hads-form.html",Table:"ssdci-hads",task_name:"Hospital Anxiety and Depression Questionnaire (HADS)"},
        "ssdci-ispq-data":		            {url:"$A/modules/ispq-data.html",Table:"ssdci-ispq",form_module:"ssdci-ispq-form"},
        "ssdci-ispq-form":		            {url:"$A/modules/ispq-form.html",Table:"ssdci-ispq",task_name:"Impact to Sleep and Preferences Questionnaire"},
        
        "ssdci-file-notes-data":		            {url:"$A/modules/file-notes-data.html",Table:"ssdci-file-notes",form_module:"ssdci-file-notes-form"},
        "ssdci-file-notes-form":		            {url:"$A/modules/file-notes-form.html",Table:"ssdci-file-notes"},
        "ssdci-concom-medication-data":		{url:"$A/modules/concom-medication-data.html",Table:"ssdci-concom-medication",form_module:"ssdci-concom-medication-form"},
        "ssdci-concom-medication-form":		{url:"$A/modules/concom-medication-form.html",Table:"ssdci-concom-medication"},

        "ssdci-moca-data":		            {url:"$A/modules/moca-data.html",Table:"ssdci-moca",form_module:"ssdci-moca-form"},
        "ssdci-moca-form":		            {url:"$A/modules/moca-form.html",Table:"ssdci-moca"},
        "ssdci-stroop-data":		            {url:"$A/modules/stroop-data.html",Table:"ssdci-stroop",form_module:"ssdci-stroop-form"},
        "ssdci-stroop-form":		            {url:"$A/modules/stroop-form.html",Table:"ssdci-stroop"},
        "ssdci-tmt-data":		            {url:"$A/modules/tmt-data.html",Table:"ssdci-tmt",form_module:"ssdci-tmt-form"},
        "ssdci-tmt-form":		            {url:"$A/modules/tmt-form.html",Table:"ssdci-tmt"},
        "ssdci-ravlt-data":		            {url:"$A/modules/ravlt-data.html",Table:"ssdci-ravlt",form_module:"ssdci-ravlt-form"},
        "ssdci-ravlt-form":		            {url:"$A/modules/ravlt-form.html",Table:"ssdci-ravlt"},
        "ssdci-psg300-data":		            {url:"$A/modules/psg300-data.html",Table:"ssdci-psg300",form_module:"ssdci-psg300-form"},
        "ssdci-psg300-form":		            {url:"$A/modules/psg300-form.html",Table:"ssdci-psg300"},
        "ssdci-actigraphy-data":		    {url:"$A/modules/actigraphy-data.html",Table:"ssdci-actigraphy",form_module:"ssdci-actigraphy-form"},
        "ssdci-actigraphy-form":		    {url:"$A/modules/actigraphy-form.html",Table:"ssdci-actigraphy"},

        "ssdci-earlysense-data":		    {url:"$A/modules/earlysense-data.html",Table:"ssdci-earlysense",form_module:"ssdci-earlysense-form"},
        "ssdci-earlysense-form":		    {url:"$A/modules/earlysense-form.html",Table:"ssdci-earlysense"},
        "ssdci-wristox-data":		    {url:"$A/modules/wristox-data.html",Table:"ssdci-wristox",form_module:"ssdci-wristox-form"},
        "ssdci-wristox-form":		    {url:"$A/modules/wristox-form.html",Table:"ssdci-wristox"},
   }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
