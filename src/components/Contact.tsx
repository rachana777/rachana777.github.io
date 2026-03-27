import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { toast } = useToast();


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not configured.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. Looking forward to speak with you."
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
      toast({
        title: "Something went Wrong!",
        description: "Please try again or check your EmailJS configuration.", variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-sans font-medium">Happy To Connect</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Contact</h2>
          <div className="editorial-divider" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground font-sans mb-2">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground font-sans mb-2">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground font-sans mb-2">Message</label>
            <textarea
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-sans text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send Message"}
          </button>
          {/*} {status === "error" && (
            <p className="text-sm text-destructive font-sans">Something went wrong. Please try again or check your EmailJS configuration.</p>
          )}*/}
        </form>
      </div>
    </section>
  );
};

export default Contact;
