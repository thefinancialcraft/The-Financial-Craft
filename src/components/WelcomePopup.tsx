// src/components/WelcomePopup.tsx
import { useEffect, useState } from 'react';

interface WelcomePopupProps {
  visible: boolean;
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ visible, onClose }) => {
  const [form, setForm] = useState({ name: '', city: '', mobile: '', plan: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 1500);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-strong max-w-[95vw] w-full sm:w-[400px] p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-primary text-xl font-bold"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-primary mb-2 text-center">
            Welcome to The Financial Craft!
          </h2>
          <p className="text-center text-base text-muted-foreground mb-3">
            Find a better plan and get <span className="text-green-600 font-semibold">10% discount</span> on any
            plan of your choice.<br />Enter your details to secure your family today!
          </p>
          {submitted ? (
            <div className="text-green-600 font-semibold text-center py-6">
              Thank you! Our team will contact you soon.
            </div>
          ) : (
            <form className="w-full space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No."
                value={form.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                maxLength={10}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select
                name="plan"
                value={form.plan}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>Select Plan Type</option>
                <option value="health">Health Insurance</option>
                <option value="motor">Motor Insurance</option>
                <option value="life">Life Insurance</option>
                <option value="term">Term Plan</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full bg-primary text-white rounded-lg py-2 font-semibold hover:bg-primary/90 transition"
              >
                Get My Discount
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
