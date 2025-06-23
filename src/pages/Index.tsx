
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Phone, Bed, Bath, Square, Heart, Filter, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [activeTab, setActiveTab] = useState("buy");

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury 3BHK Apartment",
      location: "Banjara Hills, Hyderabad",
      price: "₹1.2 Cr",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      bedrooms: 3,
      bathrooms: 2,
      area: "1850 sq.ft",
      type: "Ready to Move",
      featured: true
    },
    {
      id: 2,
      title: "Modern 2BHK Villa",
      location: "Gachibowli, Hyderabad",
      price: "₹85 Lac",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "1200 sq.ft",
      type: "Under Construction"
    },
    {
      id: 3,
      title: "Premium 4BHK Penthouse",
      location: "Jubilee Hills, Hyderabad",
      price: "₹2.5 Cr",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      bedrooms: 4,
      bathrooms: 3,
      area: "2800 sq.ft",
      type: "Ready to Move",
      featured: true
    },
    {
      id: 4,
      title: "Spacious 1BHK Apartment",
      location: "HITEC City, Hyderabad",
      price: "₹45 Lac",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sq.ft",
      type: "Ready to Move"
    },
    {
      id: 5,
      title: "Designer 3BHK Villa",
      location: "Kondapur, Hyderabad",
      price: "₹1.8 Cr",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      bedrooms: 3,
      bathrooms: 2,
      area: "2200 sq.ft",
      type: "Under Construction"
    },
    {
      id: 6,
      title: "Affordable 2BHK Flat",
      location: "Miyapur, Hyderabad",
      price: "₹65 Lac",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      area: "1100 sq.ft",
      type: "Ready to Move"
    }
  ];

  const PropertyCard = ({ property }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-0 shadow-md">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
          <Heart className="h-4 w-4" />
        </Button>
        {property.featured && (
          <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">
            Featured
          </Badge>
        )}
        <Badge variant="secondary" className="absolute bottom-2 left-2">
          {property.type}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{property.title}</h3>
          <span className="text-xl font-bold text-blue-600">{property.price}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} BHK</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.area}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Phone className="h-4 w-4 mr-2" />
            Contact Agent
          </Button>
          <Link to={`/property/${property.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                EstatePro
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/buy" className="text-gray-700 hover:text-blue-600 font-medium">Buy</Link>
                <Link to="/rent" className="text-gray-700 hover:text-blue-600 font-medium">Rent</Link>
                <Link to="/commercial" className="text-gray-700 hover:text-blue-600 font-medium">Commercial</Link>
                <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium">Projects</Link>
                <Link to="/agents" className="text-gray-700 hover:text-blue-600 font-medium">Agents</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/post-property">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Post Property FREE
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline">Login / Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Discover the perfect property that matches your lifestyle
            </p>
          </div>

          {/* Search Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
            {/* Property Type Tabs */}
            <div className="flex border-b mb-6">
              {["buy", "rent", "pg", "commercial", "projects"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {tab === "pg" ? "PG / Co-living" : tab}
                </button>
              ))}
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by city, locality, project"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10 h-12 text-gray-700"
                  />
                </div>
              </div>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="h-12 text-gray-700">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Residential</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="plot">Plot</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="h-12 text-gray-700">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Budget</SelectItem>
                  <SelectItem value="0-50">Under ₹50 Lac</SelectItem>
                  <SelectItem value="50-100">₹50 Lac - ₹1 Cr</SelectItem>
                  <SelectItem value="100-200">₹1 Cr - ₹2 Cr</SelectItem>
                  <SelectItem value="200+">Above ₹2 Cr</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full md:w-auto px-12 h-12 bg-blue-600 hover:bg-blue-700 text-lg">
              <Search className="h-5 w-5 mr-2" />
              Search Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Properties
              </h2>
              <p className="text-gray-600">
                Handpicked properties for you
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <SortAsc className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/properties">
              <Button variant="outline" size="lg" className="px-8">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Verified Agents</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">EstatePro</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner in finding the perfect property. We make real estate simple and accessible.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/buy" className="hover:text-white">Buy Property</Link></li>
                <li><Link to="/rent" className="hover:text-white">Rent Property</Link></li>
                <li><Link to="/commercial" className="hover:text-white">Commercial</Link></li>
                <li><Link to="/projects" className="hover:text-white">New Projects</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/agents" className="hover:text-white">Find Agents</Link></li>
                <li><Link to="/post-property" className="hover:text-white">Post Property</Link></li>
                <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
                <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 support@estatepro.com</li>
                <li>📞 +91 9876543210</li>
                <li>📍 Hyderabad, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EstatePro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
