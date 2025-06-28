
import React, { useState } from 'react';
import { Search, Menu, X, User, Heart, ShoppingCart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              dryne
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Graphics & Design</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Programming & Tech</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Digital Marketing</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Writing & Translation</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Video & Animation</a>
            </nav>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Find services..." 
                className="pl-10"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Desktop Auth */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Dryne Business
              </Button>
              <Button variant="ghost" size="sm">
                Explore
              </Button>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">
                Join
              </Button>
            </div>

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">3</Badge>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem>Messages</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Find services..." className="pl-10" />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                <a href="#" className="block py-2 text-sm font-medium hover:text-primary">Graphics & Design</a>
                <a href="#" className="block py-2 text-sm font-medium hover:text-primary">Programming & Tech</a>
                <a href="#" className="block py-2 text-sm font-medium hover:text-primary">Digital Marketing</a>
                <a href="#" className="block py-2 text-sm font-medium hover:text-primary">Writing & Translation</a>
                <a href="#" className="block py-2 text-sm font-medium hover:text-primary">Video & Animation</a>
              </nav>
              
              {/* Mobile Auth */}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" size="sm">Sign In</Button>
                <Button size="sm">Join</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
