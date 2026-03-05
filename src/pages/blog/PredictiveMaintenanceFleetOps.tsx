import { motion } from 'framer-motion';
import { useTheme } from '../../components/ThemeProvider';
import { NavBar } from '../../components/NavBar';
import { FONTS } from '../../config/fonts';

export function BlogArticlePredictiveMaintenanceFleetOps() {
  const { theme } = useTheme();

  return (
    <>
      <NavBar />
      <div className={`pt-[72px] ${theme === 'dark' ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
        {/* Article Header */}
        <section
          className={`py-16 px-6 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#0d0d0d] to-[#070d32]'
              : 'bg-gradient-to-b from-gray-50 to-blue-50'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <a
              href="/#contact"
              className={`inline-block mb-6 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              } hover:underline`}
            >
              ← Back to Home
            </a>
            <h1
              className={`${FONTS.subheading} text-[48px] mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              How Predictive Maintenance is Transforming Truck Fleet Operations
            </h1>
            <div
              className={`flex gap-6 text-sm ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}
            >
              <span>February 24, 2026</span>
              <span>•</span>
              <span>6 min read</span>
              <span>•</span>
              <span>DiagnoX Team</span>
            </div>
          </motion.div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-6 max-w-2xl mx-auto">
          <article
            className={`${FONTS.body} text-[18px] leading-[1.8] ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            } space-y-6`}
          >
            <p>
              Modern transport fleets cannot afford unexpected breakdowns. Fleet downtime translates directly into lost revenue, missed deliveries, and frustrated customers. Traditional reactive maintenance—waiting for something to break before fixing it—is no longer viable in today's competitive logistics landscape. Instead, forward-thinking fleet operators are turning to predictive maintenance powered by AI-driven vehicle health monitoring.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              The Cost of Downtime
            </h2>
            <p>
              For a typical commercial fleet, one unexpected breakdown can cost thousands of dollars. Beyond the immediate repair costs, there's lost productivity, customer penalties, and the domino effect on the entire delivery schedule. When a single truck goes down, the entire operation suffers. Predictive maintenance changes this equation entirely.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              How Predictive Maintenance Works
            </h2>
            <p>
              Predictive maintenance uses real-time sensor data combined with artificial intelligence to monitor every aspect of vehicle health. Instead of following rigid maintenance schedules, fleet managers receive early warnings about potential issues—often weeks or months before a failure would occur.
            </p>
            <p>
              By analyzing patterns in engine performance, transmission health, cooling systems, electrical components, and other critical systems, AI algorithms identify subtle changes that indicate developing problems. This allows fleet managers to schedule maintenance during optimal windows, minimizing disruption to operations.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Key Benefits for Fleet Operations
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Reduced Downtime:</strong> Fix problems before they cause breakdowns, keeping vehicles on the road
              </li>
              <li>
                <strong>Lower Maintenance Costs:</strong> Prevent expensive emergency repairs by addressing issues early
              </li>
              <li>
                <strong>Improved Operational Efficiency:</strong> Better planning and scheduling of maintenance activities
              </li>
              <li>
                <strong>Extended Vehicle Lifespan:</strong> Proper maintenance extends the life of fleet assets
              </li>
              <li>
                <strong>Enhanced Safety:</strong> Identify safety-critical issues before they endanger drivers or cargo
              </li>
              <li>
                <strong>Better Resource Management:</strong> Optimize parts inventory and maintenance labor allocation
              </li>
            </ul>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Real-World Impact
            </h2>
            <p>
              Fleet operators implementing predictive maintenance systems report 30-50% reductions in unexpected breakdowns. Some see fuel efficiency improvements of 10-15% as the system helps maintain optimal engine performance. The return on investment typically pays for itself within 12-18 months through reduced repair costs and improved uptime.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              DiagnoX: Predictive Maintenance Made Simple
            </h2>
            <p>
              DiagnoX brings enterprise-grade predictive maintenance to fleets of any size. Our AI-powered diagnostic system continuously monitors your entire fleet, analyzing real-time data to predict maintenance needs before problems develop. With DiagnoX, you get:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>24/7 vehicle health monitoring across your entire fleet</li>
              <li>Early warning alerts for developing issues</li>
              <li>Detailed insights into vehicle performance and health metrics</li>
              <li>Actionable recommendations for maintenance and repairs</li>
              <li>Integration with your existing fleet management systems</li>
            </ul>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              The Future of Fleet Management
            </h2>
            <p>
              As vehicles become increasingly connected and AI technology advances, predictive maintenance is rapidly becoming the standard in professional fleet operations. Early adopters are already experiencing significant competitive advantages in cost, reliability, and customer satisfaction. For fleet operators looking to stay ahead of the curve, predictive maintenance isn't optional—it's essential.
            </p>

            {/* CTA */}
            <div
              className={`mt-12 p-8 rounded-lg ${
                theme === 'dark'
                  ? 'bg-[#070d32] border border-white/10'
                  : 'bg-blue-50 border border-blue-200'
              }`}
            >
              <h3
                className={`${FONTS.bodySemiBold} text-[20px] mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Transform Your Fleet with Predictive Maintenance
              </h3>
              <p
                className={`mb-4 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}
              >
                DiagnoX brings AI-powered predictive maintenance to your fleet. Reduce downtime, cut costs, and improve operational efficiency.
              </p>
              <a
                href="/#contact"
                className={`inline-block px-6 py-3 rounded-full font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started with DiagnoX
              </a>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
