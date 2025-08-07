import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, BookOpen, Gem, Gamepad2, Dumbbell, Watch, Gamepad, Palette, Monitor, Armchair, ChevronLeft, ChevronRight, Star, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const iconMap = {
  Smartphone,
  BookOpen,
  Gem,
  Gamepad2,
  Dumbbell,
  Watch,
  Gamepad,
  Palette,
  Monitor,
  Armchair
};

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredProductIndex, setFeaturedProductIndex] = useState(0);
  
  const heroSlides = [
    {
      title: 'New Year Sale',
      subtitle: 'Offer 2024',
      discount: '20% OFF',
      buttonText: 'Start Shopping',
      gradient: 'from-pink-500 via-red-500 to-yellow-500'
    },
    {
      title: 'Spring Collection',
      subtitle: 'Fresh Arrivals',
      discount: '30% OFF',
      buttonText: 'Shop Now',
      gradient: 'from-green-500 via-blue-500 to-purple-500'
    },
    {
      title: 'Tech Week',
      subtitle: 'Latest Gadgets',
      discount: '25% OFF',
      buttonText: 'Explore',
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    }
  ];

  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8);
  const popularProducts = products.slice(0, 8);
  const furnitureProducts = products.filter(p => p.category === 'furniture').slice(0, 4);
  const shoesProducts = products.filter(p => p.subcategory === 'shoes').slice(0, 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextFeaturedProduct = () => {
    setFeaturedProductIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevFeaturedProduct = () => {
    setFeaturedProductIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].gradient}`}>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="flex justify-between items-center w-full">
              <div className="text-white max-w-md">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl mb-2">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <p className="text-3xl md:text-4xl font-bold mb-6">
                  {heroSlides[currentSlide].discount}
                </p>
                <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link to="/category/electronics">
                    <ShoppingBag className="mr-2" size={20} />
                    {heroSlides[currentSlide].buttonText}
                  </Link>
                </Button>
              </div>
              
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Featured Products"
                  className="max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        >
          <ChevronRight size={24} />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full p-0 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Top Categories</h2>
          <Button variant="link" asChild>
            <Link to="/category/electronics">See All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
              >
                <Card className="hover:shadow-md transition-shadow group cursor-pointer">
                  <CardContent className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-200 transition-colors">
                      <IconComponent size={24} className="text-orange-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center group-hover:text-orange-500 transition-colors">
                      {category.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Products 2024</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevFeaturedProduct}
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextFeaturedProduct}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Split Layout Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Collections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Furniture Collection */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Furniture Collection</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronLeft size={16} />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {furnitureProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Shoes Collection */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">New Shoes Collection</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronLeft size={16} />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {shoesProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Button asChild variant="secondary">
                  <Link to="/category/sports">
                    See More Products
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Product */}
          <div className="space-y-6">
            {featuredProducts.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={featuredProducts[featuredProductIndex].image}
                      alt={featuredProducts[featuredProductIndex].name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="font-bold text-lg mb-2">
                    {featuredProducts[featuredProductIndex].name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {featuredProducts[featuredProductIndex].description}
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(featuredProducts[featuredProductIndex].rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      {featuredProducts[featuredProductIndex].rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${featuredProducts[featuredProductIndex].price.toFixed(2)}
                    </span>
                    {featuredProducts[featuredProductIndex].originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${featuredProducts[featuredProductIndex].originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/product/${featuredProducts[featuredProductIndex].id}`}>
                      Start Shopping
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Additional Featured Products */}
            <div className="space-y-4">
              {featuredProducts.slice(1, 3).map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-4 flex space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h5 className="font-medium text-sm mb-1">{product.name}</h5>
                      <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-orange-500">
                          ${product.price.toFixed(2)}
                        </span>
                        <Button variant="link" size="sm" asChild className="p-0 h-auto">
                          <Link to={`/product/${product.id}`}>
                            View →
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;