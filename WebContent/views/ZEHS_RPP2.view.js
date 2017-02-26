sap.ui.jsview("zehsrpp.views.ZEHS_RPP2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zehs_rpp_v1.ZEHS_RPP2
	*/ 
	getControllerName : function() {
		return "zehsrpp.controllers.ZEHS_RPP2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zehs_rpp_v1.ZEHS_RPP2
	*/ 
	createContent : function(oController) 
	{
		
		var oLayout1 = new sap.ui.commons.layout.MatrixLayout({ id: 'layoutId3',
			layoutFixed:true,
            columns: 1,
            width: "100%",
            widths: ["100%"]
         })
		
		var ihead = new sap.ui.commons.TextView({text : "RESPIRATORY PROTECTION MEDICAL EVALUATION QUESTIONNAIRE",
			   width: "100%",	
            textAlign: 'Center',
            semanticColor: sap.ui.commons.TextViewColor.Positive,
            design: sap.ui.commons.TextViewDesign.H1})
		
		oLayout1.createRow(ihead)
		//Create a standard divider
		var odiv = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 1})
		odiv.addContent(new sap.ui.commons.HorizontalDivider())
		oLayout1.createRow(odiv)
		var iShead = new sap.ui.commons.TextView({text : "Section A",
											      width: "100%",	
									              textAlign: 'Center',
									              semanticColor: sap.ui.commons.TextViewColor.Positive,
									              design: sap.ui.commons.TextViewDesign.H2})
		oLayout1.createRow(iShead)
		//Create a standard divider
		var odiv = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 1})
		odiv.addContent(new sap.ui.commons.HorizontalDivider())
		oLayout1.createRow(odiv)
		
		

		var oLayout2 = new sap.ui.commons.layout.MatrixLayout({ id: 'layoutId4',
			layoutFixed:true,
            columns: 4,
            width: "100%",
            widhts : ['50px','80px','50px','80px']
         })
		
     	// Header Section 
	    var iLabel = new sap.ui.commons.Label({text : "Last  Name :"})
		var iTxtv  = new sap.ui.commons.TextView({text:"{jModelId1>/lname}"})

		var iLabel1 = new sap.ui.commons.Label({text : "First Name :"})
		var iTxtv1 = new sap.ui.commons.TextView({text: "{jModelId1>/fname}"})
		oLayout2.createRow(iLabel, iTxtv,iLabel1, iTxtv1 )
		var iLabel = new sap.ui.commons.Label({text : "Social Security Number"})
		var iTxtv  = new sap.ui.commons.TextView({text :"***-***-****"})
	    
		var iLabel1 = new sap.ui.commons.Label({text : "Today's Date"})
		var iTxtv1 = new sap.ui.commons.TextView({text: "mmm-dd-yyyy"})
		oLayout2.createRow(iLabel, iTxtv,iLabel1, iTxtv1 )
		//Create a standard divider
		var odiv = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 4})
		odiv.addContent(new sap.ui.commons.HorizontalDivider())
		oLayout2.createRow(odiv)
	    //
		var iLabel = new sap.ui.commons.Label({text : "Height"})
		var iTxtv  = new sap.ui.commons.TextView({text:"5.11"})

		var iLabel1 = new sap.ui.commons.Label({text : "Weight (lbs)"})
		var iTxtv1  = new sap.ui.commons.TextField({id: 'weightId',
			                                        width: "50px"})

		oLayout2.createRow(iLabel, iTxtv,iLabel1, iTxtv1 )
		
	// Create a ComboBox
		var oComboBox1 = new sap.ui.commons.ComboBox("ComboBox3",
				{
				tooltip: "Gender",
				items: [new sap.ui.core.ListItem("M",{text: "Male", key: "M"}),
				        new sap.ui.core.ListItem("F",{text: "Female", key: "F"})]
				}
				);
		var iLabel = new sap.ui.commons.Label({ text: "Gender:", labelFor: oComboBox1});

		var iLabel1 = new sap.ui.commons.Label({text : "Age"})
		var iTxtv1 = new sap.ui.commons.TextView({text: "45"})
		oLayout2.createRow(iLabel, oComboBox1,iLabel1, iTxtv1)
		//Create a standard divider
		var odiv = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 4})
		odiv.addContent(new sap.ui.commons.HorizontalDivider())
		oLayout2.createRow(odiv)
	    
		var oDivider1 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
		var iShead = new sap.ui.commons.TextView({text : "Section B",
											      width: "100%",	
									              textAlign: 'Center',
									              semanticColor: sap.ui.commons.TextViewColor.Positive,
									              design: sap.ui.commons.TextViewDesign.H2})
		
		
		//create a vertical Splitter
		var oSplitterV = new sap.ui.commons.Splitter("splitterV",
				                                    {
														splitterOrientation : "Vertical",
														splitterPosition : "50%",
														minSizeFirstPane : "50%",
														minSizeSecondPane: "50%",
														width 			 : "100%",
														height           : "1400px"
													})
		var oHLayout = new sap.ui.commons.layout.MatrixLayout({ id: 'layoutId5',
			layoutFixed:true,
            columns: 1,
            width: "100%",
		})			
