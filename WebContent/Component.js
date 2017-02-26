// Component Js is an implementation file of UI component
jQuery.sap.declare("zehsrpp.Component");
jQuery.sap.require("sap.ui.core.UIComponent");
//Define Router and Hash Changer -	Load Routing Library
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.m.routing.Router");
jQuery.sap.require("sap.ui.core.routing.Target");
// Implement Component File
sap.ui.core.UIComponent.extend("zehsrpp.Component", 
		{
	metadata: { 
		        name: "RPP Application",
		        version : "1.1.0",
		        includes : ["css/stylerpp.css"],  
		        dependencies : {
						            libs : ["sap.ui.commons", "sap.m", "sap.ui.table",
						                    "sap.ui.ux3", "sap.ui.unified", 
						                    "sap.suite.ui.commons", "sap.ui.layout" 
						                   ],
 			                        components : []
		        	           },
		        rootView : "zehsrpp.views.App",   
		        config: {
							resourceBundle: "i18n/messageBundle_en_US.properties",
							serviceConfig: {
							name: "ZEHSRPP",
							serviceUrl: "/sap/opu/odata/sap/ZEHS_RPP_SRV/"
							}
		                },
		        routing: {
           					  // The default values for routes
				          config: {
								routerClass: "sap.m.routing.Router", // use the router in sap.m library which provides enhanced features
								viewType: "JS", // sap.ui.core.mvc.ViewType.JS,
								viewPath: "zehsrpp.views",
								controlId:"app",
								controlAggregation: "pages",
								clearTarget : false,
						       // bypassed: {target:"notFound"}
				          		   }, 
		           routes: [{
				        		pattern: "",
				        		name: "page1",
				        		target:"page1",
    						 }		,							
    						{
								pattern: "MedAff",
								name: "page2",
				        		target:"page2",
							},
							{
								pattern: "MedEval",
								name: "page3",
				        		target:"page3",
							}
						   ],
		            targets: {
		            	page1: {
							viewName: "ZEHS_RPP",
							viewLevel: 0
						},
						page2: {
							viewName: "ZEHS_RPP1",
							viewLevel: 1
						},		
						page3: {
							viewName: "ZEHS_RPP2",
							viewLevel: 1
						}							
			                 }      
		        },
			  },
    
			  // Initialization
    init:function()
    {
    //initialize the base class - calling the constructor of the base class
       sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
       var mConfig = this.getMetadata().getConfig(); 

   // Always use absolute paths relative to our own component (relative paths will fail if running in the Fiori Launchpad)
   // Set i18n model
        if (window.location.hostname == "localhost")  
         {
        		console.log("i18N");
        	    var i18nModel = new sap.ui.model.resource.ResourceModel({
        		bundleUrl : "i18n/messageBundle_en_US.properties"}); 
        	    this.setModel(i18nModel, "i18n");
         } else
         {
        	var oRootPath = jQuery.sap.getModulePath("zehsrpp");  
	        var i18nModel = new sap.ui.model.resource.ResourceModel({
	        bundleUrl: [oRootPath, mConfig.resourceBundle].join("/")});
	        this.setModel(i18nModel, "i18n");
	     };
  // Create an OData Model 
		  var sServiceUrl = "/sap/opu/odata/sap/ZEHS_RPP_SRV/";
	         if (window.location.hostname == "localhost")  
	        	 {
	        	 sServiceUrl = "proxy/http/bisfrdap0.bis.cdcr.ca.gov:8000" + sServiceUrl
	        	 }
	      var oModel      = new sap.ui.model.odata.ODataModel(sServiceUrl,true);
	      sap.ui.getCore().setModel(oModel, "oDataModel");  //model set as Global 
   // Initialize Router 	           
          this.getRouter().initialize();
    },  
  //End of Initialization
    
// Destroy Function     
    destroy:function()
    {
    	sap.ui.getCore().getModel().destroy();
    	sap.ui.getCore().getModel("i18n").destroy();
    	//this.getModel("device").destroy();
    	//call the base component's destroy function 
    	sap.ui.core.UIComponent.prototype.destroy.apply(this,arguments);
    },
    
// Create Content 
    createContent:function(){
       	var oView = sap.ui.view({
    		id: "oView",
    		viewName:"zehsrpp.views.App",     //ZEHS_RPP
    		type: "JS",
    	    viewData: { component:this }		
       				})
       				return oView;
    	},
});   //Main Close of the function    


