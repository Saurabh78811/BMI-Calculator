
import React, { useState } from "react";
import {
  Activity,
  Heart,
  Scale,
  Ruler,
  RotateCcw,
  ArrowRight,
  Info,
  CalendarDays,
  Weight,
  CheckCircle2,
} from "lucide-react";

const BMICalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    setError("");

    const ageValue = Number(age);
    const weightValue = Number(weight);
    const heightValue = Number(height);

    // Validate input values
    if (
      !age ||
      !weight ||
      !height ||
      !Number.isFinite(ageValue) ||
      !Number.isFinite(weightValue) ||
      !Number.isFinite(heightValue) ||
      ageValue < 20 ||
      ageValue > 120 ||
      weightValue <= 0 ||
      weightValue > 500 ||
      heightValue < 50 ||
      heightValue > 250
    ) {
      setError(
        "Please enter valid details. Adult BMI calculation requires age 20 or above."
      );
      setResult(null);
      return;
    }

    // Convert height from CM to meters
    const heightInMeter = heightValue / 100;

    // Calculate BMI
    const bmi = weightValue / (heightInMeter * heightInMeter);

    let category = "";
    let color = "";
    let bgColor = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-400";
      bgColor = "bg-blue-400/10";
    } else if (bmi < 25) {
      category = "Normal Weight";
      color = "text-emerald-400";
      bgColor = "bg-emerald-400/10";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-400";
      bgColor = "bg-yellow-400/10";
    } else {
      category = "Obese";
      color = "text-rose-400";
      bgColor = "bg-rose-400/10";
    }

    setResult({
      bmi: bmi.toFixed(1),
      category,
      color,
      bgColor,
    });
  };

  const resetForm = () => {
    setAge("");
    setWeight("");
    setHeight("");
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#080d1a] text-white px-4 py-10 md:px-8">

      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="fixed bottom-0 right-0 w-72 h-72 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <header className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm mb-5">
            <Activity size={16} />
            Health & Fitness Calculator
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Know Your{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BMI
            </span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Calculate your Body Mass Index and understand where
            your weight falls within standard BMI categories.
          </p>
        </header>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Calculator Card */}
          <div className="bg-[#111827]/90 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/20 hover:border-blue-400/20 transition duration-500 animate-fade-up">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Scale size={25} />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  BMI Calculator
                </h2>
                <p className="text-sm text-slate-400">
                  Enter your personal details
                </p>
              </div>
            </div>

            <form onSubmit={calculateBMI} className="space-y-6">

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Age
                </label>

                <div className="relative">
                  <CalendarDays
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                    className="w-full bg-slate-800/70 border border-white/10 rounded-xl pl-12 pr-20 py-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 transition placeholder:text-slate-500"
                    min="20"
                    max="120"
                    required
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                    Years
                  </span>
                </div>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Weight
                </label>

                <div className="relative">
                  <Weight
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight"
                    className="w-full bg-slate-800/70 border border-white/10 rounded-xl pl-12 pr-16 py-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 transition placeholder:text-slate-500"
                    min="1"
                    max="500"
                    step="any"
                    required
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                    KG
                  </span>
                </div>
              </div>

              {/* Height */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Height
                </label>

                <div className="relative">
                  <Ruler
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter your height"
                    className="w-full bg-slate-800/70 border border-white/10 rounded-xl pl-12 pr-16 py-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 transition placeholder:text-slate-500"
                    min="50"
                    max="250"
                    step="any"
                    required
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                    CM
                  </span>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm animate-fade-up">
                  {error}
                </div>
              )}

              {/* Calculate Button */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 font-bold hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 active:scale-[0.98] transition duration-300"
              >
                Calculate BMI
                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Reset Button */}
              <button
                type="button"
                onClick={resetForm}
                className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white py-2 transition"
              >
                <RotateCcw size={16} />
                Reset Calculator
              </button>

            </form>
          </div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* Result Section */}
            {result ? (
              <div className="p-6 md:p-8 rounded-3xl bg-[#111827]/90 border border-white/10 shadow-2xl animate-result">

                <div className="flex items-center justify-center gap-2 text-slate-400 mb-5">
                  <Heart size={20} className="text-rose-400" />
                  <h2 className="text-xl font-semibold text-white">
                    Your BMI Result
                  </h2>
                </div>

                <div className="text-center">
                  <p className="text-sm text-slate-400 mb-2">
                    Your BMI Score
                  </p>

                  <h3 className={`text-7xl font-bold tracking-tight mb-4 ${result.color}`}>
                    {result.bmi}
                  </h3>

                  <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 font-semibold ${result.color} ${result.bgColor}`}>
                    <CheckCircle2 size={17} />
                    {result.category}
                  </span>

                  <p className="text-sm text-slate-400 mt-6 leading-relaxed">
                    Your BMI is calculated using your weight and height.
                    This is a general screening result, not a diagnosis.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-7 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                >
                  <RotateCcw size={16} />
                  Calculate Again
                </button>
              </div>
            ) : (
              <div className="p-8 rounded-3xl bg-[#111827]/90 border border-white/10 text-center animate-fade-up">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-5">
                  <Activity size={32} />
                </div>

                <h2 className="text-xl font-semibold mb-2">
                  Your Result Will Appear Here
                </h2>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Enter your age, weight and height to calculate
                  your Body Mass Index.
                </p>
              </div>
            )}

            {/* BMI Categories */}
            <div className="bg-[#111827]/90 border border-white/10 rounded-3xl p-6 md:p-8">

              <h2 className="text-xl font-semibold mb-6">
                Adult BMI Categories
              </h2>

              <div className="space-y-3">

                <div className="flex items-center justify-between p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <span className="text-blue-400 font-medium">
                    Underweight
                  </span>
                  <span className="text-sm text-slate-300">
                    Below 18.5
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-emerald-400 font-medium">
                    Normal Weight
                  </span>
                  <span className="text-sm text-slate-300">
                    18.5 – 24.9
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <span className="text-yellow-400 font-medium">
                    Overweight
                  </span>
                  <span className="text-sm text-slate-300">
                    25 – 29.9
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <span className="text-rose-400 font-medium">
                    Obese
                  </span>
                  <span className="text-sm text-slate-300">
                    30 or above
                  </span>
                </div>

              </div>
            </div>

           

          </div>
           {/* Full Width Information / Warning Note */}
<div className="lg:col-span-2 w-full flex items-start gap-3 p-5 md:p-6 rounded-2xl bg-blue-500/5 border border-blue-400/10 animate-fade-up">
  <Info
    size={22}
    className="text-blue-400 shrink-0 mt-0.5"
  />

  <div>
    <h3 className="text-white font-semibold mb-1">
      Important Note
    </h3>

    <p className="text-sm text-slate-400 leading-relaxed">
      BMI is a general screening tool. It does not directly
      measure body fat or overall health. For people under
      20, age- and sex-specific BMI percentiles are used.
    </p>
  </div>
</div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm text-slate-500">
          Made with <Heart size={14} className="inline text-rose-400 mx-1" />
          Saurabh verma
        </footer>

      </div>
    </div>
  );
};

export default BMICalculator;
