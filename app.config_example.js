export const debug = true;

// IMPORTANT: make a copy of this file, and name it "fr.config.js"
// Repo .gitignore ignores "fr.config.js", so updating through git pull is possible.
export default {
  // Title of the page
  WebPageTitle: "Page Title",
  // Set this to a proper WS Stream URL on setup.
  WssURI: "wss://some.wss.domain.tld:443",
  // FR API location (should be "https://domain.tld/")
  ApiURI: "https://api.domain.tld/",
  // FR API ClientID
  ClientID: "00000000-0000-4000-a000-000000000000",
  // Namespacing for domain-scoped storage. This is to prevent conflicts with duplicate instances on the same domain.
  AppNamespace: 'SomeNamespace'
};