const CONTRACT_ADDRESS = "0xe55d8a7f9aaed7919e6a6726a8707f2252844984";

const ABI = [
    "function balanceOf(address owner) view returns (uint256)"
];

async function checkNFT() {

    if (!window.ethereum) {
        window.location.href = "denied.html";
        return;
    }

    try {

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        await provider.send("eth_requestAccounts", []);

        const signer = provider.getSigner();

        const wallet = await signer.getAddress();

        const contract = new ethers.Contract(
            CONTRACT_ADDRESS,
            ABI,
            provider
        );

        const balance = await contract.balanceOf(wallet);

        if (balance.gt(0)) {

            document.body.classList.add("open");

            setTimeout(() => {
                window.location.href = "members.html";
            }, 2000);

        } else {

            window.location.href = "denied.html";

        }

    } catch (e) {

        console.error(e);
        alert("Verification failed.");

    }

}
