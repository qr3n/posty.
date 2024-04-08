import { TAllowedIntegrations } from "./types";

export const addIntegration = (integration: TAllowedIntegrations, id: string) => {
  window.location.href = `http://localhost:8000/integrations/${integration}/auth?user_id=${id}`;
};
