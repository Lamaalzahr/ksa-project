import { X, Plane, Shield, CreditCard, Globe, Clock, Phone } from "lucide-react";

export default function VisaInfoDrawer({ onClose }) {
return (
<div
className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
onClick={onClose}
>
<div
className="bg-white p-6 rounded-lg"
onClick={(e) => e.stopPropagation()}
>
<button onClick={onClose}>
<X />
</button>

<h2>Visa Info</h2>
</div>
</div>
);
}