//Adding Labels to first pane
	    var oHead = new sap.ui.commons.TextView({text : "Read the question and check the appropriate box.", // - - - - - - - - Yes  No",
												 width: "75%",	
												 design: sap.ui.commons.TextViewDesign.H4
					    					   })
	    var oHead1 = new sap.ui.commons.TextView({text : "Yes  No",
	    										  textAlign : "Right",			
												  width: "17%",	
												  design: sap.ui.commons.TextViewDesign.H4
											   })
		ele = [oHead, oHead1]
// insert heade for pane - 1	
		//oHLayout.createRow(oHead) 
		oSplitterV.addFirstPaneContent(oHead)	
		oSplitterV.addFirstPaneContent(oHead1)	
// insert horizontal line 
		var oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
		oHLayout.createRow(oDivider2)
		oSplitterV.addFirstPaneContent(oHLayout)

//		 Question - 1
		qTion1 = [
		          	{ question: '1. Do you currently smoke tobacco ,or have you smoked tobacco in the last month?' }, 
		       	 ]
		 //question row
        for (var i = 0; i < qTion1.length; i++) 
        {
            var oRow  = new sap.ui.commons.layout.MatrixLayoutRow();
            var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
            var oTV   = new sap.ui.commons.TextView({
                                                      text: qTion1[i].question,
                                                      width: '85%'
                                                   });
            oCell.addContent(oTV);
            //Answer row for question this.oData[i].question
            var oRBG1 = new sap.ui.commons.RadioButtonGroup
            		("oRBG1id"+i,
            		 {  columns : 2,
                        selectedIndex: 2,
                     });  // end of radiobutton group 
            for (var j = 0; j < 2; j++) 
               {
                 var oItem = new sap.ui.core.Item
                         ({
                            id: "ques1-" + i + "-s_ans-" + j,   //ques1-0-s_ans-0
                            key: j
                       	 });
                        oRBG1.addItem(oItem);
				}  //end of Statement FOR J - item level
                oCell.addContent(oRBG1);
                oRow.addCell(oCell);
                oHLayout.addRow(oRow);
             } //end amin for i  
// Horizontal Separator 		
		oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
		oHLayout.createRow(oDivider2)
//		 Question - 2
       var oQues2 = new sap.ui.commons.TextView({text : "2. Have you ever had any of the following conditions:",
  												  width: "100%",	
					    					    })
		oHLayout.createRow(oQues2)		
		qTion2 =	 [
		        	  	{ question: 'a. Seizures (fits)?'},
		        	  	{ question: 'b. Diabetes (sugar disease)?'},
		        	  	{ question: 'c. Allergic reactions that interfere with your breathing?'},
		        	  	{ question: 'd. Claustrophobia (fear of closed-in places)?'},
		        	  	{ question: 'e. Trouble smelling odors?'},
		        	 ]
//question row
        for (var i = 0; i < qTion2.length; i++) 
        {
            var oRow  = new sap.ui.commons.layout.MatrixLayoutRow()
            var oCell = new sap.ui.commons.layout.MatrixLayoutCell()
            var oTV   = new sap.ui.commons.TextView({
                                                      text: qTion2[i].question,
                                                      width: '80%'
                                                   }).addStyleClass("subques")
            //Answer row for question this.oData[i].question
            var oRBG1 = new sap.ui.commons.RadioButtonGroup
            		("oRBG2id"+i,
            		{  columns : 2,
                        selectedIndex: 2,
                    })  // end of radiobutton group 
            for (var j = 0; j < 2; j++) 
               {
                 var oItem = new sap.ui.core.Item
                         ({
                            id: "ques2-" + i + "-s_ans-" + j,
                            key: j
                       	 })
                        oRBG1.addItem(oItem);
				}  //end of Statement FOR J - item level
                oCell.addContent(oTV)
                oCell.addContent(oRBG1)
                oRow.addCell(oCell)
                oHLayout.addRow(oRow)
          } //end amin for i 
