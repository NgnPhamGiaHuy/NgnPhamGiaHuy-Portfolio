import { PII_MISC } from "@/constants/pii/misc";
import { PII_SOCIALS } from "@/constants/pii/social";
import { PII_BASIC_INFOS } from "@/constants/pii/basic";
import { PII_WORKS } from "@/constants/pii/work";
import { PII_PROFESSIONALS } from "@/constants/pii/professional";

export const PERSONAL_IDENTIFIABLE_INFORMATION = {
    ...PII_MISC,
    ...PII_WORKS,
    ...PII_SOCIALS,
    ...PII_BASIC_INFOS,
    ...PII_PROFESSIONALS,
}