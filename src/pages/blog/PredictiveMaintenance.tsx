import { motion } from 'framer-motion';
import { useTheme } from '../../components/ThemeProvider';
import { NavBar } from '../../components/NavBar';
import { FONTS } from '../../config/fonts';

export function BlogArticlePredictiveMaintenance() {
  const { theme } = useTheme();

  return (
    <>
      <NavBar />
      <div className={`pt-[72px] ${theme === 'dark' ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
        {/* Article Header */}
        <section
          className={`py-16 px-6 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#0d0d0d] from-[73.676%] via-[#070d32] via-[102.02%] to-[#000d57] to-[113.83%]'
              : 'bg-gradient-to-b from-gray-50 via-blue-50 to-blue-100'
          }`}
        >
          {/* Glowing gradient overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none"
            style={{
              background: theme === 'dark'
                ? 'radial-gradient(ellipse at center bottom, rgba(0, 13, 87, 0.4) 0%, rgba(7, 13, 50, 0.2) 40%, transparent 70%)'
                : 'radial-gradient(ellipse at center bottom, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.1) 40%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          <div className="relative z-10">
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
              Predictive Maintenance: The Future of Vehicle Care
            </h1>
            <div
              className={`flex gap-6 text-sm ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}
            >
              <span>February 15, 2026</span>
              <span>•</span>
              <span>6 min read</span>
              <span>•</span>
              <span>DiagnoX Team</span>
            </div>
          </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-6 max-w-2xl mx-auto">
          <article
            className={`${FONTS.body} text-[18px] leading-[1.8] ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            } space-y-6`}
          >
            <p>
              The automotive industry is undergoing a major transformation. Traditional reactive maintenance—fixing problems after they occur—is giving way to predictive maintenance, which uses data and AI to predict failures before they happen.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              What is Predictive Maintenance?
            </h2>
            <p>
              Predictive maintenance uses sensors, IoT devices, and artificial intelligence to monitor vehicle health in real-time. By analyzing patterns in engine performance, temperature, vibration, and other metrics, AI algorithms can identify potential issues weeks or months in advance.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Key Benefits of Predictive Maintenance
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Reduced Downtime:</strong> Fix problems before they cause breakdowns
              </li>
              <li>
                <strong>Lower Costs:</strong> Prevent expensive emergency repairs
              </li>
              <li>
                <strong>Extended Vehicle Life:</strong> Keep vehicles operating at peak efficiency
              </li>
              <li>
                <strong>Improved Safety:</strong> Identify safety-critical issues early
              </li>
              <li>
                <strong>Better Planning:</strong> Schedule maintenance during optimal windows
              </li>
            </ul>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              How DiagnoX Powers Predictive Maintenance
            </h2>
            <p>
              DiagnoX's AI-powered diagnostic system analyzes real-time vehicle data to predict maintenance needs. Our platform continuously monitors engine health, transmission performance, and electrical systems, providing alerts before issues become critical.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              The Future is Predictive
            </h2>
            <p>
              As vehicles become increasingly connected and AI technology advances, predictive maintenance will become the standard. Fleet operators who embrace this technology today will enjoy significant competitive advantages in cost, reliability, and customer satisfaction.
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
                Experience Predictive Maintenance Today
              </h3>
              <p
                className={`mb-4 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}
              >
                DiagnoX brings AI-powered predictive maintenance to your fleet. Get early warnings, prevent breakdowns, and reduce costs.
              </p>
              <a
                href="/#contact"
                className={`inline-block px-6 py-3 rounded-full font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </a>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
