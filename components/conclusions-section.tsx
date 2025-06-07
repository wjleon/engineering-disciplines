import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3 } from "lucide-react"

export function ConclusionsSection() {
  return (
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
  )
} 