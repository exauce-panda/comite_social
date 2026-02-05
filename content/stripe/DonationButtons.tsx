"use client";

import { useState } from "react";

const predefinedAmounts = [5, 10, 25, 50];

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
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">Faire un don</h2>

      {/* Boutons de montants prédéfinis */}
      <div className="flex flex-wrap gap-3">
        {predefinedAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleDonate(amount)}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            {amount}$ CAD
          </button>
        ))}
      </div>

      {/* Montant personnalisé */}
      <div className="flex gap-2 items-center mt-3">
        <input
          type="number"
          min={1}
          placeholder="Montant libre"
          value={customAmount}
          onChange={(e) => setCustomAmount(Number(e.target.value) || "")}
          className="border rounded-lg px-4 py-2 w-32"
        />
        <p>$CAD</p>
        <button
          onClick={() => handleDonate(Number(customAmount))}
          className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Donner
        </button>
      </div>
    </div>
  );
}