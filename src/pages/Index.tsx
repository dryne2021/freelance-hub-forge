
import React from 'react';
import { Search, Star, Clock, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedGigs from '@/components/FeaturedGigs';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Find the perfect freelance services for your business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Millions of people use Dryne to turn their ideas into reality. Join the world's largest marketplace for digital services.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Try 'building mobile app'" 
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                Search
              </Button>
            </div>
            
            {/* Popular searches */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {['Website Design', 'Logo Design', 'WordPress', 'Voice Over', 'Video Editing'].map((term) => (
                <Badge key={term} variant="secondary" className="cursor-pointer hover:bg-primary/10">
                  {term}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">Trusted by:</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="font-bold text-2xl">META</div>
            <div className="font-bold text-2xl">Google</div>
            <div className="font-bold text-2xl">NETFLIX</div>
            <div className="font-bold text-2xl">P&G</div>
            <div className="font-bold text-2xl">PayPal</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategoryGrid />

      {/* Featured Gigs */}
      <FeaturedGigs />

      {/* How it works */}
      <HowItWorks />

      {/* Stats */}
      <Stats />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">Join millions of entrepreneurs who use Dryne to bring their ideas to life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Start Selling
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Browse Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
