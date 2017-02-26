sap.ui.controller("zehs_rpp_v1.ZEHS_RPP", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zehs_rpp_v1.ZEHS_RPP
*/
	onInit: function()
	   {
         var sServiceUrl = "proxy/http/bisfrdap0.bis.cdcr.ca.gov:8000/sap/opu/odata/sap/ZEHS_RPP_SRV/";
// create a Model.   
        var oModel      = new sap.ui.model.odata.ODataModel(sServiceUrl,true,"biskxa","Biskxa18*"); 
        sap.ui.getCore().setModel(oModel);
	   },
	   //ZEHS_PERNR_DTLSet('75921')
	   //http://bisfrdap0.bis.cdcr.ca.gov:8000/sap/opu/odata/sap/ZEHS_RPP_SRV/ZEHS_PERNR_DTLSet('00075921')
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zehs_rpp_v1.ZEHS_RPP
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zehs_rpp_v1.ZEHS_RPP
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zehs_rpp_v1.ZEHS_RPP
*/
//	onExit: function() {
//
//	}


});