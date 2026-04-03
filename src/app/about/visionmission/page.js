import { Card, CardContent } from "@/components/ui/card"

export default function VisionMission() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#d6d2d2]">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* VISION */}
        <Card className="shadow-md border-0">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-orange-500">Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To emerge as a comprehensive institute that provides quality technical education and research,
              thereby building a valuable human resource for industry and society.
            </p>
          </CardContent>
        </Card>

        {/* MISSION */}
        <Card className="shadow-md border-0">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-orange-500">Mission</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide a learner-centered environment that encourages active participation.</li>
              <li>Empower faculty to excel in teaching, research, creativity, and public service.</li>
              <li>Develop critical thinking and professional skills with strong ethical values.</li>
              <li>Collaborate with industries, schools, and public agencies for shared growth.</li>
            </ul>
          </CardContent>
        </Card>

        {/* CORE VALUES */}
        <Card className="shadow-md border-0">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-orange-500">Core Values</h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <h3 className="font-semibold text-gray-900">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  Upholding honesty, fairness, and trust in all actions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Commitment to quality through hard work and consistency.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Social Responsibility</h3>
                <p className="text-gray-600 text-sm">
                  Enhancing lives through education and societal contribution.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Continuous Improvement</h3>
                <p className="text-gray-600 text-sm">
                  Building a culture of constant growth and learning.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Equitability</h3>
                <p className="text-gray-600 text-sm">
                  Respecting diversity with inclusiveness and fairness.
                </p>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* QUALITY POLICY */}
        <Card className="shadow-md border-0">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-orange-500">Quality Policy</h2>

            <blockquote className="italic text-gray-600 border-l-4 border-orange-500 pl-4">
              "What is really needed to make democracy function is not knowledge of facts, but right education."
              <br />
              <span className="text-sm">– Mahatma Gandhi</span>
            </blockquote>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Promote high-quality research, innovation, and publications.</li>
              <li>Maintain global standards in teaching, consultancy, and creativity.</li>
              <li>Collaborate with industries for skill development and entrepreneurship.</li>
              <li>Provide modern infrastructure and excellent faculty.</li>
              <li>Promote human values and societal contribution.</li>
              <li>Ensure equity, diversity, and inclusion at every level.</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}