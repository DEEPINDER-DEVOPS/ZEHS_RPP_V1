sap.ui.jsview("zehsrpp.views.ZEHS_RPP1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zehs_rpp_v1.ZEHS_RPP1
	*/ 
	getControllerName : function() {
		return "zehsrpp.controllers.ZEHS_RPP1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zehs_rpp_v1.ZEHS_RPP1
	*/ 
	createContent : function(oController) {
		
		var oLayout = new sap.ui.commons.layout.MatrixLayout({ id: 'layout1',
			                                                   layoutFixed:true,
			                                                   columns: 4,
			                                                   width: "100%",
			                                                   widhts : ['50px','80px','50px','80px']
			                                                })
	
		var ihead = new sap.ui.commons.TextView("headerId", {text : "CDCR ANNUAL RESPIRATORY MEDICAL AFFIDAVIT",
											   width: "100%",	
			                                   textAlign: 'Center',
			                                   semanticColor: sap.ui.commons.TextViewColor.Positive,
			                                   design: sap.ui.commons.TextViewDesign.H1})
		//Create a standard divider
		var odiv = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 4});
		odiv.addContent(new sap.ui.commons.HorizontalDivider());
		oLayout.createRow(odiv);
		
	    var iLabel = new sap.ui.commons.Label({text : "Last  Name :"})
	    //alert(oTable.mAggregations.rows[0].mAggregations.cells[2].mProperties.text)
	    
		//var iTxtv  = new sap.ui.commons.TextView({text: "Hawley"})
	    var iTxtv  = new sap.ui.commons.TextView("lnameId1", {text: "{jModelId>/lname}"})
		var iLabel1 = new sap.ui.commons.Label({text : "First Name :"})
		//var iTxtv1 = new sap.ui.commons.TextView("fnameId1", {text: "{jModelId>/fname}"})
	    var iTxtv1 = new sap.ui.commons.TextView("fnameId1", 
	    		 {text: "KSA" })//sap.ui.getCore().byId("oTableid").getRows()[0].getCells()[1].getText()}) 
		oLayout.createRow(iLabel, iTxtv,iLabel1, iTxtv1 )
		
		var iLabel = new sap.ui.commons.Label({text : "Date of Birth: "})
		var iTxtv  = new sap.ui.commons.TextView("dobId1", {text :"{jModelId>/gbdat}"})
	    
		var iLabel1 = new sap.ui.commons.Label({text : "Job Classification:"})
		var iTxtv1 = new sap.ui.commons.TextView("jClassId1",{text: "{jModelId>/jdesc}"})
		oLayout.createRow(iLabel, iTxtv,iLabel1, iTxtv1 )
		
	    var iLabel = new sap.ui.commons.Label({text : "Employee Work Site Location :"})
		var iTxtv  = new sap.ui.commons.TextView("wLocId1",{text:"{jModelId>/wloc}"})
	    oLayout.createRow(iLabel, iTxtv)
	    //Create a standard divider
		var odiv = new sap.ui.commons.layout.MatrixLayoutCell({colSpan: 4});
		odiv.addContent(new sap.ui.commons.HorizontalDivider());
		oLayout.createRow(odiv);
		// Med AFF Content  
		// Create a simple RadioButtonGroup with three items
		var oLayout1 = new sap.ui.commons.layout.MatrixLayout({ id: 'layout2',
            layoutFixed:true,
            columns: 2,
            width: "100%",
            widths : ['7px','300px']
         })		
		
		oLayout1.createRow('');	
		var icont = new sap.ui.commons.TextView({text : "In accordance with Title 8, California Code of Regulations § 5144(e)(7)(A) and (D), all employees " +
														"experiencing a change in his/her  medical condition and/or working condition shall submit to an updated " +
														"medical evaluation.I understand and acknowledge that I am required to submit to a medical re evaluation if " +
														"there has been a change in my medical condition or working condition." ,
											   	  width: "100%",	
											   	  wrapping: true,
									              design: sap.ui.commons.TextViewDesign.H3}).addStyleClass("txtjust")
		oLayout1.createRow('', icont)
		oLayout1.createRow("")	
		var ihead1 = new sap.ui.commons.TextView({text : "Please select the appropriate box below : ",
											   	  width: "100%",	
											   	  textAlign: 'Center',
								                  semanticColor: sap.ui.commons.TextViewColor.Positive,
								                  design: sap.ui.commons.TextViewDesign.H2})
		
		oLayout1.createRow('', ihead1)
		
		var oRB1 = new sap.ui.commons.RadioButton("oRb1", {
			tooltip : 'Medical Condition - Desciption -- ...',
			groupName : 'Group1',
	        select : function() {}
			}).addStyleClass("fontsz")	
			
		var oRB1txt = new sap.ui.commons.TextView({text : "This is to certify that I have had no change in my medical condition and/or working condition since my last medical Evaluation." ,
												   tooltip : 'Medical Condition - Desciption -- ...',
											   	   width: "100%",	
											   	   wrapping: true,
									            }).addStyleClass("fontsz")	
									            
          //since my last medical Evaluation.			
	    oLayout1.createRow("")	
		oLayout1.createRow(oRB1, oRB1txt )
		//oLayout1.createRow(iLabel)
		oLayout1.createRow("")
		var oRB2 = new sap.ui.commons.RadioButton("oRb2", {
			tooltip :  'Medical Condition - Desciption -- ...',
			groupName : 'Group1',
			selected : true,
			select : function() {}
			}).addStyleClass("fontsz")

	    var oRB2txt = new sap.ui.commons.TextView({text : "This is to certify that I have had a change in my medical condition and/or working condition; I understand that I am required to be re-evaluated before undergoing fit testing." ,
	    	                                       tooltip : 'Medical Condition - Desciption -- ...',	
	    	                                       width: "100%",	
	    	                                       wrapping: true,
									            }).addStyleClass("fontsz")		 
		oLayout1.createRow(oRB2,oRB2txt )
		
		var icont = new sap.ui.commons.TextView({text : "I hereby certify that there are no misrepresentation, omission, or falsifications in the foregoing statements." ,
											   	 width: "100%",	
											   	 wrapping: true,
											      design: sap.ui.commons.TextViewDesign.H3})
		oLayout1.createRow("")
		oLayout1.createRow("")
        oLayout1.createRow('', icont)
        oLayout1.createRow("")
		oLayout1.createRow("")
		
        var oButton = new sap.ui.commons.Button("btn4",{  text : "Submit",  
			        	                              width: "74%",
			        	                              height: "1cm", 
									     			  style: sap.ui.commons.ButtonStyle.Accept,
									     			  icon : "sap-icon://save",
									     	          press: function(){
									     	        	     oController.onSubmit("ZEHS_RPP1")
									     	          }
						     		                }).addStyleClass("justify")
		oLayout1.createRow('', oButton)
		oLayout1.createRow("")
		oButton = new sap.ui.commons.Button("btn5",{  text : "Print",
			        	                              width: "74%",
			        	                              height: "1cm", 
			        	                              enabled : false,
									     			  style: sap.ui.commons.ButtonStyle.Accept,
									     			  icon : "sap-icon://print",
									     	          press: function(){
									     	        	     oController.onPrint("ZEHS_RPP1")
									     	          }
						     		                }).addStyleClass("justify")
		oLayout1.createRow('', oButton)
		
		var oPanel = new sap.ui.commons.Panel({ width : "74%",
			                                    height : "725px",
			                                    showCollapseIcon : false, 
    									        content : [ihead, oLayout, oLayout1],
     											title : new sap.ui.core.Title({text:"Respiratory Protection Program"})
	//										//tooltip : "Press Get Details to validate your record"
										 }).addStyleClass("justify")
		oPanel.addButton(new sap.ui.commons.Button({text: 'Back',
			                                       press: function()
			                                               {
			                                    	         oController.goBack("ZEHS_RPP")
			                                    	       }
			                                        }))
		oPanel.addButton(new sap.ui.commons.Button({text: 'Save'}))
// wrap the form with a panel that has a tooltip
        return oPanel;	
 		
	}

});