export default function sortPlayers(players) {
    return players.slice().sort((a, b) => b.health - a.health);
  }