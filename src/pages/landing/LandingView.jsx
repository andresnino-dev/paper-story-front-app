import { HeroSection } from '../../components/landing/HeroSection';
import { FeaturesSection } from '../../components/landing/FeaturesSection';
import { HowItWorksSection } from '../../components/landing/HowItWorksSection';
import { AboutSection } from '../../components/landing/AboutSection';
import { FooterSection } from '../../components/landing/FooterSection';

export const LandingView = () => {
    return (
        <div className="w-full">
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <AboutSection />
            <FooterSection />
        </div>
    );
};