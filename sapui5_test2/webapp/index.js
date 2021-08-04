sap.ui.define([
    "sap/ui/core/ComponentContainer",
], /**
 * 
 * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
 */
    function (ComponentContainer) {
        new ComponentContainer ({
            name:"logaligroup.sapui5test2",
            settings:{ id:"sapui5test2" },
            async: true
        }).placeAt("content")
    });