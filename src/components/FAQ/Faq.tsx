import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      question: "How do I install Tailwind CSS?",
      answer:
        "You can install Tailwind CSS via npm, yarn, or by including it via CDN in your project.",
    },
    {
      question: "What are the advantages of using Tailwind CSS?",
      answer:
        "Tailwind CSS offers advantages like faster development, easy customization, and responsive design capabilities.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 ">
      <h2 className="text-3xl font-bold text-center mb-8 my-[8rem]">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-50 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
