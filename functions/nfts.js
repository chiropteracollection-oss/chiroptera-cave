
export async function onRequestGet(context) {
  const wallet = context.request.url
    ? new URL(context.request.url).searchParams.get("wallet")
    : null;

  if (!wallet) {
    return new Response(
      JSON.stringify({ error: "Wallet address is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }

  const apiKey = context.env.OPENSEA_API_KEY;

  const contract =
    "0xe55d8a7f9aaed7919e6a6726a8707f2252844984";

  const url = https://api.opensea.io/api/v2/chain/ethereum/account/${wallet}/nfts?collection=${contract};

  const response = await fetch(url, {
    headers: {
      "X-API-KEY": apiKey,
      "Accept": "application/json"
    }
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
