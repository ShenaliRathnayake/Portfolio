import { motion } from "framer-motion";
import ecommerce from "../../assets/projects/ecommerce.png";

function Ecommerce() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="
            text-5xl
            md:text-6xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
            mb-4
          ">
            E-Commerce Platform
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A full-stack ecommerce web application built with React and Laravel
            featuring authentication, product management, shopping cart functionality,
            and responsive modern UI.
          </p>
        </motion.div>

        {/* Project Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <img
            src={ecommerce}
            alt="E-Commerce Platform"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Content */}

        <div className="space-y-10">
          {/* What */}

          <section className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-8
          ">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">
              What is this project?
            </h2>

            <p className="text-gray-300 leading-relaxed">
              This project is a modern ecommerce platform that allows users to browse
              products, view product details, register and log in securely, add items
              to a shopping cart, and manage their shopping experience through a
              responsive web interface.
            </p>
          </section>

          {/* Why */}

          <section className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-8
          ">
            <h2 className="text-3xl font-bold mb-4 text-purple-400">
              Why did I build it?
            </h2>

            <p className="text-gray-300 leading-relaxed">
              I built this project to learn full-stack web development and understand
              how a frontend application communicates with a backend API, manages user
              authentication, and stores data in a relational database.
            </p>
          </section>

          {/* Technologies */}

          <section className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-8
          ">
            <h2 className="text-3xl font-bold mb-6 text-pink-400">
              Technologies Used
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-cyan-300 mb-3">Frontend</h3>

                <ul className="space-y-2 text-gray-300">
                  <li>⚛ React.js</li>
                  <li>🎨 Tailwind CSS</li>
                  <li>🌐 Axios</li>
                  <li>🔀 React Router DOM</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-cyan-300 mb-3">Backend</h3>

                <ul className="space-y-2 text-gray-300">
                  <li>🚀 Laravel</li>
                  <li>🗄 MySQL</li>
                  <li>🔐 Laravel Sanctum</li>
                  <li>📡 REST API</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Development Process */}

          <section className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-8
          ">
            <h2 className="text-3xl font-bold mb-6 text-green-400">
              Development Process
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Step 1 — Project Planning
                </h3>

                <p className="text-gray-300">
                  Designed the application structure including Home, Shop, Product
                  Details, Cart, Login, and Register pages.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">
                  Step 2 — Frontend Setup
                </h3>

                <div className="bg-black/30 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-cyan-300">
                    <code>
npm create vite@latest ecommerce-frontend
npm install react-router-dom axios tailwindcss
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">
                  Step 3 — Backend Setup
                </h3>

                <div className="bg-black/30 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-cyan-300">
                    <code>
composer create-project laravel/laravel ecommerce-backend
php artisan migrate
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">
                  Step 4 — API Integration
                </h3>

                <p className="text-gray-300 mb-3">
                  Connected the React frontend to Laravel APIs using Axios.
                </p>

                <div className="bg-black/30 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-cyan-300">
                    <code>
axios.get("http://127.0.0.1:8000/api/products")
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}

          <section className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-8
          ">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              Special Features
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "🔐 Secure Authentication",
                "🛒 Shopping Cart Management",
                "📱 Fully Responsive Design",
                "⚡ Fast React Frontend",
                "🔄 REST API Integration",
                "🎨 Modern Glassmorphism UI"
              ].map((feature) => (
                <div
                  key={feature}
                  className="
                    p-4
                    rounded-xl
                    bg-black/20
                    border
                    border-white/5
                    text-gray-300
                  "
                >
                  {feature}
                </div>
              ))}
            </div>
          </section>

          {/* Learning */}

          <section className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-8
          ">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">
              What I Learned
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
              <div>• React component architecture</div>
              <div>• Laravel REST API development</div>
              <div>• MySQL database relationships</div>
              <div>• User authentication workflows</div>
              <div>• Frontend & backend integration</div>
              <div>• Responsive UI/UX design principles</div>
            </div>
          </section>

          {/* Future */}

          <section className="
            rounded-3xl
            bg-gradient-to-r
            from-cyan-500/10
            to-purple-500/10
            border
            border-cyan-400/20
            p-8
          ">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Future Improvements
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>💳 Online payment gateway integration</li>
              <li>📊 Admin dashboard for product management</li>
              <li>🔍 Product search and advanced filtering</li>
              <li>📦 Order history and tracking system</li>
              <li>🌙 Dark/light theme toggle</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;

