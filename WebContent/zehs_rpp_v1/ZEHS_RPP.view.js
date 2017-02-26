sap.ui.jsview("zehs_rpp_v1.ZEHS_RPP", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zehs_rpp_v1.ZEHS_RPP
	*/ 
	getControllerName : function() {
		return "zehs_rpp_v1.ZEHS_RPP";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zehs_rpp_v1.ZEHS_RPP
	*/ 
	createContent : function(oController) {
        //create the ApplicationHeader control
 		var oAppHeader = new sap.ui.commons.ApplicationHeader("appHeader");
 		//configure the branding area
 		oAppHeader.setLogoSrc("/ZEHS_RPP_V1/zehs_rpp_v1/CDCRLogo.png");
 		
 		oAppHeader.setLogoText(" . . CDCR Enviornment Health & Safety (RPP)");

 		//configure the welcome area
 		//oAppHeader.setDisplayWelcome(true);
 		//oAppHeader.setUserName("");

 		//configure the log off area
 		oAppHeader.setDisplayLogoff(true);

 		oAppHeader.placeAt("content");
	
		//Create a panel instance
		var oPanel = new sap.ui.commons.Panel({width: "40%",
			                                   height: "150px",
			                                   scrollLeft: 50,
			                                   showCollapseIcon: false});
		
		oPanel.setAreaDesign(sap.ui.commons.enums.AreaDesign.Fill);
		oPanel.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
        oPanel.addStyleClass("LoginPanel");
		//Set the title of the panel
		oPanel.setTitle(new sap.ui.core.Title({text: "Please Validate your Employee Information", icon: "/ZEHS_RPP_V1/zehs_rpp_v1/EHS_LOGO.png"}));
		//As alternative if no icon is desired also the following shortcut might be possible:
		//Create a matrix layout with 2 columns
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({layoutFixed: true, width: '500px', columns: 3});
		oMatrix.setWidths('100px', '175px', '150px');

		//Create a simple form within the layout
		var oLabel  = new sap.ui.commons.Label({text: 'Personal Number'});
		var oInput1 = new sap.ui.commons.TextField("PERNR",{   placeholder:"Personal Number(PERNR)",
															  maxLength: 8,
				    										  width: "75%"});
		oLabel.setLabelFor(oInput1);
		oMatrix.createRow(oLabel, oInput1);
		
		var oLabel = new sap.ui.commons.Label({text: 'Date of Birth'});
		var oInput2 = new sap.ui.commons.DatePicker("DOB",{   placeholder:"Date of Birth(mm/dd/yyyy)",
				    										  dateFormat:"MM-dd-YYYY",
						                                      width: "75%"});
		oLabel.setLabelFor(oInput2);
		oMatrix.createRow(oLabel, oInput2);
		
		oLabel = new sap.ui.commons.Label({text: 'Last 6 SSN#'});
	    oInput3 = new sap.ui.commons.TextField({ type: sap.ui.model.type.Integer,
	    	                                    placeholder:"Last Six SSN",
			                                    maxLength:6,
			                                    width: '75%'}).attachBrowserEvent("keypress",function(e)
		                                    			{  
                                    				var key_codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];  
                                    					if (!($.inArray(e.which, key_codes) >= 0))
                                    						{  
                                    							  e.preventDefault(); 
                                    						}        
                                						});
                                    					
		oButton = new sap.ui.commons.Button("BTN1",{  text : "Get Details",
									                  width: "75%",
									                  style:  sap.ui.commons.ButtonStyle.Default,
									                  press: function(e){
								                	      sap.ui.getCore().byId("myShell").removeAllContent()
								                	      view = new sap.ui.view({
												    								id: "view2id",
												    								viewName: "demo.Page2",
												    								type:sap.ui.core.mvc.ViewType.JS
								                	                            })
								                	      sap.ui.getCore().byId("myShell").addContent(view)
								                	  	  alert("event clicked")
								                                   }
		                                            });
        oLabel.setLabelFor(oInput3);
		oMatrix.createRow(oLabel, oInput3, oButton);
		
		//Add the form to the panels content area
		oPanel.addContent(oMatrix);
        
		//Add some buttons to the panel header
		oPanel.addButton(new sap.ui.commons.Button({text: 'Back'}));
		//oPanel.addButton(new sap.ui.commons.Button({text: 'Cancel'}));

		//Add the form to the panels content area
		oPanel.addContent(oMatrix);
		
		//Attach the panel to the page
		oPanel.placeAt("content");
		
		jQuery.sap.require("sap.ui.table.Table");
		// create table control with properties
		var oTable = new sap.ui.table.Table
		              ({
						width : "100%",
						visibleRowCount: 1,
						rowHeight : 20,
						title : "Employee Details:",
						selectionMode : sap.ui.table.SelectionMode.Single
						});
         
//Col - 1         
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text : "Personal Number"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Pernr}"
        	 }),
        	 sortProperty : "Pernr"
        	 })); 
// Col - 2         
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text : "Last Name"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Nachn}"
        	 })
        	 })); 
// Col - 3 
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text : "First Name"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Vorna}"
        	 })
        	 }));
// Col - 4         
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text : "Job description"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Orgtx}"
        	 }),
        	 sortProperty : "Orgtx"
        	 }));

// Event Button  to rettrieve the records from the table    
		oButton.attachPress(function (oEvent){
	         alert(oInput1.getValue());
	         alert(oInput2.getValue());
	         //Filter the records from the selection .. 
	         var oFilt1 = new sap.ui.model.Filter("Pernr",sap.ui.model.FilterOperator.EQ ,	oInput1.getValue());
	       //  var oFilt2 = new sap.ui.model.Filter("",sap.ui.model.FilterOperator.EQ ,	oInput2.getValue());
	       //  var oFilt3 = new sap.ui.model.Filter("Perid",sap.ui.model.FilterOperator.EQ ,	oInput3.getValue());
	         oTable.bindRows("/ZEHS_PERNR_DTLSet",undefined,undefined,[oFilt1]);
	         oTable.placeAt("content");
	 		
	         
	 		//Create a panel instance
	 		var oPanel1 = new sap.ui.commons.Panel({width: "40%",
	 			                                   height: "150px",
	 			                                   scrollLeft: 50,
	 			                                   showCollapseIcon: false});
			oPanel1.setAreaDesign(sap.ui.commons.enums.AreaDesign.Fill);
			oPanel1.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
	        oPanel1.addStyleClass("EndPanel");
	        oPanel1.setTitle(new sap.ui.core.Title({text: "Select the Appropriate Button to Proceed",
	        	                                    align: "center"}));
			//Create a matrix layout with 2 columns
			var oMatrix1 = new sap.ui.commons.layout.MatrixLayout({layoutFixed: true, width: '200px', columns: 1});
			oMatrix1.setWidths('200px');
			
	        oButton = new sap.ui.commons.Button("BTN2",{  text : "Medical Evaluation",
											               width: "100%",
											               height: "1cm",
											               style:  sap.ui.commons.ButtonStyle.Default
              											});
            oMatrix1.createRow(oButton);
              
	      	oButton = new sap.ui.commons.Button("BTN3",{  text : "Medical Affidavit",
											               width: "100%",
											               height: "1cm",
											               style:  sap.ui.commons.ButtonStyle.Default
	      	 											});
	    	oMatrix1.createRow(oButton);
	    	oMatrix1.addStyleClass("center");
	    	oPanel1.addContent(oMatrix1);
	 		//Attach the panel to the page
	 		oPanel1.placeAt("content");
		})  
	}

});
