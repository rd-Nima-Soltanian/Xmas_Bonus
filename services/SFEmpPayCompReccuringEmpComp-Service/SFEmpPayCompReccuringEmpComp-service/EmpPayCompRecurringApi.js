"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpPayCompRecurringApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const EmpPayCompRecurring_1 = require("./EmpPayCompRecurring");
const EmpPayCompRecurringRequestBuilder_1 = require("./EmpPayCompRecurringRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class EmpPayCompRecurringApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = EmpPayCompRecurring_1.EmpPayCompRecurring;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new EmpPayCompRecurringApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            COMPENSATION_NAV: new odata_v2_1.OneToOneLink('compensationNav', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new EmpPayCompRecurringRequestBuilder_1.EmpPayCompRecurringRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(EmpPayCompRecurring_1.EmpPayCompRecurring, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link basePaycomponent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_PAYCOMPONENT: fieldBuilder.buildEdmTypeField('basePaycomponent', 'Edm.String', true),
                /**
                 * Static representation of the {@link calculatedAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CALCULATED_AMOUNT: fieldBuilder.buildEdmTypeField('calculatedAmount', 'Edm.Double', true),
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
                 * Static representation of the {@link currencyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY_CODE: fieldBuilder.buildEdmTypeField('currencyCode', 'Edm.String', true),
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
                 * Static representation of the {@link frequency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FREQUENCY: fieldBuilder.buildEdmTypeField('frequency', 'Edm.String', true),
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
                 * Static representation of the {@link notes} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NOTES: fieldBuilder.buildEdmTypeField('notes', 'Edm.String', true),
                /**
                 * Static representation of the {@link operation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION: fieldBuilder.buildEdmTypeField('operation', 'Edm.String', true),
                /**
                 * Static representation of the {@link payComponent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAY_COMPONENT: fieldBuilder.buildEdmTypeField('payComponent', 'Edm.String', false),
                /**
                 * Static representation of the {@link paycompvalue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYCOMPVALUE: fieldBuilder.buildEdmTypeField('paycompvalue', 'Edm.Double', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', EmpPayCompRecurring_1.EmpPayCompRecurring)
            };
        }
        return this._schema;
    }
}
exports.EmpPayCompRecurringApi = EmpPayCompRecurringApi;
//# sourceMappingURL=EmpPayCompRecurringApi.js.map