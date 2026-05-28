"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sfEmpPayCompReccuringEmpCompService = sfEmpPayCompReccuringEmpCompService;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const EmpPayCompRecurringApi_1 = require("./EmpPayCompRecurringApi");
const EmpCompensationApi_1 = require("./EmpCompensationApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function sfEmpPayCompReccuringEmpCompService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new SfEmpPayCompReccuringEmpCompService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
class SfEmpPayCompReccuringEmpCompService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get empPayCompRecurringApi() {
        const api = this.initApi('empPayCompRecurringApi', EmpPayCompRecurringApi_1.EmpPayCompRecurringApi);
        const linkedApis = [this.initApi('empCompensationApi', EmpCompensationApi_1.EmpCompensationApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get empCompensationApi() {
        const api = this.initApi('empCompensationApi', EmpCompensationApi_1.EmpCompensationApi);
        const linkedApis = [
            this.initApi('empPayCompRecurringApi', EmpPayCompRecurringApi_1.EmpPayCompRecurringApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map