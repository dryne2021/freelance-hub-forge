
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MessageCircle, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Find the right service',
    description: 'Browse through millions of services and find the one that fits your needs and budget.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageCircle,
    title: 'Communicate with seller',
    description: 'Chat with freelancers to clarify project details and requirements before ordering.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: CreditCard,
    title: 'Pay safely',
    description: 'Your payment is protected. Release funds only when you\'re 100% satisfied with the work.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: CheckCircle,
    title: 'Get your order',
    description: 'Receive high-quality work delivered on time, exactly as specified in your requirements.',
    color: 'from-orange-500 to-red-500'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Dryne works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your project done in 4 simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="text-center border-none shadow-none bg-transparent">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