// Horizontal Separator 		
		oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
		oHLayout.createRow(oDivider2)
// Question - 3
    var oQues3 = new sap.ui.commons.TextView({text : "3. Have you ever had any of the following pulmonary or lung problems:",
  												  width: "100%",	
					    					    })
		oHLayout.createRow(oQues3)		
	var qTion3 =	 [
					  	{ question: 'a. Asbestosis?'},   
					  	{ question: 'b. Asthma?'},
					  	{ question: 'c. Chronic bronchitis?'},
					  	{ question: 'd. Emphysema?'},
					  	{ question: 'e. Pneumonia?'},
					  	{ question: 'f. Tuberculosis?'},
					  	{ question: 'g. Silicosis?'},
					  	{ question: 'h. Pneumothorax (collapsed lung)?'},
					  	{ question: 'i. Lung cancer?'},
					  	{ question: 'j. Broken ribs?'},
					  	{ question: 'k. Any chest injuries or surgeries?'},
					  	{ question: 'l. Any other lung problem that you’ve been told about? If yes, describe below:'},
					 ]
		//question row
        for (var i = 0; i < qTion3.length; i++) 
        {
            var oRow  = new sap.ui.commons.layout.MatrixLayoutRow();
            var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
            var oTV   = new sap.ui.commons.TextView({
                                                      text: qTion3[i].question,
                                                      width: '80%'
                                                   }).addStyleClass("subques");
            oCell.addContent(oTV);
            //Answer row for question this.oData[i].question
            var oRBG1 = new sap.ui.commons.RadioButtonGroup
            		("oRBG3id"+i, {  columns : 2,
                        selectedIndex: 2,
                    });  // end of radiobutton group 
            for (var j = 0; j < 2; j++) 
               {
                 var oItem = new sap.ui.core.Item
                         ({
                            id: "ques3-" + i + "-s_ans-" + j,
                            key: j
                       	 });
                        oRBG1.addItem(oItem);
				}  //end of Statement FOR J - item level
                oCell.addContent(oRBG1);
                oRow.addCell(oCell);
                oHLayout.addRow(oRow);
             } //end amin for i 
// Horizontal Separator 		
		oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
		oHLayout.createRow(oDivider2)
// Question - 4		
		var oQues4 = new sap.ui.commons.TextView({text : "4. Have you ever had any of the following symptons of pulmonary or lung illness:",
  												  width: "100%",	
					    					    })
		oHLayout.createRow(oQues4)
		qTion4 = [
				  	{ question: 'a. Shortness of breath?'},
					{ question: 'b. Shortness of breath when walking fast onlevel ground or walking up a slight hill or incline?'},
					{ question: 'c. Shortness of breath when walking with other people at an ordinary pace on level ground?'     },
			        { question: 'd. Have to stop for breath when walking at your own pace on level ground?'}, 
			        { question: 'e. Shortness of breath when washing or dressing yourself?'},
			        { question: 'f. Shortness of breath that interferes with your job?'},
			        { question: 'g. Coughing that produces phlegm (thick sputum)?'},
			        { question: 'h. Coughing that wakes you early in the morning?'},
			        { question: 'i. Coughing that occurs mostly when you are lying down?'},
			        { question: 'j. Coughing up blood in the last month?'},
			        { question: 'k. Wheezing?'},
			        { question: 'l. Wheezing that interferes with your job?'},
			        { question: 'm. Chest pain when you breathe deeply?'},
			        { question: 'n. Any other symptoms that you think may be related to lung problem? If yes, describe below:'},
		        ]
        //question row
        for (var i = 0; i < qTion4.length; i++) 
        {
            var oRow  = new sap.ui.commons.layout.MatrixLayoutRow();
            var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
            var oTV   = new sap.ui.commons.TextView({
                                                      text: qTion4[i].question,
                                                      width: '80%'
                                                   }).addStyleClass("subques");
            oCell.addContent(oTV);
            //Answer row for question this.oData[i].question
            var oRBG1 = new sap.ui.commons.RadioButtonGroup
            		("oRBG4id"+i,
            		{  columns : 2,
                        selectedIndex: 2,
                    });  // end of radiobutton group 
            for (var j = 0; j < 2; j++) 
               {
                 var oItem = new sap.ui.core.Item
                         ({
                            id: "ques4-" + i + "-s_ans-" + j,
                            key: j
                       	 });
                        oRBG1.addItem(oItem);
				}  //end of Statement FOR J - item level
                oCell.addContent(oRBG1);
                oRow.addCell(oCell);
                oHLayout.addRow(oRow);
             } //end amin for i 
		// Horizontal Separator 		
		oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
		oHLayout.createRow(oDivider2)		
