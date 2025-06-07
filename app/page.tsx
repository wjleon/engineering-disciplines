"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ChevronDown,
  FlaskConical,
  Cog,
  Building2,
  Zap,
  Cpu,
  Factory,
  Plane,
  Heart,
  Leaf,
  Droplets,
  Gem,
  Radiation,
  Ship,
  Mountain,
  Bot,
  Car,
  Home,
  Radio,
  Pickaxe,
  Wheat,
  Lightbulb,
  Volume2,
  Microscope,
  Globe,
  BookOpen,
  Target,
  BarChart3,
  FileText,
  ExternalLink,
} from "lucide-react"

const engineeringDisciplines = [
  { name: "Software Engineer", icon: Cpu, color: "bg-blue-500" },
  { name: "Mechanical Engineer", icon: Cog, color: "bg-gray-500" },
  { name: "Civil Engineer", icon: Building2, color: "bg-orange-500" },
  { name: "Electrical Engineer", icon: Zap, color: "bg-yellow-500" },
  { name: "Computer Engineer", icon: Cpu, color: "bg-purple-500" },
  { name: "Chemical Engineer", icon: FlaskConical, color: "bg-green-500" },
  { name: "Industrial Engineer", icon: Factory, color: "bg-red-500" },
  { name: "Aerospace Engineer", icon: Plane, color: "bg-sky-500" },
  { name: "Biomedical Engineer", icon: Heart, color: "bg-pink-500" },
  { name: "Environmental Engineer", icon: Leaf, color: "bg-emerald-500" },
  { name: "Petroleum Engineer", icon: Droplets, color: "bg-amber-600" },
  { name: "Materials Engineer", icon: Gem, color: "bg-violet-500" },
  { name: "Nuclear Engineer", icon: Radiation, color: "bg-lime-500" },
  { name: "Marine Engineer", icon: Ship, color: "bg-cyan-500" },
  { name: "Geotechnical Engineer", icon: Mountain, color: "bg-stone-500" },
  { name: "Robotics Engineer", icon: Bot, color: "bg-indigo-500" },
  { name: "Automotive Engineer", icon: Car, color: "bg-rose-500" },
  { name: "Structural Engineer", icon: Home, color: "bg-teal-500" },
  { name: "Telecommunications Engineer", icon: Radio, color: "bg-fuchsia-500" },
  { name: "Mining Engineer", icon: Pickaxe, color: "bg-yellow-600" },
  { name: "Agricultural Engineer", icon: Wheat, color: "bg-green-600" },
  { name: "Photonics Engineer", icon: Lightbulb, color: "bg-orange-400" },
  { name: "Acoustical Engineer", icon: Volume2, color: "bg-blue-600" },
  { name: "Nanoengineer", icon: Microscope, color: "bg-purple-600" },
]

const topUniversities = [
  "Stanford University",
  "Harvard University",
  "MIT",
  "Caltech",
  "Oxford University",
  "Cambridge University",
  "ETH Zurich",
  "University of Tokyo",
  "Tsinghua University",
  "American University of Sharjah",
  "University of Toronto",
  "Universidad Politécnica de Madrid",
  "Technical University of Munich",
  "École Polytechnique",
  "Politecnico di Milano",
  "Imperial College London",
]

