"use client";

type Props = {
    daysLeft: number;
};

export default function ProgressRing({ daysLeft }: Props) {
    const totalDays = 365;
    const progress = ((totalDays - daysLeft) / totalDays) * 100;

    const radius = 125;
    const circumference = 2 * Math.PI * radius;

    const offset =
        circumference - (progress / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center">

            <svg
                width="300"
                height="300"
                className="-rotate-90"
            >
                <circle
                    cx="130"
                    cy="130"
                    r={radius}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="7"
                    fill="none"
                />

                <circle
                    cx="130"
                    cy="130"
                    r={radius}
                    stroke="#fef3c7"
                    strokeWidth="7"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{
                        transition: "stroke-dashoffset 1s",
                    }}
                />
            </svg>

            <div className="absolute text-center">
                <h2 className="text-9xl md:text-[9rem] font-bold text-white">
                    {daysLeft}
                </h2>

                <p className="mt-2 tracking-[0.6em] text-yellow-200">
                    DAYS LEFT
                </p>
            </div>

        </div>
    );
}