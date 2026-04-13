import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, AlertCircle, CheckCircle2, MapPin, Clock, Users, 
  TrendingUp, Shield, Zap, ArrowRight, Phone, Mail, Globe,
  Activity, Droplet, Stethoscope, Award, BarChart3, Lock
} from 'lucide-react';
import { Button } from '../components/ui/BasicComponents';
import { ROUTES } from '../constants';
import '../index.css';
import heroImg from '../assets/blood-donor.png';

const HomePremium = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  return (
    <div className="bg-white text-gray-900">
      {/* ===== PREMIUM HERO SECTION ===== */}
      <section className="relative min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 pt-8 md:pt-1 pb-16 overflow-hidden md:pb-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-1/4 w-60 h-60 md:w-80 md:h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 md:w-96 md:h-96 bg-secondary-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-indigo-50 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center py-4 md:py-10">
            {/* Left: Content */}
            <div className="space-y-6 md:space-y-8 mt-4 md:mt-0">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-50 border border-secondary-200 rounded-full">
                <Award size={16} className="text-secondary-600" />
                <span className="text-sm font-semibold text-secondary-700">Healthcare Technology Platform</span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-900 text-gray-900 leading-tight tracking-tight mb-6">
                  Save Lives in <span className="text-secondary-600">Seconds</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Connect qualified blood donors with hospitals in real-time. Our AI-powered platform matches blood types instantly, eliminating delays that cost lives.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full max-w-xl">
                <Link to={ROUTES.EMERGENCY_REQUEST} className="flex-1 block">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <AlertCircle size={20} />
                    Emergency Request Now
                  </Button>
                </Link>
                <Link to={ROUTES.REGISTER} className="flex-1 block">
                  <Button className="w-full bg-white border-2 border-primary-900 text-primary-900 hover:bg-primary-50 px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                    Become a Donor
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-900">5.2K+</div>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2">Active Donors</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary-700">2.4K</div>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2">Lives Saved</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-900">99%</div>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2">Match Rate</p>
                </div>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative w-full flex justify-center lg:justify-end items-center py-4 lg:py-12 mt-4 lg:mt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-lg aspect-square" aria-hidden="true">
                <img 
                  src={heroImg} 
                  alt="Blood Donation Connect" 
                  className="w-full h-full object-contain mix-blend-darken"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EMERGENCY STRIP ===== */}
      <section className="bg-red-600 text-white py-6">
        <div className="container-max">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <AlertCircle size={28} className="shrink-0" />
              <div>
                <h3 className="font-bold text-xl">Emergency Blood Needed?</h3>
                <p className="text-red-100 text-sm">Get matched with verified donors within minutes</p>
              </div>
            </div>
            <Link to={ROUTES.EMERGENCY_REQUEST}>
              <Button className="bg-white text-red-600 hover:bg-red-50 px-6 py-2 font-bold shadow-lg">
                Create Request
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Why Hospitals Choose Us</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The most advanced blood matching system built for emergency response
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Zap,
                title: 'Real-Time Matching',
                desc: 'AI-powered algorithm matches blood types and availability in milliseconds',
                color: 'from-secondary-600 to-blue-600'
              },
              {
                icon: MapPin,
                title: 'Location-Based Search',
                desc: 'Find verified donors within your proximity automatically',
                color: 'from-blue-600 to-indigo-600'
              },
              {
                icon: Shield,
                title: '100% Verified',
                desc: 'Every donor and hospital verified to ensure safety and reliability',
                color: 'from-green-600 to-emerald-600'
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group">
                  <div className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-secondary-500 hover:shadow-xl transition-all duration-300">
                    <div className={`inline-flex p-4 rounded-xl bg-linear-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform`} aria-hidden="true">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-6">How It Works</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto">From emergency request to life-saving delivery in minutes</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { num: '1', title: 'Request Blood', desc: 'Hospital initiates emergency blood request with type and quantity' },
              { num: '2', title: 'AI Matching', desc: 'System instantly matches with available verified donors' },
              { num: '3', title: 'Notify Donors', desc: 'Nearby donors receive instant notification with location' },
              { num: '4', title: 'Delivery', desc: 'Donor delivers blood unit directly to hospital' },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-primary-900 to-secondary-700 text-white text-2xl font-bold mb-4" aria-hidden="true">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-2xl text-secondary-600" aria-hidden="true">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROLE CARDS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">Built for Everyone</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                role: 'Blood Donors',
                icon: Heart,
                features: ['Contribute to lifesaving', 'Earn donor points', 'Track impact', 'Flexible scheduling']
              },
              {
                role: 'Hospitals',
                icon: Stethoscope,
                features: ['Emergency requests', 'Real-time tracking', 'Inventory management', 'Analytics dashboard']
              },
              {
                role: 'Administrators',
                icon: BarChart3,
                features: ['System oversight', 'Verification queue', 'User management', 'Network analytics']
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl border-2 border-gray-200 hover:border-secondary-600 hover:bg-secondary-50/50 transition-all duration-300 group">
                  <div className="inline-flex p-3 rounded-lg bg-secondary-100 text-secondary-800 mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.role}</h3>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} aria-hidden="true" className="text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={ROUTES.REGISTER} className="mt-6 block" aria-label={`Get started as ${item.role}`}>
                    <Button className="w-full bg-primary-900 hover:bg-primary-900/90 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary-900 to-secondary-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { label: 'Blood Units Delivered', value: '12.5K+' },
              { label: 'Lives Saved', value: '2.4K+' },
              { label: 'Active Users', value: '8.3K' },
              { label: 'Response Time', value: '< 5 min' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-black mb-3">{stat.value}</div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">Trusted by Healthcare Professionals</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: 'This platform saved a critical patient. The speed and accuracy of matching is unparalleled.',
                author: 'Dr. Rajesh Kumar',
                role: 'Chief Medical Officer, City Hospital'
              },
              {
                quote: 'We reduced emergency blood delivery time from hours to minutes. The impact on patient outcomes is incredible.',
                author: 'Priya Singh',
                role: 'Blood Bank Director, Metro General'
              },
              {
                quote: 'The verification process is rigorous. We feel confident knowing every donor is thoroughly vetted.',
                author: 'Arjun Patel',
                role: 'Quality Assurance Lead, Regional Health'
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary-900 via-primary-800 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 md:w-96 md:h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-white">Ready to Save Lives?</h2>
          <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto">
            Join thousands of donors and healthcare professionals building the future of emergency blood response
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Link to={ROUTES.REGISTER} className="flex-1 block">
              <Button className="w-full bg-white text-primary-900 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Register Now
              </Button>
            </Link>
            <Link to={ROUTES.FIND_DONORS} className="flex-1 block">
              <Button className="w-full bg-white/20 border-2 border-white text-white hover:bg-white/30 px-8 py-4 text-lg font-bold">
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePremium;
