import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { CheckCircle } from 'lucide-react';

import { Progress } from '@/components/ui/progress';
import { 
  Calculator, 
  Users, 
  Calendar, 
  MapPin,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Phone,
  Mail,
  User
} from 'lucide-react';

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    policyType: '',
    sumInsured: [500000],
    members: 1,
    age: '',
    city: '',
    name: '',
    phone: '',
    email: '',
    preExisting: 'no'
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;
  const [isSubmitted, setIsSubmitted] = useState(false);


  const sumInsuredOptions = [
    { value: 300000, label: '₹3 Lakh' },
    { value: 500000, label: '₹5 Lakh' },
    { value: 1000000, label: '₹10 Lakh' },
    { value: 1500000, label: '₹15 Lakh' },
    { value: 2000000, label: '₹20 Lakh' },
    { value: 5000000, label: '₹50 Lakh' },
    { value: 10000000, label: '₹1 Crore' }
  ];

  const formatCurrency = (value: number) => {
    if (value >= 10000000) return `₹${value / 10000000} Cr`;
    if (value >= 100000) return `₹${value / 100000} L`;
    return `₹${value.toLocaleString()}`;
  };

  const calculatePremium = () => {
    const basePremium = formData.sumInsured[0] * 0.02;
    const ageFactor = parseInt(formData.age) > 45 ? 1.5 : 1;
    const memberFactor = formData.members > 1 ? 1.2 : 1;
    return Math.round(basePremium * ageFactor * memberFactor);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

const handleSubmit = () => {
  console.log('Form submitted:', formData);
  setIsSubmitted(true);
};


  return (
    <section className="py-20 min-h-[80vh] bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e0e7ef] relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
            Get Your <span className="relative inline-block">
              <span className="text-blue-600">Instant Quote</span>
              <span className="block h-1 w-8 bg-blue-400 rounded-full absolute left-1/2 -bottom-2 -translate-x-1/2"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-primary/70 max-w-xl mx-auto">
            Answer a few quick questions and get personalized insurance quotes from top insurers in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Quote Form */}
          <div className="relative ">
            {/* Stepper (vertical on desktop) */}
            <div className="absolute -left-8 top-8 hidden lg:flex flex-col items-center z-10">
              {[1,2,3,4].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${currentStep === step ? 'bg-primary text-white border-primary shadow-lg scale-110' : 'bg-white text-primary border-primary/30'}`}>{step}</div>
                  {step !== 4 && <div className={`w-1 h-8 ${currentStep > step ? 'bg-primary' : 'bg-primary/20'} transition-all`}></div>}
                </div>
              ))}
            </div>
        
            <Card className="rounded-2xl shadow-xl border border-primary/10 bg-white/80 backdrop-blur-md">
              
               {isSubmitted ? (
<CardContent className="relative text-center py-20 max-w-2xl mx-auto overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-transparent to-blue-100 opacity-30 blur-2xl rounded-full pointer-events-none z-0"></div>

  {/* Success Icon */}
  <div className="relative z-10 flex justify-center mb-6">
    <div className="bg-green-100 text-green-600 p-4 rounded-full shadow-inner animate-pulse">
      <CheckCircle className="w-10 h-10" />
    </div>
  </div>

  {/* Thank You Message */}
  <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold text-green-700 mb-2">
    Thank you!
  </h2>
  <p className="relative z-10 text-lg text-primary/70 max-w-md mx-auto mb-6">
    Your query has been submitted successfully. Our advisor will reach out to you shortly.
  </p>

  {/* Reset Button */}
  <Button
    onClick={() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      setFormData({
        policyType: '',
        sumInsured: [500000],
        members: 1,
        age: '',
        city: '',
        name: '',
        phone: '',
        email: '',
        preExisting: 'no'
      });
    }}
    className="relative z-10 bg-gradient-to-r from-green-500 via-blue-500 to-primary text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
  >
    <Sparkles className="mr-2 w-5 h-5" />
    Get New Quote
  </Button>
</CardContent>

  ) : (
    <>
              <CardHeader className="text-center pb-2">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Calculator className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl text-primary">Quick Quote</CardTitle>
                </div>
                <Progress value={progress} className="w-full h-2 bg-primary/10" />
                <p className="text-xs text-primary/60 mt-1">
                  Step {currentStep} of {totalSteps}
                </p>
              </CardHeader>
              <CardContent className="space-y-8 pt-2 pb-6 px-4 md:px-8">
            {/* Step 1: Policy Type */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-2">
                  <Users className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Choose Policy Type</h3>
                  <p className="text-primary/60">Select the type of coverage you need</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  {[
                    { value: 'individual', label: 'Individual', desc: 'For yourself' },
                    { value: 'family', label: 'Family Floater', desc: 'For your family' },
                    { value: 'senior', label: 'Senior Citizen', desc: 'For seniors' }
                  ].map(option => (
                    <button
                      key={option.value}
                      type="button"
                      className={`flex-1 p-4 border rounded-xl transition-all duration-200 focus:outline-none
                        ${formData.policyType === option.value ? 'border-blue-600 bg-blue-50 shadow' : 'border-blue-100 bg-white hover:border-blue-400'}`}
                      onClick={() => setFormData({...formData, policyType: option.value})}
                    >
                      <div className="font-medium text-blue-700 mb-1">{option.label}</div>
                      <div className="text-xs text-primary/50">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Coverage Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-2">
                  <Sparkles className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Coverage Details</h3>
                  <p className="text-primary/60">Customize your coverage amount</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">Sum Insured</Label>
                    <div className="mt-2">
                      <div className="text-center mb-2">
                        <div className="text-2xl font-bold text-blue-700">
                          {formatCurrency(formData.sumInsured[0])}
                        </div>
                      </div>
                      <Slider
                        value={formData.sumInsured}
                        onValueChange={(value) => setFormData({...formData, sumInsured: value})}
                        max={10000000}
                        min={300000}
                        step={100000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-primary/40 mt-1">
                        <span>₹3L</span>
                        <span>₹1Cr</span>
                      </div>
                    </div>
                  </div>

                  {formData.policyType === 'family' && (
                    <div>
                      <Label className="text-base font-medium">Number of Members</Label>
                      <div className="flex gap-2 mt-2">
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <Button
                            key={num}
                            variant={formData.members === num ? "default" : "outline"}
                            className="w-10 h-10 p-0 rounded-full text-base"
                            onClick={() => setFormData({...formData, members: num})}
                          >
                            {num}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Personal Details */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-2">
                  <Calendar className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Personal Details</h3>
                  <p className="text-primary/60">Tell us about yourself</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Age (Years)</Label>
                    <Select value={formData.age} onValueChange={(value) => setFormData({...formData, age: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your age" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({length: 60}, (_, i) => i + 18).map(age => (
                          <SelectItem key={age} value={age.toString()}>{age} years</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>City</Label>
                    <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Pre-existing Conditions</Label>
                    <Select value={formData.preExisting} onValueChange={(value) => setFormData({...formData, preExisting: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Details */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-2">
                  <Phone className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Contact Details</h3>
                  <p className="text-primary/60">Get your personalized quotes</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <Input
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>Email Address</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 rounded-full px-5 py-2 text-base"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !formData.policyType) ||
                    (currentStep === 3 && (!formData.age || !formData.city))
                  }
                  className="flex items-center space-x-2 rounded-full px-5 py-2 text-base bg-gradient-to-r from-primary to-blue-500 text-white shadow-md hover:scale-105 transition-transform"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.phone || !formData.email}
                  className="flex items-center space-x-2 rounded-full px-5 py-2 text-base bg-gradient-to-r from-primary to-blue-500 text-white shadow-md hover:scale-105 transition-transform"
                >
                  <span>Get Quotes</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
              </CardContent>
 </>
  )}

            </Card>
            
          </div>

          {/* Benefits & Details */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <Card className="rounded-2xl shadow border border-primary/10 bg-primary/95 text-white/95 backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white" /> Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-sm">Compare 15+ top insurers with real-time premium calculation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-sm">Instant online quotes tailored to your needs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-sm">Expert advisory support from IRDAI certified professionals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-sm">Hassle-free claims assistance & documentation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-sm">No hidden charges, 100% transparency</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-sm">Free policy renewal reminders & lifetime support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="rounded-2xl shadow border border-primary/10 bg-white/90 text-primary backdrop-blur-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" /> How It Works
                </h3>
                <ol className="list-decimal pl-6 space-y-2 text-sm text-primary/80">
                  <li>Fill in your requirements and personal details in the quick form.</li>
                  <li>Get instant premium quotes from multiple insurers.</li>
                  <li>Compare plans, features, and benefits side by side.</li>
                  <li>Choose the best plan and proceed to buy or request expert help.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Animate-glow keyframes for heading */}
      <style>{`
        @keyframes glow {
          0% { text-shadow: 0 0 8px #fbbf24, 0 0 16px #f472b6, 0 0 24px #60a5fa; }
          100% { text-shadow: 0 0 24px #fbbf24, 0 0 32px #f472b6, 0 0 40px #60a5fa; }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default QuoteForm;