const countries = [
  "USA",
  "Canada",
  "Spain",
  "Germany",
  "France",
  "Italy",
  "UK",
  "Japan",
  "China",
  "UAE",
  "Switzerland",
  "Australia",
  "Netherlands",
  "Sweden",
  "South Korea",
  "Singapore",
  "Brazil",
  "India",
  "Russia",
  "Norway",
]

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

      {/* The Challenge Section */}
      <section id="challenge" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Challenge</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the interconnections and similarities between engineering disciplines through comprehensive
              curriculum analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Research Objective */}
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700">
                  <BookOpen className="h-6 w-6" />
                  Research Objective
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  This study aims to conduct a comprehensive analysis of how similar or different various engineering
                  specialties are by examining their curricula from universities worldwide.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Primary Goal</h4>
                  <p className="text-blue-700">
                    Create a quantitative 24×24 similarity matrix that reveals the relationships between major
                    engineering disciplines with values ranging from 1-100.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Methodology */}
            <Card className="border-2 border-green-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-700">
                  <FlaskConical className="h-6 w-6" />
                  Methodology
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Research curricula from 100+ universities globally</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Include top institutions across 50+ countries</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Analyze core courses, prerequisites, and specializations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Compare mathematical foundations and practical applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Engineering Disciplines Grid */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Cog className="h-6 w-6 text-blue-600" />
                Engineering Disciplines Analyzed
              </CardTitle>
              <CardDescription>24 major engineering specialties included in this comprehensive study</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {engineeringDisciplines.map((discipline, index) => {
                  const IconComponent = discipline.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className={`p-2 ${discipline.color} rounded-lg`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{discipline.name}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Universities and Countries */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                  Top Universities Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48">
                  <div className="space-y-2">
                    {topUniversities.map((university, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-700">{university}</span>
                      </div>
                    ))}
                    <div className="p-2 text-center">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        +84 more universities
                      </Badge>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-green-600" />
                  Countries Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {countries.map((country, index) => (
                    <div key={index} className="flex items-center gap-2 p-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700 text-sm">{country}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    +30 more countries
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Hypothesis */}
          <Card className="border-2 border-orange-100 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-700">
                <FileText className="h-6 w-6" />
                Primary Research Hypothesis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <blockquote className="text-lg font-medium text-slate-800 mb-4 italic">
                  "All engineering disciplines derive from four main engineering branches: Mechanical, Electrical,
                  Civil, and Chemical."
                </blockquote>
                <p className="text-slate-600">
                  This study will provide empirical evidence to validate or refute this foundational claim about the
                  structure of engineering education through comprehensive curriculum analysis and similarity scoring.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Google Gemini Results Section */}
      <section id="gemini-results" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <span className="text-white font-bold text-xl">G</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Google Gemini Research Results</h2>
            <p className="text-xl text-slate-600">
              AI-powered analysis of engineering curriculum similarities and relationships
            </p>
          </div>

          <Card className="border-2 border-blue-100">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">G</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Google Gemini Analysis</h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  This section will contain the comprehensive research report generated by Google Gemini AI, including
                  the 24×24 similarity matrix, detailed curriculum analysis, statistical findings, and supporting
                  documentation with university sources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge variant="outline" className="border-blue-400 text-blue-600 px-4 py-2">
                    Similarity Matrix Pending
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-600 px-4 py-2">
                    Analysis Report Pending
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Manus Results Section */}
      <section id="manus-results" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full">
                <span className="text-white font-bold text-xl">M</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Manus Research Results</h2>
            <p className="text-xl text-slate-600">
              Independent AI analysis for comparative validation and cross-verification
            </p>
          </div>

          <Card className="border-2 border-emerald-100">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">M</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Manus AI Analysis</h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  This section will contain the independent research report generated by Manus AI, providing a second
                  perspective on engineering curriculum similarities, validation of primary findings, and comparative
                  analysis with the Gemini results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge variant="outline" className="border-emerald-400 text-emerald-600 px-4 py-2">
                    Independent Analysis Pending
                  </Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-600 px-4 py-2">
                    Validation Report Pending
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusions Section */}
      <section id="conclusions" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Conclusions</h2>
            <p className="text-xl text-slate-600">
              Synthesis of findings and implications for engineering education structure
            </p>
          </div>

          <Card className="border-2 border-orange-100">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">∑</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Research Conclusions</h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  This section will contain the comprehensive conclusions drawn from both AI analyses, including
                  validation or refutation of the primary hypothesis, implications for engineering education structure,
                  and recommendations for curriculum development.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <Badge variant="outline" className="border-orange-400 text-orange-600 px-4 py-2">
                    Hypothesis Testing Pending
                  </Badge>
                  <Badge variant="outline" className="border-red-400 text-red-600 px-4 py-2">
                    Final Analysis Pending
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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
              <Badge variant="outline" className="border-slate-600 text-slate-400">
                Research in Progress
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