// Question - 5
	var oQues5 = new sap.ui.commons.TextView({text : "5. Have you ever had any of the following cardivascular or heart problems:",
			  width: "100%",	
		    })
	oHLayout.createRow(oQues5)		
	qTion5 =[
			  	{ question: 'a. Heart attack?'},
			  	{ question: 'b. Stroke?'},
			  	{ question: 'c. Angina?'},
			  	{ question: 'd. Heart failure'},
			  	{ question: 'e. Swelling in your legs or feet (not caused by walking)?'},
			  	{ question: 'f. Heart arrhythmia (heart beating irregularly)?'},
			  	{ question: 'g. High blood pressure?'},
			  	{ question: 'h. Any other heart problem that you’ve been told about? If yes, describe below:'},
			]
  //question row
    for (var i = 0; i < qTion5.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow();
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion5[i].question,
                                                  width: '80%'
                                               }).addStyleClass("subques");
        oCell.addContent(oTV);
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG5id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques5-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem);
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1);
            oRow.addCell(oCell);
            oHLayout.addRow(oRow);
         } //end amin for i 
 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout.createRow(oDivider2)  
//Adding Labels to Second pane
    var oHead = new sap.ui.commons.TextView({text : "Yes  No",
												 width: "92%",	
												 textAlign: "Right",
												 design: sap.ui.commons.TextViewDesign.H4
					    					   })
// insert heade for pane - 1		
	oSplitterV.addSecondPaneContent(oHead)	
    var oHLayout1 = new sap.ui.commons.layout.MatrixLayout({ id: 'layoutId6',
																layoutFixed:true,
													            columns: 1,
													            width: "100%",
															})	
 // insert heade for pane - 1		
	oSplitterV.addSecondPaneContent(oHLayout1)	 
	 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2) 
// Question - 6	
	var oQues6 = new sap.ui.commons.TextView({text : "6. Have you ever had any of the following cardiovascular or heart symptoms:",
		  width: "100%",	
	    })
	oHLayout1.createRow(oQues6)	
	qTion6 =[ 
			 	{ question: 'a. Frequent pain or tightness in your chest?'},
			  	{ question: 'b. Pain or tightness in your chest during activity?'},
			  	{ question: 'c. Pain or tightness in your chest that interferes with your job?'},
			  	{ question: 'd. In the past two years, have you noticed your heart skipping or missing a beat?'},
			  	{ question: 'e. Heartburn or indigestion that is not related to eating?'},
			  	{ question: 'f. Any other symptoms that you think may be related to heart or circulation problems? If yes, describe below:'},
			]
	  //question row
    for (var i = 0; i < qTion6.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow();
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion6[i].question,
                                                  width: '80%'
                                               }).addStyleClass("subques");
        oCell.addContent(oTV);
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG6id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques6-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem);
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1);
            oRow.addCell(oCell);
            oHLayout1.addRow(oRow);
         } //end amin for i 
 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)   
// Question - 7
	var oQues7 = new sap.ui.commons.TextView({text : "7. Do you currently take medication for any of the following problems:",
		  width: "100%",	
	    })
	oHLayout1.createRow(oQues7)	
	qTion7 =[ 
			 	{ question: 'a. Breathing or lung problems?'},
			  	{ question: 'b. Heart trouble?'},
			  	{ question: 'c. Blood pressure?'},
			  	{ question: 'd. Seizures (fits)?'},
			]
	  //question row
    for (var i = 0; i < qTion7.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow();
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion7[i].question,
                                                  width: '80%'
                                               }).addStyleClass("subques");
        oCell.addContent(oTV);
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG7id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques7-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem);
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1);
            oRow.addCell(oCell);
            oHLayout1.addRow(oRow);
         } //end amin for i 
 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)   
