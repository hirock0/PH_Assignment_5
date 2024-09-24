let AllCardsData = [
  {
    id: 0,
    cardImage: "./assets/noakhali.png",
    alt: "noakhali",
    cardBalance: "5000",
    title: "Donate for Flood at Noakhali, Bangladesh",
    descriptions:
      "The recent floods in Noakhali have caused significant damage to homes infrastructure. Your donation will help provide essential supplies and to those affected by this disaster. Every contribution, big or small, makes difference. Please join us in supporting the relief efforts and making a positive impact on the lives of those in need.",
  },
  {
    id: 1,
    cardImage: "./assets/feni.png",
    alt: "feni",
    cardBalance: "200",
    title: "Donate for Flood Relief in Feni,Bangladesh",
    descriptions:
      "The recent floods in Feni have devastated local communities, leading to severe disruption and loss. Your generous donation will help provide immediate aid, including food, clean water, and medical supplies, to those affected by this calamity. Together, we can offer crucial support and help rebuild lives in the aftermath of this disaster. Every contribution counts towards making a real difference. Please consider donating today to assist those in urgent need.",
  },
  {
    id: 2,
    cardImage: "./assets/quota-protest.png",
    cardBalance: "300",
    alt: "quota-protest",
    title: "Aid for Injured in the Quota Movement",
    descriptions:
      "The recent Quota movement has resulted in numerous injuries and significant hardship for many individuals. Your support is crucial in providing medical assistance, rehabilitation, and necessary supplies to those affected. By contributing, you help ensure that injured individuals receive the care and support they need during this challenging time. Every donation plays a vital role in alleviating their suffering and aiding in their recovery. Please consider making a donation to support these brave individuals in their time of need.",
  },
];

// all_cards_start
const onAllCards = () => {
  let allCards = document.querySelector(".allCard");
  allCards.innerHTML = AllCardsData.map(
    (item, index) =>
      `      <div key={${index}} class="mt-5 border border-slate-200 rounded-md shadow p-5 max-sm:p-2 bg-white"
            >
                <div class="flex gap-10 max-lg:flex-col">
                <div class="w-1/2 max-lg:w-full rounded-lg overflow-hidden">
                    <img
                    src="${item.cardImage}"
                    alt="${item.alt}"
                    class="h-full w-full"
                    />
                </div>
                <div class="w-1/2 max-lg:w-full">
                    <div
                    class="flex items-center gap-2 bg-zinc-200 p-2 rounded-md w-fit"
                    >
                    <img
                        src="./assets/coin.png"
                        alt="coin"
                        width="20"
                        height="20"
                    />
                    <p class=" cardBalanceDiv"> ${item.cardBalance} BDT</p>
                    </div>

                    <h2 class="mt-5 text-xl max-sm:text-base font-semibold">
                      ${item.title}
                    </h2 ">
                    <p class="mt-5 max-sm:text-sm ">
                    ${item.descriptions}
                    </p>
                      <input
                
                      type="number"
                      name="amount"
  
                      placeholder=" Write Donation Amount"
                      class=" onInputValue bg-transparent border w-full h-14 max-sm:h-10  pl-2 outline-none mt-5 rounded-md"
                    />
                    <button
                      onclick="DonationNow(${item.id})"
                    class="donationNowBtn bg-lime-300 w-full h-14 max-sm:h-10 mt-5 max-sm:mt-2 rounded-md lg:text-xl font-semibold"
                    >
                    Donate Now
                    </button>
                </div>
                </div>
            </div>`
  ).join("");
};
onAllCards({});

// all_cards_end

// -------------------------------------------------------------------
// all_card_amount_start
let donationContainer = [];
const AllAmount = (data, id) => {
  let amount = Number(data);
  donationContainer.push(amount || 0);
  let reduceValue = donationContainer.reduce(
    (accu, item, index) => accu + item,
    0
  );
  let allCardBalanceElements = document.querySelectorAll(".cardBalanceDiv");
  AllCardsData.forEach((item, index) => {
    let allElements = allCardBalanceElements[index];
    if (id == index) {
      allElements.innerHTML = `${Number(item.cardBalance) + reduceValue} BDT`;
      donationContainer = [];
    }
  });
};
AllAmount();
// all_card_amount_end

