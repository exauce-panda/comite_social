"use client";

import { useState } from "react";

const predefinedAmounts = [5, 10, 25, 50, 70, 100];

export default function DonationButtons() {
  const [customAmount, setCustomAmount] = useState<number | "">("");

  const handleDonate = async (amount: number) => {
    if (amount <= 0) return; // sécurité

    try {
      const res = await fetch("/api/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Erreur Stripe:", error);
      alert("Une erreur est survenue, réessayez plus tard.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5 pb-40">
      {/* Boutons de montants prédéfinis */}
      <p className="p-6 pt-5 text-center mt-2 font-bold font-mono tracking-wide bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">
          Merci pour votre Don<span className="text-black">.</span> Chaque contribution<span className="text-black">,</span> même la plus petite<span className="text-black">,</span> nous aide énormément<span className="text-black">!</span>
      </p>
      <div className="flex flex-wrap gap-2 p-1 justify-center">
        {predefinedAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleDonate(amount)}
            className="w-30 py-3 bg-gradient-to-r from-red-500 to-amber-600 text-white hover:bg-red transition"
          >
            {amount}$ CAD
          </button>
        ))}
      </div>

      {/* Montant personnalisé */}
      <div className="flex border border-red-300 gap-2 items-center mt-3">
        <input
          type="number"
          min={1}
          placeholder="Montant libre"
          value={customAmount}
          onChange={(e) => setCustomAmount(Number(e.target.value) || "")}
          className="text-black p-5 py-2 w-27"
        />
        <p className="text-black">$CAD</p>
        <button
          onClick={() => handleDonate(Number(customAmount))}
          className="px-4 py-2 bg-myred text-white hover:bg-green-700 transition"
        >
          Donner
        </button>
      </div>
    </div>
  );
}