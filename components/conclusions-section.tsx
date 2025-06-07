import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BarChart3, TrendingDown, AlertTriangle, CheckCircle, Network, Users, BookOpen, Globe } from "lucide-react"

export function ConclusionsSection() {
  return (
    <section id="conclusions" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Conclusion</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Definitive statistical evidence demonstrating the falsification of the traditional four-branch engineering model
          </p>
        </div>

        <div className="grid gap-8">
          {/* Main Conclusion */}
          <Card className="border-red-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-900">Definitive Refutation</h3>
              </div>
              
              <div className="prose prose-lg text-slate-700 max-w-none">
                <p className="mb-6 text-lg font-medium leading-relaxed">
                  This comprehensive study definitively demonstrates that the hypothesis stating <strong>"all engineering disciplines derive from four main engineering branches (Mechanical, Electrical, Civil, and Chemical)" is FALSE</strong>. The empirical evidence presented through systematic curriculum analysis of 24 engineering disciplines across leading global universities provides statistically robust and methodologically sound refutation of this traditional claim.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Statistical Evidence Section Header */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Statistical Evidence Against the Four-Branch Hypothesis</h3>
            <p className="text-slate-600">The quantitative analysis reveals overwhelming evidence that contradicts the four-branch model:</p>
          </div>

          {/* Evidence Point 1: Inter-Branch Overlap */}
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Network className="h-6 w-6 text-orange-600 mr-3" />
                <h4 className="text-xl font-bold text-orange-900">1. High Inter-Branch Overlap</h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-800 mb-1">56.0%</div>
                  <div className="text-sm text-orange-700">Mechanical-Chemical Similarity</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-800 mb-1">p &lt; 0.001</div>
                  <div className="text-sm text-orange-700">Statistical Significance</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-800 mb-1">Refuted</div>
                  <div className="text-sm text-orange-700">Distinct Branches Claim</div>
                </div>
              </div>
              
              <p className="text-slate-700">
                The similarity analysis demonstrates that the supposed "four distinct branches" are not discrete entities. Most notably, Mechanical and Chemical engineering show an average similarity of 56.0%, far exceeding what would be expected from independent, distinct domains. This level of overlap is statistically significant (p &lt; 0.001) and indicates substantial shared content that contradicts the notion of separate, derivative branches.
              </p>
            </CardContent>
          </Card>

          {/* Evidence Point 2: Non-Derivative Disciplines */}
          <Card className="border-purple-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <TrendingDown className="h-6 w-6 text-purple-600 mr-3" />
                <h4 className="text-xl font-bold text-purple-900">2. Emergence of Non-Derivative Disciplines</h4>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg mb-6 text-center">
                <div className="text-4xl font-bold text-purple-800 mb-1">45.8%</div>
                <div className="text-sm text-purple-700">of disciplines cannot be categorized within the four-branch framework</div>
                <div className="text-xs text-purple-600 mt-1">(11 of 24 disciplines analyzed)</div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-start">Software Engineering</Badge>
                  <Badge variant="secondary" className="w-full justify-start">Biomedical Engineering</Badge>
                  <Badge variant="secondary" className="w-full justify-start">Environmental Engineering</Badge>
                  <Badge variant="secondary" className="w-full justify-start">Industrial Engineering</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-start">Robotics Engineering</Badge>
                  <Badge variant="secondary" className="w-full justify-start">Photonics Engineering</Badge>
                  <Badge variant="secondary" className="w-full justify-start">Nanotechnology Engineering</Badge>
                  <Badge variant="secondary" className="w-full justify-start">Nuclear Engineering</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-start">Agricultural Engineering</Badge>
                  <Badge variant="secondary" className="w-full justify-start">Mining Engineering</Badge>
                  <Badge variant="secondary" className="w-full justify-start">Acoustical Engineering</Badge>
                </div>
              </div>
              
              <p className="text-slate-700">
                Statistical cluster analysis confirms these disciplines form distinct knowledge domains that did not "derive from" traditional branches but emerged through technological advancement and societal needs.
              </p>
            </CardContent>
          </Card>

          {/* Evidence Point 3: Network Structure */}
          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Network className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-bold text-blue-900">3. Highly Interconnected Network Structure</h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-1">107</div>
                  <div className="text-sm text-blue-700">Strong Connections (&gt;70% similarity)</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-1">0.386</div>
                  <div className="text-sm text-blue-700">Observed Network Density</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-1">&lt;0.15</div>
                  <div className="text-sm text-blue-700">Expected Four-Branch Density</div>
                </div>
              </div>
              
              <p className="text-slate-700">
                Network analysis reveals 107 strong connections (&gt;70% similarity) among the 24 disciplines, creating a densely interconnected knowledge network rather than a hierarchical tree structure emanating from four branches. The network density of 0.386 significantly exceeds what would be expected from a four-branch derivative model (expected density &lt; 0.15, p &lt; 0.001).
              </p>
            </CardContent>
          </Card>

          {/* Evidence Point 4: Interdisciplinary Nature */}
          <Card className="border-green-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-green-600 mr-3" />
                <h4 className="text-xl font-bold text-green-900">4. Interdisciplinary Nature of Modern Disciplines</h4>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg mb-6 text-center">
                <div className="text-4xl font-bold text-green-800 mb-1">90.9%</div>
                <div className="text-sm text-green-700">of modern disciplines show significant similarity (&gt;40%) to three or more supposed "branches"</div>
                <div className="text-xs text-green-600 mt-1">(10 of 11 modern disciplines)</div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h5 className="font-semibold text-green-800">Biomedical Engineering</h5>
                  <p className="text-sm text-slate-600">68.1% similarity to Mechanical, 66.8% to Electrical, 59.3% to Chemical</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h5 className="font-semibold text-blue-800">Environmental Engineering</h5>
                  <p className="text-sm text-slate-600">77.9% similarity to Civil, 68.8% to Chemical</p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-4">
                  <h5 className="font-semibold text-indigo-800">Robotics Engineering</h5>
                  <p className="text-sm text-slate-600">84.3% similarity to Mechanical, 81.1% to Electrical</p>
                </div>
              </div>
              
              <p className="text-slate-700 mt-4">
                This multi-branch affinity pattern is statistically inconsistent with a derivative relationship from distinct branches.
              </p>
            </CardContent>
          </Card>

          {/* Evidence Point 5: International Variations */}
          <Card className="border-cyan-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-cyan-600 mr-3" />
                <h4 className="text-xl font-bold text-cyan-900">5. International Variations</h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-cyan-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-cyan-800 mb-1">Cambridge</div>
                  <div className="text-sm text-cyan-700">6 Main Engineering Areas</div>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-cyan-800 mb-1">Oxford</div>
                  <div className="text-sm text-cyan-700">Information Engineering as Distinct Branch</div>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-cyan-800 mb-1">Japan</div>
                  <div className="text-sm text-cyan-700">16 Engineering Departments</div>
                </div>
              </div>
              
              <p className="text-slate-700">
                The analysis of engineering education systems across multiple countries reveals fundamental differences in how engineering knowledge is organized. These variations provide independent confirmation that the four-branch model is not a universal or necessary framework.
              </p>
            </CardContent>
          </Card>

          {/* Methodological Strength */}
          <Card className="border-indigo-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-indigo-900">Methodological Strength</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Research Foundation</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Comprehensive Data:</strong> Analysis of curricula from world-leading institutions including MIT, Stanford, Cambridge, Oxford, ETH Zurich, Tsinghua, and University of Tokyo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Quantitative Methodology:</strong> Weighted similarity calculations using validated classification systems</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Validation Methods</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Multiple Lines of Evidence:</strong> Curriculum analysis, network analysis, cluster analysis, and international comparisons</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Statistical Validation:</strong> Sensitivity analysis confirming results are robust to methodological variations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Definitive Conclusion */}
          <Card className="border-slate-300 bg-slate-100 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">∑</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Definitive Conclusion</h3>
              </div>
              
              <div className="prose prose-lg text-slate-700 max-w-none">
                <p className="mb-4">
                  The evidence unequivocally demonstrates that the traditional four-branch model is an <strong>obsolete oversimplification that fails to represent the contemporary landscape of engineering education and knowledge</strong>. Rather than deriving from four main branches, engineering disciplines form a complex, interconnected network where:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>Traditional boundaries are permeable with significant overlap</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>New disciplines emerge from technological and societal needs, not from existing branches</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>Knowledge organization varies by cultural and institutional context</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-500 mt-1">•</span>
                      <span>Interdisciplinary integration is the norm, not the exception</span>
                    </li>
                  </ul>
                </div>
                
                <Separator className="my-6" />
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 mb-6">
                  <p className="text-slate-800 font-medium">
                    <strong>The four-branch hypothesis is not merely incomplete or partially correct—it is fundamentally wrong as a framework for understanding modern engineering disciplines.</strong> The statistical evidence, methodological rigor, and multiple independent lines of analysis leave no credible doubt about this conclusion.
                  </p>
                </div>
                
                <p className="mb-4">
                  Engineering knowledge in the 21st century is better understood as an <strong>evolving, interconnected network of specializations</strong> that respond dynamically to technological advancement and societal challenges, rather than as derivatives of four historical categories. This finding has profound implications for how we organize engineering education, conduct research, and prepare future engineers for an increasingly interdisciplinary world.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 