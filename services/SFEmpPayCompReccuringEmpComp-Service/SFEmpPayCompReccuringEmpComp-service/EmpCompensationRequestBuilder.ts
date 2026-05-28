/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { EmpCompensation } from './EmpCompensation';

/**
 * Request builder class for operations supported on the {@link EmpCompensation} entity.
 */
export class EmpCompensationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmpCompensation<T>, T> {
  /**
   * Returns a request builder for querying all `EmpCompensation` entities.
   * @returns A request builder for creating requests to retrieve all `EmpCompensation` entities.
   */
  getAll(): GetAllRequestBuilder<EmpCompensation<T>, T> {
    return new GetAllRequestBuilder<EmpCompensation<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `EmpCompensation` entity based on its keys.
   * @param seqNumber Key property. See {@link EmpCompensation.seqNumber}.
   * @param startDate Key property. See {@link EmpCompensation.startDate}.
   * @param userId Key property. See {@link EmpCompensation.userId}.
   * @returns A request builder for creating requests to retrieve one `EmpCompensation` entity based on its keys.
   */
  getByKey(
    seqNumber: DeserializedType<T, 'Edm.Int64'>,
    startDate: DeserializedType<T, 'Edm.DateTime'>,
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmpCompensation<T>, T> {
    return new GetByKeyRequestBuilder<EmpCompensation<T>, T>(this.entityApi, {
      seqNumber: seqNumber,
      startDate: startDate,
      userId: userId
    });
  }
}
