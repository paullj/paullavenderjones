import fetch from 'node-fetch';

const OEMBED_PROVIDERS_URL = 'https://oembed.com/providers.json'
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g


const fetchProviders = async () => {
  const response = await fetch(OEMBED_PROVIDERS_URL).then(response => response.json());
  return response;
}


const fetchEmbed = async (url, params) => {
  const response = await fetch(`${url}?${new URLSearchParams({
    format: 'json',
    ...params,
    maxwidth: 1500
  })}`).then(response => response.json());
  return response;
}


const getProviderEndpointForLinkUrl = (linkUrl, providers) => {
  const transformedEndpoint = {
    url: null,
    params: null,
  }

  for (const provider of providers || []) {
    for (const endpoint of provider.endpoints || []) {
      for (let schema of endpoint.schemes || []) {
        schema = schema.replace('*', '.*')
        const regExp = new RegExp(schema)
        if (regExp.test(linkUrl)) {
          transformedEndpoint.url = endpoint.url
          transformedEndpoint.params = {
            url: linkUrl,
            ...provider.params,
          }
        }
      }
    }
  }

  return transformedEndpoint
}

const transformEmbed = (oembedResult) => {
  if (oembedResult.html) {
    return oembedResult.html
  } else if (oembedResult.type === 'photo') {
    return `
      <img src="${oembedResult.url}"
        class="gatsby-remark-oembed-photo"
        width="${oembedResult.width}"
        height="${oembedResult.width}"
        title="${oembedResult.title}"/>
    `
  }
  return '';
}

export const replaceEmbed = async (markdown) => {
  let result = markdown;
  const matches = markdown.match(URL_REGEX);
  const providers = await fetchProviders()
  if(matches) {
    for(const match of matches) {
      const endpoint = getProviderEndpointForLinkUrl(match, providers)
      if (endpoint.url !== null) {
        const response = await fetchEmbed(endpoint.url, endpoint.params)
        const html = transformEmbed(response)
        console.log(html)
        result = result.replace(match, html)
      }
    }
  }
  return result;
}