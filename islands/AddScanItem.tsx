
export default function AddScanItem(data){
    const ScanList = document.getElementById("scan-list");
    const itemDiv = document.createElement("div");
    itemDiv.textContent = data.name
    itemDiv.classList.add("col-span-1", "justify-self-center")
    const priceDiv = document.createElement("div");
    priceDiv.textContent = data.price
    priceDiv.classList.add("col-span-1", "justify-self-center")

    ScanList.appendChild(itemDiv);
    ScanList.appendChild(priceDiv);
}