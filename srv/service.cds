using { com.rewe.digital.xmasbonus as xmsEmp } from '../db/schema';

service DDTalksService {

    entity Talks as projection on xmsEmp.Employees {
        personnelNumber,
        firstname,
        lastname,
        position,
        bonus,
        year
    }

}