// -----------------------------------------------------------------
// my_Balance_start
let myAmount = 5000;
let lessAmountArray = [];
const myBalance = (given) => {
  let lessAmount = Number(given);
  lessAmountArray.push(lessAmount || 0);

  let reduceValue = lessAmountArray.reduce(
    (accu, item, index) => accu + item,
    0
  );

  let mainBalance = document.querySelector(".mainBalance");
  if (!given) {
    mainBalance.innerHTML = `${myAmount} BDT`;
  } else {
    let flag = myAmount - reduceValue;
    if (flag < 0) {
      alert("Insufficient balance!");
    } else {
      mainBalance.innerHTML = `${myAmount - reduceValue} BDT`;
    }
  }
};
myBalance();
// my_Balance_end
// ----------------------------------------------------------------------
// Payment_history_start
let paymentHistory = document.querySelector(".paymentHistory");
let donationTaka = [];

let PaymentHistory = (amount) => {
  donationTaka.push(amount);
  let recentDateAndTime = new Date();
  paymentHistory.innerHTML = donationTaka
    .map(
      (item, index) =>
        `<div key={${index}} class=" border p-5 rounded-lg">
        <p class=" text-xl font-semibold">${item} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        <p class=" text-slate-500 mt-3">
        ${recentDateAndTime}
        </p>
        </div>`
    )
    .join("");
  onBlankData(donationTaka);
};
let blankDataText = document.querySelector(".blankData");
const onBlankData = (donationData) => {
  if (donationData !== undefined) {
    blankDataText.style.display = "none";
  } else {
    blankDataText.style.display = "block";
  }
};
onBlankData();
// Payment_history_end
// ------------------------------------------------------

// Donation_And_History_part_start
let DonationAndHistory = () => {
  let historyBtn = document.querySelector(".historyBtn");
  let donationBtn = document.querySelector(".donationBtn");
  let allCards = document.querySelector(".allCard");
  donationBtn.addEventListener("click", () => {
    paymentHistory.style.display = "none";
    allCards.style.display = "block";
    donationBtn.style.backgroundColor = "#bef264";
    historyBtn.style.backgroundColor = "white";
    historyBtn.style.border = "none";
  });
  historyBtn.addEventListener("click", () => {
    paymentHistory.style.display = "block";
    allCards.style.display = "none";
    historyBtn.style.backgroundColor = "#bef264";
    historyBtn.style.border = "none";
    donationBtn.style.backgroundColor = "white";
  });
};
DonationAndHistory();
// Donation_And_History_part_start
// ------------------------------------------------------

let modalPopupDiv = document.querySelector(".modalPopup");
let popupDonatedBdtText = document.querySelector(".popupDonatedBDT");
// donation_button and its_a common function_start
const DonationNow = (Id) => {
  let InputAmount = document.querySelectorAll(".onInputValue")[Id];
  let amount = InputAmount.value;
  if (amount <= 0 || myAmount < amount) {
    alert("Please enter correct amount!");
    amount = "";
  } else {
    PaymentHistory(amount);
    myBalance(amount);
    AllAmount(amount, Id);
    popupDonatedBdtText.innerHTML = `${amount} BDT`;
    setTimeout(() => {
      modalPopupDiv.style.visibility = "visible";
    }, 1000);
    setTimeout(() => {
      InputAmount.value = "";
    }, 2000);
  }
};
// donation_button and its_a common function_end
// ------------------------------------------------------------------

// close_information_button_start
const onCloseInformation = () => {
  const closeInformationBtn = document.querySelector(".closeInformation");
  closeInformationBtn.addEventListener("click", () => {
    modalPopupDiv.style.visibility = "hidden";
  });
};
onCloseInformation();
// close_information_button_end
// ----------------------------------------------------
