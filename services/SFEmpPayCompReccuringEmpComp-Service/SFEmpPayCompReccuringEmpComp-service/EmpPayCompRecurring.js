"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpPayCompRecurring = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmpPayCompRecurring" of service "SFEmpPayCompReccuringEmpComp".
 */
class EmpPayCompRecurring extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.EmpPayCompRecurring = EmpPayCompRecurring;
/**
 * Technical entity name for EmpPayCompRecurring.
 */
EmpPayCompRecurring._entityName = 'EmpPayCompRecurring';
/**
 * Default url path for the according service.
 */
EmpPayCompRecurring._defaultBasePath = '/odata/v2';
/**
 * All key fields of the EmpPayCompRecurring entity.
 */
EmpPayCompRecurring._keys = ['payComponent', 'seqNumber', 'startDate', 'userId'];
//# sourceMappingURL=EmpPayCompRecurring.js.map