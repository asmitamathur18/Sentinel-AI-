export default function DetectionCard() {

    return (

        <div className="bg-slate-900 rounded-2xl p-8 mt-10 border border-slate-800">

            <h2 className="text-2xl font-semibold mb-5">

                Detection Results

            </h2>

            <div className="grid grid-cols-2 gap-6">

                <div>

                    <h3 className="text-slate-400 mb-3">

                        Original Image

                    </h3>

                    <div className="h-72 rounded-xl bg-slate-800 flex items-center justify-center">

                        Upload an image

                    </div>

                </div>

                <div>

                    <h3 className="text-slate-400 mb-3">

                        AI Detection

                    </h3>

                    <div className="h-72 rounded-xl bg-slate-800 flex items-center justify-center">

                        Detection Result

                    </div>

                </div>

            </div>

        </div>

    );

}