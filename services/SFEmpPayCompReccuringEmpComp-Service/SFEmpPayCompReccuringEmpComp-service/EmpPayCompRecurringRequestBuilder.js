"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpPayCompRecurringRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link EmpPayCompRecurring} entity.
 */
class EmpPayCompRecurringRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `EmpPayCompRecurring` entities.
     * @returns A request builder for creating requests to retrieve all `EmpPayCompRecurring` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `EmpPayCompRecurring` entity based on its keys.
     * @param payComponent Key property. See {@link EmpPayCompRecurring.payComponent}.
     * @param seqNumber Key property. See {@link EmpPayCompRecurring.seqNumber}.
     * @param startDate Key property. See {@link EmpPayCompRecurring.startDate}.
     * @param userId Key property. See {@link EmpPayCompRecurring.userId}.
     * @returns A request builder for creating requests to retrieve one `EmpPayCompRecurring` entity based on its keys.
     */
    getByKey(payComponent, seqNumber, startDate, userId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            payComponent: payComponent,
            seqNumber: seqNumber,
            startDate: startDate,
            userId: userId
        });
    }
}
exports.EmpPayCompRecurringRequestBuilder = EmpPayCompRecurringRequestBuilder;
//# sourceMappingURL=EmpPayCompRecurringRequestBuilder.js.map