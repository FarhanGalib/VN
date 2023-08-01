import HeroSection from 'components/home/HeroSection'
import CategorySection from 'components/home/CategorySection'
import SearchSuggestionSection from 'components/home/SearchSuggestionSection'
import BarbecueSection from 'components/home/BarbecueSection'
import HowWorksSection from 'components/home/HowWorksSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <SearchSuggestionSection />
      <BarbecueSection />
      <HowWorksSection />
    </>
  );
}
