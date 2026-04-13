import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Map, Clock, Users, ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';
import { Button } from '../components/ui/BasicComponents';
import { ROUTES } from '../constants';
import { mockTestimonials, mockFAQ } from '../data/mockData';

const HomePage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  return (
    <div className="bg-background text-white">
      {/* Hero Section - Modern Design */}
      <section className="relative bg-linear-to-br from-slate-900 via-primary-600 to-primary-700 text-white py-24 lg:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft">
              <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-sm font-semibold text-secondary-300">💡 Save Lives Today</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-white drop-shadow-lg">
                Save Lives with a <span className="bg-linear-to-r from-secondary-300 to-secondary-200 bg-clip-text text-transparent">Single Donation</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-12 leading-relaxed font-medium drop-shadow-md">
                Connect blood donors with hospitals in real-time. Fast, reliable, and trustworthy emergency blood coordination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slideInUp">
                <Link to={ROUTES.EMERGENCY_REQUEST}>
                  <Button variant="secondary" size="lg" className="shadow-xl hover:shadow-2xl">
                    🚨 Emergency Request <ArrowRight className="inline ml-2" size={20} />
                  </Button>
                </Link>
                <Link to={ROUTES.REGISTER}>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 shadow-lg">
                    Become a Donor
                  </Button>
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-black text-secondary-300">5K+</div>
                  <p className="text-white/70 text-sm font-medium">Active Donors</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-secondary-300">2.4K</div>
                  <p className="text-white/70 text-sm font-medium">Lives Saved</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-secondary-300">24/7</div>
                  <p className="text-white/70 text-sm font-medium">Support</p>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative flex-center lg:justify-end animate-slideInRight">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {/* Animated Circle Background */}
                <div className="absolute inset-0 bg-linear-to-br from-secondary-500/30 to-accent/30 rounded-full blur-2xl animate-pulse-gentle"></div>
                
                {/* Heart Icon */}
                <div className="absolute inset-0 flex-center">
                  <Heart size={240} className="text-white/40 drop-shadow-xl animate-float" />
                </div>

                {/* Floating Stats */}
                <div className="absolute top-8 -right-12 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 animate-slideInRight">
                  <p className="text-sm font-bold">RapidMatch</p>
                  <p className="text-xs text-white/70">Real-time Matching</p>
                </div>
                
                <div className="absolute bottom-8 -left-12 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 animate-slideInLeft">
                  <p className="text-sm font-bold">99.5% Safe</p>
                  <p className="text-xs text-white/70">Verified Donors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section - Modern Card Design */}
      <section className="py-12 bg-linear-to-r from-slate-50 to-white">
        <div className="container-max">
          <div className="bg-linear-to-br from-accent/95 to-accent-600 rounded-2xl p-8 lg:p-12 shadow-2xl border border-accent-300/30 hover:shadow-3xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 flex items-center gap-3">
                  <span className="text-5xl">🚨</span>
                  <span>In an Emergency?</span>
                </h2>
                <p className="text-xl text-white/90 font-semibold leading-relaxed">Get compatible blood delivered within minutes from nearby verified donors</p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link to={ROUTES.EMERGENCY_REQUEST}>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-accent-600 hover:bg-white/95 font-bold shadow-xl hover:shadow-2xl"
                  >
                    Create Emergency Request Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-linear-to-b from-slate-900 to-slate-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
              Why Choose Our Platform
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
              We connect lifesavers with those in need through technology and trust
            </p>
          </div>

          <div className="grid-auto">
            <div className="card hover:shadow-2xl hover:border-secondary-300 transition-all duration-300 group bg-slate-800 border-slate-700">
              <div className="bg-linear-to-br from-secondary-100 to-secondary-50 w-16 h-16 rounded-xl flex-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Lightning Fast</h3>
              <p className="text-white/80 text-lg font-medium">Real-time donor matching and notifications within seconds</p>
            </div>
            <div className="card hover:shadow-2xl hover:border-secondary-300 transition-all duration-300 group bg-slate-800 border-slate-700">
              <div className="bg-linear-to-br from-primary-100 to-primary-50 w-16 h-16 rounded-xl flex-center mb-4 group-hover:scale-110 transition-transform">
                <Map className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Location-Based</h3>
              <p className="text-white/80 text-lg font-medium">Find compatible donors nearby instantly</p>
            </div>
            <div className="card hover:shadow-2xl hover:border-accent-300 transition-all duration-300 group bg-slate-800 border-slate-700">
              <div className="bg-linear-to-br from-accent-100 to-accent-50 w-16 h-16 rounded-xl flex-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Verified & Safe</h3>
              <p className="text-white/80 text-lg font-medium">All donors and hospitals are thoroughly verified</p>
            </div>
            <div className="card hover:shadow-2xl hover:border-secondary-300 transition-all duration-300 group bg-slate-800 border-slate-700">
              <div className="bg-linear-to-br from-secondary-100 to-secondary-50 w-16 h-16 rounded-xl flex-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Community Driven</h3>
              <p className="text-white/80 text-lg font-medium">Join thousands of donors saving lives daily</p>
            </div>
            <div className="card hover:shadow-2xl hover:border-primary-300 transition-all duration-300 group bg-slate-800 border-slate-700">
              <div className="bg-linear-to-br from-primary-100 to-primary-50 w-16 h-16 rounded-xl flex-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">24/7 Available</h3>
              <p className="text-white/80 text-lg font-medium">Emergency support around the clock</p>
            </div>
            <div className="card hover:shadow-2xl hover:border-accent-300 transition-all duration-300 group bg-slate-800 border-slate-700">
              <div className="bg-linear-to-br from-accent-100 to-accent-50 w-16 h-16 rounded-xl flex-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Proven Impact</h3>
              <p className="text-white/80 text-lg font-medium">Thousands of lives saved through our platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-linear-to-br from-slate-800 to-slate-900">
        <div className="container-max">
          <h2 className="text-5xl lg:text-6xl font-black mb-16 text-center tracking-tight text-white">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Donor Flow */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-secondary-400">For Donors</h3>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Register', desc: 'Create your profile' },
                  { num: '2', title: 'Verify', desc: 'Complete verification' },
                  { num: '3', title: 'Give Back', desc: 'Respond to requests' },
                  { num: '4', title: 'Save Lives', desc: 'Make a difference' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-500 text-white flex-center font-bold shrink-0 text-lg">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{step.title}</h4>
                      <p className="text-white/70 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospital/Patient Flow */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-primary-400">For Hospitals</h3>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Register Hospital', desc: 'Verify your facility' },
                  { num: '2', title: 'Create Request', desc: 'Request blood urgently' },
                  { num: '3', title: 'Get Matched', desc: 'Connect with donors' },
                  { num: '4', title: 'Receive Blood', desc: 'Deliver to patient' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex-center font-bold shrink-0 text-lg">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{step.title}</h4>
                      <p className="text-white/70 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Flow */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-accent-400">For Patients</h3>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Need Blood?', desc: 'Hospital initiates' },
                  { num: '2', title: 'Instant Match', desc: 'Find donors ASAP' },
                  { num: '3', title: 'Fast Delivery', desc: 'Blood en route' },
                  { num: '4', title: 'Save Life', desc: 'Get treatment fast' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex-center font-bold shrink-0 text-lg">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{step.title}</h4>
                      <p className="text-white/70 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-linear-to-br from-primary-700 to-primary-800 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Our Impact By Numbers</h2>
            <p className="text-white/80 text-lg">Making a difference every single day</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group">
              <div className="bg-linear-to-br from-secondary-400/20 to-secondary-500/10 p-8 rounded-2xl border border-white/10 group-hover:border-secondary-400/50 transition-all duration-300 text-center">
                <div className="text-5xl lg:text-6xl font-black mb-3 text-transparent bg-linear-to-r from-secondary-300 to-secondary-200 bg-clip-text">5.2K</div>
                <p className="text-white/80 font-semibold text-lg">Active Donors</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-linear-to-br from-accent-400/20 to-accent-500/10 p-8 rounded-2xl border border-white/10 group-hover:border-accent-400/50 transition-all duration-300 text-center">
                <div className="text-5xl lg:text-6xl font-black mb-3 text-transparent bg-linear-to-r from-accent-300 to-accent-200 bg-clip-text">1.3K</div>
                <p className="text-white/80 font-semibold text-lg">Blood Requests</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-linear-to-br from-primary-400/20 to-primary-500/10 p-8 rounded-2xl border border-white/10 group-hover:border-primary-400/50 transition-all duration-300 text-center">
                <div className="text-5xl lg:text-6xl font-black mb-3 text-transparent bg-linear-to-r from-primary-300 to-primary-200 bg-clip-text">987</div>
                <p className="text-white/80 font-semibold text-lg">Successful Matches</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-linear-to-br from-purple-400/20 to-purple-500/10 p-8 rounded-2xl border border-white/10 group-hover:border-purple-400/50 transition-all duration-300 text-center">
                <div className="text-5xl lg:text-6xl font-black mb-3 text-transparent bg-linear-to-r from-purple-300 to-purple-200 bg-clip-text">2.4K+</div>
                <p className="text-white/80 font-semibold text-lg">Lives Saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-linear-to-b from-slate-900 to-slate-800">
        <div className="container-max">
          <h2 className="text-5xl lg:text-6xl font-black mb-16 text-center tracking-tight text-white">What People Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, idx) => (
              <div key={idx} className="card bg-slate-800 border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/70 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg text-white/90 font-medium leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-linear-to-b from-slate-800 to-slate-900">
        <div className="container-max">
          <h2 className="text-5xl lg:text-6xl font-black mb-16 text-center tracking-tight text-white">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {mockFAQ.map((faq, idx) => (
              <div key={idx} className="card bg-slate-800 border-slate-700">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-4 px-6 text-left hover:bg-slate-700/50 transition-smooth"
                >
                  <h3 className="font-bold text-lg pr-4 text-white">{faq.question}</h3>
                  <span className="text-3xl shrink-0 text-white/80">
                    {expandedFAQ === idx ? '−' : '+'}
                  </span>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-4 border-t border-slate-700 pt-4">
                    <p className="text-lg text-white/80 font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-linear-to-r from-secondary-600 to-secondary-700 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>

        <div className="container-max relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight drop-shadow-lg">Ready to Make a Difference?</h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Join our community of lifesavers. Every donation counts, every donor matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={ROUTES.REGISTER}>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-secondary-600 hover:bg-white/95 font-bold shadow-xl hover:shadow-2xl"
              >
                Register as Donor
              </Button>
            </Link>
            <Link to={ROUTES.FIND_DONORS}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white/10 font-bold shadow-lg hover:shadow-xl"
              >
                Find Donors Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
