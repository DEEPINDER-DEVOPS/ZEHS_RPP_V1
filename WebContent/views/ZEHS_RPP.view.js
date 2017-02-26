sap.ui.jsview("zehsrpp.views.ZEHS_RPP", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zehs_rpp_v1.ZEHS_RPP
	*/ 
	getControllerName : function() {
		return "zehsrpp.controllers.ZEHS_RPP";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zehs_rpp_v1.ZEHS_RPP
	*/ 
	
	createContent : function(oController) {
	// Attach the BorderLayout to the page
		// Step -1		 
        // Read the image for logo 	
		var oImage = new sap.m.Image("oImage1", {
												  src: 	"img/EHS_LOGO.png",
												  setTooltip: "CDCR - EHS - RPP",
												  width: "50%",
												  setDecorative: false,
												  
												})
		var oImage1 = new sap.ui.commons.Image()
		    oImage1.setSrc("img/CDCR_LOGO1.png")
			oImage1.setTooltip("CDCR - EHS - RPP")
			oImage1.setDecorative(false)			
		// Create a BorderLayout instance - top header
		var oBorderLayout1 = new sap.ui.commons.layout.BorderLayout("BorderLayout1", 
				           {height: "86px",
							center: new sap.ui.commons.layout.BorderLayoutArea(
									{
										contentAlign: "center",
										visible: true,
										content: [new sap.ui.commons.TextView({text: 'Respiratory Protection Program', design: sap.ui.commons.TextViewDesign.H1 
											                                   }).addStyleClass("textsz")]
									})
		                    }).addStyleClass("header")
		// Add the FeedTile to the container
		oBorderLayout1.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.begin, oImage )
		oBorderLayout1.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.begin, {
																					 size : "20%",
																					 visible : true
																				   })
	    oBorderLayout1.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.end, oImage1 )
	    oBorderLayout1.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.end, {
																					 size : "20%",
																					 visible : true,
																					 contentAlign:"right"
																				   })
//
																				   // Create two test articles for the tile to cycle through and display. Normally these would be created from
				// actual feeds.
                var oTwoDaysAgo = new Date();
	            oTwoDaysAgo.setDate(oTwoDaysAgo.getDate() - 2);

				var oCdcrI = new sap.suite.ui.commons.FeedItem({
					title: "{i18n>Image1Title}", 
					image: "img/CDCR_P.PNG",
					//image: "/ZEHS_RPP_V1/img/CDCR_P.PNG",
					source:"CDCR - EHS - RPP",
				    publicationDate: oTwoDaysAgo
				})
				
				var oFsPrison = new sap.suite.ui.commons.FeedItem({
					title: "{i18n>Image2Title}", 
					image: "img/FS_PRISON.png",
					//image: "/ZEHS_RPP_V1/img/FS_PRISON.png",
					source:"CDCR - EHS - RPP",
					publicationDate: oTwoDaysAgo
 				})
				
				var oSQPrison = new sap.suite.ui.commons.FeedItem({
					title: "{i18n>Image3Title}", 
					image: "img/SQ_PRISON.PNG",
					//image: "/ZEHS_RPP_V1/img/SQ_PRISON.PNG",
					source:"CDCR - EHS - RPP",
					publicationDate: oTwoDaysAgo
 				})
		
				var articles = new Array()
				articles.push(oCdcrI)
				articles.push(oFsPrison)
				articles.push(oSQPrison)
				var oFeedTile = new sap.suite.ui.commons.FeedTile({
					items: articles,
				})
				
				// Create a container for the FeedTile with a specified height and width 
				var oBorderFeed = new sap.ui.commons.layout.BorderLayout({height: "200px"})
			
				// Add the FeedTile to the container
				oBorderFeed.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.top, oFeedTile );
				oBorderFeed.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.top, {
					size : "100%",
					visible : true
				})

    //return oBorderLayout1;		
	var oLayout = new sap.ui.commons.layout.MatrixLayout("idLayout1",{layoutFixed:true})
	    oLayout.setWidth('100%')
	   
	//return oBorderLayout1;
	//Row-0
    var iLabel = new sap.ui.commons.Label({ design : "Bold",
    										icon   : "sap-icon://person-placeholder",
    	                                    text   : "Please Validate your Employee Information"
    	                                 })
    oLayout.createRow(iLabel)
    //Row-1
	var iLabel = new sap.ui.commons.Label({text : "Date of Birth", labelFor:"dob",design: "Bold"})
	var iDob   = new sap.ui.commons.DatePicker(this.createId("dob"), { 
		                                     	placeholder:"Date of Birth(mm/dd/yyyy)",
		                                     	width: "75%",
		                                     	dateFormat:"MMM dd, YYYY",
		                                     	valueFormat:"YYYYMMDD",
		                                     	required: true,
		                                     	})
	oLayout.createRow(iLabel, iDob)

	oLayout.createRow(new sap.ui.commons.Label({text : "and", 
	                                            design: "Bold",
		                                        width: "25%",
			                                    textAlign: "Center"}))
    // Row3
	var iLabel = new sap.ui.commons.Label({text : "{i18n>View1Pernr}", labelFor:"pernr",  design: "Bold"})
	// Row2
	
			                                    
	var iPernr = new sap.ui.commons.TextField("pernr",{placeholder:"{i18n>View1Pernr}",
													    maxLength: 8,
													    width: "75%"})
	oLayout.createRow(iLabel, iPernr)
	
	oLayout.createRow(new sap.ui.commons.Label({text : "Or", 
	                                            design: "Bold",
		                                        width: "25%",
			                                    textAlign: "Left"}))
	// Row4
	var iLabel = new sap.ui.commons.Label({text : "Last 6 SSN", labelFor:"perid",  design: "Bold"})	
	
	var iPerid = new sap.ui.commons.TextField(this.createId("perid"), { 
		                                     type: sap.ui.model.type.Integer,
						                     placeholder:"{i18n>View1Perid}",
						                     maxLength:6,
						                     width: '75%'}).attachBrowserEvent("keypress",function(e)
															                    		 	{  
																		        				var key_codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];  
																		        					if (!($.inArray(e.which, key_codes) >= 0))
																		        						{  
																		        							  e.preventDefault(); 
																		        						} 
																		        			 }
						                                                       )
    var oButton = new sap.ui.commons.Button(this.createId("BTN1"),{  text :"{i18n>View1Btn1}",  
			        	                              width: "75%",
									     			  style: sap.ui.commons.ButtonStyle.Accept,
									     			  icon : "sap-icon://person-placeholder",
									     	          press: function() {
									     	             oController.getDetail("ZEHS_RPP")
    																		}
						     		                })
	oLayout.createRow(iLabel, iPerid, oButton)

	var oPanel = new sap.ui.commons.Panel(this.createId("oPanelid"), { width : "74%",
											showCollapseIcon : false, 
    									    content : [oBorderLayout1, oBorderFeed, oLayout],
											title : new sap.ui.core.Title({text:"{i18n>View1Title}"})
//											//tooltip : "Press Get Details to validate your record"
										 }).addStyleClass("justify")
