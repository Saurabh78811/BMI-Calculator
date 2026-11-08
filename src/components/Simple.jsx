
import { useState } from "react";
import { Activity, ArrowRight, Heart, RotateCcw } from "lucide-react";

const Simple = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
      alert("Please enter valid details");
      return;
    }

    const bmi = Number(weight) / ((Number(height) / 100) ** 2);

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

  const resetForm = () => {
    setAge("");
    setWeight("");
    setHeight("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-white flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-3xl p-7 md:p-9 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">

          <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Activity size={30} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight mb-3">
            BMI <span className="text-blue-400">Calculator</span>
          </h1>

          <p className="text-slate-400 text-sm">
            Enter your details to calculate your BMI.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={calculateBMI} className="space-y-5">

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Age (Years)
            </label>

            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="no-spinner w-full bg-slate-800/70 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-blue-400 transition placeholder:text-slate-500"
              required
              min="2"
              max="120"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Weight (KG)
            </label>

            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="no-spinner w-full bg-slate-800/70 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-blue-400 transition placeholder:text-slate-500"
              required
              min="1"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Height (CM)
            </label>

            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="no-spinner w-full bg-slate-800/70 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-blue-400 transition placeholder:text-slate-500"
              required
              min="1"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-bold hover:opacity-90 hover:-translate-y-1 transition shadow-lg shadow-blue-500/20"
          >
            Calculate BMI
            <ArrowRight size={19} />
          </button>

        </form>

        {/* Result Section */}
        {result && (
          <div className="mt-8 p-6 rounded-2xl bg-slate-800/60 border border-white/10 text-center animate-fade">

            <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
              <Heart size={19} className="text-rose-400" />
              <h2 className="text-lg font-semibold text-white">
                Your BMI Result
              </h2>
            </div>

            <h3 className="text-6xl font-bold tracking-tight mb-3">
              {result.bmi}
            </h3>

            <span className={`inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 font-semibold ${result.color}`}>
              {result.category}
            </span>

            <p className="text-xs text-slate-400 mt-5">
              Your BMI is calculated using your weight and height.
            </p>

            <button
              type="button"
              onClick={resetForm}
              className="mt-5 flex items-center justify-center gap-2 mx-auto text-sm text-blue-400 hover:text-blue-300 transition"
            >
              <RotateCcw size={15} />
              Reset Calculator
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Simple;
