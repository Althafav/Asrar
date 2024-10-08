import { ManagementClient } from "@kentico/kontent-management";
const KontentDelivery = require("@kentico/kontent-delivery");
import { TypeResolver } from "./TypeResolvers";

export default class Globals {
  static PROJECT_ID: string = "d4670d7f-6fd2-0004-1ed5-3c2536520a4b";

  static SECURE_API_KEY: string =
    "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjNkNTAyN2MyZTNhZjQ2NDE5MjQyM2Q4ZTNjMTc1MzkzIiwNCiAgImlhdCI6ICIxNjczOTU4NTU5IiwNCiAgImV4cCI6ICIyMDE5NTU4NTU5IiwNCiAgInZlciI6ICIxLjAuMCIsDQogICJwcm9qZWN0X2lkIjogImQ0NjcwZDdmNmZkMjAwMDQxZWQ1M2MyNTM2NTIwYTRiIiwNCiAgImF1ZCI6ICJkZWxpdmVyLmtlbnRpY29jbG91ZC5jb20iDQp9.ETTW0-Y1tGS4p3swX3YkQ89x3kg-RtuPZM1xt1Qzs4k";
  // "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogImM1YzQ2NGQ3ZjQ0NTQwNTlhYmE4NjAxMDMyZTdlYmJlIiwNCiAgImlhdCI6ICIxNjM0MDM4NjM0IiwNCiAgImV4cCI6ICIxOTc5NjM4NjM0IiwNCiAgInByb2plY3RfaWQiOiAiYzE4M2NjMjAyZmIzMDBhZjZmY2EzOTY5OTU4NDA1MDkiLA0KICAidmVyIjogIjEuMC4wIiwNCiAgImF1ZCI6ICJkZWxpdmVyLmtlbnRpY29jbG91ZC5jb20iDQp9._lGGVn61s20SRdYKvZut2Tt2JJek_7ojW0yXNOuW-5s";

  static MANAGEMENT_API_KEY: string =
    "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjYxMjQ1ZmE4YmZmMTQ2N2JhNDkxMzY4YTEwMTNiNTljIiwNCiAgImlhdCI6ICIxNjc0NzI0NjA3IiwNCiAgImV4cCI6ICIxNjkwMzYyOTYwIiwNCiAgInZlciI6ICIzLjAuMCIsDQogICJ1aWQiOiAiNjBhZTQ5Y2Q2NzA1MGUwMDcwMGE5ZmM1IiwNCiAgInByb2plY3RfY29udGFpbmVyX2lkIjogIjIxNzMzZDQ4NjIwNDAwNmY3YWYwNDE0MDQyZmVjNWRhIiwNCiAgImF1ZCI6ICJtYW5hZ2Uua2VudGljb2Nsb3VkLmNvbSINCn0.DBpHlfTHHj9W97mUqObkGRpwKvnwygKOdQMogxq1Rgc";
  // "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjU5NGQ5Yjg4YzU2MzQ4OGM5NDEyMjNlODdkN2FkY2QyIiwNCiAgImlhdCI6ICIxNjM0MTg4MzQyIiwNCiAgImV4cCI6ICIxOTc5Nzg4MzQyIiwNCiAgInByb2plY3RfaWQiOiAiYzE4M2NjMjAyZmIzMDBhZjZmY2EzOTY5OTU4NDA1MDkiLA0KICAidmVyIjogIjIuMS4wIiwNCiAgInVpZCI6ICI2MGFlNDljZDY3MDUwZTAwNzAwYTlmYzUiLA0KICAiYXVkIjogIm1hbmFnZS5rZW50aWNvY2xvdWQuY29tIg0KfQ.meVfhx384SIfVseJj7pgWzKKloOdwX9lKAPXKvwWIIU";

  static KontentClient: any = new KontentDelivery.DeliveryClient({
    projectId: Globals.PROJECT_ID,
    globalQueryConfig: {
      useSecuredMode: true, // Queries the Delivery API using secure access.
    },
    secureApiKey: Globals.SECURE_API_KEY,
    typeResolvers: TypeResolver,
  });

  static KontentManager = new ManagementClient({
    projectId: Globals.PROJECT_ID,
    apiKey: Globals.MANAGEMENT_API_KEY,
  });

  static SITE_NAME = "Glass Show";

  static BASE_URL: string =
    process.env.NODE_ENV === "production"
      ? "https://asrar-five.vercel.app/"
      : "http://localhost:4000/";


  static ALLOW_COOKIE: string = "01f10d-allow-cookie";

  static LANG_COOKIE: string = "01f10d-lang-cookie";

  static CURRENT_LANG: string = "English";

  static CURRENT_LANG_CODENAME: string = "default";

}
