import { Loader2 } from 'lucide-react';
function SupplierLoadingSpinner() {
  return (
    <section className="h-[90vh] flex items-center justify-center">
      <div>
        <Loader2 className='animate-spin'/>
      </div>
    </section>
  );
}

export default SupplierLoadingSpinner