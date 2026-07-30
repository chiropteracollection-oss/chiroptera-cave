const button = document.getElementById("enterButton");

button.addEventListener("click", async () => {

    if (!window.ethereum) {
        alert("Please install MetaMask.");
        return;
    }

    try {

        await window.ethereum.request({
            method: "eth_requestAccounts"
        });

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();

        const address = await signer.getAddress();

        alert("Wallet Connected:\n\n" + address);

    } catch (error) {

        console.error(error);
        alert("Connection cancelled.");

    }

});
