export default function Navbar() {
    return (

        <nav className="w-full border-b border-slate-800 bg-slate-950">

            <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-blue-500">
                    Sentinel-AI
                </h1>

                <div className="flex gap-8 text-slate-300">

                    <p>Dashboard</p>

                    <p>Analytics</p>

                    <p>Alerts</p>

                </div>

            </div>

        </nav>

    );
}