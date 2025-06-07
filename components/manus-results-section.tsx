import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, FileText, TrendingUp, Users } from "lucide-react"

export function ManusResultsSection() {
  return (
    <section id="manus-results" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Manus AI Research Results</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            Independent curriculum analysis using machine learning algorithms and statistical modeling for cross-validation of engineering discipline similarities across global institutions.
          </p>
          
          {/* Link to Full PDF Report */}
          <div className="flex justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a 
                href="/Manus_engineering_disciplines_study.pdf" 
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
          <Card className="border-emerald-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Research Overview & Methodology
              </h3>
              <div className="prose prose-lg text-slate-700 max-w-none">
                <p className="mb-4">
                  <strong>Research Scope:</strong> Quantitative analysis of 24 engineering disciplines across 98 universities from 45 countries, utilizing machine learning clustering algorithms and curriculum content analysis of 12,847 course offerings.
                </p>
                <p className="mb-4">
                  <strong>Key Finding:</strong> Engineering curricula exhibit <strong>68.7% structural similarity</strong> with significant variance in implementation methodology and assessment strategies, particularly in Years 3-4 specialization tracks.
                </p>
                <p className="mb-4">
                  <strong>Unique Approach:</strong> Manus AI employed unsupervised learning algorithms and competency mapping to identify latent curriculum patterns, complementing semantic analysis with quantitative skill progression modeling.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comparative Validation */}
          <Card className="border-teal-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-teal-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Cross-Validation with Google Results
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Convergent Findings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Core Mathematics & Physics</span>
                      <span className="text-sm text-emerald-600">96.2% agreement</span>
                    </div>
                    <Progress value={96.2} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Programming Fundamentals</span>
                      <span className="text-sm text-emerald-600">91.8% agreement</span>
                    </div>
                    <Progress value={91.8} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Engineering Design Process</span>
                      <span className="text-sm text-emerald-600">89.4% agreement</span>
                    </div>
                    <Progress value={89.4} className="h-2" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Divergent Insights</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Assessment Methods</span>
                      <span className="text-sm text-orange-600">47.3% variance</span>
                    </div>
                    <Progress value={47.3} className="h-2 [&>div]:bg-orange-500" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Industry Collaboration</span>
                      <span className="text-sm text-orange-600">52.1% variance</span>
                    </div>
                    <Progress value={52.1} className="h-2 [&>div]:bg-orange-500" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Research Integration</span>
                      <span className="text-sm text-orange-600">61.7% variance</span>
                    </div>
                    <Progress value={61.7} className="h-2 [&>div]:bg-orange-500" />
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="font-semibold text-teal-900 mb-3">Validation Summary</h4>
                <p className="text-sm text-teal-800">
                  Manus analysis confirms <strong>87.4% correlation</strong> with Google's semantic findings while revealing 
                  significant implementation differences. The 4.5 percentage point variance in overall similarity 
                  (68.7% vs 73.2%) reflects methodological differences in weighting course content versus delivery mechanisms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Competency Mapping */}
          <Card className="border-cyan-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-cyan-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Engineering Competency Clustering
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Core Competency Clusters (82%+ prevalence)</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="w-full justify-start bg-cyan-100 text-cyan-800">Mathematical Modeling</Badge>
                      <Badge variant="secondary" className="w-full justify-start bg-cyan-100 text-cyan-800">Systems Thinking</Badge>
                      <Badge variant="secondary" className="w-full justify-start bg-cyan-100 text-cyan-800">Problem Decomposition</Badge>
                      <Badge variant="secondary" className="w-full justify-start bg-cyan-100 text-cyan-800">Data Analysis</Badge>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="w-full justify-start bg-cyan-100 text-cyan-800">Design Optimization</Badge>
                      <Badge variant="secondary" className="w-full justify-start bg-cyan-100 text-cyan-800">Project Management</Badge>
                      <Badge variant="secondary" className="w-full justify-start bg-cyan-100 text-cyan-800">Technical Communication</Badge>
                      <Badge variant="secondary" className="w-full justify-start bg-cyan-100 text-cyan-800">Safety & Risk Assessment</Badge>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Emerging Competencies (55-81% prevalence)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="w-full justify-start border-cyan-300 text-cyan-700">Machine Learning Applications</Badge>
                      <Badge variant="outline" className="w-full justify-start border-cyan-300 text-cyan-700">Sustainability Engineering</Badge>
                      <Badge variant="outline" className="w-full justify-start border-cyan-300 text-cyan-700">Digital Twin Modeling</Badge>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="outline" className="w-full justify-start border-cyan-300 text-cyan-700">Interdisciplinary Collaboration</Badge>
                      <Badge variant="outline" className="w-full justify-start border-cyan-300 text-cyan-700">Ethical Decision Making</Badge>
                      <Badge variant="outline" className="w-full justify-start border-cyan-300 text-cyan-700">Global Engineering Practice</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-cyan-900 mb-4">Competency Analytics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Total Competencies Mapped:</span>
                      <span className="font-medium">247</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Universal Competencies:</span>
                      <span className="font-medium">34</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Discipline-Specific:</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cross-Functional:</span>
                      <span className="font-medium">57</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Progression Complexity:</span>
                      <span className="font-medium">4.2/5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Patterns */}
          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Implementation & Assessment Patterns
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                    Delivery Methods
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-600">
                      <strong>Lecture-based:</strong> 67.3%
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Project-based:</strong> 23.8%
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Lab/Practical:</strong> 18.4%
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Industry Co-op:</strong> 12.7%
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    Assessment Types
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-600">
                      <strong>Written Exams:</strong> 78.9%
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Design Projects:</strong> 45.2%
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Lab Reports:</strong> 34.6%
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Peer Review:</strong> 8.3%
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800">Credit Distribution</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Theory Courses</span>
                        <span>62.4%</span>
                      </div>
                      <Progress value={62.4} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Laboratory Work</span>
                        <span>21.7%</span>
                      </div>
                      <Progress value={21.7} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Capstone/Thesis</span>
                        <span>15.9%</span>
                      </div>
                      <Progress value={15.9} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Insights */}
          <Card className="border-indigo-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Key Research Insights & Recommendations
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Unique Findings</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Competency Gaps:</strong> 34% of programs lack formal sustainability engineering integration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Assessment Variance:</strong> Significant differences in project-based evaluation methods across regions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Industry Alignment:</strong> 67% correlation between curriculum content and industry skill demands</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Technology Integration:</strong> Modern tools adoption varies 40-85% across institutions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Strategic Recommendations</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Standardize competency frameworks while preserving institutional autonomy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Increase project-based learning integration to 40% minimum across all programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Implement adaptive assessment strategies for diverse learning outcomes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>Enhance industry-academia collaboration through structured partnership frameworks</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-3">Methodological Innovation</h4>
                <p className="text-sm text-indigo-800">
                  Manus AI's competency-based analysis reveals that while course content shows high similarity, 
                  <strong>implementation methodologies vary significantly</strong>. This finding suggests opportunities for 
                  educational innovation through methodology sharing while maintaining curricular consistency. 
                  The research supports a <strong>hybrid standardization approach</strong> focusing on learning outcomes 
                  rather than delivery methods.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 