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
import type { EmpCompensationApi } from './EmpCompensationApi';
import {
  EmpPayCompRecurring,
  EmpPayCompRecurringType
} from './EmpPayCompRecurring';
/**
 * This class represents the entity "EmpCompensation" of service "SFEmpPayCompReccuringEmpComp".
 */
export declare class EmpCompensation<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements EmpCompensationType<T>
{
  /**
   * Technical entity name for EmpCompensation.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the EmpCompensation entity.
   */
  static _keys: string[];
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
   * Gross Monthly (FTE 1).
   * @nullable
   */
  customDouble1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Further recurrent Payments.
   * @nullable
   */
  customDouble2?: DeserializedType<T, 'Edm.Double'> | null;
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
   * Event.
   * Maximum length: 45.
   * @nullable
   */
  event?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Event Reason.
   * @nullable
   */
  eventReason?: DeserializedType<T, 'Edm.String'> | null;
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
   * operation.
   * @nullable
   */
  operation?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link EmpPayCompRecurring} entity.
   */
  empPayCompRecurringNav: EmpPayCompRecurring<T>[];
  constructor(_entityApi: EmpCompensationApi<T>);
}
export interface EmpCompensationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  customDouble1?: DeserializedType<T, 'Edm.Double'> | null;
  customDouble2?: DeserializedType<T, 'Edm.Double'> | null;
  effectiveLatestChange?: DeserializedType<T, 'Edm.Boolean'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  event?: DeserializedType<T, 'Edm.String'> | null;
  eventReason?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  operation?: DeserializedType<T, 'Edm.String'> | null;
  seqNumber: DeserializedType<T, 'Edm.Int64'>;
  startDate: DeserializedType<T, 'Edm.DateTime'>;
  userId: DeserializedType<T, 'Edm.String'>;
  empPayCompRecurringNav: EmpPayCompRecurringType<T>[];
}
