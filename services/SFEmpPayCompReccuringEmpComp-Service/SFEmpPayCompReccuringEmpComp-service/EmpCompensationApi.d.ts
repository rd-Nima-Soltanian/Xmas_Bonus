/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpCompensation } from './EmpCompensation';
import { EmpCompensationRequestBuilder } from './EmpCompensationRequestBuilder';
import { EmpPayCompRecurringApi } from './EmpPayCompRecurringApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class EmpCompensationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmpCompensation<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): EmpCompensationApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [EmpPayCompRecurringApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof EmpCompensation;
  requestBuilder(): EmpCompensationRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    EmpCompensation<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<EmpCompensation<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof EmpCompensation, DeSerializersT>;
  private _schema?;
  get schema(): {
    CREATED_BY: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CUSTOM_DOUBLE_1: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CUSTOM_DOUBLE_2: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    EFFECTIVE_LATEST_CHANGE: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    EVENT: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_REASON: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_ON: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    OPERATION: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQ_NUMBER: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      EmpCompensation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link empPayCompRecurringNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMP_PAY_COMP_RECURRING_NAV: Link<
      EmpCompensation<DeSerializersT>,
      DeSerializersT,
      EmpPayCompRecurringApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmpCompensation<DeSerializers>>;
  };
}
