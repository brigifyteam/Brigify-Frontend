import { motion } from 'framer-motion';
import { smooth } from '../animations';

const TrustedBy = () => {
  const partners = ['HexaTech', 'Pyramid', 'Infinite', 'Target', 'Energy'];
  return (
    <motion.section className="bg-white py-12" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={smooth}>
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-8">
          Trusted by professionals from leading companies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 text-gray-400 font-semibold text-lg">
          {partners.map((p) => (
            <motion.span key={p} whileHover={{ scale: 1.04 }} transition={smooth} className="px-2 py-1 rounded-md">
              {p}
            </motion.span>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default TrustedBy;
