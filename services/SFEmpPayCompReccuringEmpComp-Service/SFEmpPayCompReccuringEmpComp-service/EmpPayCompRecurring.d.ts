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
export declare class EmpPayCompRecurring<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements EmpPayCompRecurringType<T>
{
  /**
   * Technical entity name for EmpPayCompRecurring.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the EmpPayCompRecurring entity.
   */
  static _keys: string[];
  /**
   * Base Pay Component.
   * @nullable
   */
  basePaycomponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated Amount.
   * @nullable
   */
  calculatedAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Currency.
   * Maximum length: 32.
   * @nullable
   */
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * effectiveLatestChange.
   * @nullable
   */
  effectiveLatestChange?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Frequency.
   * Maximum length: 30.
   * @nullable
   */
  frequency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * notes.
   * Maximum length: 4000.
   * @nullable
   */
  notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * operation.
   * @nullable
   */
  operation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Component.
   */
  payComponent: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   * @nullable
   */
  paycompvalue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sequence Number.
   */
  seqNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Event Date.
   */
  startDate: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link EmpCompensation} entity.
   */
  compensationNav?: EmpCompensation<T> | null;
  constructor(_entityApi: EmpPayCompRecurringApi<T>);
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
