const fetchData = async () => {
  const req = await fetch("https://api.tricksofthe.trade/");

  if (!req.ok) {
    throw new Error("Fetching data Error");
  }

  return req.json();
};

export default fetchData;
