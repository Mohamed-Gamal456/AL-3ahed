import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./FAQ.css";

export default function FAQ() {
    const { t, i18n } = useTranslation();

    const [openIndex, setOpenIndex] = useState(null);

    const isArabic = i18n.language.startsWith("ar");

    const questions = [
        {
            id: 1,
            question: t("FAQ.Question1"),
            answer: t("FAQ.Answer1"),
        },
        {
            id: 2,
            question: t("FAQ.Question2"),
            answer: t("FAQ.Answer2"),
        },
        {
            id: 3,
            question: t("FAQ.Question3"),
            answer: t("FAQ.Answer3"),
        },
        {
            id: 4,
            question: t("FAQ.Question4"),
            answer: t("FAQ.Answer4"),
        },
        {
            id: 5,
            question: t("FAQ.Question5"),
            answer: t("FAQ.Answer5"),
        },
        {
            id: 6,
            question: t("FAQ.Question6"),
            answer: t("FAQ.Answer6"),
        },
        {
            id: 7,
            question: t("FAQ.Question7"),
            answer: t("FAQ.Answer7"),
        },
        {
            id: 8,
            question: t("FAQ.Question8"),
            answer: t("FAQ.Answer8"),
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="al3-faq" id="faq">

            <div className="container">

                {/* Header */}
                <div className="al3-faq-header">

                    <span className="al3-faq-badge">
                        {t("FAQ.Badge")}
                    </span>

                    <h2>
                        {t("FAQ.Title")}
                    </h2>

                    <span className="al3-faq-line"></span>

                    <p>
                        {t("FAQ.Description")}
                    </p>

                </div>


                {/* Questions */}
                <div className="al3-faq-list">

                    {questions.map((item, index) => {

                        const isOpen = openIndex === index;

                        return (
                            <div
                                className={`al3-faq-item ${
                                    isOpen ? "is-open" : ""
                                }`}
                                key={item.id}
                            >

                                {/* Question */}
                                <button
                                    className="al3-faq-question"
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={isOpen}
                                >

                                    <span>
                                        {item.question}
                                    </span>

                                    <span className="al3-faq-icon">
                                        <i
                                            className={
                                                isOpen
                                                    ? "fa-solid fa-minus"
                                                    : "fa-solid fa-plus"
                                            }
                                        ></i>
                                    </span>

                                </button>


                                {/* Answer */}
                                <div
                                    className="al3-faq-answer"
                                    style={{
                                        gridTemplateRows: isOpen
                                            ? "1fr"
                                            : "0fr",
                                    }}
                                >

                                    <div className="al3-faq-answer-inner">

                                        <p>
                                            {item.answer}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* Bottom CTA */}
                <div className="al3-faq-cta">

                    <p>
                        {t("FAQ.CTA")}
                    </p>

                    <Link
                            to="/contact"
                            className="al3-faq-button"
                        >
                            <span>
                                {t("FAQ.Button")}
                            </span>

                            <i
                                className={
                                    isArabic
                                        ? "fa-solid fa-arrow-left"
                                        : "fa-solid fa-arrow-right"
                                }
                            ></i>
                        </Link>

                </div>

            </div>

        </section>
    );
}