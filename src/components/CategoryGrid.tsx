
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Palette, 
  Code, 
  Megaphone, 
  PenTool, 
  Video, 
  Music, 
  Briefcase, 
  Heart,
  Camera,
  Globe,
  Smartphone,
  TrendingUp
} from 'lucide-react';

const categories = [
  {
    icon: Palette,
    title: 'Graphics & Design',
    description: 'Logo Design, Brand Identity, Illustration',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Code,
    title: 'Programming & Tech',
    description: 'Web Development, Mobile Apps, Software',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Social Media, SEO, Content Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: PenTool,
    title: 'Writing & Translation',
    description: 'Content Writing, Copywriting, Translation',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Video,
    title: 'Video & Animation',
    description: 'Video Editing, Animation, Motion Graphics',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Music,
    title: 'Music & Audio',
    description: 'Voice Over, Music Production, Sound Design',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Briefcase,
    title: 'Business',
    description: 'Virtual Assistant, Market Research, Consulting',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Lifestyle',
    description: 'Online Tutoring, Fitness, Arts & Crafts',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop',
    color: 'from-rose-500 to-pink-500'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular professional services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from hundreds of categories and find the perfect freelancer for your project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-12 w-12 text-white mb-2" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
