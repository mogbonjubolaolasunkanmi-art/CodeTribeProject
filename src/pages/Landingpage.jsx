import Code from "../assets/Codetribe.jpg";
import { Link } from "react-router-dom";
const features = [
  {
    icon: "◉",
    title: "Create Habits",
    text: "Build healthy habits that fit your lifestyle.",
  },
  {
    icon: "✓",
    title: "Track Progress",
    text: "Keep track of your daily progress.",
  },
  {
    icon: "♧",
    title: "Stay Consistent",
    text: "Small steps lead to lasting changes.",
  },
];
const Landingpage = () => {
  // export default function App() {
  return (
    <main className="min-h-screen bg-wheat text-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <div className="flex items-center gap-2">
          <img src={Code} alt="" className="w-[200px] h-[100px]" />
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/Login"
            className="rounded-lg border border-emerald-600 px-5 py-3 text-sm font-semibold text-emerald-600"
          >
            Login
          </Link>

          <Link
            to="/SignUp"
            className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      <section className="bg-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-5 text-sm font-semibold text-emerald-600">
              Build better habits, one day at a time
            </p>

            <h1 className="max-w-xl text-5xl font-bold leading-tight text-slate-800 md:text-6xl">
              Small steps.
              <br />
              <span className="text-emerald-600">Big changes.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
              Track your habits, stay consistent, and build a healthier
              lifestyle with simple daily routines.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="rounded-lg bg-emerald-600 px-7 py-4 font-semibold text-white"
              >
                Get Started Free
              </a>

              <a href="#" className="font-semibold text-slate-700">
                ▶ Watch Demo
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative flex h-96 w-full max-w-lg items-end justify-center overflow-hidden rounded-3xl bg-emerald-100">
              <div className="absolute bottom-16 left-16">
                <div className="h-44 w-2 rounded-full bg-emerald-700" />

                <div className="absolute -left-12 top-10 h-16 w-24 -rotate-25 rounded-full bg-emerald-400" />

                <div className="absolute left-1 top-2 h-20 w-28 rotate-25 rounded-full bg-emerald-300" />

                <div className="absolute -left-10 top-28 h-14 w-24 rotate-20 rounded-full bg-emerald-500" />
              </div>

              <div className="absolute bottom-16 right-24">
                <div className="mx-auto h-12 w-12 rounded-full bg-amber-200" />

                <div className="mt-1 h-28 w-24 rounded-t-3xl rounded-b-xl bg-emerald-600" />

                <div className="absolute left-5 top-36 h-20 w-5 rotate-12 rounded-full bg-slate-700" />

                <div className="absolute left-16 top-36 h-20 w-5 -rotate-12 rounded-full bg-slate-700" />
              </div>

              <div className="absolute bottom-14 right-12 h-4 w-72 rounded-full bg-amber-700" />

              <div className="absolute bottom-0 right-20 h-20 w-4 bg-amber-700" />

              <div className="absolute bottom-0 right-64 h-20 w-4 bg-amber-700" />

              <div className="absolute right-14 top-16 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-white">
                ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div className="rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-xl text-emerald-600">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold text-emerald-600">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-2 text-3xl font-bold">How It Works</h2>

            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              Start building better habits with three simple steps.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                1
              </div>

              <h3 className="mt-5 font-bold">Create Your Habit</h3>

              <p className="mt-2 text-sm text-slate-500">
                Choose the habits you want to develop.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                2
              </div>

              <h3 className="mt-5 font-bold">Set Your Goal</h3>

              <p className="mt-2 text-sm text-slate-500">
                Set a realistic daily or weekly target.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                3
              </div>

              <h3 className="mt-5 font-bold">Stay Consistent</h3>

              <p className="mt-2 text-sm text-slate-500">
                Track your progress and celebrate your wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-emerald-50 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Better habits.
            <br />A brighter tomorrow.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            Start your journey today and take one small step towards becoming
            your best self.
          </p>

          <a
            href="#"
            className="mt-7 inline-block rounded-lg bg-emerald-600 px-7 py-4 font-semibold text-white"
          >
            Start Your Journey →
          </a>
        </div>
      </section>

      <footer className="bg-emerald-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className=" ">
            <h3 className="text-xl font-bold ">CodeTribe</h3>

            <p className="mt-2 text-sm text-emerald-200 flex flex-col justify-end">
              Build better habits. Live better.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};
export default Landingpage;