// wrap the form with a panel that has a tooltip
		// create table control with properties
	
		oTable = new sap.ui.table.Table
		              ("oTableid",{
						width : "100%",
						visibleRowCount: 1,
						rowHeight : 30,
						title : "Employee Details:",
						selectionMode : sap.ui.table.SelectionMode.Single
						})
 //Col - 1         
         oTable.addColumn(new sap.ui.table.Column("tstPer", {
        	 label : new sap.ui.commons.Label({
        	 text : "{i18n>View1Pernr}"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Pernr}"
        	 }),
        	 sortProperty : "Pernr"
        	 }))
        	 
// Col - 2         
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text : "{i18n>View1Lname}"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Nachn}"
        	 })
        	 })) 
// Col - 3 
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text : "{i18n>View1Fname}"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Vorna}"
        	 })
        	 }))
// Col - 4 
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text :  "{i18n>View1Jtitle}"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Jtitle}"
        	 })
        	 }))        	 
// Col - 5         
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text :  "{i18n>View1Orgtx}"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Orgtx}"
        	 }),
        	 sortProperty : "Orgtx"
        	 }))
     // Col - 6         
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text : "DOB"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{i18n>View1Dob}"
        	 }),
        	 sortProperty : "Gbdat"
        	 }))
        
         oTable.addColumn(new sap.ui.table.Column({
        	 label : new sap.ui.commons.Label({
        	 text : "{i18n>View1Wloc}"
        	 }),
        	 template : new sap.ui.commons.TextView({
        	 text : "{Name1}"
        	 }),
        	 sortProperty : "Name1"
        	 }))	 
     //Create a matrix layout with 2 columns
     		    var oMatrix1 = new sap.ui.commons.layout.MatrixLayout({layoutFixed: true, columns: 1});
     			oMatrix1.createRow("")
     			oMatrix1.createRow("")
     			var oLabel = new sap.ui.commons.TextView({text : "Select the Appropriate Button to Proceed",
											   width: "100%",	
			                                   textAlign: 'Center',
			                                   design: sap.ui.commons.TextViewDesign.H3})
     			oMatrix1.createRow(oLabel)
     			oMatrix1.createRow("")
     			//Medical Evaluation BUtton
     			oButton = new sap.ui.commons.Button(this.createId("btn2"),{  text : "{i18n>View1Btn2}",
     												               width: "50%",
     												               height: "1cm",
     												               icon : "sap-icon://accounting-document-verification",
     												               style:  sap.ui.commons.ButtonStyle.Emph,
     												               press: function(){
    												            	    oController.mEvalView("ZEHS_RPP2")}
     	              											}).addStyleClass("center")
     	        oMatrix1.createRow(oButton)
     			oMatrix1.createRow("")
     			//Medical Affidavit Button
     		    oButton = new sap.ui.commons.Button(this.createId("btn3"),{  text : "{i18n>View1Btn3}",
     												               width: "50%",
     												               height: "1cm",
     												               icon : "sap-icon://document-text",
     												               style:  sap.ui.commons.ButtonStyle.Emph,
     												               press: function(){
     												            	    oController.mAffView("ZEHS_RPP1")
     												               }
     		      	 											}).addStyleClass("center")
     		    oMatrix1.createRow(oButton)
  
//  	        console.log(oTable.getRows()[0].getCells()[2].getText())
//     		    oTextView = new sap.ui.commons.TextView(this.createId("textViewId"), 
//		     		    		                                    {width: "100%",	
//		     		    											 textAlign: 'Center'})
     		    oTexttest = new sap.ui.commons.TextView("texttestId", 
     		    		                                {
													     width: "100%",	
										                 textAlign: 'Center'})
     			oMatrix1.createRow(oTexttest)			   	
     	     	//Create a panel instance
     	     	 var oPanel1 = new sap.ui.commons.Panel(this.createId("oPanel1id"), {width: "74%",
     	     	   	                                     height: "450px",
     	     		 			                         areaDesign: "Fill",
     	     		 			                         borderDesign: "Box",
     	     		 			                         showCollapseIcon: false,
     	     		 			                         content: [oTable, oMatrix1]
     	     	                                         }).addStyleClass("justify")
     		   	var ele = [oPanel, oPanel1]
     		   	return ele;
	} 
 });
