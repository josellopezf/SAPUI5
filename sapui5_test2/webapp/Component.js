sap.ui.define([
    'sap/ui/core/UIComponent',
    "logaligroup/sapui5test2/model/Models",
    "sap/ui/model/resource/ResourceModel"    
], /**
 * 
 * @param {typeof sap.ui.core.UIComponent} UIComponent 
 * @param {typeof sap.ui.model.ResourceModel} ResourceModel
 */
    function (UIComponent, Models, ResourceModel) {
        'use strict';
        return UIComponent.extend("logaligroup.sapui5test2.Component", {
            metadata: {
                manifest:"json"
                // "rootView":"logaligroup.sapui5test2.view.App",
                // "Type": "XML",
                //  "async":true,
                //  "id":"App"
            },
            init : function () {
                UIComponent.prototype.init.apply(this, arguments);

                this.setModel(Models.createRecipient());

                var i18n = new ResourceModel({ bundleName: "logaligroup.sapui5test2.i18n.i18n" })
                this.setModel(i18n, "i18n")

            }
        })

    });