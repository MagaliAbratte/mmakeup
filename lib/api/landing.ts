import { landingPageData, type LandingPageData } from "@/content/landing";

const SIMULATED_DELAY_MS = 180;

export async function getLandingPageData(): Promise<LandingPageData> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));

  return landingPageData;
}
