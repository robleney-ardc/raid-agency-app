import { ServicePoint } from "@/Generated/Raidv2";

export const servicePoints: ServicePoint[] = [
  {
    id: 20000001,
    name: "Australian Research Data Commons",
    identifierOwner: "https://ror.org/038sjwq14",
    techEmail: "joel.benn@ardc.edu.au",
    adminEmail: "matthias.liffers@ardc.edu.au",
    enabled: true,
    appWritesEnabled: true,
  },
  {
    id: 20000003,
    name: "University of Notre Dame Library",
    identifierOwner: "https://ror.org/02stey378",
    techEmail: "",
    adminEmail: "",
    enabled: true,
    appWritesEnabled: true,
  },
  {
    id: 20000004,
    name: "UQ Centre for Advanced Imaging",
    identifierOwner: "https://ror.org/00rqy9422",
    techEmail: "",
    adminEmail: "",
    enabled: true,
    appWritesEnabled: true,
  },
  {
    id: 20000000,
    name: "raido",
    identifierOwner: "https://ror.org/038sjwq14",
    repositoryId: "NPQS.RKFZRK",
    prefix: "10.82841",
    techEmail: "web.services@ardc.edu.au",
    adminEmail: "web.services@ardc.edu.au",
    enabled: true,
    appWritesEnabled: true,
  },
  {
    id: 20000002,
    name: "RDM@UQ",
    identifierOwner: "https://ror.org/00rqy9422",
    repositoryId: "NPQS.RKFZRK",
    prefix: "10.82841",
    techEmail: "",
    adminEmail: "",
    enabled: true,
    appWritesEnabled: true,
  },
];
