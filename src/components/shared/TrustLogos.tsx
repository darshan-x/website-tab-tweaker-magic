import React from 'react';

const TrustLogos = () => {
  const companies = [
    'Notion',
    'Accuras', 
    'Chipr',
    'Recoup',
    'Instabloom'
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="text-center">
          <p className="text-muted-foreground mb-8">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companies.map((company, index) => (
              <div key={index} className="text-xl font-medium text-muted-foreground/70 hover:text-foreground transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;