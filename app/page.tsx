import HeroSection from '@/components/hero-section'
import WarmWelcomeSection from '@/components/warm-welcome-section'
import CourseGrid from '@/components/course-grid'
import TeacherProfile from '@/components/teacher-profile'
import StudentShowcase from '@/components/student-showcase'
import TestimonialSection from '@/components/testimonial-section'
import CommunityShowcase from '@/components/community-showcase'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WarmWelcomeSection />
      <CourseGrid />
      <TeacherProfile />
      <StudentShowcase />
      <TestimonialSection />
      <CommunityShowcase />
      <CTASection />
      <Footer />
    </main>
  )
}