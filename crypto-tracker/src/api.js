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

export function fetchCoinHistory(coinID) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinID}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then(res => res.json());
}
