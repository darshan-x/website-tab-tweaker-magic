
import React from 'react';
import ContactTemplate from '@/components/templates/ContactTemplate';

const contactData = {
  title: "Contact Us",
  subtitle: "Let's discuss your AI implementation needs",
  contactInfo: {
    email: "hello@gigarev.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech Valley, CA 94025"
  },
  formFields: {
    subjects: [
      "AI Implementation Consultation",
      "Custom Development Project",
      "Enterprise Partnership",
      "Technical Support",
      "General Inquiry"
    ]
  }
};

const Contact = () => {
  return <ContactTemplate data={contactData} />;
};

export default Contact;
