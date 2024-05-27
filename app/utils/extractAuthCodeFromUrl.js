export function extractAuthCodeFromUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('code');
  }