"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ChevronDown,
  Cog,
  BarChart3,
  ExternalLink,
} from "lucide-react"
import { ChallengeSection } from "@/components/challenge-section"
import { GeminiResultsSection } from "@/components/gemini-results-section"
import { ManusResultsSection } from "@/components/manus-results-section"
import { ConclusionsSection } from "@/components/conclusions-section"

export default function EngineeringResearchWebsite() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <Cog className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Engineering Disciplines</h1>
              <p className="text-sm text-slate-600">Similarity Research Study</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("challenge")}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Challenge
            </button>
            <button
              onClick={() => scrollToSection("gemini-results")}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Gemini Results
            </button>
            <button
              onClick={() => scrollToSection("manus-results")}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Manus Results
            </button>
            <button
              onClick={() => scrollToSection("conclusions")}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              Conclusions
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur">
              <BarChart3 className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Engineering Disciplines
            <span className="block text-blue-200">Similarity Analysis</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive comparative study analyzing curriculum similarities across 24 engineering disciplines from
            over 100 universities worldwide using advanced AI research methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("challenge")}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
            >
              Explore Research <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("conclusions")}
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
            >
              View Results <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-slate-600 font-medium">Engineering Disciplines</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-slate-600 font-medium">Universities Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600 font-medium">Countries Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">576</div>
              <div className="text-slate-600 font-medium">Similarity Comparisons</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Components */}
      <ChallengeSection />
      <GeminiResultsSection />
      <ManusResultsSection />
      <ConclusionsSection />

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <Cog className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Engineering Disciplines Study</h3>
                <p className="text-slate-400 text-sm">Comprehensive Similarity Analysis</p>
              </div>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              A comprehensive research study analyzing curriculum similarities across 24 engineering disciplines from
              over 100 universities worldwide using advanced AI methodologies.
            </p>
          </div>

          <Separator className="bg-slate-700 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span>© 2024 Engineering Research Study</span>
              <Separator orientation="vertical" className="h-4 bg-slate-600" />
              <span>AI-Powered Analysis</span>
              <Separator orientation="vertical" className="h-4 bg-slate-600" />
              <span>Global University Data</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-slate-600 text-slate-400">
                Research in Progress
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
