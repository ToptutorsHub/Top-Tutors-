// components/GetStartedSection.tsx
"use client";

import Link from "next/link";

export default function GetStartedSection() {
    return (
        <section id="get-started" className="w-full">
            {/* First Part: Paragraphs */}
            <div className="bg-white">
                <div className="flex flex-col items-center justify-center max-w-5xl mx-auto py-4">
                    <p className="text-gray-700 text-lg sm:text-xl mb-4 text-center">
                        Don&apos;t let academic stress hold you back. Take the
                        first step toward achieving your academic goals with
                        expert assignment help you can count on. Get in touch
                        with us today and experience the difference professional
                        support can make in your academic journey!
                    </p>
                    <p className="text-gray-700 text-lg sm:text-xl text-center">
                        At Top Tutors, we take care of the books and
                        assignments, so you don&apos;t have to. Focus on what
                        matters most — we&apos;ve got the rest covered.
                    </p>
                </div>
            </div>

            {/* Second Part: Orange Call-to-Action */}
            <div className="bg-orange-400 py-12 md:py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                        First Assignment is 30% off Price!!
                    </h2>
                    <Link
                        href="https://wa.me/+254707919856"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#011b36] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#022a50] transition-colors duration-200 shadow-2xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                        ORDER NOW!
                    </Link>
                </div>
            </div>
        </section>
    );
}
