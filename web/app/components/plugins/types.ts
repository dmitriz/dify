import type { CredentialFormSchemaBase } from '../header/account-setting/model-provider-page/declarations'
import type { Locale } from '@/i18n'

export enum PluginType {
  tool = 'tool',
  model = 'model',
  extension = 'extension',
}

export enum PluginSource {
  marketplace = 'marketplace',
  github = 'github',
  local = 'package',
  debugging = 'remote',
}

export type PluginToolDeclaration = {
  identity: {
    author: string
    name: string
    description: Record<Locale, string>
    icon: string
    label: Record<Locale, string>
    tags: string[]
  }
  credentials_schema: CredentialFormSchemaBase[] // TODO
}

export type PluginEndpointDeclaration = {
  settings: CredentialFormSchemaBase[]
  endpoints: EndpointItem[]
}

export type EndpointItem = {
  path: string
  method: string
}

export type EndpointListItem = {
  id: string
  created_at: string
  updated_at: string
  settings: Record<string, any>
  tenant_id: string
  plugin_id: string
  expired_at: string
  declaration: PluginEndpointDeclaration
  name: string
  enabled: boolean
  url: string
  hook_id: string
}

export type PluginDeclaration = {
  version: string
  author: string
  icon: string
  name: string
  category: PluginType
  label: Record<Locale, string>
  description: Record<Locale, string>
  created_at: string
  resource: any // useless in frontend
  plugins: any // useless in frontend
  verified: boolean
  endpoint: PluginEndpointDeclaration
  tool: PluginToolDeclaration
  model: any // TODO
}

export type PluginDetail = {
  id: string
  created_at: string
  updated_at: string
  name: string
  plugin_id: string
  plugin_unique_identifier: string
  declaration: PluginDeclaration
  installation_id: string
  tenant_id: string
  endpoints_setups: number
  endpoints_active: number
  version: string
  source: PluginSource
  meta?: any
}

export type Plugin = {
  'type': PluginType
  'org': string
  'name': string
  'version': string
  'latest_version': string
  'icon': string
  'label': Record<Locale, string>
  'brief': Record<Locale, string>
  // Repo readme.md content
  'introduction': string
  'repository': string
  'category': string
  'install_count': number
  'endpoint': {
    settings: CredentialFormSchemaBase[]
  }
}

export enum PermissionType {
  everyone = 'everyone',
  admin = 'admin',
  noOne = 'noOne',
}

export type Permissions = {
  canManagement: PermissionType
  canDebugger: PermissionType
}