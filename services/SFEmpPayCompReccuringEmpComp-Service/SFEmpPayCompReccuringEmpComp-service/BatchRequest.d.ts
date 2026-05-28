/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { EmpPayCompRecurring, EmpCompensation } from './index';
/**
 * Batch builder for operations supported on the SfEmpPayCompReccuringEmpComp Service.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the SfEmpPayCompReccuringEmpComp Service.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export declare const defaultSfEmpPayCompReccuringEmpCompServicePath =
  '/odata/v2';
export type ReadSfEmpPayCompReccuringEmpCompServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<EmpPayCompRecurring<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmpCompensation<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmpPayCompRecurring<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmpCompensation<DeSerializersT>, DeSerializersT>;
export type WriteSfEmpPayCompReccuringEmpCompServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<EmpPayCompRecurring<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmpPayCompRecurring<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmpPayCompRecurring<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmpCompensation<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmpCompensation<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmpCompensation<DeSerializersT>, DeSerializersT>;
