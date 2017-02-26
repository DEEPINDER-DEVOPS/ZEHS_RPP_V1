sap.ui.controller("zehsrpp.controllers.ZEHS_RPP", {
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zehs_rpp_v1.ZEHS_RPP
*/
	onInit: function()
	   {
         jModel = new sap.ui.model.json.JSONModel();  
       },
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zehs_rpp_v1.ZEHS_RPP
*/
	/*onBeforeRendering: function()   {
		
									},*/

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zehs_rpp_v1.ZEHS_RPP
*/
	onAfterRendering: function()
	{
		panelId = this.getView().byId(this.createId("oPanel1id"));
		panelId.setVisible(false);
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zehs_rpp_v1.ZEHS_RPP
*/
/*	onExit: function() {
			alert("test")
	},*/
//	Call Medical Affidavit Page
    mAffView: function(view)
       {
    	// create an additional JSON model for the result of the read request
    	oJson = {}
    	oJson.lname = sap.ui.getCore().byId("oTableid").getRows()[0].getCells()[1].getText()
    	oJson.fname = sap.ui.getCore().byId("oTableid").getRows()[0].getCells()[2].getText()
    	oJson.gbdat = sap.ui.getCore().byId("oTableid").getRows()[0].getCells()[5].getText()
    	oJson.jdesc = sap.ui.getCore().byId("oTableid").getRows()[0].getCells()[3].getText()
        oJson.wloc  = sap.ui.getCore().byId("oTableid").getRows()[0].getCells()[6].getText()
    	jModel.setData(oJson)
    	sap.ui.getCore().setModel(jModel,"jModelId");
    	var oRouter = this.getOwnerComponent().getRouter(); 
    	oRouter.navTo("page2");
       },
//  Call Medical Eval Page       
    mEvalView: function(view)
       {
    	oJson1 = {}
    	oJson1.lname = sap.ui.getCore().byId("oTableid").getRows()[0].getCells()[1].getText()
    	oJson1.fname = sap.ui.getCore().byId("oTableid").getRows()[0].getCells()[2].getText()
    	jModel.setData(oJson1)
    	sap.ui.getCore().setModel(jModel,"jModelId1");
    	var oRouter = this.getOwnerComponent().getRouter(); 
    	oRouter.navTo("page3");
       },   
//  Get Pernr Details on pressing the Button Get Detail        
    getDetail: function (view) 
      {
    	var l_date = sap.ui.getCore().byId(this.createId("dob")).getValue()
    	jQuery.sap.require("sap.ui.core.format.DateFormat")
    	var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern : "MMddyyyy" })
    	var dateStr = dateFormat.format(new Date(l_date))      
        if (!dateStr)
        {
           sap.ui.commons.MessageBox.alert("Enter the required fields !!")
    	   sap.ui.getCore().byId(this.createId("dob")).setValueState(sap.ui.core.ValueState.Error)	 
        } else
        	{
        		sap.ui.getCore().byId(this.createId("dob")).setValueState(sap.ui.core.ValueState.None)
	        	if (!sap.ui.getCore().byId("pernr").getValue() &&
	        		!sap.ui.getCore().byId(this.createId("perid")).getValue())
		    		{
	        		  sap.ui.getCore().byId("pernr").setValueState(sap.ui.core.ValueState.Error)
	        		  sap.ui.getCore().byId(this.createId("perid")).setValueState(sap.ui.core.ValueState.Error)
	        		  sap.ui.commons.MessageBox.alert("Enter Employee Number or Last Six of SSN")
		    		}
	        	else{
	        		  sap.ui.getCore().byId("pernr").setValueState(sap.ui.core.ValueState.None)
	        		  sap.ui.getCore().byId(this.createId("perid")).setValueState(sap.ui.core.ValueState.None)
	        		  jQuery.sap.require("sap.ui.table.Table")
	    			  var oFilt3 = new sap.ui.model.Filter("Gbdat",sap.ui.model.FilterOperator.EQ, dateStr)
	    			  var oFilt2 = new sap.ui.model.Filter("Perid",sap.ui.model.FilterOperator.EQ, sap.ui.getCore().byId(this.createId("perid")).getValue())
	    			  var oFilt1 = new sap.ui.model.Filter("Pernr",sap.ui.model.FilterOperator.EQ, sap.ui.getCore().byId("pernr").getValue())
	        		  oTable = sap.ui.getCore().byId("oTableid").setModel(sap.ui.getCore().getModel("oDataModel"))
	        		  
	        		  oLayout = sap.ui.getCore().byId("idLayout1").setModel(sap.ui.getCore().getModel("oDataModel"))
	        		  oLayout.bindElement("/ZEHS_PERNR_DTLSet",undefined,undefined,[oFilt3,oFilt2,oFilt1])
	        		  oTable.bindRows("/ZEHS_PERNR_DTLSet",undefined,undefined,[oFilt3,oFilt2,oFilt1])
	        		  //oTable = sap.ui.getCore().byId("oTableid").bindRows("/ZEHS_PERNR_DTLSet",undefined,undefined,[oFilt3,oFilt2,oFilt1])
          			  panelId.setVisible(true);
	        		  //OData.read("/ZEHS_PERNR_DTLSet(oFilt1,oFilt2,oFilt3)",null, null, false, function(oData, oResponse){})
		        	  //oModel.read("/ZEHS_PERNR_DTLSet", { filters: [oFilt3,oFilt2,oFilt1]})
	        	    }
        	}
       },
}
)
