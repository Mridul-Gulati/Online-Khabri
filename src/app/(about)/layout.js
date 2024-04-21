import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
    "🎉 Subscribe to our FREE Weekly Newsletter to stay updated with the latest trends and news! 🎉"
]

export default function AboutLayout({ children }) {
    return <main className="w-full flex flex-col items-center justify-between">
        <InsightRoll insights={insights} />
        {children}
    </main>
}