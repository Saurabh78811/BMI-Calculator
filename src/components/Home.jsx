
import { useState } from "react";
import {
  Activity,
  Heart,
  Scale,
  Ruler,
  RotateCcw,
  ArrowRight,
  Info,
} from "lucide-react";

const BMICalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height || weight <= 0 || height <= 0) return;

    const bmi = weight / ((height / 100) ** 2);

    let category = "";
    let color = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-400";
    } else if (bmi < 25) {
      category = "Normal Weight";
      color = "text-emerald-400";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-400";
    } else {
      category = "Obese";
      color = "text-rose-400";
    }

    setResult({
      bmi: bmi.toFixed(1),
      category,
      color,
    });
  };

  const resetCalculator = () => {
    setWeight(70);
    setHeight(175);
    setAge(24);
    setGender("Male");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-white px-4 py-10 md:px-8">

      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm mb-5">
            <Activity size={16} />
            Health & Fitness Calculator
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Know Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BMI
            </span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto">
            Calculate your Body Mass Index and understand
            where your weight falls within standard BMI categories.
          </p>
        </header>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-7">

          {/* Input Card */}
          <div className="bg-[#111827]/90 border border-white/10 rounded-3xl p-6 md:p-9 shadow-2xl">

            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <Scale size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold">Your Details</h2>
                <p className="text-sm text-slate-400">
                  Enter your body measurements
                </p>
              </div>
            </div>

            {/* Gender */}
            <div className="mb-7">
              <label className="block text-sm text-slate-300 mb-3">
                Gender
              </label>

              <div className="grid grid-cols-2 gap-3">
                {["Male", "Female"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setGender(item)}
                    className={`py-4 rounded-xl border font-semibold transition ${
                      gender === item
                        ? "bg-blue-500/15 border-blue-400 text-blue-400"
                        : "bg-slate-800/50 border-white/10 text-slate-400 hover:border-white/30"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Age */}
            <div className="mb-7">
              <label className="flex items-center gap-2 text-sm text-slate-300 mb-3">
                Age <span className="text-slate-500">(Years)</span>
              </label>

              <input
                type="number"
                min="2"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-slate-800/70 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-blue-400 transition"
              />
            </div>

            {/* Weight */}
            <div className="mb-7">
              <div className="flex justify-between items-center mb-3">
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <Scale size={17} className="text-blue-400" />
                  Weight
                </label>

                <span className="text-blue-400 font-bold">
                  {weight} kg
                </span>
              </div>

              <input
                type="range"
                min="20"
                max="200"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />

              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>20 kg</span>
                <span>200 kg</span>
              </div>
            </div>

            {/* Height */}
            <div className="mb-9">
              <div className="flex justify-between items-center mb-3">
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <Ruler size={17} className="text-purple-400" />
                  Height
                </label>

                <span className="text-purple-400 font-bold">
                  {height} cm
                </span>
              </div>

              <input
                type="range"
                min="100"
                max="220"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />

              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>100 cm</span>
                <span>220 cm</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={calculateBMI}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-bold hover:opacity-90 hover:-translate-y-1 transition shadow-lg shadow-blue-500/20"
              >
                Calculate BMI
                <ArrowRight size={19} />
              </button>

              <button
                onClick={resetCalculator}
                className="px-5 rounded-xl border border-white/10 bg-slate-800 hover:bg-slate-700 transition"
                title="Reset"
              >
                <RotateCcw size={19} />
              </button>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-[#111827]/90 border border-white/10 rounded-3xl p-6 md:p-9 shadow-2xl flex flex-col">

            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Heart size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold">Your BMI Result</h2>
                <p className="text-sm text-slate-400">
                  Your health overview
                </p>
              </div>
            </div>

            {/* BMI Display */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">

              {result ? (
                <>
                  <p className="text-sm text-slate-400 mb-3">
                    Your Body Mass Index
                  </p>

                  <h3 className="text-7xl md:text-8xl font-bold tracking-tighter mb-4">
                    {result.bmi}
                  </h3>

                  <span className={`px-5 py-2 rounded-full bg-white/5 border border-white/10 font-semibold ${result.color}`}>
                    {result.category}
                  </span>

                  <div className="w-full mt-10">
                    <div className="flex justify-between text-xs text-slate-400 mb-3">
                      <span>Underweight</span>
                      <span>Normal</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                    </div>

                    <div className="h-3 rounded-full overflow-hidden flex">
                      <div className="w-[18.5%] bg-blue-400" />
                      <div className="w-[25%] bg-emerald-400" />
                      <div className="w-[25%] bg-yellow-400" />
                      <div className="flex-1 bg-rose-500" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-36 h-36 rounded-full border-8 border-blue-500/20 flex items-center justify-center mb-7 bg-blue-500/5">
                    <Activity size={60} className="text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    Ready to Check?
                  </h3>

                  <p className="text-slate-400 max-w-xs text-sm leading-7">
                    Enter your height and weight to discover
                    your BMI score and weight category.
                  </p>
                </>
              )}
            </div>

            {/* Info */}
            <div className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-400/10 flex gap-3">
              <Info className="text-blue-400 shrink-0" size={20} />

              <p className="text-xs text-slate-400 leading-6">
                BMI is a screening measure, not a diagnosis.
                It does not directly measure body fat or account
                for every individual health factor.
              </p>
            </div>
          </div>
        </div>

        {/* BMI Categories */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            BMI Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Underweight",
                range: "Below 18.5",
                color: "text-blue-400",
                bg: "bg-blue-400/10",
              },
              {
                title: "Normal",
                range: "18.5 – 24.9",
                color: "text-emerald-400",
                bg: "bg-emerald-400/10",
              },
              {
                title: "Overweight",
                range: "25 – 29.9",
                color: "text-yellow-400",
                bg: "bg-yellow-400/10",
              },
              {
                title: "Obese",
                range: "30 or above",
                color: "text-rose-400",
                bg: "bg-rose-400/10",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:-translate-y-1 transition"
              >
                <div className={`w-3 h-3 rounded-full ${item.bg} mb-4`} />
                <h3 className={`font-bold mb-2 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {item.range}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm text-slate-500">
          Made with ❤️ for a healthier lifestyle.
        </footer>
      </div>
    </div>
  );
};

export default BMICalculator;
