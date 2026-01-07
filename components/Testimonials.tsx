export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Company",
      text: "Phwe is an exceptional designer who delivered beyond our expectations. Highly recommended!",
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      text: "Working with Phwe was a pleasure. The attention to detail and creativity is outstanding.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Testimony or Review
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">&quot;{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
