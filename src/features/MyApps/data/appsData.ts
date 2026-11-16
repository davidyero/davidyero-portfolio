import { type App } from "../Screens/MyAppsScreen/MyAppsScreen.types";
import { gazellaApp } from "./apps/gazella";
import { youtimeApp } from "./apps/youtime";
import { festivosDelMundoApp } from "./apps/festivos-del-mundo";
import { taskmasterApp } from "./apps/taskmaster";
import { pronostigolApp } from "./apps/pronostigol";
import { superlineupApp } from "./apps/superlineup";
import { footballCupSimulatorApp } from "./apps/football-cup-simulator";
import { encuentraTuMascotaApp } from "./apps/encuentra-tu-mascota";
import { myLinkHubApp } from "./apps/my-link-hub";
import { splitioApp } from "./apps/splitio";
import { misPagosApp } from "./apps/mis-pagos";
import { habitflowApp } from "./apps/habitflow";
import { trainflowAiApp } from "./apps/trainflow-ai";
import { copMonedaColombianaApp } from "./apps/cop-moneda-colombiana";
import { playerRadarApp } from "./apps/player-radar";
import { agendaPilatesApp } from "./apps/agenda-pilates";
import { presidenteSimulatorApp } from "./apps/presidente-simulator";

// Una app = un archivo en apps/<slug>.ts (datos base, tiendas y legales).
// Aquí solo se fija el orden en que salen en el hub.
// La descripción larga, las features y el changelog de cada app NO van aquí:
// viven solo en content/appContent.ts (EN/ES), que es lo que pintan las vistas.

export const appsData: App[] = [
  gazellaApp,
  youtimeApp,
  festivosDelMundoApp,
  taskmasterApp,
  pronostigolApp,
  superlineupApp,
  footballCupSimulatorApp,
  encuentraTuMascotaApp,
  myLinkHubApp,
  splitioApp,
  misPagosApp,
  habitflowApp,
  trainflowAiApp,
  copMonedaColombianaApp,
  playerRadarApp,
  agendaPilatesApp,
  presidenteSimulatorApp,
];
