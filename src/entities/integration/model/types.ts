export type TAllowedIntegrations = 'youtube' | 'twitter' | 'instagram'

export interface IIntegration {
  id: string,
  integration_type: TAllowedIntegrations,
  channel_name: string
}