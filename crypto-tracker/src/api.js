const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then(res => res.json());
}

export function fetchInfo(coinID) {
  return fetch(`${BASE_URL}/coins/${coinID}`).then(res => res.json());
}

export function fetchPrice(coinID) {
  return fetch(`${BASE_URL}/tickers/${coinID}`).then(res => res.json());
}
