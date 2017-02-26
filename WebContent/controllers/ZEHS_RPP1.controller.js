sap.ui.controller("zehsrpp.controllers.ZEHS_RPP1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zehs_rpp_v1.ZEHS_RPP1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zehs_rpp_v1.ZEHS_RPP1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zehs_rpp_v1.ZEHS_RPP1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zehs_rpp_v1.ZEHS_RPP1
*/
//	onExit: function() {
//
//	}

	goBack: function(view){
    	var oRouter = this.getOwnerComponent().getRouter(); 
    	oRouter.navTo("page1");
	},
// Event triggered for Medical Affidavit Posting 	
	onSubmit:function(view)
	{
		//required parameters passed to Webservice to post the medical Affidavit document.
	 //   var header_xcsrf_token
		var lPernr   = sap.ui.getCore().byId("pernr").getValue()
		var lPnumber = 'AFF'
		var lMedcg   
		var lTstloc   = 'IN01'
		 if (!sap.ui.getCore().byId("oRb1").getSelected())
        {
			 lMedcg = 'Y'
        }else{ lMedcg = 'N'}
		
		var newData = {   
		         "Pernr" : lPernr,
		         "Pnumber": lPnumber,
		         "Tstloc" : lTstloc,
		         "Medcg" : lMedcg
			  } 
		
		var lServiceUrlG = "proxy/http/bisfrdap0.bis.cdcr.ca.gov:8000/sap/opu/odata/sap/ZEHS_RPP_SRV/ZEHS_INSERT_AFFSet(Pernr='79526',Tstloc='IN01',Medcg='Y',Pnumber='AFF')"    
	    // HTTP method GET is used to determine the x-CSRF Token value which is required for Cross 
		// certification while posting / creating the Data in the sap database. 
	    var lMethodG = "GET"
	    OData.request({
						requestUri: lServiceUrlG,
						method    : lMethodG,
						data      : newData,
						headers   : { "X-Requested-With": "XMLHttpRequest",
								       "Content-Type": "application/atom+xml",  
								       "DataServiceVersion": "2.0",
								       "MaxDataServiceVersion": "3.0",
								       "X-CSRF-Token":"Fetch" 
							 	    }
					   },
			            function(data,response)
			            {
			            	var header_xcsrf_token = response.headers['x-csrf-token']
						    oHeaders =  {
			            				  "X-Requested-With": "XMLHttpRequest",
						 				  "Content-Type": "application/atom+xml",  
						 			      "DataServiceVersion": "2.0",
						 			      "MaxDataServiceVersion": "3.0",
						 			      "Accept":"application/atom+xml",
						 			      "x-csrf-token" : header_xcsrf_token,
						                }
			     // POST method is used to create the data in the SAP 		         
						    var lServiceUrl = "proxy/http/bisfrdap0.bis.cdcr.ca.gov:8000/sap/opu/odata/sap/ZEHS_RPP_SRV/ZEHS_INSERT_AFFSet"
						    lMethod = "POST"
					        requestObj = {
											 requestUri: '',
											 method: '',
											 headers: oHeaders
									      }
							requestObj.requestUri = lServiceUrl
							requestObj.method     = lMethod
							requestObj.data       = newData 
							OData.request(requestObj, 
											 		  function(data, response)
											 		  {
														jQuery.sap.require("sap.ui.commons.MessageBox")
			            		  						if (data.Type == 'S') {
			            		  							sap.ui.commons.MessageBox.alert(data.Message, 
      		  														sap.ui.commons.MessageBox.Icon.SUCCESS,
      		  														"Medical Affidavit"
							                        					)
			            		  						sap.ui.getCore().getModel("oDataModel").refresh()
				            		  						//location.reload(true)
	          		  										sap.ui.getCore().byId("btn5").setEnabled(true)
	          		  										sap.ui.getCore().byId("btn4").setEnabled(false)
			            		  						} else 
			            		  						{
	  			            		  						sap.ui.commons.MessageBox.alert(data.Message, 
	  			            		  														sap.ui.commons.MessageBox.Icon.ERROR,
	  			            		  														"Medical Affidavit"
	    		  								                        					)
				            		  						 //location.reload(true)
				            		  				        oShell.removeAllContent();
				            		  				        var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
				            		  				        var oHashChanger = new sap.ui.core.routing.HashChanger.getInstance();
				            		  				        oHashChanger.setHash(oRouter.getURL("ZEHS_RPP"));
			            		  					    }
											 		  },
											 		  function(err)
											 		  {
	  			            		  						sap.ui.commons.MessageBox.alert("Medical Affidavit Posting ends with error", 
      		  														sap.ui.commons.MessageBox.Icon.ERROR,
      		  														"Medical Affidavit"
							                        					)
											 		  })
				          }
					    )

	},
	
	
	onPrint: function(view)
	{
        var check1;
        var check2;
// This is used to toggle the check boxes on the print page
        if (!sap.ui.getCore().byId("oRb1").getSelected())
        {
        	check1 = ''
        }else{ check1 = "checked"}
        
        if (!sap.ui.getCore().byId("oRb2").getSelected())
        {
        	check2 = ''
        }else{ check2 = "checked"}
//      Print Page - Header Section
        var header = 
                     '<font size="5" color="green">' +
	   		         '<center ></h1>' + sap.ui.getCore().byId("headerId").getText() + '</h1></center><hr></font>' +
	   	             '<table width=100%; border=1px solid black>' +

	   	             '<tr><th align=left width=50%>Last Name   : ' +
	   	             sap.ui.getCore().byId("lnameId1").getText()  + '</th>' + 
	   	             '<th align=left width=50%>First Name      : ' + 
	   	             sap.ui.getCore().byId("fnameId1").getText()  + '</th></tr>' +   
	   	             
	   	             '<tr><th align=left>Date of Birth : ' + 
	   	             sap.ui.getCore().byId("dobId1").getText()  +  '</th>' + 
	   	             '<th align=left>Job Classification : ' + 
	   	             sap.ui.getCore().byId("jClassId1").getText()  + '</th></tr>' +  
	   	             
	   	            '<tr><th align=left>Work Site Location :' + 
	   	             sap.ui.getCore().byId("wLocId1").getText()  +  '</th></tr>' +
	   	             '</table><hr>';
// 		Print Page Body Section 	   	
	   	var body = '<font size="4" color="black"><br>' + 
				   	'<tr><p align="justify">In accordance with Title 8, California Code of Regulations § 5144(e)(7)(A) and (D), all employees ' +
					'experiencing a change in his/her  medical condition and/or working condition shall submit to an updated ' +
					'medical evaluation.I understand and acknowledge that I am required to submit to a medical re evaluation if ' +
					'there has been a change in my medical condition or working condition.</p></tr>';
				   	
	   	
	   	var rb1 = '<br>' + 
	   	'<center><tr>Please select the appropriate box below : </tr></center>' +
	   	'<br>' +
	   	'<tr><p align="justify"><input type="checkbox" id="Chk1"' + check1 + 
	   	'> This is to certify that I have had no change in my medical condition and/or working condition since my last medical Evaluation.</p></tr>';
	   	
	   	var rb2 = '<tr><p align="justify"><input type="checkbox" id="Chk2"' + check2 +
	   		'> This is to certify that I have had a change in my medical ' + 
	   	           
	   	          'condition and/or working condition; I understand that I am required to be re-evaluated before undergoing fit testing.</p></tr>';	   
// 		Print Page Footer Section 	   	
	   	var foot = '<br><tr><p align="justify">I hereby certify that there are no mirepresentation, omission, or falsifications in the foregoing statements.</p></tr><br>' +
	   	sap.ui.getCore().byId("fnameId1").getText()  + 	' ' +
	   	sap.ui.getCore().byId("lnameId1").getText()  + 	'<br><br><tr><td>(Employee Signature)</td></tr>' +
	   	'<br><br><br><br><br><br><br><br><br><br><br><br></font>';
	   	
	   	var lline =  '<hr><font size="2" color="black"><br>' + 
	   	             '<i>This is a computer generated printout and no signature is required.</i>'
	   	             '</tr></font>';
	   	
	   	var ctrlString = "width=1250px,height=800px";
	   	var wind = window.open("","PrintWindow", ctrlString);
	   	wind.document.write(header, body, rb1, rb2, foot, lline);
	   	wind.print();
	   	wind.close();
	 }
});