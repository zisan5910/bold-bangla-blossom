
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { FileText } from './icons';
import CertificateSlider from './CertificateSlider';

interface CertificateSectionProps {
  language: 'en' | 'bn';
  content: any;
  certificates: any[];
}

const CertificateSection = ({ language, content, certificates }: CertificateSectionProps) => {
  return (
    <Element name="certificates">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-card"
      >
        <h2 className="premium-title flex items-center gap-3">
          <div className="icon-wrapper bg-green-100">
            <FileText className="text-green-600" size={24} />
          </div>
          {content[language].certifications}
        </h2>
        <CertificateSlider
          certificates={certificates}
          language={language}
        />
      </motion.section>
    </Element>
  );
};

export default CertificateSection;
