
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Heart, Clock, User } from 'lucide-react';

const featuredGigs = [
  {
    id: 1,
    title: 'I will design a modern logo for your business',
    seller: {
      name: 'Sarah Johnson',
      level: 'Top Rated Seller',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 1247,
    price: 25,
    deliveryTime: '2 days',
    category: 'Logo Design'
  },
  {
    id: 2,
    title: 'I will develop a responsive WordPress website',
    seller: {
      name: 'Mike Chen',
      level: 'Level 2 Seller',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 892,
    price: 150,
    deliveryTime: '5 days',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'I will create engaging social media content',
    seller: {
      name: 'Emma Wilson',
      level: 'Top Rated Seller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    rating: 5.0,
    reviews: 567,
    price: 45,
    deliveryTime: '3 days',
    category: 'Social Media'
  },
  {
    id: 4,
    title: 'I will write compelling blog articles and content',
    seller: {
      name: 'David Rodriguez',
      level: 'Level 2 Seller',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 743,
    price: 35,
    deliveryTime: '2 days',
    category: 'Content Writing'
  },
  {
    id: 5,
    title: 'I will create professional video animations',
    seller: {
      name: 'Lisa Park',
      level: 'Top Rated Seller',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 432,
    price: 85,
    deliveryTime: '4 days',
    category: 'Animation'
  },
  {
    id: 6,
    title: 'I will provide professional voice over services',
    seller: {
      name: 'James Thompson',
      level: 'Level 2 Seller',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 621,
    price: 50,
    deliveryTime: '1 day',
    category: 'Voice Over'
  }
];

const FeaturedGigs = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services to get you started
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Most popular services based on sales and customer satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGigs.map((gig) => (
            <Card key={gig.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative">
                <img 
                  src={gig.image} 
                  alt={gig.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-background/90 text-foreground hover:bg-background/90">
                  {gig.category}
                </Badge>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-3 right-3 bg-background/90 hover:bg-background text-foreground"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                {/* Seller Info */}
                <div className="flex items-center space-x-3 mb-3">
                  <img 
                    src={gig.seller.avatar} 
                    alt={gig.seller.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm">{gig.seller.name}</p>
                    <p className="text-xs text-muted-foreground">{gig.seller.level}</p>
                  </div>
                </div>
                
                {/* Gig Title */}
                <h3 className="font-medium text-base mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {gig.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-sm">{gig.rating}</span>
                  <span className="text-sm text-muted-foreground">({gig.reviews})</span>
                </div>
                
                {/* Price and Delivery */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{gig.deliveryTime}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Starting at</p>
                    <p className="font-bold text-lg">${gig.price}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View More Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGigs;
