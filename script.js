const paymentHistory = document.querySelector(".paymentHistory");

const donationNow = () => {
  const historyBtn = document.querySelector(".historyBtn");
  const donationBtn = document.querySelector(".donationBtn");
  const allCards = document.querySelector(".allCard");
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
donationNow();

// History_section

const donationTaka = [];

const PaymentHistory = (a) => {
  donationTaka.push(a);
  const recentDateAndTime = new Date()
  paymentHistory.innerHTML = donationTaka.map(
    (item, index) =>
      `<div key={${index}} class=" border p-5 rounded-lg">
        <p class=" text-xl font-semibold">${item} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        <p class=" text-slate-500 mt-3">
        ${recentDateAndTime}
        </p>
        </div>`
  );
};

// History_end

const DonateNow = () => {
  const donationNowBtn = document.querySelector(".donationNowBtn");
  const donateInput = document.querySelector(".donateInput");
  donationNowBtn.addEventListener("click", () => {
    const amount = donateInput.value;
    PaymentHistory(amount);
  });
};
DonateNow();
