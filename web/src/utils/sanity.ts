const apiHost = 'api.sanity.io';
const cdnHost = 'apicdn.sanity.io';

interface ClientConfig {
  token?: string;
  useCdn?: boolean;
  withCredentials?: boolean;
  projectId: string;
  dataset: string;
}

// Based heavily on PicoSanity (https://github.com/rexxars/picosanity)
// Adapted very slightly to work isomorphically with SvelteKit

export class SanityClient {
  private clientConfig: ClientConfig;

  constructor(config) {
    this.clientConfig = config;
  }

  config = (clientConfig: ClientConfig) => {
    if (clientConfig) {
      this.clientConfig = clientConfig;
    }
  };

  url = (query, params) => {
    const cfg = this.clientConfig;
    const headers = cfg.token ? { Authorization: `Bearer ${cfg.token}` } : undefined;
    const host = !cfg.useCdn || cfg.token ? apiHost : cdnHost;
    const opts = { credentials: cfg.withCredentials ? 'include' : 'omit', headers };
    const qs = this.getQs(query, params);

    return `https://${cfg.projectId}.${host}/v1/data/query/${cfg.dataset}${qs}`;
  };

  private getQs = (query, params) => {
    const baseQs = `?query=${encodeURIComponent(query)}`;
    return Object.keys(params || {}).reduce((current, param) => {
      return `${current}&${encodeURIComponent(`$${param}`)}=${encodeURIComponent(JSON.stringify(params[param]))}`;
    }, baseQs);
  };
}

export default new SanityClient({
  useCdn: false,
  projectId: '3jklkbiv',
  dataset: 'production',
});
