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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class EmpCompensationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmpCompensation<DeSerializersT>, DeSerializersT> {
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
  ): EmpCompensationApi<DeSerializersT> {
    return new EmpCompensationApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link empPayCompRecurringNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMP_PAY_COMP_RECURRING_NAV: Link<
      EmpCompensation<DeSerializersT>,
      DeSerializersT,
      EmpPayCompRecurringApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EmpPayCompRecurringApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EMP_PAY_COMP_RECURRING_NAV: new Link(
        'empPayCompRecurringNav',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EmpCompensation;

  requestBuilder(): EmpCompensationRequestBuilder<DeSerializersT> {
    return new EmpCompensationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmpCompensation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmpCompensation<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmpCompensation<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EmpCompensation, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmpCompensation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link customDouble1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_DOUBLE_1: fieldBuilder.buildEdmTypeField(
          'customDouble1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link customDouble2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_DOUBLE_2: fieldBuilder.buildEdmTypeField(
          'customDouble2',
          'Edm.Double',
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
         * Static representation of the {@link event} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT: fieldBuilder.buildEdmTypeField('event', 'Edm.String', true),
        /**
         * Static representation of the {@link eventReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_REASON: fieldBuilder.buildEdmTypeField(
          'eventReason',
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
         * Static representation of the {@link operation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION: fieldBuilder.buildEdmTypeField(
          'operation',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', EmpCompensation)
      };
    }

    return this._schema;
  }
}