// Question - 8
	var oQues8 = new sap.ui.commons.TextView({text : "8. Have you ever had any of the following problems associated with the use of a respirator:",
		  width: "100%",	
	    })
	oHLayout1.createRow(oQues8)	
	qTion8 =	
				[ 
				   { question: 'a. Eye irritation?'},
				   { question: 'b. Skin allergies or rashes?'},
				   { question: 'c. Anxiety?'},
				   { question: 'd. General weakness or fatigue?'},
				   { question: 'e. Any other problem that interfered with the use of a respirator? If yes, describe below:'},
				]	
	  //question row
    for (var i = 0; i < qTion8.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow();
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion8[i].question,
                                                  width: '80%'
                                               }).addStyleClass("subques");
        oCell.addContent(oTV);
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG8id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques8-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem);
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1);
            oRow.addCell(oCell);
            oHLayout1.addRow(oRow);
         } //end amin for i 
 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)
// Question - 9	
	qTion9 = [ 
	          { question: '9. Would you like to talk to the health care professional who will review this questionnaire about your answers to this questionnaire?'},
	         ]
	  //question row
    for (var i = 0; i < qTion9.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow()
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell()
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion9[i].question,
                                                  width: '85%'
                                               })
        oCell.addContent(oTV);
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG9id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques9-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem)
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1)
            oRow.addCell(oCell)
            oHLayout1.addRow(oRow)
         } //end amin for i 
 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)
// Question - 10	
	qTion10 = [
	            { question: '10. Have you ever lost vision in either eye (temporarily or permanently)? '},
	          ]	
	  //question row
    for (var i = 0; i < qTion10.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow();
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion10[i].question,
                                                  width: '85%'
                                               })
        oCell.addContent(oTV);
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG10id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques10-" + i + "-s_ans-" + j,
                        key: j
                   	 })
                    oRBG1.addItem(oItem);
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1)
            oRow.addCell(oCell)
            oHLayout1.addRow(oRow)
         } //end amin for i 
	 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)	
// Question - 11
    var oQues11 = new sap.ui.commons.TextView({text : "11. Do you currently hanve any of the following vision problems:",
		  width: "100%",	
	    })
	oHLayout1.createRow(oQues11)	
	qTion11 = 	[ 
		         	{ question: 'a. Wear contact lenses?'},
		        	{ question: 'b. Wear glasses?'},
		        	{ question: 'c. Color blind?'},
		        	{ question: 'd. Any other eye or vision problem? If yes, describe below:'},	
		        ]
	  //question row
    for (var i = 0; i < qTion11.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow()
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell()
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion11[i].question,
                                                  width: '80%'
                                               }).addStyleClass("subques")
        oCell.addContent(oTV)
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG11id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques11-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem)
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1)
            oRow.addCell(oCell)
            oHLayout1.addRow(oRow)
         } //end amin for i 
	 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)
//	Question 12
    qTion12 = 	[ 	 
              		{ question: '12. Have you ever had an injury to your ears, including a broken eardrum?'},
              	]
	  //question row
    for (var i = 0; i < qTion12.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow()
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell()
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion12[i].question,
                                                  width: '85%'
                                               })
        oCell.addContent(oTV)
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG12id"+i,{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques12-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem)
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1)
            oRow.addCell(oCell)
            oHLayout1.addRow(oRow)
         } //end amin for i 
	 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)
//	Question 13
    var oQues13 = new sap.ui.commons.TextView({text : "13. Do you currently hanve any of the following hearing problems:",
		  width: "100%",	
	    })
	oHLayout1.createRow(oQues13)	
    qTion13 = 	[ 
	             	{ question: 'a. Difficulty hearing?'},
	            	{ question: 'b. Wear a hearing aid?'},
	            	{ question: 'c. Any other hearing or ear problem? If yes, describe below:'},
                ]
	  //question row
    for (var i = 0; i < qTion13.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow()
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell()
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion13[i].question,
                                                  width: '80%'
                                               }).addStyleClass("subques")
        oCell.addContent(oTV)
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG13id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques13-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem)
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1)
            oRow.addCell(oCell)
            oHLayout1.addRow(oRow)
         } //end amin for i 
	 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)	
// 	Question 14
    qTion14 = [ 
	              	{ question: '14. Have you ever had a back injury?'},
	          ]
	  //question row
    for (var i = 0; i < qTion14.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow()
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell()
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion14[i].question,
                                                  width: '85%'
                                               })
        oCell.addContent(oTV)
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG14id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques14-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem)
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1)
            oRow.addCell(oCell)
            oHLayout1.addRow(oRow)
         } //end amin for i 
	 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)
