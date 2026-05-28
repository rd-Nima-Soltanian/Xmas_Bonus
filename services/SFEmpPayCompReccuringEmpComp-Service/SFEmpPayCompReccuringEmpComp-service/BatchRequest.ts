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
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { EmpPayCompRecurring, EmpCompensation } from './index';

/**
 * Batch builder for operations supported on the SfEmpPayCompReccuringEmpComp Service.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultSfEmpPayCompReccuringEmpCompServicePath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the SfEmpPayCompReccuringEmpComp Service.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
    | Array<
        WriteSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
      >,
  ...rest: Array<
    WriteSfEmpPayCompReccuringEmpCompServiceRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultSfEmpPayCompReccuringEmpCompServicePath = '/odata/v2';
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
