/* Stub: Nocturne is a separate ThreeUI entry and is not part of the registered
   Kage landing-page bundle. Only the names LandingPages.tsx re-exports are
   provided, with the authored "midnight" variant as the sole member. */
export const NOCTURNE_VARIANTS = ["midnight"] as const;
export type NocturneVariant = (typeof NOCTURNE_VARIANTS)[number];

export const NOCTURNE_TITLES: Record<NocturneVariant, string> = {
  midnight: "Nocturne — The night holds its breath",
};

export function buildNocturneDocument(_variant: NocturneVariant): string {
  return "";
}
