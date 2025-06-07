import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Target,
  BookOpen,
  FlaskConical,
  Cog,
  Globe,
  FileText,
} from "lucide-react"
import { engineeringDisciplines, topUniversities, countries } from "@/lib/data"

export function ChallengeSection() {
  return (
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
  )
} 