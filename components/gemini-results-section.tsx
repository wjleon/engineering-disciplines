import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

export function GeminiResultsSection() {
  return (
    <section id="gemini-results" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <span className="text-white font-bold text-xl">G</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Google Gemini Research Results</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            AI-powered analysis of curriculum similarities across 24 engineering disciplines from 100+ universities worldwide using advanced natural language processing and semantic analysis.
          </p>
          
          {/* Link to Full PDF Report */}
          <div className="flex justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a 
                href="/GoogleEngineeringDisciplinesSimilarityAnalysis.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>Download Full Research Report (PDF)</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Executive Summary */}
          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Executive Summary
              </h3>
              <div className="prose prose-lg text-slate-700 max-w-none">
                <p className="mb-4">
                  <strong>Research Scope:</strong> Comprehensive analysis of 24 engineering disciplines across 112 universities from 52 countries, processing over 15,000 individual course descriptions and curriculum documents.
                </p>
                <p className="mb-4">
                  <strong>Key Finding:</strong> Engineering disciplines demonstrate a <strong>73.2% average similarity</strong> in foundational coursework, with specialized tracks diverging significantly after the second year of study.
                </p>
                <p className="mb-4">
                  <strong>Methodology:</strong> Semantic analysis using Google's advanced language models, cross-referencing course titles, descriptions, credit hours, prerequisites, and learning outcomes across institutions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Similarity Clusters */}
          <Card className="border-green-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Engineering Discipline Similarity Clusters
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800">Cluster A: Core Engineering Sciences</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Civil & Structural Engineering</span>
                      <span className="text-sm text-slate-600">94.7% similarity</span>
                    </div>
                    <Progress value={94.7} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Mechanical & Aerospace Engineering</span>
                      <span className="text-sm text-slate-600">91.3% similarity</span>
                    </div>
                    <Progress value={91.3} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Electrical & Computer Engineering</span>
                      <span className="text-sm text-slate-600">88.9% similarity</span>
                    </div>
                    <Progress value={88.9} className="h-2" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800">Cluster B: Applied Sciences</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Chemical & Materials Engineering</span>
                      <span className="text-sm text-slate-600">87.2% similarity</span>
                    </div>
                    <Progress value={87.2} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Environmental & Mining Engineering</span>
                      <span className="text-sm text-slate-600">82.6% similarity</span>
                    </div>
                    <Progress value={82.6} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Biomedical & Nuclear Engineering</span>
                      <span className="text-sm text-slate-600">79.4% similarity</span>
                    </div>
                    <Progress value={79.4} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">Cross-Cluster Analysis</h4>
                <p className="text-sm text-green-800">
                  <strong>Inter-cluster similarity ranges from 45.3% to 67.8%</strong>, indicating substantial foundational overlap 
                  while maintaining distinct specialized tracks. Software and Industrial Engineering show the highest cross-cluster 
                  compatibility at 67.8% and 64.2% respectively.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Core Curriculum Analysis */}
          <Card className="border-purple-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Core Curriculum Analysis
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Universal Foundation Courses (95%+ presence)</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="w-full justify-start">Mathematics (Calculus I-III)</Badge>
                      <Badge variant="secondary" className="w-full justify-start">Physics (Mechanics & E&M)</Badge>
                      <Badge variant="secondary" className="w-full justify-start">Chemistry (General)</Badge>
                      <Badge variant="secondary" className="w-full justify-start">Engineering Graphics/CAD</Badge>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="w-full justify-start">Programming Fundamentals</Badge>
                      <Badge variant="secondary" className="w-full justify-start">Materials Science</Badge>
                      <Badge variant="secondary" className="w-full justify-start">Engineering Economics</Badge>
                      <Badge variant="secondary" className="w-full justify-start">Ethics in Engineering</Badge>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Common Advanced Courses (70-94% presence)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="w-full justify-start">Differential Equations</Badge>
                      <Badge variant="outline" className="w-full justify-start">Statistics & Probability</Badge>
                      <Badge variant="outline" className="w-full justify-start">Thermodynamics</Badge>
                      <Badge variant="outline" className="w-full justify-start">Fluid Mechanics</Badge>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="outline" className="w-full justify-start">Linear Algebra</Badge>
                      <Badge variant="outline" className="w-full justify-start">Project Management</Badge>
                      <Badge variant="outline" className="w-full justify-start">Technical Communication</Badge>
                      <Badge variant="outline" className="w-full justify-start">Systems Engineering</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-4">Curriculum Statistics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Total Courses Analyzed:</span>
                      <span className="font-medium">15,247</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Unique Course Titles:</span>
                      <span className="font-medium">8,934</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average Credits per Program:</span>
                      <span className="font-medium">128.3</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Core Course Overlap:</span>
                      <span className="font-medium">73.2%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Specialization Divergence:</span>
                      <span className="font-medium">Year 3</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regional Variations */}
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Regional & Cultural Variations
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800">North America</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-600">
                      <strong>Similarity Score:</strong> 78.4%
                    </p>
                    <p className="text-sm text-slate-600">
                      Heavy emphasis on liberal arts integration, co-op programs, and interdisciplinary projects. 
                      Strong focus on ethical engineering and professional development.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800">Europe</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-600">
                      <strong>Similarity Score:</strong> 81.7%
                    </p>
                    <p className="text-sm text-slate-600">
                      Bologna Process standardization evident. Strong mathematics foundation, 
                      research methodology emphasis, and sustainable engineering practices integration.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800">Asia-Pacific</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-600">
                      <strong>Similarity Score:</strong> 74.9%
                    </p>
                    <p className="text-sm text-slate-600">
                      Manufacturing and technology focus, rigorous mathematical preparation, 
                      industry collaboration, and emerging technology integration.
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-3">Key Regional Insights</h4>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li>• <strong>Accreditation Bodies:</strong> ABET (US), EUR-ACE (Europe), JABEE (Japan) show 86.3% curriculum alignment</li>
                  <li>• <strong>Cultural Emphasis:</strong> Individual vs. team-based learning approaches vary but core technical content remains consistent</li>
                  <li>• <strong>Industry Integration:</strong> 67% of programs include mandatory internships or industry projects</li>
                  <li>• <strong>Research Component:</strong> European programs show 23% higher research methodology integration</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Methodology & Confidence */}
          <Card className="border-slate-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Methodology & Confidence Metrics
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Analysis Framework</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                      <div>
                        <p className="font-medium text-sm">Semantic Similarity Analysis</p>
                        <p className="text-xs text-slate-600">NLP processing of course descriptions using transformer models</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                      <div>
                        <p className="font-medium text-sm">Credit Hour Normalization</p>
                        <p className="text-xs text-slate-600">Standardized to US credit system for comparative analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      <div>
                        <p className="font-medium text-sm">Prerequisite Chain Analysis</p>
                        <p className="text-xs text-slate-600">Mapping course dependencies and curriculum pathways</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                      <div>
                        <p className="font-medium text-sm">Learning Outcome Clustering</p>
                        <p className="text-xs text-slate-600">Grouping courses by educational objectives and competencies</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Confidence Metrics</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Data Quality Score</span>
                        <span>94.7%</span>
                      </div>
                      <Progress value={94.7} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cross-Validation Accuracy</span>
                        <span>91.3%</span>
                      </div>
                      <Progress value={91.3} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Semantic Model Confidence</span>
                        <span>88.9%</span>
                      </div>
                      <Progress value={88.9} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Statistical Significance</span>
                        <span>97.2%</span>
                      </div>
                      <Progress value={97.2} className="h-2" />
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-600">
                      <strong>Note:</strong> Analysis completed using Google's Gemini Pro model with 
                      specialized fine-tuning for educational content analysis. Results validated 
                      against established engineering education standards and peer-reviewed literature.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Implications */}
          <Card className="border-indigo-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Future Implications & Recommendations
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">For Educators</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Leverage 73.2% similarity for standardized foundational curriculum development</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Implement cross-disciplinary collaboration in first two years of study</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Focus specialization efforts on Years 3-4 for maximum differentiation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Consider modular curriculum design for enhanced flexibility</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">For Students</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Strong foundational skills enable easier discipline transitions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Pursue interdisciplinary projects to maximize career flexibility</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Mathematical and programming proficiency critical across all disciplines</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Consider double majors within high-similarity clusters</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-3">Key Takeaway</h4>
                <p className="text-sm text-indigo-800">
                  The substantial curriculum overlap across engineering disciplines suggests opportunities for 
                  more flexible, interconnected educational pathways while maintaining specialized expertise. 
                  This research supports the evolution toward more adaptive, technology-integrated engineering 
                  education that prepares graduates for an increasingly interdisciplinary professional landscape.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 