//	Question 15
	var oQues11 = new sap.ui.commons.TextView({text : "15. Do you currently hanve any of the following musculoskeletal problems:",
		  width: "100%",	
	    })
	oHLayout1.createRow(oQues11)
    qTion15 = [ 
           	{ question: 'a. Weakness in any of your arms, hands, legs, or feet?'},
        	{ question: 'b. Back pain?'},
        	{ question: 'c. Difficulty fully moving your arms and legs?'},
        	{ question: 'd. Pain and stiffness when you lean forward or backward at the waist?'},
        	{ question: 'e. Difficulty fully moving your head up or down?'},
        	{ question: 'f. Difficulty fully moving your head side to side?'},
        	{ question: 'g. Difficulty bending at your knees?'},
        	{ question: 'h. Difficulty squatting to the ground?'},
        	{ question: 'i. Difficulty climbing a flight of stairs or a ladder carrying more than 25 pounds?'},
        	{ question: 'j. Any other muscle or skeletal problem that interferes with using a respirator? If yes, describe below:'},

        ]
	  //question row
    for (var i = 0; i < qTion15.length; i++) 
    {
        var oRow  = new sap.ui.commons.layout.MatrixLayoutRow()
        var oCell = new sap.ui.commons.layout.MatrixLayoutCell()
        var oTV   = new sap.ui.commons.TextView({
                                                  text: qTion15[i].question,
                                                  width: '80%'
                                               }).addStyleClass("subques")
        oCell.addContent(oTV)
        //Answer row for question this.oData[i].question
        var oRBG1 = new sap.ui.commons.RadioButtonGroup
        		("oRBG15id"+i,
        		{  columns : 2,
                    selectedIndex: 2,
                });  // end of radiobutton group 
        for (var j = 0; j < 2; j++) 
           {
             var oItem = new sap.ui.core.Item
                     ({
                        id: "ques15-" + i + "-s_ans-" + j,
                        key: j
                   	 });
                    oRBG1.addItem(oItem)
			}  //end of Statement FOR J - item level
            oCell.addContent(oRBG1)
            oRow.addCell(oCell)
            oHLayout1.addRow(oRow)
         } //end amin for i 
	 // Horizontal Separator 		
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Small"})
	oHLayout1.createRow(oDivider2)
	
	oDivider2 = new sap.ui.commons.HorizontalDivider({width: "100%", type: "Area", height: "Large"})
	oSubmit   = new sap.ui.commons.Button({text: "Submit",
		                                   width: "50%",
		                                   style: sap.ui.commons.ButtonStyle.Accept,
		                                   press: oController.MedEvalSubmit,
		                                 })
	oPrint   = new sap.ui.commons.Button({text: "Print",
		                                   width: "50%",
		                                   style: sap.ui.commons.ButtonStyle.Accept,
	                                        press: function()
	                                         {
	                                           	 window.print()
	                                         }
		                                 })		
    btn = [oSubmit, oPrint]		                                 
// End of Questions	                                     
	var oPanel = new sap.ui.commons.Panel("oMedEvalPanid", { width : "74%",
									            height : "1800px",
									            showCollapseIcon : false, 
										        content : [oLayout1,oLayout2,iShead, oDivider1, oSplitterV,oDivider2,btn],
												title : new sap.ui.core.Title({text:"Respiratory Protection Program"})
//										//tooltip : "Press Get Details to validate your record"
	 }).addStyleClass("justify")
	 	oPanel.addButton(new sap.ui.commons.Button({text: 'Back',
	 											    width: '60px',
	 											    style: sap.ui.commons.ButtonStyle.Accept,
		 											press: function()
		                                               {
		                                    	         oController.goBack("ZEHS_RPP")
		                                    	       }		                                        
			                                        }))
        oPanel.addButton(new sap.ui.commons.Button({text: 'Next',
													style: sap.ui.commons.ButtonStyle.Accept,
			                                        width: '60px'}))			                                        
		oPanel.addButton(new sap.ui.commons.Button({text: 'Submit',
			                                        width: '60px',
			                                        style: sap.ui.commons.ButtonStyle.Accept}))
		oPanel.addButton(new sap.ui.commons.Button({text: 'Print',
													style: sap.ui.commons.ButtonStyle.Accept,
			                                        width: '60px',
			                                        press: function()
			                                         {  
			                                        	var ctrlString = "width=1200px,height=20" +
			                                        			"00px";
			                                        	var wind = window.open("", "Printwindow", ctrlString);
			                                            var prnt = document.getElementById("oMedEvalPanid").outerHTML;
			                                            wind.document.write(prnt);
			                                        	wind.print();
			                                        	//wind.close();
		 	                                         }}
		))
	 
	 		                                        
        return oPanel;
	}

});