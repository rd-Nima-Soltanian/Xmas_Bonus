"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpCompensation = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmpCompensation" of service "SFEmpPayCompReccuringEmpComp".
 */
class EmpCompensation extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.EmpCompensation = EmpCompensation;
/**
 * Technical entity name for EmpCompensation.
 */
EmpCompensation._entityName = 'EmpCompensation';
/**
 * Default url path for the according service.
 */
EmpCompensation._defaultBasePath = '/odata/v2';
/**
 * All key fields of the EmpCompensation entity.
 */
EmpCompensation._keys = ['seqNumber', 'startDate', 'userId'];
//# sourceMappingURL=EmpCompensation.js.map