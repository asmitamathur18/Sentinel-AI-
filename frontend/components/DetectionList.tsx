type Props={

    detections:any[];

};

export default function DetectionList({

    detections

}:Props){

    return(

        <div className="bg-slate-900 rounded-2xl p-8 mt-8 border border-slate-800">

            <h2 className="text-2xl font-bold mb-6">

                Objects Detected

            </h2>

            {

                detections.length===0?

                (

                    <p className="text-slate-500">

                        No detections yet.

                    </p>

                ):

                (

                    detections.map((item,index)=>(

                        <div

                            key={index}

                            className="flex justify-between py-3 border-b border-slate-800"

                        >

                            <p>

                                {item.object}

                            </p>

                            <p className="text-green-400">

                                {(item.confidence*100).toFixed(1)}%

                            </p>

                        </div>

                    ))

                )

            }

        </div>

    );

}