let AllCardsData = [
  {
    id: 0,
    cardImage: "./assets/noakhali.png",
    alt: "noakhali",
    cardBalance: "20000",
    title: "Donate for Flood at Noakhali, Bangladesh",
    descriptions:
      "The recent floods in Noakhali have caused significant damage to homes infrastructure. Your donation will help provide essential supplies and to those affected by this disaster. Every contribution, big or small, makes difference. Please join us in supporting the relief efforts and making a positive impact on the lives of those in need.",
  },
  {
    id: 1,
    cardImage: "./assets/feni.png",
    alt: "feni",
    cardBalance: "13000",
    title: "Donate for Flood Relief in Feni,Bangladesh",
    descriptions:
      "The recent floods in Feni have devastated local communities, leading to severe disruption and loss. Your generous donation will help provide immediate aid, including food, clean water, and medical supplies, to those affected by this calamity. Together, we can offer crucial support and help rebuild lives in the aftermath of this disaster. Every contribution counts towards making a real difference. Please consider donating today to assist those in urgent need.",
  },
  {
    id: 2,
    cardImage: "./assets/quota-protest.png",
    cardBalance: "9000",
    alt: "quota-protest",
    title: "Aid for Injured in the Quota Movement",
    descriptions:
      "The recent Quota movement has resulted in numerous injuries and significant hardship for many individuals. Your support is crucial in providing medical assistance, rehabilitation, and necessary supplies to those affected. By contributing, you help ensure that injured individuals receive the care and support they need during this challenging time. Every donation plays a vital role in alleviating their suffering and aiding in their recovery. Please consider making a donation to support these brave individuals in their time of need.",
  },
  {
    id: 3,
    cardImage: "./assets/Jashore.png",
    cardBalance: "8000",
    alt: "jashore",
    title: "Donate for Flood Relief in Jashore,Bangladesh",
    descriptions:
      "The recent floods in Feni have devastated local communities, leading to severe disruption and loss. Your generous donation will help provide immediate aid, including food, clean water, and medical supplies, to those affected by this calamity. Together, we can offer crucial support and help rebuild lives in the aftermath of this disaster. Every contribution counts towards making a real difference. Please consider donating today to assist those in urgent need.",
  },
  {
    id: 4,
    cardImage: "./assets/orphanange.png",
    cardBalance: "6000",
    alt: "orphanange",
    title: "Donate for Orphanange in Jashore,Bangladesh",
    descriptions:
      "Help make a difference in the lives of orphaned children in Bangladesh. Your donation can provide essential resources like food, shelter, clothing, and education to these vulnerable children, giving them a chance at a brighter future. Many of these children have lost their families and face extreme poverty. By contributing, you offer them hope, care, and a loving environment. Every donation, big or small, helps improve their quality of life and opens doors to new opportunities. Together, we can change lives!",
  },
  {
    id: 5,
    cardImage: "./assets/poor_people.png",
    cardBalance: "3000",
    alt: "poor_people",
    title: "Donate for Poor People in Jashore,Bangladesh",
    descriptions:
      "Support Bangladesh's impoverished communities by donating to provide essential resources like food, clean water, shelter, and medical care. Millions of people in Bangladesh live in extreme poverty, struggling to meet basic needs. Your contribution can help improve their quality of life, offering hope and dignity to those in need. Together, we can fight hunger, provide healthcare, and create opportunities for education and sustainable livelihoods. Every donation makes a real difference, helping build a brighter, more equitable future for Bangladesh's poorest.",
  },
];

// all_cards_start
const onAllCards = () => {
  let allCards = document.querySelector(".allCard");
  if (allCards !== null) {
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
                    <p class=" cardBalanceDiv"> ${Number(
                      item.cardBalance
                    ).toLocaleString()} BDT</p>
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
                    class="donationNowBtn bg-lime-300 hover:bg-lime-400 active:bg-lime-500 w-full h-14 max-sm:h-10 mt-5 max-sm:mt-2 rounded-md lg:text-xl font-semibold"
                    >
                    Donate Now
                    </button>
                </div>
                </div>
            </div>`
    ).join("");
  }
};

onAllCards();

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
    let CardBalance = Number(item.cardBalance) + reduceValue;
    if (id == index) {
      allElements.innerHTML = `${CardBalance.toLocaleString()} BDT`;
      donationContainer = [];
    }
  });
};
AllAmount();
// all_card_amount_end

// -----------------------------------------------------------------
// my_Balance_start
let myAmount = 12000;
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
    mainBalance.innerHTML = `${myAmount.toLocaleString()} BDT`;
  } else {
    let flag = myAmount - reduceValue;
    if (flag < 0) {
      alert("Insufficient balance!");
    } else {
      mainBalance.innerHTML = `${flag.toLocaleString()} BDT`;
    }
  }
};
myBalance();
// my_Balance_end
// ----------------------------------------------------------------------
// Payment_history_start
let paymentHistory = document.querySelector(".paymentHistory");
let donationTaka = [];
let PaymentHistory = (amount, id) => {
  let findData = AllCardsData.filter((item, index) => item.id == id);
  let Title = findData[0].title;
  donationTaka.push({ amount: amount, title: Title });
  let recentDateAndTime = new Date();
  paymentHistory.innerHTML = donationTaka
    .reverse()
    .map(
      (item, index) =>
        `<div key={${index}} class=" border p-5 rounded-lg">
        <p class=" text-xl max-md:text-base font-semibold">${Number(
          item.amount
        ).toLocaleString()}TK ${item.title}</p>
        <p class=" text-slate-500 mt-3 max-md:text-sm">
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
    PaymentHistory(amount, Id);
    myBalance(amount);
    AllAmount(amount, Id);
    popupDonatedBdtText.innerHTML = `${Number(amount).toLocaleString()} BDT`;
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
