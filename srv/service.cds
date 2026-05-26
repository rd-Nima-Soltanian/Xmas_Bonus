using { com.rewe.digital.xmasbonus as xmsEmp } from '../db/schema';

service XmasBonusService {

    entity Employees as projection on xmsEmp.Employees 

}
