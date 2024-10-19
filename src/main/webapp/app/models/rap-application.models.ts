export class RapApplicantDetails{
    
    firstName!: string;
    middleName?: string;
    lastName!: string;
    gender! : string;
    dob!: Date;
    fatherName! : string;
    email! : string;
    contact! : string;
    nationality! : string;
    birthCountry! : string;
    passPhoto!: string;
    residentialAddress!: Address;
    permanentAddress!: Address;
    passportAddress!: Address;
    rapapplicantsMHAclearance! : RapapplicantsMHAclearance;
    rapapplicantsMEAclearance!: RapapplicantsMEAclearance;
    passportDetails!: RapApplicantPassportDetails;
    visaDetails!: RapApplicantVisaDetails;
    citizenshipDetails!: RapApplicantCitizenshipDetails;  

    constructor() {
        this.residentialAddress = new Address();
        this.permanentAddress = new Address();
        this.passportAddress = new Address();
        this.passportDetails =new RapApplicantPassportDetails();
        this.visaDetails = new RapApplicantVisaDetails();
        this.rapapplicantsMEAclearance = new RapapplicantsMEAclearance();
        this.rapapplicantsMHAclearance = new RapapplicantsMHAclearance();
        this.citizenshipDetails = new RapApplicantCitizenshipDetails();
    }
}
export class Address {
    houseNumber!: string;
    street!: string;
    pincode!: string;
    state!: string;
    country! : string;
}

export class RapapplicantsMHAclearance{
    mhaClearanceCertificate! :string;
    mhaCertificateNumber!: string;
    mhaCertificateValidTill!: Date;
}
export class RapapplicantsMEAclearance{
    meaClearanceCertificate! :string;
    meaCertificateNumber!: string;
    meaCertificateValidTill!: Date;
}


export class RapApplicantPassportDetails{
    passportCopy! :string;
    passportNumber!: string;
    passportValidTill!: Date;
    passportType!: string;
}
export class RapApplicantVisaDetails{
    visaCopy! :string;
    visaNumber!: string;
    visaValidTill!: Date;
    visaType!: string;
}
export class RapApplicantCitizenshipDetails{
    citizenshipCopy! :string;
    citizenshipNumber!: string;
    citizenshipIssueDate!: Date;
    
}

export class TravelInfoComponent {
    purposeOfStay: string | null = null;  // Variable to store selected option
  }