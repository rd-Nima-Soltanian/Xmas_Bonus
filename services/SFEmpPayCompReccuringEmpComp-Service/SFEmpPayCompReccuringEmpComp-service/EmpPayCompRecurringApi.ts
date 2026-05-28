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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class EmpPayCompRecurringApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmpPayCompRecurring<DeSerializersT>, DeSerializersT> {
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): EmpPayCompRecurringApi<DeSerializersT> {
    return new EmpPayCompRecurringApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link compensationNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_NAV: OneToOneLink<
      EmpPayCompRecurring<DeSerializersT>,
      DeSerializersT,
      EmpCompensationApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EmpCompensationApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_NAV: new OneToOneLink('compensationNav', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = EmpPayCompRecurring;

  requestBuilder(): EmpPayCompRecurringRequestBuilder<DeSerializersT> {
    return new EmpPayCompRecurringRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmpPayCompRecurring<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmpPayCompRecurring<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EmpPayCompRecurring<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof EmpPayCompRecurring,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmpPayCompRecurring,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link basePaycomponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_PAYCOMPONENT: fieldBuilder.buildEdmTypeField(
          'basePaycomponent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculatedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'calculatedAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'createdBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'createdDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'createdOn',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'currencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveLatestChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_LATEST_CHANGE: fieldBuilder.buildEdmTypeField(
          'effectiveLatestChange',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'endDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEdmTypeField(
          'frequency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'lastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_ON: fieldBuilder.buildEdmTypeField(
          'lastModifiedOn',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('notes', 'Edm.String', true),
        /**
         * Static representation of the {@link operation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION: fieldBuilder.buildEdmTypeField(
          'operation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_COMPONENT: fieldBuilder.buildEdmTypeField(
          'payComponent',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paycompvalue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYCOMPVALUE: fieldBuilder.buildEdmTypeField(
          'paycompvalue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link seqNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQ_NUMBER: fieldBuilder.buildEdmTypeField(
          'seqNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'startDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmpPayCompRecurring)
      };
    }

    return this._schema;
  }
}
