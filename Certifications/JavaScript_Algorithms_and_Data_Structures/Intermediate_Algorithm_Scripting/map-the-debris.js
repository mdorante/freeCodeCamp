function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  // orbital period formula from wikipedia
  const formula = (x) =>
    Math.round(2 * Math.PI * Math.sqrt((earthRadius + x) ** 3 / GM));

  return arr.map((item) => ({
    name: item.name,
    orbitalPeriod: formula(item.avgAlt),
  }));
}

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
