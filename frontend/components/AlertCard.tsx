export default function AlertCard() {

    return (

        <div className="bg-slate-900 rounded-2xl p-8 mt-10 border border-slate-800">

            <h2 className="text-2xl font-semibold mb-6">

                AI Incident Report

            </h2>

            <div className="space-y-5">

                <div>

                    <h3 className="font-semibold">

                        Risk Level

                    </h3>

                    <p className="text-red-400">

                        Low

                    </p>

                </div>

                <div>

                    <h3 className="font-semibold">

                        Summary

                    </h3>

                    <p className="text-slate-400">

                        Waiting for image...

                    </p>

                </div>

                <div>

                    <h3 className="font-semibold">

                        Recommendation

                    </h3>

                    <p className="text-slate-400">

                        Upload an image to begin detection.

                    </p>

                </div>

            </div>

        </div>

    );

}