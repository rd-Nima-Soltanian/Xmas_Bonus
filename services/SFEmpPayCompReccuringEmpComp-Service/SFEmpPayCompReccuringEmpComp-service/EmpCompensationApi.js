"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpCompensationApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const EmpCompensation_1 = require("./EmpCompensation");
const EmpCompensationRequestBuilder_1 = require("./EmpCompensationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class EmpCompensationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = EmpCompensation_1.EmpCompensation;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new EmpCompensationApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            EMP_PAY_COMP_RECURRING_NAV: new odata_v2_1.Link('empPayCompRecurringNav', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new EmpCompensationRequestBuilder_1.EmpCompensationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(EmpCompensation_1.EmpCompensation, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link createdBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY: fieldBuilder.buildEdmTypeField('createdBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField('createdDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link createdOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_ON: fieldBuilder.buildEdmTypeField('createdOn', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link customDouble1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOM_DOUBLE_1: fieldBuilder.buildEdmTypeField('customDouble1', 'Edm.Double', true),
                /**
                 * Static representation of the {@link customDouble2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOM_DOUBLE_2: fieldBuilder.buildEdmTypeField('customDouble2', 'Edm.Double', true),
                /**
                 * Static representation of the {@link effectiveLatestChange} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EFFECTIVE_LATEST_CHANGE: fieldBuilder.buildEdmTypeField('effectiveLatestChange', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link endDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                END_DATE: fieldBuilder.buildEdmTypeField('endDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link event} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EVENT: fieldBuilder.buildEdmTypeField('event', 'Edm.String', true),
                /**
                 * Static representation of the {@link eventReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EVENT_REASON: fieldBuilder.buildEdmTypeField('eventReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastModifiedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField('lastModifiedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastModifiedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link lastModifiedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_ON: fieldBuilder.buildEdmTypeField('lastModifiedOn', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link operation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION: fieldBuilder.buildEdmTypeField('operation', 'Edm.String', true),
                /**
                 * Static representation of the {@link seqNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEQ_NUMBER: fieldBuilder.buildEdmTypeField('seqNumber', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link startDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                START_DATE: fieldBuilder.buildEdmTypeField('startDate', 'Edm.DateTime', false),
                /**
                 * Static representation of the {@link userId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', EmpCompensation_1.EmpCompensation)
            };
        }
        return this._schema;
    }
}
exports.EmpCompensationApi = EmpCompensationApi;
//# sourceMappingURL=EmpCompensationApi.js.map