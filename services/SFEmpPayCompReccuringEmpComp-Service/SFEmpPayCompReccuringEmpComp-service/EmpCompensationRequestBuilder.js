"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpCompensationRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link EmpCompensation} entity.
 */
class EmpCompensationRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `EmpCompensation` entities.
     * @returns A request builder for creating requests to retrieve all `EmpCompensation` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `EmpCompensation` entity based on its keys.
     * @param seqNumber Key property. See {@link EmpCompensation.seqNumber}.
     * @param startDate Key property. See {@link EmpCompensation.startDate}.
     * @param userId Key property. See {@link EmpCompensation.userId}.
     * @returns A request builder for creating requests to retrieve one `EmpCompensation` entity based on its keys.
     */
    getByKey(seqNumber, startDate, userId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            seqNumber: seqNumber,
            startDate: startDate,
            userId: userId
        });
    }
}
exports.EmpCompensationRequestBuilder = EmpCompensationRequestBuilder;
//# sourceMappingURL=EmpCompensationRequestBuilder.js.map