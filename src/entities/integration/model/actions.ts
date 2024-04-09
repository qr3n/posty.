import { TAllowedIntegrations } from "./types";

export const addIntegration = (integration: TAllowedIntegrations, id: string) => {
  window.location.href = `https://77d3-80-67-220-252.ngrok-free.app/integrations/${integration}/auth?user_id=${id}`;
};
