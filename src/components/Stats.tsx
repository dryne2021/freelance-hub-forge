
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase, Star, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '4M+',
    label: 'Active sellers',
    description: 'Choose from millions of talented freelancers'
  },
  {
    icon: Briefcase,
    value: '50M+',
    label: 'Projects completed',
    description: 'Get your project done with proven results'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Average rating',
    description: 'Highly rated services and customer satisfaction'
  },
  {
    icon: Globe,
    value: '190+',
    label: 'Countries',
    description: 'Connect with global talent from everywhere'
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by millions worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the world's largest marketplace for digital services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold text-lg mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
