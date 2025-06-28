
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Globe,
  Smartphone
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
              dryne
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The world's largest marketplace for digital services. Find the perfect freelancer for your project or start selling your skills today.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold">Stay updated</h4>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="max-w-xs" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Graphics & Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Writing & Translation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Video & Animation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Music & Audio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Programming & Tech</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press & News</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partnerships</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Intellectual Property</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help & Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Selling on Dryne</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Buying on Dryne</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Forum</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Dryne International Ltd.
            </p>
            <div className="flex items-center space-x-4">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">English</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
