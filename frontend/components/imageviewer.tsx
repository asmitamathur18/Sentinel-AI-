type Props={

    original:string;

    detected:string;

};

export default function ImageViewer({

    original,

    detected

}:Props){

    return(

        <div className="grid grid-cols-2 gap-8 mt-8">

            <div>

                <h2 className="mb-3 text-xl">

                    Original Image

                </h2>

                <img

                    src={original}

                    className="rounded-xl"

                />

            </div>

            <div>

                <h2 className="mb-3 text-xl">

                    Detection Result

                </h2>

                <img

                    src={detected}

                    className="rounded-xl"

                />

            </div>

        </div>

    );

}