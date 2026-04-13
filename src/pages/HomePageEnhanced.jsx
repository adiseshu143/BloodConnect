import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Map, Clock, Users, ArrowRight, CheckCircle, Zap, Shield, AlertCircle, TrendingUp, Droplet } from 'lucide-react';
import { Button } from '../components/ui/BasicComponents';
import { ROUTES } from '../constants';
import { mockTestimonials, mockFAQ } from '../data/mockData';

const HomePageEnhanced = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Real-time donor matching and notifications within seconds',
      color: 'text-secondary-500',
    },
    {
      icon: Map,
      title: 'Location-Based',
      description: 'Find compatible donors nearby instantly with precision',
      color: 'text-secondary-500',
    },
    {
      icon: Shield,
      title: 'Verified & Safe',
      description: 'All donors and hospitals are thoroughly verified',
      color: 'text-secondary-500',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of donors saving lives every day',
      color: 'text-secondary-500',
    },
    {
      icon: Clock,
      title: '24/7 Available',
      description: 'Emergency support around the clock without interruption',
      color: 'text-secondary-500',
    },
    {
      icon: TrendingUp,
      title: 'Proven Impact',
      description: 'Thousands of lives saved through our platform',
      color: 'text-secondary-500',
    },
  ];

  const stats = [
    { number: '5,234', label: 'Active Donors', icon: Users },
    { number: '1,289', label: 'Requests Fulfilled', icon: CheckCircle },
    { number: '987', label: 'Successful Matches', icon: Heart },
    { number: '2,400+', label: 'Lives Saved', icon: TrendingUp },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Register Your Profile',
      description: 'Sign up as a donor or hospital. Verify your identity and blood group.',
      icon: CheckCircle,
    },
    {
      step: '2',
      title: 'Create/Search Requests',
      description: 'Post urgent blood needs or search for compatible donors nearby.',
      icon: AlertCircle,
    },
    {
      step: '3',
      title: 'Real-Time Matching',
      description: 'Our AI instantly matches compatible donors within your location radius.',
      icon: Zap,
    },
    {
      step: '4',
      title: 'Coordination & Delivery',
      description: 'Donors and hospitals coordinate in real-time for seamless delivery.',
      icon: Heart,
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white section-spacing relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Droplet size={16} />
                <span className="text-sm font-semibold">Save Lives Through Technology</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Blood Donors Meet Hospitals in Seconds
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
                Connect life-savers with those in need through real-time location-based matching. Fast, reliable, and trustworthy emergency blood coordination.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={ROUTES.EMERGENCY_REQUEST}>
                  <Button variant="secondary" size="lg">
                    <AlertCircle size={20} />
                    Emergency Request
                  </Button>
                </Link>
                <Link to={ROUTES.REGISTER}>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Become a Donor
                    <ArrowRight size={20} />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <p className="text-3xl font-bold">1000+</p>
                  <p className="text-white/80 text-sm">lives saved</p>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="text-white/80 text-sm">donors active</p>
                </div>
              </div>
            </div>

            <div className="animate-slideInRight flex-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-linear-to-r from-secondary-500/20 to-accent/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex-center h-96">
                  <Heart size={120} className="text-white/40 animate-pulse-gentle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-8 bg-linear-to-br from-accent/10 to-accent/5 border-b border-accent/30">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="hidden md:flex p-4 bg-accent/20 rounded-lg">
                <AlertCircle className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-accent mb-1">Emergency? In Blood Crisis?</h3>
                <p className="text-text-muted">Get compatible blood within minutes from nearby volunteers</p>
              </div>
            </div>
            <Link to={ROUTES.EMERGENCY_REQUEST} className="w-full md:w-auto">
              <Button variant="danger" size="lg" className="w-full md:w-auto">
                Create Request Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-spacing bg-linear-to-b from-transparent to-primary-50/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Impact In Numbers</h2>
            <p className="section-subtitle">Trusted by hospitals and donors across the country</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card text-center group hover:bg-gradient-primary hover:text-white transition-all duration-300">
                  <div className="flex-center mb-4 p-3 bg-secondary-100 group-hover:bg-white/20 rounded-lg w-16 h-16 mx-auto">
                    <Icon size={32} className="text-secondary-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-500 group-hover:text-white mb-2">{stat.number}</h3>
                  <p className="text-text-muted group-hover:text-white/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Our Platform</h2>
            <p className="section-subtitle">Advanced technology meets healthcare excellence</p>
          </div>

          <div className="grid-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-hover group">
                  <div className="flex-center mb-6 p-4 bg-linear-to-br from-secondary-100 to-secondary-50 rounded-xl w-16 h-16 group-hover:from-secondary-500 group-hover:to-secondary-600 transition-all duration-300">
                    <Icon size={32} className={`${feature.color} group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-3">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-spacing bg-linear-to-b from-primary-50/50 to-transparent">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple, fast, and life-saving process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-full w-full h-1 bg-linear-to-r from-secondary-500/50 to-transparent -ml-6"></div>
                  )}
                  <div className="card text-center hover:shadow-xl transition-all duration-300">
                    <div className="flex-center mb-4 p-4 bg-linear-to-br from-primary-500 to-primary-600 rounded-full w-16 h-16 mx-auto">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-secondary-500 text-white font-bold rounded-full mb-4 text-sm">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-primary-500 mb-3">{item.title}</h3>
                    <p className="text-text-muted text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container-max relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Save Lives?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Join our community of life-savers. Whether you're a donor or hospital, let's connect those who need help with those who can help.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={ROUTES.REGISTER}>
              <Button variant="secondary" size="lg">
                Register as Donor
              </Button>
            </Link>
            <Link to={ROUTES.REGISTER}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Register as Hospital
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about our platform</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {mockFAQ.map((faq, index) => (
              <div
                key={index}
                className="card cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-primary-500">{faq.question}</h3>
                  <span className={`text-2xl text-secondary-500 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </div>
                {expandedFAQ === index && (
                  <p className="text-text-muted mt-4 pt-4 border-t border-border animate-slideInUp">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-primary-50 border-t border-border">
        <div className="container-max text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-500 mb-4">Every Donation Matters</h2>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">Your blood donation could save up to 3 lives. Register today and be part of a community that saves lives every single day.</p>
          <Link to={ROUTES.REGISTER}>
            <Button variant="primary" size="lg">
              Start Your Journey <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePageEnhanced;
