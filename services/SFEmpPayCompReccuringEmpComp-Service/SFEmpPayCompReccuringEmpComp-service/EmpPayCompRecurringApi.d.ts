/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpPayCompRecurring } from './EmpPayCompRecurring';
import { EmpPayCompRecurringRequestBuilder } from './EmpPayCompRecurringRequestBuilder';
import { EmpCompensationApi } from './EmpCompensationApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class EmpPayCompRecurringApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmpPayCompRecurring<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): EmpPayCompRecurringApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [EmpCompensationApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof EmpPayCompRecurring;
  requestBuilder(): EmpPayCompRecurringRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    EmpPayCompRecurring<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    EmpPayCompRecurring<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof EmpPayCompRecurring, DeSerializersT>;
  private _schema?;
  get schema(): {
    BASE_PAYCOMPONENT: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATED_AMOUNT: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_LATEST_CHANGE: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    FREQUENCY: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_ON: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_COMPONENT: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYCOMPVALUE: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SEQ_NUMBER: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      EmpPayCompRecurring<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_NAV: OneToOneLink<
      EmpPayCompRecurring<DeSerializersT>,
      DeSerializersT,
      EmpCompensationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmpPayCompRecurring<DeSerializers>>;
  };
}
