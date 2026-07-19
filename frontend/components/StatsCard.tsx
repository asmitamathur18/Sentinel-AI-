export default function Stats() {

    const cards = [

        {
            title: "People",
            value: "0"
        },

        {
            title: "Vehicles",
            value: "0"
        },

        {
            title: "Confidence",
            value: "0%"
        },

        {
            title: "Alerts",
            value: "0"
        }

    ];

    return (

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            {cards.map((card, index) => (

                <div

                    key={index}

                    className="bg-slate-900 rounded-2xl p-8 border border-slate-800"

                >

                    <p className="text-slate-400">

                        {card.title}

                    </p>

                    <h1 className="text-4xl font-bold mt-3">

                        {card.value}

                    </h1>

                </div>

            ))}

        </div>

    );

}