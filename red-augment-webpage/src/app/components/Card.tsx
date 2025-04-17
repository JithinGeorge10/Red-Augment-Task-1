import { Check } from "lucide-react";
import { useState } from "react";

export default function Card() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "basic",
      name: "Basic",
      description: "Best for personal use.",
      price: "$100",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large teams & corporations.",
      price: "$100",
      features: [
        "Advanced employee directory",
        "Project management",
        "Resource scheduling",
        "Version control",
        "Team collaboration",
        "Advanced analytics",
      ],
    },
    {
      id: "business",
      name: "Business",
      description: "Best for business owners.",
      price: "$100",
      features: [
        "Customizable employee directory",
        "Client project management",
        "Client meeting schedule",
        "Compliance tracking",
        "Client communication",
        "Create custom reports tailored",
      ],
    },
  ];

  const handlePlanSelect = (planId: any) => {
    setSelectedPlan(planId);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-8 p-6 text-white font-Montserrat ">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex-1 rounded-4xl p-12 ${plan.id === "enterprise"
                ? "bg-gradient-to-b from-blue-950 via-black to-gray-700"
                : plan.id === selectedPlan
                  ? "bg-gradient-to-b from-black via-black to-black"
                  : "bg-gradient-to-b from-black via-black to-black"
              }`}

          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${plan.id === selectedPlan
                      ? "border-blue-500 bg-white"
                      : "border-gray-500"
                    }`}
                >
                  {plan.id === selectedPlan && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </div>
                <h2 className="text-2xl font-bold">{plan.name}</h2>
              </div>
              <p className="text-gray-400 text-sm">{plan.description}</p>
            </div>

            <div className="my-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-1">/ per month</span>
              </div>
            </div>

            <button
              className="w-full py-2 px-4 rounded bg-gray-800 hover:bg-gray-700 transition-colors mb-8"
              onClick={() => handlePlanSelect(plan.id)}
            >
              Proceed
            </button>

            <div className="border-t border-gray-700 pt-4">
              <h3 className="mb-4">What you will get</h3>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="rounded-full p-1 bg-gray-800">
                      <Check size={16} className="text-gray-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
