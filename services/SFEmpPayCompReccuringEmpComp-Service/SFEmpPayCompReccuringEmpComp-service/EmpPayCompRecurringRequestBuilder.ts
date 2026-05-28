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
import { EmpPayCompRecurring } from './EmpPayCompRecurring';

/**
 * Request builder class for operations supported on the {@link EmpPayCompRecurring} entity.
 */
export class EmpPayCompRecurringRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmpPayCompRecurring<T>, T> {
  /**
   * Returns a request builder for querying all `EmpPayCompRecurring` entities.
   * @returns A request builder for creating requests to retrieve all `EmpPayCompRecurring` entities.
   */
  getAll(): GetAllRequestBuilder<EmpPayCompRecurring<T>, T> {
    return new GetAllRequestBuilder<EmpPayCompRecurring<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `EmpPayCompRecurring` entity based on its keys.
   * @param payComponent Key property. See {@link EmpPayCompRecurring.payComponent}.
   * @param seqNumber Key property. See {@link EmpPayCompRecurring.seqNumber}.
   * @param startDate Key property. See {@link EmpPayCompRecurring.startDate}.
   * @param userId Key property. See {@link EmpPayCompRecurring.userId}.
   * @returns A request builder for creating requests to retrieve one `EmpPayCompRecurring` entity based on its keys.
   */
  getByKey(
    payComponent: DeserializedType<T, 'Edm.String'>,
    seqNumber: DeserializedType<T, 'Edm.Int64'>,
    startDate: DeserializedType<T, 'Edm.DateTime'>,
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmpPayCompRecurring<T>, T> {
    return new GetByKeyRequestBuilder<EmpPayCompRecurring<T>, T>(
      this.entityApi,
      {
        payComponent: payComponent,
        seqNumber: seqNumber,
        startDate: startDate,
        userId: userId
      }
    );
  }
}
