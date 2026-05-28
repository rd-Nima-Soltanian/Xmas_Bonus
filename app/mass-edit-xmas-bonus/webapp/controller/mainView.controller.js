sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("rewe.hcm.masseditxmasbonus.controller.mainView", {
        onInit() {
        },

        onLiveSearch(oEvent) {
            const sQuery = oEvent.getParameter("newValue")?.trim();
            const oTable = this.byId("employeesTable");
            const oBinding = oTable.getBinding("items");

            if (!sQuery) {
                oBinding.filter([]);
                return;
            }

            const aFilters = [
                new Filter("personnelNumber", FilterOperator.Contains, sQuery),
                new Filter("firstname", FilterOperator.Contains, sQuery),
                new Filter("lastname", FilterOperator.Contains, sQuery),
                new Filter("position", FilterOperator.Contains, sQuery),
                new Filter("year", FilterOperator.Contains, sQuery)
            ];

            oBinding.filter(new Filter({ filters: aFilters, and: false }));
        }
    });
});