/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { EmpPayCompRecurringApi } from './EmpPayCompRecurringApi';
import { EmpCompensation, EmpCompensationType } from './EmpCompensation';

/**
 * This class represents the entity "EmpPayCompRecurring" of service "SFEmpPayCompReccuringEmpComp".
 */
export class EmpPayCompRecurring<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmpPayCompRecurringType<T>
{
  /**
   * Technical entity name for EmpPayCompRecurring.
   */
  static override _entityName = 'EmpPayCompRecurring';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/odata/v2';
  /**
   * All key fields of the EmpPayCompRecurring entity.
   */
  static _keys = ['payComponent', 'seqNumber', 'startDate', 'userId'];
  /**
   * Base Pay Component.
   * @nullable
   */
  declare basePaycomponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated Amount.
   * @nullable
   */
  declare calculatedAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  declare createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Date Time.
   * @nullable
   */
  declare createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created On.
   * @nullable
   */
  declare createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Currency.
   * Maximum length: 32.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * effectiveLatestChange.
   * @nullable
   */
  declare effectiveLatestChange?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * End Date.
   * @nullable
   */
  declare endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Frequency.
   * Maximum length: 30.
   * @nullable
   */
  declare frequency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  declare lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  declare lastModifiedDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Last Modified On.
   * @nullable
   */
  declare lastModifiedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * notes.
   * Maximum length: 4000.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * operation.
   * @nullable
   */
  declare operation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Component.
   */
  declare payComponent: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   * @nullable
   */
  declare paycompvalue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sequence Number.
   */
  declare seqNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Event Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * User ID.
   * Maximum length: 100.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link EmpCompensation} entity.
   */
  declare compensationNav?: EmpCompensation<T> | null;

  constructor(_entityApi: EmpPayCompRecurringApi<T>) {
    super(_entityApi);
  }
}

export interface EmpPayCompRecurringType<
  T extends DeSerializers = DefaultDeSerializers
> {
  basePaycomponent?: DeserializedType<T, 'Edm.String'> | null;
  calculatedAmount?: DeserializedType<T, 'Edm.Double'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  effectiveLatestChange?: DeserializedType<T, 'Edm.Boolean'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  frequency?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  operation?: DeserializedType<T, 'Edm.String'> | null;
  payComponent: DeserializedType<T, 'Edm.String'>;
  paycompvalue?: DeserializedType<T, 'Edm.Double'> | null;
  seqNumber: DeserializedType<T, 'Edm.Int64'>;
  startDate: DeserializedType<T, 'Edm.DateTime'>;
  userId: DeserializedType<T, 'Edm.String'>;
  compensationNav?: EmpCompensationType<T> | null;
}
