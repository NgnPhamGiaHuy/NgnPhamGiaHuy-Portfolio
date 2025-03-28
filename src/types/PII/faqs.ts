export interface FAQProps {
    question: string;
    answer: string;
}

export interface FAQSectionProps {
    title: string;
    content: FAQProps[];
}