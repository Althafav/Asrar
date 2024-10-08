import { About } from "@/models/about";
import { Basiccontentpage } from "@/models/basiccontentpage";
import { Exhibitor } from "@/models/exhibitor";
import { Exhibitoritem } from "@/models/exhibitoritem";
import { Exhibitorpageitem } from "@/models/exhibitorpageitem";
import { Exhibitorspage } from "@/models/exhibitorspage";
import { Feature } from "@/models/feature";
import { Homebanner } from "@/models/homebanner";
import { Homeexhibit } from "@/models/homeexhibit";
import { Partneritem } from "@/models/partneritem";
import { Partnerpage } from "@/models/partnerpage";
import { Visitorprofile } from "@/models/visitorprofile";
import { Visitorprofileitem } from "@/models/visitorprofileitem";

const KontentDelivery = require("@kentico/kontent-delivery");





export const TypeResolver = [
  new KontentDelivery.TypeResolver("Homeexhibit", (rawData: any) => new Homeexhibit()),

  new KontentDelivery.TypeResolver("Feature", (rawData: any) => new Feature()),
  new KontentDelivery.TypeResolver("Exhibitor", (rawData: any) => new Exhibitor()),
  
  
  new KontentDelivery.TypeResolver("Exhibitoritem", (rawData: any) => new Exhibitoritem()),
  
  new KontentDelivery.TypeResolver("Exhibitorspage", (rawData: any) => new Exhibitorspage()),

  new KontentDelivery.TypeResolver("Exhibitorpageitem", (rawData: any) => new Exhibitorpageitem()),
  new KontentDelivery.TypeResolver("Visitorprofile", (rawData: any) => new Visitorprofile()),

  new KontentDelivery.TypeResolver("Visitorprofileitem", (rawData: any) => new Visitorprofileitem()),

  new KontentDelivery.TypeResolver("Partnerpage", (rawData: any) => new Partnerpage()),

  new KontentDelivery.TypeResolver("Partneritem", (rawData: any) => new Partneritem()),
  new KontentDelivery.TypeResolver("Basiccontentpage", (rawData: any) => new Basiccontentpage()),
  new KontentDelivery.TypeResolver("Homebanner", (rawData: any) => new Homebanner()),
  new KontentDelivery.TypeResolver("About", (rawData: any) => new About()),



];
