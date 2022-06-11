import React from "react";
import CoinRow from "./CoinRow";
const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];
export default function TableCoins({ coins, search }) {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return !coins ? (
    <div>no coins</div>
  ) : (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
