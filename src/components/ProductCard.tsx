import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
  showQuickAdd?: boolean;
}

function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product.discount;

  return (
    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge variant="success" className="text-xs">NEW</Badge>
          )}
          {discountPercentage && (
            <Badge variant="destructive" className="text-xs">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 h-8 w-8 bg-white/90 hover:bg-white"
        >
          <Heart
            size={16}
            className={`${
              isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
            } hover:text-red-500 transition-colors`}
          />
        </Button>
      </Link>

      {/* Product Info */}
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={`${
                    i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </Link>

        {/* Add to Cart Button */}
        {showQuickAdd && (
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full"
            variant={product.inStock ? "default" : "secondary"}
          >
            {product.inStock ? (
              <>
                <Plus size={16} className="mr-2" />
                Add to Cart
              </>
            ) : (
              "Out of Stock"
            )}
          </Button>
        )}
      </CardContent>

      {/* Quick View Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <Link to={`/product/${product.id}`}>
          <Button
            variant="outline"
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white"
          >
            Quick View
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default ProductCard;