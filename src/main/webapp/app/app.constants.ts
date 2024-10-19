// These constants are injected via webpack DefinePlugin variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

declare const __DEBUG_INFO_ENABLED__: boolean;
declare const __VERSION__: string;

export const VERSION = __VERSION__;
export const DEBUG_INFO_ENABLED = __DEBUG_INFO_ENABLED__;

export enum PatternConstants {
    PASSWORD = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}',
    LOGIN_REGEX = "^[_'.@A-Za-z0-9-]*$",
    NAME = '^[a-z A-Z\\.]*$',
    CERTIFICATE_NUMBER = '^[A-Za-z0-9 \\.#/_-]*$',
    SIMPLETEXT = '^[a-z A-Z0-9 ,\\.:()]*$',
    STRING_SIMPLE_STRING_WITH_ENTER = '[a-zA-Z,& :\\.0-9\\n]+$',
    ORGANISATION_NAME = '^[a-z A-Z 0-9,&]*$',
    NAME_WITHOUT_SPACE = '[a-zA-Z]*$',
    AADHAR_NUMBER = '^[2-9]{1}[0-9]{11}$',
    MOBILE = '^[0-9]*$',
    SALARY = '[0-9]{0,50}',
    /* WEBSITE = '^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+\\.[a-z]+(\\/[a-zA-Z0-9#]+\\/?)*$',*/
    WEBSITE = '^((http:\\/\\/|https:\\/\\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+))*$',
    /* URL = '^((https?|http?):\\/\\/)?(www.)?[a-z0-9\\.]*+:[0-9]{4}+[/a-zA-Z0-9#@\\.\\-_]*$',*/
    URL = '^((https?|http?):\\/\\/)?(www.)?[a-z0-9\\.]*:[0-9]{4}[\\/a-zA-Z0-9#\\@\\.\\-_]*$',
    AGE = '\\d{1,2}',
    PINCODE = '^[1-9][0-9]{5}$',
    LANDLINE = '^[0][1-9]\\d{9}$|^[1-9]\\d{9}$',
    YEAR = '\\d{4}',
    EXCHANGENO = '[A-Za-z0-9 /_-]{0,50}',
    ADDRESS = '^[A-Za-z0-9 \\.,#/()_-]*$',
    ROLL_NUMBER = '^[A-Za-z0-9 \\#/_-]*$',
    QUARTER = '[A-Za-z ,-]',
    CODE = '^[A-Za-z0-9 .]*$',
    STATUS = '[A-Z]',
    NUMBER = '[0-9]+',
    MAX300 = '(?<!-)\\b([1-2]?\\d{1,2}|300)\\b',
    MAX200 = '(?<!-)\\b([1-1]?\\d{1,2}|200)\\b',
    MAX100 = '^([0-9]|[1-9][0-9]|100)$',
    ALLOWEDAGE = '^([1-1][4-9]|[2-9][0-9])$',
    EMAIL = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    FAMILYID = '[A-Za-z0-9]+',
    // PASSWORD = '(^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$)?(^(?=.*\d)(?=.*[a-z])(?=.*[@#$%^&+=]).{8,32}$)?(^(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,32}$)?(^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,32}$)?'
  }
  