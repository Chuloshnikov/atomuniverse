import BlockchainPotentialSection from "@/components/learn/BlockchainPotentialSection"
import MoreAboutBlockchainSection from "@/components/learn/MoreAboutBlockchainSection"
import TokenInfoSection from "@/components/learn/TokenInfoSection"
import WelcomeSection from "@/components/learn/WelcomeSection"


export default function LearnPage() {
    return (
        <section className="mt-8">
            <WelcomeSection/>
            <TokenInfoSection/>
            <BlockchainPotentialSection/>
            <MoreAboutBlockchainSection/>
        </section>
    )
}