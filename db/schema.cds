using { cuid, managed } from '@sap/cds/common';
// cuid: A unique identifier for each record, generated automatically by the system.
// managed: Indicates that the entity is managed by the CDS framework, which provides features like automatic handling of created and modified timestamps, as well as user information for auditing purposes.
// Both are templates that can be reused across different entities in the CDS model, ensuring consistency and reducing boilerplate code.

namespace com.rewe.digital.xmasbonus;
// This line defines a namespace for the CDS model, which helps to organize and group related entities together.
// In this case, the namespace is "com.rewe.digital.xmasbonus", indicating that the entities defined within this file are related to the Christmas bonus application for REWE Digital.

entity Employees: cuid, managed {
// This line defines an entity called "Employees" that inherits from the "cuid" and "managed" templates.
// The "Employees" entity represents the employees who are eligible for the Christmas bonus.
  personnelNumber: String(10);
  firstname: String;
  lastname: String;
  position: String;
  bonus: Decimal(5,2);
  year: String(6);
}